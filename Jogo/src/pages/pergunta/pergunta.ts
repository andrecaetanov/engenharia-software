import { Alternativa } from './../../models/alternativa';
import { PerguntaProvider } from './../../providers/pergunta/pergunta';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pergunta } from '../../models/pergunta';
import shuffle from 'shuffle-array';

const TOTAL_PERGUNTAS = 27;

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
  providers: [PerguntaProvider]
})
export class PerguntaPage {
  private perguntas: Pergunta[] = this.perguntaProvider.getPerguntas();
  private indicePergunta: number = 0;
  public perguntaAtual: Pergunta = this.perguntas[this.indicePergunta];
  public pontuacao: number = 500;
  public alternativas: Alternativa[] = new Array();
  public usouDica = false;
  public usouSopro = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private perguntaProvider: PerguntaProvider) {
    this.sortearAlternativas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

  retornarParaMenu() {
    this.navCtrl.push(MenuPrincipalPage);
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
        this.retornarParaMenu();
      }
    }
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
      let contador = 0;

      shuffle( this.perguntaAtual.alternativasIncorretas);

      this.perguntaAtual.alternativasIncorretas.some(alternativa => {
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

        contador++;

        if (contador == 2) {
          return true;
        }
      });
    }
  }

  usarSopro() {
    if (!this.usouSopro) {
      this.usouSopro = true;
      let porcentagemRestante = 100;
      let contador = 1;
      let alternativasAuxiliar = this.alternativas.slice(0);
      shuffle(alternativasAuxiliar);

      alternativasAuxiliar.forEach(alternativa => {
        if (contador == 4) {
          alternativa.porcentagemSopro = porcentagemRestante;
        }
        else if (alternativa.titulo == this.perguntaAtual.alternativaCorreta.titulo) {
          alternativa.porcentagemSopro = Math.floor(Math.random() * (50 - 25)) + 25;
        }
        else {
          alternativa.porcentagemSopro = Math.floor(Math.random() * (30 - 15)) + 15;
        }

        porcentagemRestante = porcentagemRestante - alternativa.porcentagemSopro;
        contador++;
      });
    }
  }
}
