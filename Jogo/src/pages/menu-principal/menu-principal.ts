<<<<<<< HEAD
=======
import { PerguntaPage } from './../pergunta/pergunta';
>>>>>>> page-pergunta
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
<<<<<<< HEAD
=======

>>>>>>> page-pergunta
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPrincipalPage');
  }

<<<<<<< HEAD
=======
  acessarPagina() {
    this.navCtrl.push(PerguntaPage);
  }
>>>>>>> page-pergunta
}
