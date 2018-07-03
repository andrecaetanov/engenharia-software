import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';

@IonicPage()
@Component({
  selector: 'page-pontuacao',
  templateUrl: 'pontuacao.html',
})
export class PontuacaoPage {

  private pontuacao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pontuacao = 'facil';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PontuacaoPage');
  }

  acessarPaginaMenu() {
    this.navCtrl.push(MenuPrincipalPage);
  }

}
