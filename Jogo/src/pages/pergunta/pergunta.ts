import { PerguntaProvider } from './../../providers/pergunta/pergunta';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pergunta } from '../../models/pergunta';

import shuffle from 'shuffle-array';
const TOTAL_PERGUNTAS = 4;

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
  providers: [PerguntaProvider]
})
export class PerguntaPage {
  private perguntas: Pergunta[];
  public perguntaAtual: Pergunta;
  private indicePergunta: number;
  public pontuacao: number;
  public alternativas: string[] = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, private perguntaProvider: PerguntaProvider) {
    this.perguntas = this.perguntaProvider.getPerguntas();
    this.indicePergunta = 0;
    this.perguntaAtual = this.perguntas[this.indicePergunta];
    this.sortearAlternativas();
    this.pontuacao = 500;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

  retornarParaMenu() {
    this.navCtrl.push(MenuPrincipalPage);
  }

  verificarResposta(alternativa: string) {
    if (this.indicePergunta < TOTAL_PERGUNTAS) {
      if (alternativa == this.perguntaAtual.alternativaCorreta) {
        this.indicePergunta++;
        this.perguntaAtual = this.perguntas[this.indicePergunta];
        this.sortearAlternativas();
        this.pontuacao = this.pontuacao*2;
      }
      else {
        this.retornarParaMenu();
      }
    }
  }

  sortearAlternativas() {
    this.alternativas.push(this.perguntaAtual.alternativaCorreta);
    this.alternativas.push(this.perguntaAtual.alternativaIncorreta1);
    this.alternativas.push(this.perguntaAtual.alternativaIncorreta2);
    this.alternativas.push(this.perguntaAtual.alternativaIncorreta3);

    this.alternativas = shuffle(this.alternativas);
  }
}
