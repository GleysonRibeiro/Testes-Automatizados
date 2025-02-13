// src/domain/interfaces/IDisciplina.ts
import { IProfessor } from './IProfessor';
import { IEstudante } from './IEstudante';
import { ITrabalho } from './ITrabalho';

export interface IDisciplina {
    getId(): number;
    getNome(): string;
    getProfessor(): IProfessor;
    getAlunos(): IEstudante[];
    getTrabalhos(): ITrabalho[];
}