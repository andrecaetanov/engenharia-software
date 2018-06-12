import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';

/**
 * Generated class for the InstrucoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instrucoes',
  templateUrl: 'instrucoes.html',
})
export class InstrucoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstrucoesPage');
  }

  acessarPaginaMenu() {
    this.navCtrl.push(MenuPrincipalPage);
  }

}
