import { PerguntaPage } from './../pergunta/pergunta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecionarDificuldadePage } from '../selecionar-dificuldade/selecionar-dificuldade';

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  acessarPaginaSelecionarDificuldade() {
    this.navCtrl.push(SelecionarDificuldadePage);
  }

  acessarPagina() {
    this.navCtrl.push(SelecionarDificuldadePage);
  }
}
