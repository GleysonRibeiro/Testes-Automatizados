// src/domain/interfaces/IEntrega.ts
import { IEstudante } from './IEstudante';
import { ITrabalho } from './ITrabalho';

export interface IEntrega {
    getId(): number;
    getDataEntrega(): Date;
    getNota(): number;
    getAluno(): IEstudante;
    getTrabalho(): ITrabalho;
    estaAtrasada(): boolean;
    diasDeAtraso(): number;
}