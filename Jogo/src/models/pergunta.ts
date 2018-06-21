import { Alternativa } from './alternativa';

export interface Pergunta {
  titulo: string;
  nivelDificuldade: string;
  area: string;
  alternativaCorreta: Alternativa;
  alternativasIncorretas: Alternativa[];
}
