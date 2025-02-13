import { IProfessor } from '../interfaces/IProfessor';

export class Professor implements IProfessor {
    private id: number;
    private nome: string;
    private email: string;
    private registro: string;
    private titulacao: string;
    private salario: number;

    constructor(
        id: number, 
        nome: string, 
        email: string, 
        registro: string, 
        titulacao: string, 
        salario: number
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.registro = registro;
        this.titulacao = titulacao;
        this.salario = salario;
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

    getRegistro(): string {
        return this.registro;
    }

    getTitulacao(): string {
        return this.titulacao;
    }

    getSalario(): number {
        return this.salario;
    }

    getTipo(): string {
        return 'Professor';
    }
}