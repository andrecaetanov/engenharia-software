import { Pergunta } from './../../models/pergunta';
import { Injectable } from '@angular/core';
import shuffle from 'shuffle-array';

/*
  Generated class for the PerguntaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerguntaProvider {
  private perguntas: Pergunta[] = new Array();
  private niveisDificuldade: string[] = ["Fácil", "Médio", "Difícil"];
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

  public getPerguntasPorDificuldade(dificuldade: string) {
    let perguntasAleatorias: Pergunta[] = new Array();
    let contadorEngenhariaRequisitos = 0;
    let contadorQualidadeSoftware = 0;
    let contadorManutencaoSoftware = 0;
    let contadorGerenciaProjetos = 0;
    let contadorTesteSoftware = 0;

    shuffle(this.perguntas);

    this.perguntas.some(pergunta => {
      if (pergunta.nivelDificuldade == dificuldade) {
        if (pergunta.area == this.areas[0] && contadorEngenhariaRequisitos < 3) {
          perguntasAleatorias.push(pergunta);
          contadorEngenhariaRequisitos++;
        }
        else if (pergunta.area == this.areas[1] && contadorQualidadeSoftware < 3) {
          perguntasAleatorias.push(pergunta);
          contadorQualidadeSoftware++;
        }
        else if (pergunta.area == this.areas[2] && contadorManutencaoSoftware < 3) {
          perguntasAleatorias.push(pergunta);
          contadorManutencaoSoftware++;
        }
        else if (pergunta.area == this.areas[3] && contadorGerenciaProjetos < 3) {
          perguntasAleatorias.push(pergunta);
          contadorGerenciaProjetos++;
        }
        else if (pergunta.area == this.areas[4] && contadorTesteSoftware < 3) {
          perguntasAleatorias.push(pergunta);
          contadorTesteSoftware++;
        }
      }

      if(perguntasAleatorias.length == 15) {
        return true;
      }
    });

    return perguntasAleatorias;
  }

  private criarPerguntas() {
    this.perguntas.push({
      titulo: "Para garantir a qualidade e a eficácia do desenvolvimento do projeto, o gerente de projetos deve focar em:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Planos de comunicação"},
      alternativasIncorretas: [
        {titulo: " treinamento"}, {titulo: "Diagrama de rede"}, {titulo: "Engenharia de requisitos"}
      ]
    });

    this.perguntas.push({
      titulo: "Seu objetivo é a otimização do retorno sobre o investimento aplicado no decorrer dos projetos e em completa sintonia com as metas e articulações estratégicas do empreendimento. Essa informação se refere ao:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Gerenciamento de Portfólios de Projetos"},
      alternativasIncorretas: [
        {titulo: "Análise de riscos"}, {titulo: "Gerenciamento Integrado de Projetos"}, {titulo: "Gerenciamento Total da Qualidade"}
      ]
    });

    this.perguntas.push({
      titulo: "Esse documento pode conter a necessidade do negócio, a definição do produto, o nome do gerente e a justificativa da importância do projeto. É o documento que autoriza formalmente o projeto. Esse  documento é chamado de:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Project Charter"},
      alternativasIncorretas: [
        {titulo: "Scope Statement"}, {titulo: "Service Contract"}, {titulo: "Open Contract"}
      ]
    });

    this.perguntas.push({
      titulo: "Composto de uma estrutura mais completa, possui as propriedades básicas de registros, conjuntos e ocorrências, e utiliza a linguagem de definição e a linguagem de manipulação de dados. As características mencionadas se referem o(a):",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[3],
      alternativaCorreta: {titulo: "O Modelo de Rede"},
      alternativasIncorretas: [
        {titulo: "O Flowcharting"}, {titulo: "O Nivelamento Heurístico dos Recursos"}, {titulo: "A Medição de Desempenho"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual dos paradigmas abaixo tem análise de riscos como etapa?",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Espiral"},
      alternativasIncorretas: [
        {titulo: "Cascata"}, {titulo: "Prototipação"}, {titulo: "Linear"}
      ]
    });

    this.perguntas.push({
      titulo: "Conjunto de práticas que servem de guia a um grupo para trabalhar de maneira produtiva:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Gerência de Projetos"},
      alternativasIncorretas: [
        {titulo: "Engenharia de Software"}, {titulo: "Manifesto Ágil"}, {titulo: "Qualidade de Software"}
      ]
    });

    this.perguntas.push({
      titulo: " Qual dos testes a seguir é realizado em ambientes de laboratório e comumente são executados por funcionários internos que simulam usuários reais, realizando tarefas típicas no aplicativo:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Teste Alfa"},
      alternativasIncorretas: [
        {titulo: "Teste Beta"}, {titulo: "Teste de Regressão"}, {titulo: "Teste Fumaça"}
      ]
    });

    this.perguntas.push({
      titulo: "A fase de elaboração dos testes de software é uma das partes mais importantes, no desenvolvimento de um software.Sobre o teste de caixa branca,assinale a alternativa correta:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[4],
      alternativaCorreta: {titulo: "É a utilização de um sistema, para controlar a execução dos testes de um Software"},
      alternativasIncorretas: [
        {titulo: "Ferramenta de instalação de Software"}, {titulo: "Tem como principal tarefa, ajudar na concepção do Software"}, {titulo: "É a tarefa executada, pelos analistas de teste, tendo como objetivo descrever os fluxos dos UCs do Sistema"}
      ]
    });

    this.perguntas.push({
      titulo: "Assinale a alternativa correta, sobre automação de teste de software:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Teste do código fonte, de cada linha de código possível, dos fluxos básicos e dos alternativos"},
      alternativasIncorretas: [
        {titulo: "Teste feito pela equipe de testadores de software"}, {titulo: "Teste executado, após a implantação do software"}, {titulo: "Teste feito pelo próprio programador que verifica, se o código que foi construído, é não funcional"}
      ]
    });

    this.perguntas.push({
      titulo: "Além das atividades de inspeção de software, outras atividades de suma importância no contexto do processo de verificação e validação são aquelas relacionadas:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Teste de software"},
      alternativasIncorretas: [
        {titulo: "Manutenção de software"}, {titulo: "Estimativa de custo de software"}, {titulo: "Gerenciamento de configuração de software"}
      ]
    });

    this.perguntas.push({
      titulo: "Os testes de software são executados, usando os procedimentos e documentos de script de teste. Para que a fase de execução de teste, seja realizada com sucesso deve(m) ser executado(s):",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Casos de teste"},
      alternativasIncorretas: [
        {titulo: "Casos de uso"}, {titulo: "Testes de Turing"}, {titulo: "Teste de COMA"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual a técnica de teste que consiste em se aplicar, a cada nova versão do software ou a cada ciclo, todos os testes que já foram aplicados nas versões ou ciclos de teste anteriores do sistema:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Regressão"},
      alternativasIncorretas: [
        {titulo: "Caixa preta"}, {titulo: "Caixa branca"}, {titulo: "Caixa cinza"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual dos testes a seguir pode ser classificada em alguns dos itens como stress, execução, operação, compliance, segurança, recuperação contingência e também é conhecido como teste da caixa branca:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Estrutural"},
      alternativasIncorretas: [
        {titulo: "Baseado em requisitos"}, {titulo: "De partições"}, {titulo: "De equivalência"}
      ]
    });

    this.perguntas.push({
      titulo: "Foram detectados problemas no sistema como data de nascimento preenchida com data futura, campos de preenchimento obrigatório que não são validados, botões que não executam as ações devidas. Esses problemas são rastreados por esse tipo de teste também conhecido de teste funcional:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Caixa preta"},
      alternativasIncorretas: [
        {titulo: "Caixa branca"}, {titulo: "Unidade"}, {titulo: "Integração"}
      ]
    });

    this.perguntas.push({
      titulo: "Assinale a alternativa que não corresponde a um dos testes de software,realizados em softwares comerciais:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Teste de volatilidade de requisitos"},
      alternativasIncorretas: [
        {titulo: "Teste de validação"}, {titulo: "Teste de integração"}, {titulo: "Teste de unidade"}
      ]
    });

    this.perguntas.push({
      titulo: "Pode variar de uma declaração abstrata de alto nível de um serviço ou de uma restrição do sistema para uma especificação matemática funcional:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Requisito"},
      alternativasIncorretas: [
        {titulo: "Variável de Seção"}, {titulo: "Função Abstrata"}, {titulo: "Polimorfismo"}
      ]
    });

    this.perguntas.push({
      titulo: "Processo que estabelece os serviços que o cliente necessita do sistema e as restrições sob as quais ele opera e é desenvolvido:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Engenharia de Requisitos"},
      alternativasIncorretas: [
        {titulo: "Engenharia de Software"}, {titulo: "Teste de Software"}, {titulo: "Qualidade de Software"}
      ]
    });

    this.perguntas.push({
      titulo: "A descrição de produtos deve conter informações que sejam testáveis e corretas. Essa afirmativa representa requisitos de:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Qualidade"},
      alternativasIncorretas: [
        {titulo: "Testabilidade"}, {titulo: "Garantia"}, {titulo: "Processos"}
      ]
    });
  }
}
