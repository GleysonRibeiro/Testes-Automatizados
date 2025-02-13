// src/domain/interfaces/IPessoa.ts
export interface IPessoa {
    getId(): number;
    getNome(): string;
    getEmail(): string;
    getTipo(): string;
}