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
      if(usuario.senha === usuario.confirmacaoSenha) {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(
          usuario.email,
          usuario.senha
        ).then((result) => {
          this.navCtrl.push(LoginPage);
          this.exibirMensagem('Você foi registrado com sucesso. Realize o login.');
        }).catch(function(error) {
          console.error(error);
        });
      }
      else {
        this.exibirMensagem('Os dois campos de senha não são iguais.');
      }
  }

  exibirMensagem(mensagem: string) {
    this.toast.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    }).present();
  }
}
