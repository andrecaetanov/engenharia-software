import { Pergunta } from './../../models/pergunta';
import { Injectable } from '@angular/core';

/*
  Generated class for the PerguntaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerguntaProvider {
  private perguntas: Pergunta[] = new Array();
  private niveis: string[] = ["Fácil", "Médio", "Difícil"];
  private areas: string[] = [
    "Engenharia de Requisitos",
    "Qualidade de Software",
    "Manutenção de Software",
    "Gerência de Projetos",
    "Teste de Software"
  ];

  constructor() {
    this.perguntas[0] = {
      titulo: "Qual dos paradigmas abaixo tem análise de riscos como etapa?",
      nivel: this.niveis[0],
      area: this.areas[3],
      alternativaCorreta: "Espiral",
      alternativaIncorreta1: "Cascata",
      alternativaIncorreta2: "Prototipação",
      alternativaIncorreta3: "Linear"
    };

    this.perguntas[1] = {
      titulo: "Conjunto de práticas que servem de guia a um grupo para trabalhar de maneira produtiva:",
      nivel: this.niveis[0],
      area: this.areas[3],
      alternativaCorreta: "Gerência de Projetos",
      alternativaIncorreta1: "Engenharia de Software",
      alternativaIncorreta2: "Manifesto Ágil",
      alternativaIncorreta3: "Qualidade de Software"
    };
  }

  public getPerguntas() {
    return this.perguntas;
  }
}
