import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecionarDificuldadePage } from '../selecionar-dificuldade/selecionar-dificuldade';
import { OpcoesPage } from '../opcoes/opcoes';
import { LoginPage } from '../login/login';
import { NativeAudio } from '@ionic-native/native-audio';
@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams, private nativeAudio: NativeAudio) {
  }

  ionViewDidLoad() {
    this.nativeAudio.preloadSimple('theme-song', 'assets/audios/theme-song.mp3');
    this.nativeAudio.loop('theme-song');
  }

  ionViewDidLeave() {
    this.nativeAudio.stop('theme-song');
  }

  acessarPaginaSelecionarDificuldade() {
    this.navCtrl.push(SelecionarDificuldadePage);
  }

  acessarPagina() {
    this.navCtrl.push(SelecionarDificuldadePage);
  }

  acessarPaginaOpcoes() {
    this.navCtrl.push(OpcoesPage);
  }

  acessarOpcoes(){
    this.navCtrl.push(OpcoesPage);
  }

  sair() {
    this.navCtrl.setRoot(LoginPage);
  }
}
