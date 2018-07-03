import { Alternativa } from './../../models/alternativa';
import { PerguntaProvider } from './../../providers/pergunta/pergunta';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pergunta } from '../../models/pergunta';
import shuffle from 'shuffle-array';
import { ResultadoPage } from '../resultado/resultado';
import { NativeAudio } from '@ionic-native/native-audio';

const TOTAL_PERGUNTAS = 15;

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
  providers: [PerguntaProvider]
})
export class PerguntaPage {
  private dificuldade: string;
  private perguntas: Pergunta[] = new Array();
  private indicePergunta: number = 0;
  public perguntaAtual: Pergunta;
  public pontuacao: number = 0;
  public alternativas: Alternativa[] = new Array();
  public usouDica = false;
  public usouSopro = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private perguntaProvider: PerguntaProvider,  private alertCtrl: AlertController, private nativeAudio: NativeAudio) {
    this.dificuldade = navParams.get('dificuldade');
    this.perguntas = this.perguntaProvider.getPerguntasPorDificuldade(this.dificuldade);
    console.log(this.perguntas);
    this.perguntaAtual = this.perguntas[this.indicePergunta];
    this.sortearAlternativas();
  }

  ionViewDidLoad() {
    this.nativeAudio.preloadSimple('resposta_errada', 'assets/audios/resposta_errada.mp3');
    this.nativeAudio.preloadSimple('aplausos', 'assets/audios/aplausos.mp3');
    this.nativeAudio.preloadSimple('aplausos_alegria', 'assets/audios/aplausos_alegria.mp3');
  }

  retornarParaMenu() {
    let confirmarSaida = this.alertCtrl.create({
      title: 'Sair',
      message: 'Deseja encerrar esta partida?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.push(MenuPrincipalPage);
          }
        }
      ]
    });
    confirmarSaida.present();
  }

  verificarResposta(alternativa: Alternativa) {
    if (alternativa.titulo == this.perguntaAtual.alternativaCorreta.titulo && this.indicePergunta+1 == TOTAL_PERGUNTAS) {
      this.nativeAudio.play('aplausos_alegria');
      this.indicePergunta++;
      this.calcularPontuacao();
      this.acessarResultado();
    }
    else if (alternativa.titulo == this.perguntaAtual.alternativaCorreta.titulo) {
      this.avisarRespostaCorreta();
    }
    else {
      this.avisarRespostaErrada();
    }
  }

  avisarRespostaCorreta() {
    let alert = this.alertCtrl.create({
      title: 'Resposta correta!',
      message: 'Parabéns!',
      cssClass: 'alert-success',
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.nativeAudio.play('aplausos');
            this.indicePergunta++;
            this.perguntaAtual = this.perguntas[this.indicePergunta];
            this.sortearAlternativas();
            this.calcularPontuacao();
          }
        }
      ]
    });
    alert.present();
  }

  avisarRespostaErrada() {
    let alert = this.alertCtrl.create({
      title: 'Ooops! Você errou!',
      message: 'Não desista!',
      cssClass: 'alert-danger',
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.nativeAudio.play('resposta_errada');
            this.acessarResultado();
          }
        }
      ]
    });
    alert.present();
  }

  acessarResultado() {
    this.navCtrl.push(ResultadoPage, {
      pontuacao: this.pontuacao,
      dificuldade: this.dificuldade
    })
  }

  sortearAlternativas() {
    this.alternativas = new Array();
    this.alternativas = this.perguntaAtual.alternativasIncorretas.slice(0);
    this.alternativas.push(this.perguntaAtual.alternativaCorreta);

    shuffle(this.alternativas);
  }

  usarDica() {
    if (!this.usouDica) {
      this.usouDica = true;

      let alternativasAuxiliar = shuffle.pick(this.perguntaAtual.alternativasIncorretas, {'picks': 2});

      alternativasAuxiliar.forEach(alternativa => {
        if (alternativa == this.alternativas[0]) {
          this.alternativas[0].desabilitada = true;
        }
        else if (alternativa == this.alternativas[1]) {
          this.alternativas[1].desabilitada = true;
        }
        else if (alternativa == this.alternativas[2]) {
          this.alternativas[2].desabilitada = true;
        }
        else if (alternativa == this.alternativas[3]) {
          this.alternativas[3].desabilitada = true;
        }
      });
    }
  }

  usarSopro() {
    if (!this.usouSopro) {
      this.usouSopro = true;
      let alternativasAuxiliar = new Array();

      if (!this.usouDica) {
        alternativasAuxiliar = this.alternativas;
        this.calcularSoproSemDica(alternativasAuxiliar);
      }
      else {
        this.alternativas.forEach(alternativa => {
          if (!alternativa.desabilitada) {
            alternativasAuxiliar.push(alternativa);
          }
          this.calcularSoproComDica(alternativasAuxiliar);
        });
      }
    }
  }

  calcularSoproSemDica(alternativas: Alternativa[]) {
    let porcentagemRestante = 100;
    let contador = 1;

    shuffle(alternativas, {'copy': true});

    alternativas.forEach(alternativa => {
      if (contador == alternativas.length) {
        alternativa.porcentagemSopro = porcentagemRestante;
      }
      else if (alternativa.titulo == this.perguntaAtual.alternativaCorreta.titulo) {
        alternativa.porcentagemSopro = Math.floor(Math.random() * (50 - 30)) + 30;
      }
      else {
        alternativa.porcentagemSopro = Math.floor(Math.random() * (25 - 15)) + 15;
      }

      porcentagemRestante = porcentagemRestante - alternativa.porcentagemSopro;
      contador++;
    });
  }

  calcularSoproComDica(alternativas: Alternativa[]) {
    let porcentagemRestante = 100;
    let contador = 1;

    shuffle(alternativas, {'copy': true});

    alternativas.forEach(alternativa => {
      if (contador == alternativas.length) {
        alternativa.porcentagemSopro = porcentagemRestante;
      }
      else if (alternativa.titulo == this.perguntaAtual.alternativaCorreta.titulo) {
        alternativa.porcentagemSopro = Math.floor(Math.random() * (80 - 60)) + 60;
      }
      else {
        alternativa.porcentagemSopro = Math.floor(Math.random() * (40 - 20)) + 20;
      }

      porcentagemRestante = porcentagemRestante - alternativa.porcentagemSopro;
      contador++;
    });
  }

  calcularPontuacao() {
    let x = this.indicePergunta;
    this.pontuacao = Math.floor(172565*Math.pow(x, 14)/871782912
      - 2545*Math.pow(x, 13)/118272
      + 10150655*Math.pow(x, 12)/9580032
      - 99863135*Math.pow(x, 11)/3193344
      + 76755085*Math.pow(x, 10)/124416
      - 2492944595*Math.pow(x, 9)/290304
      + 528982007705*Math.pow(x, 8)/6096384
      - 62390510885*Math.pow(x, 7)/96768
      + 768272847935*Math.pow(x, 6)/217728
      - 255807687365*Math.pow(x, 5)/18144
      + 1723040781245*Math.pow(x, 4)/42768
      - 15837329603135*Math.pow(x, 3)/199584
      + 38222114027525*Math.pow(x, 2)/378378
      - 101972095375*x/1386
      + 22757500);

    if (this.pontuacao % 2 != 0) {
      this.pontuacao++;
    }
  }
}
