import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerguntaPage } from '../pergunta/pergunta';

/**
 * Generated class for the SelecionarDificuldadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecionar-dificuldade',
  templateUrl: 'selecionar-dificuldade.html',
})
export class SelecionarDificuldadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecionarDificuldadePage');
  }

  acessarPergunta(dificuldade: string) {
    this.navCtrl.push(PerguntaPage, {
      dificuldade: dificuldade
    });
  }
}
