import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from '../../models/usuario';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {} as Usuario;

  constructor(private angularFireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  acessarRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  async login(usuario: Usuario) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(
        usuario.email,
        usuario.senha
    ).then((result) => {
        this.navCtrl.setRoot(MenuPrincipalPage);
    }).catch(function(error) {
        console.error(error);
    });
  }
}
