import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the SelecionarDificuldadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opcoes',
  templateUrl: 'opcoes.html',
})
export class OpcoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private nativeAudio: NativeAudio) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcoesPage');
  }



  retornarParaMenu() {
    this.navCtrl.push(MenuPrincipalPage);
  }
}
