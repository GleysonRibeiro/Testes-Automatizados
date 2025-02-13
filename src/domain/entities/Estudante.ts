import { IEstudante } from '../interfaces/IEstudante';

export class Estudante implements IEstudante {
    private id: number;
    private nome: string;
    private email: string;
    private matricula: string;
    private curso: string;
    private periodo: number;

    constructor(
        id: number, 
        nome: string, 
        email: string, 
        matricula: string, 
        curso: string, 
        periodo: number
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.matricula = matricula;
        this.curso = curso;
        this.periodo = periodo;
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

    getMatricula(): string {
        return this.matricula;
    }

    getCurso(): string {
        return this.curso;
    }

    getPeriodo(): number {
        return this.periodo;
    }

    getTipo(): string {
        return 'Estudante';
    }
}