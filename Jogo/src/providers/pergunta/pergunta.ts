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
      titulo: "A atividade Iniciar Projeto é realizada após a aprovação do artefato:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Caso de negócio"},
      alternativasIncorretas: [
        {titulo: "Lista de risco"}, {titulo: "Plano de interação"}, {titulo: "Plano de desenvolvimento"}
      ]
    });

    this.perguntas.push({
      titulo: "Em qual estrutura é definida as entregas do projeto e sua decomposição em pacotes de trabalho:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[3],
      alternativaCorreta: {titulo: "EAP do projeto"},
      alternativasIncorretas: [
        {titulo: "Pacote de trabalho"}, {titulo: "Relatório da APF"}, {titulo: "Estimativa do sistema"}
      ]
    });

    this.perguntas.push({
      titulo: "Que técnica permite ver todos os resultados possíveis de suas decisões e avaliar o impacto em termos de risco:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Monte Carlo"},
      alternativasIncorretas: [
        {titulo: "Algoritmo de Dijkstra"}, {titulo: "BPM"}, {titulo: "BAM"}
      ]
    });

    this.perguntas.push({
      titulo: "A descrição de um produto deve ter informações corretas e testáveis. Esta afirmação representa requisitos de:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Qualidade"},
      alternativasIncorretas: [
        {titulo: "Testabilidade"}, {titulo: "Operacionalidade"}, {titulo: "Garantia"}
      ]
    });

    this.perguntas.push({
      titulo: "A ISO 9000 apresenta princípios para a implantação e gestão de um SGQ, qual das alternativas não é um dos seus princípios:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Sem abordagem dos processos"},
      alternativasIncorretas: [
        {titulo: "Foco no cliente"}, {titulo: "Melhoria contínua"}, {titulo: "Liderança"}
      ]
    });

    this.perguntas.push({
      titulo: "Assinale a alternativa que define corretamente aquela característica composta pelas subcaracterísticas acurácia, adequação e interoperabilidade:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Funcionalidade"},
      alternativasIncorretas: [
        {titulo: "Eficiência"}, {titulo: "Portabilidade"}, {titulo: "Manutenibilidade"}
      ]
    });

    this.perguntas.push({
      titulo: "Assinale a alternativa que define corretamente aquela característica composta pelas subcaracterísticas Compreensibilidade, Apreensibilidade e  Operacionalidade:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Usabilidade"},
      alternativasIncorretas: [
        {titulo: "Portabilidade"}, {titulo: "Manutenibilidade"}, {titulo: "Controlabilidade"}
      ]
    });

    this.perguntas.push({
      titulo: "Na qualidade de software se o software satisfaz as necessidades. Que característica é essa:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Funcionalidade"},
      alternativasIncorretas: [
        {titulo: "Eficiência"}, {titulo: "Confiabilidade"}, {titulo: "Usabilidade"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual das alternativas não é uma característica da qualidade de software:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Controlabilidade"},
      alternativasIncorretas: [
        {titulo: "Funcionalidade"}, {titulo: "Confiabilidade"}, {titulo: "Portabilidade"}
      ]
    });

    this.perguntas.push({
      titulo: "Dentre os atributos de um software de qualidade, incluem-se:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Eficiência e usabilidade"},
      alternativasIncorretas: [
        {titulo: "Imutabilidade e manutenibilidade"}, {titulo: "Eficiência e imutabilidade"}, {titulo: "Imutabilidade e usabilidade"}
      ]
    });

    this.perguntas.push({
      titulo: "O modelo de processo de avaliação é constituído por três estágios. Qual das alternativas não é um dos seus estágios:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Modificabilidade"},
      alternativasIncorretas: [
        {titulo: "Ter de Requisitos de Qualidade"}, {titulo: "Preparação da Avaliação"}, {titulo: "Procedimento de Avaliação"}
      ]
    });

    this.perguntas.push({
      titulo: "Assinale a alternativa que define corretamente aquela característica composta pelas subcaracterísticas Maturidade, Recuperabilidade e Tolerância a falhas:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[1],
      alternativaCorreta: {titulo: "Confiabilidade"},
      alternativasIncorretas: [
        {titulo: "Eficiência"}, {titulo: "Usabilidade"}, {titulo: "Funcionalidade"}
      ]
    });

    this.perguntas.push({
      titulo: "A engenharia reversa é o processo de análise de um software. Qual das alternativas a seguir não é um elemento da engenharia de reversa:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Usabilidade"},
      alternativasIncorretas: [
        {titulo: "Direcionalidade"}, {titulo: "Nível de abstração"}, {titulo: "Completitude do processo"}
      ]
    });

    this.perguntas.push({
      titulo: "Esse tipo de manutenção faz alterações no software buscando melhorar a confiabilidade, assinale a alternativa correta:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Manutenção preventiva"},
      alternativasIncorretas: [
        {titulo: "Manutenção perfectiva"}, {titulo: "Manutenção evolutiva"}, {titulo: "Manutenção corretiva"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual das alternativas a seguir não é um tipo de manutenção de software:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Manutenção de melhorias"},
      alternativasIncorretas: [
        {titulo: "Manutenção evolutiva"}, {titulo: "Reengenharia de software"}, {titulo: "Manutenção adaptativa"}
      ]
    });

    this.perguntas.push({
      titulo: "Reengenharia de software tornar o software mais fácil de manter no futuro. A reengenharia de software é classificada como manutenção:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Preventiva"},
      alternativasIncorretas: [
        {titulo: "Corretiva"}, {titulo: "Adaptativa"}, {titulo: "perfectiva"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual entre os tipos de manutenção de software é o mais comum e gera o maior esforço para seu reparo:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Modificação de funcionalidade"},
      alternativasIncorretas: [
        {titulo: "Adaptação ao ambiente"}, {titulo: "Adaptação de interfaces"}, {titulo: "Correção de defeitos"}
      ]
    });

    this.perguntas.push({
      titulo: "Sobre o uso da manutenção evolutiva no software, assinale a alternativa incorreta:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Nível de abstração"},
      alternativasIncorretas: [
        {titulo: "Melhora a qualidade"}, {titulo: "Adiciona novas funcionalidades"}, {titulo: "Melhora o desempenho "}
      ]
    });

    this.perguntas.push({
      titulo: "A fase caracterizada  pela realização de alterações de naturezas diversas, como corrigir erros e alterar funções, denomina-se fase de:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Manutenção"},
      alternativasIncorretas: [
        {titulo: "Testes"}, {titulo: "Desenvolvimento"}, {titulo: "Definição"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual das alternativas a seguir não é um tipo de manutenção de software:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Detectiva"},
      alternativasIncorretas: [
        {titulo: "Perfectiva"}, {titulo: "Corretiva"}, {titulo: "Evolutiva"}
      ]
    });

    this.perguntas.push({
      titulo: "O tipo de manutenção que é realizada visando ao aprimoramento do software para além dos requisitos funcionais originais é conhecido como:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[2],
      alternativaCorreta: {titulo: "Perfectiva"},

      alternativasIncorretas: [
        {titulo: "Corretiva"}, {titulo: "Adaptativa"}, {titulo: "Preventiva"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual das alternativas não é uma fase da técnica JAD:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Sessão SRG"},
      alternativasIncorretas: [
        {titulo: "Preparação"}, {titulo: "Definição"}, {titulo: "Pesquisa"}
      ]
    });

    this.perguntas.push({
      titulo: "Sobre uma das definições de gerência de requisitos, assinale a alternativa correta:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Rastreabilidade"},
      alternativasIncorretas: [
        {titulo: "Validação"}, {titulo: "Verificação"}, {titulo: "Registro"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual das alternativas a seguir não é um fator crítico na engenharia de requisitos:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Apoio Executivo"},
      alternativasIncorretas: [
        {titulo: "Requisitos incompletos"}, {titulo: "Falta de Recursos"}, {titulo: "Expectativas Irreais"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual método é usado para testar e explorar a capacidade criativa de indivíduos ou grupos:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Dinâmica"},
      alternativasIncorretas: [
        {titulo: "Questionário"}, {titulo: "Entrevista"}, {titulo: "Observação pessoal"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual atividade da engenharia de requisitos visa demonstrar que os requisitos produzidos correspondem ao sistema que o cliente pretende:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Validação"},
      alternativasIncorretas: [
        {titulo: "Análise de viabilidade"}, {titulo: "Construção"}, {titulo: "Verificação"}
      ]
    });

    this.perguntas.push({
      titulo: "Pode variar de uma declaração abstrata de alto nível de um serviço ou de uma restrição do sistema para uma especificação matemática funcional:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Requisito"},
      alternativasIncorretas: [
        {titulo: "Variável de Seção"}, {titulo: "Função Abstrata"}, {titulo: "Polimorfismo"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual das alternativas a seguir não é um dos principais objetivos da engenharia de requisitos:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Falta de planejamento"},
      alternativasIncorretas: [
        {titulo: "Produtividade na operação"}, {titulo: "Produtividade no projeto"}, {titulo: "Qualidade de software"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual das alternativas a seguir não é uma técnica de validação:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[0],
      alternativaCorreta: {titulo: "Flowcharting"},
      alternativasIncorretas: [
        {titulo: "Geração de casos de teste"}, {titulo: "Revisões dos requisitoe"}, {titulo: "Revisões dos requisito"}
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
      titulo: "Para garantir a qualidade e a eficácia do desenvolvimento do projeto, o gerente de projetos deve focar em:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Planos de comunicação"},
      alternativasIncorretas: [
        {titulo: " treinamento"}, {titulo: "Diagrama de rede"}, {titulo: "Engenharia de requisitos"}
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
      titulo: "Seu objetivo é a otimização do retorno sobre o investimento aplicado no decorrer dos projetos. Essa informação se refere a:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Gerência de Portfólios"},
      alternativasIncorretas: [
        {titulo: "Análise de riscos"}, {titulo: "Gerência Integrada de Projetos"}, {titulo: "Gerência Total da Qualidade"}
      ]
    });

    this.perguntas.push({
      titulo: "É o documento que autoriza formalmente o projeto. Esse  documento é chamado de:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[3],
      alternativaCorreta: {titulo: "Project Charter"},
      alternativasIncorretas: [
        {titulo: "Scope Statement"}, {titulo: "Service Contract"}, {titulo: "Open Contract"}
      ]
    });

    this.perguntas.push({
      titulo: "Possui as propriedades básicas de registros, conjuntos e ocorrências. As características mencionadas se referem o(a):",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[3],
      alternativaCorreta: {titulo: "O Modelo de Rede"},
      alternativasIncorretas: [
        {titulo: "O Flowcharting"}, {titulo: "O Heurístico dos Recursos"}, {titulo: "A Medição de Desempenho"}
      ]
    });

    this.perguntas.push({
      titulo: "Além das atividades de inspeção de software, possui outras atividades no contexto do processo de verificação e validação são aquelas relacionadas:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Teste de software"},
      alternativasIncorretas: [
        {titulo: "Manutenção de software"}, {titulo: "Estimativa de custo"}, {titulo: "Gerência de configuração"}
      ]
    });

    this.perguntas.push({
      titulo: "Para que a fase de execução de teste, seja realizada com sucesso deve(m) ser executado(s):",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Casos de teste"},
      alternativasIncorretas: [
        {titulo: "Casos de uso"}, {titulo: "Testes de Turing"}, {titulo: "Teste de COMA"}
      ]
    });

    this.perguntas.push({ //mudar pergunta
      titulo: "Qual a técnica de teste que consiste na aplicação de versões mais recente do software, para garantir que não surgiram novos defeitos:",
      nivelDificuldade: this.niveisDificuldade[0],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Regressão"},
      alternativasIncorretas: [
        {titulo: "Caixa preta"}, {titulo: "Caixa branca"}, {titulo: "Caixa cinza"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual dos testes a seguir pode ser classificada em alguns dos itens como stress, execução, operação e também é conhecido como teste da caixa branca:",
      nivelDificuldade: this.niveisDificuldade[1],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Estrutural"},
      alternativasIncorretas: [
        {titulo: "Baseado em requisitos"}, {titulo: "De partições"}, {titulo: "De equivalência"}
      ]
    });

    this.perguntas.push({
      titulo: "Qual teste é conhecido como teste funcional, pois é baseado nos requisitos funcionais do software:",
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
      alternativaCorreta: {titulo: "Teste de volatilidade"},
      alternativasIncorretas: [
        {titulo: "Teste de validação"}, {titulo: "Teste de integração"}, {titulo: "Teste de unidade"}
      ]
    });

    this.perguntas.push({
      titulo: " Qual dos testes a seguir é realizado no período entre o término do desenvolvimento e a entrega:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Teste Alfa"},
      alternativasIncorretas: [
        {titulo: "Teste Beta"}, {titulo: "Teste de Regressão"}, {titulo: "Teste Fumaça"}
      ]
    });

    this.perguntas.push({
      titulo: "A análise estática de código pode ter sua verificação agrupada em três aspectos principais,assinale a alternativa incorreta:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Verificação por log"},
      alternativasIncorretas: [
        {titulo: "Verificação por estilo"}, {titulo: "Verificação por boas práticas"}, {titulo: "Verificação por bugs"}
      ]
    });

    this.perguntas.push({
      titulo: "É a fase do teste de software em que módulos são combinados e testados em grupo. Que teste a seguir tem essa fase:",
      nivelDificuldade: this.niveisDificuldade[2],
      area: this.areas[4],
      alternativaCorreta: {titulo: "Teste de integração"},
      alternativasIncorretas: [
        {titulo: "Teste de unidade"}, {titulo: "Teste de sistema"}, {titulo: "Teste de aceitação"}
      ]
    });




  }
}
