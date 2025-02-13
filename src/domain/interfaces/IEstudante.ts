// src/domain/interfaces/IEstudante.ts
import { IPessoa } from './IPessoa';

export interface IEstudante extends IPessoa {
    getMatricula(): string;
    getCurso(): string;
    getPeriodo(): number;
}