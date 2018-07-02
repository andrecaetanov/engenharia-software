import { Alternativa } from './../../models/alternativa';
import { PerguntaProvider } from './../../providers/pergunta/pergunta';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pergunta } from '../../models/pergunta';
import shuffle from 'shuffle-array';
import { ResultadoPage } from '../resultado/resultado';

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
  public pontuacao: number = 500;
  public alternativas: Alternativa[] = new Array();
  public usouDica = false;
  public usouSopro = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private perguntaProvider: PerguntaProvider) {
    this.dificuldade = navParams.get('dificuldade');
    this.perguntas = this.perguntaProvider.getPerguntasPorDificuldade(this.dificuldade);
    console.log(this.perguntas);
    this.perguntaAtual = this.perguntas[this.indicePergunta];
    this.sortearAlternativas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

  retornarParaMenu() {
    let confirmarSaida = this.alertCtrl.create({
      title: 'Sair',
      message: 'Deseja encerrar esta partida?',
      buttons: [
      {
        text: 'Não',
        role: 'cancel',
        handler: () => {
          console.log('Nada acontece.');
        }
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
    if (this.indicePergunta < TOTAL_PERGUNTAS) {
      if (alternativa.titulo == this.perguntaAtual.alternativaCorreta.titulo) {
        this.indicePergunta++;
        this.perguntaAtual = this.perguntas[this.indicePergunta];
        this.sortearAlternativas();
        this.pontuacao = this.pontuacao * 2;
      }
      else {
        this.acessarResultado();
      }
    }
    else {
      this.acessarResultado();
    }
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
}
