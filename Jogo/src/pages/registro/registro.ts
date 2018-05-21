import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from '../../models/usuario';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuario = {} as Usuario;

  constructor(private angularFireAuth: AngularFireAuth, private toast: ToastController,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  async registrar(usuario: Usuario) {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(
        usuario.email,
        usuario.senha
      ).then((result) => {
        this.navCtrl.push(LoginPage);
        this.exibirMensagemRegistradoComSucesso();
      }).catch(function(error) {
        console.error(error);
      });
  }

  exibirMensagemRegistradoComSucesso() {
    this.toast.create({
      message: 'Você foi registrado com sucesso. Realize o login.',
      duration: 3000,
      position: 'bottom'
    }).present();
  }
}
