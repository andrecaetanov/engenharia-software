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
    this.criarPerguntas();
  }

  public getPerguntas() {
    return this.perguntas;
  }

  private criarPerguntas() {
    this.perguntas.push({
      titulo: "Qual dos paradigmas abaixo tem análise de riscos como etapa?",
      nivel: this.niveis[0],
      area: this.areas[3],
      alternativaCorreta: "Espiral",
      alternativaIncorreta1: "Cascata",
      alternativaIncorreta2: "Prototipação",
      alternativaIncorreta3: "Linear"
    });

    this.perguntas.push({
      titulo: "Conjunto de práticas que servem de guia a um grupo para trabalhar de maneira produtiva:",
      nivel: this.niveis[0],
      area: this.areas[3],
      alternativaCorreta: "Gerência de Projetos",
      alternativaIncorreta1: "Engenharia de Software",
      alternativaIncorreta2: "Manifesto Ágil",
      alternativaIncorreta3: "Qualidade de Software"
    });

    this.perguntas.push({
      titulo: "Pode variar de uma declaração abstrata de alto nível de um serviço ou de uma restrição do sistema para uma especificação matemática funcional:",
      nivel: this.niveis[2],
      area: this.areas[0],
      alternativaCorreta: "Requisito",
      alternativaIncorreta1: "Variável de Seção",
      alternativaIncorreta2: "Função Abstrata",
      alternativaIncorreta3: "Polimorfismo"
    });

    this.perguntas.push({
      titulo: "Processo que estabelece os serviços que o cliente necessita do sistema e as restrições sob as quais ele opera e é desenvolvido:",
      nivel: this.niveis[1],
      area: this.areas[0],
      alternativaCorreta: "Engenharia de Requisitos",
      alternativaIncorreta1: "Engenharia de Software",
      alternativaIncorreta2: "Teste de Software",
      alternativaIncorreta3: "Qualidade de Software"
    });

    this.perguntas.push({
      titulo: "A descrição de produtos deve conter informações que sejam testáveis e corretas. Essa afirmativa representa requisitos de:",
      nivel: this.niveis[1],
      area: this.areas[0],
      alternativaCorreta: "Qualidade",
      alternativaIncorreta1: "Testabilidade",
      alternativaIncorreta2: "Garantia",
      alternativaIncorreta3: "Processos"
    });
  }
}
