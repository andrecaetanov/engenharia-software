import { PerguntaProvider } from './../../providers/pergunta/pergunta';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pergunta } from '../../models/pergunta';

/**
 * Generated class for the PerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
  providers: [PerguntaProvider]
})
export class PerguntaPage {
  private perguntas: Pergunta[];
  public perguntaAtual: Pergunta;
  public indicePergunta: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private perguntaProvider: PerguntaProvider) {
    this.perguntas = perguntaProvider.getPerguntas();
    this.perguntaAtual = this.perguntas[this.indicePergunta];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

  retornarParaMenu() {
    this.navCtrl.push(MenuPrincipalPage);
  }

  passarParaProximaPergunta() {
    this.indicePergunta++;
    this.perguntaAtual = this.perguntas[this.indicePergunta];
  }

}
