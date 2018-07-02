import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';


@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {
  public classificacao: string;
  public pontuacao: number;
  public dificuldade: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pontuacao = this.navParams.get('pontuacao');
    this.dificuldade = this.navParams.get('dificuldade');
    this.definirClassificacao();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

  retornarParaMenu() {
    this.navCtrl.push(MenuPrincipalPage);
  }


  definirClassificacao() {
    if (this.pontuacao <= 5000) {
      this.classificacao = "Estagiário";
    }
    else if (this.pontuacao <= 50000) {
      this.classificacao = "Engenheiro Júnior";
    }
    else if (this.pontuacao <= 999999) {
      this.classificacao = "Engenheiro Pleno";
    }
    else {
      this.classificacao = "Engenheiro Sênior";
    }
  }
}
