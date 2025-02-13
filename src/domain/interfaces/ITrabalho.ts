// src/domain/interfaces/ITrabalho.ts
export interface ITrabalho {
    getId(): number;
    getTitulo(): string;
    getDescricao(): string;
    getDataEntrega(): Date;
    estaAtrasado(): boolean;
}