export abstract class Pessoa {
    protected id: number;
    protected nome: string;
    protected email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getEmail(): string {
        return this.email;
    }

    setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    setEmail(novoEmail: string): void {
        this.email = novoEmail;
    }

    // Método abstrato para ser implementado pelas classes filhas
    abstract getTipo(): string;
}