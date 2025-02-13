// src/domain/interfaces/IProfessor.ts
import { IPessoa } from './IPessoa';

export interface IProfessor extends IPessoa {
    getRegistro(): string;
    getTitulacao(): string;
    getSalario(): number;
}