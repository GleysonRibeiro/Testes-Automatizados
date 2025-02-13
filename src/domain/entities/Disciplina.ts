import { IDisciplina } from '../interfaces/IDisciplina';
import { IProfessor } from '../interfaces/IProfessor';
import { IEstudante } from '../interfaces/IEstudante';
import { ITrabalho } from '../interfaces/ITrabalho';

export class Disciplina implements IDisciplina {
    private id: number;
    private nome: string;
    private professor: IProfessor;
    private alunos: IEstudante[];
    private trabalhos: ITrabalho[];

    constructor(
        id: number,
        nome: string,
        professor: IProfessor,
        alunos: IEstudante[] = [],
        trabalhos: ITrabalho[] = []
    ) {
        this.id = id;
        this.nome = nome;
        this.professor = professor;
        this.alunos = alunos;
        this.trabalhos = trabalhos;
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    getProfessor(): IProfessor {
        return this.professor;
    }

    setProfessor(novoProfessor: IProfessor): void {
        this.professor = novoProfessor;
    }

    getAlunos(): IEstudante[] {
        return this.alunos;
    }

    adicionarAluno(aluno: IEstudante): void {
        this.alunos.push(aluno);
    }

    removerAluno(aluno: IEstudante): void {
        this.alunos = this.alunos.filter(a => a.getId() !== aluno.getId());
    }

    getTrabalhos(): ITrabalho[] {
        return this.trabalhos;
    }

    adicionarTrabalho(trabalho: ITrabalho): void {
        this.trabalhos.push(trabalho);
    }

    removerTrabalho(trabalho: ITrabalho): void {
        this.trabalhos = this.trabalhos.filter(t => t.getId() !== trabalho.getId());
    }
}