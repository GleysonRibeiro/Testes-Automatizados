import { Estudante } from './Estudante';
import { Professor } from './Professor';
import { Trabalho } from './Trabalho';

export class Disciplina {
    private id: number;
    private nome: string;
    private alunos: Estudante[];
    private professor: Professor;
    private trabalhos: Trabalho[];

    constructor(
        id: number,
        nome: string,
        professor: Professor,
        alunos: Estudante[] = [],
        trabalhos: Trabalho[] = []
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

    getProfessor(): Professor {
        return this.professor;
    }

    setProfessor(novoProfessor: Professor): void {
        this.professor = novoProfessor;
    }

    getAlunos(): Estudante[] {
        return this.alunos;
    }

    adicionarAluno(aluno: Estudante): void {
        this.alunos.push(aluno);
    }

    removerAluno(aluno: Estudante): void {
        this.alunos = this.alunos.filter(a => a.getId() !== aluno.getId());
    }

    getTrabalhos(): Trabalho[] {
        return this.trabalhos;
    }

    adicionarTrabalho(trabalho: Trabalho): void {
        this.trabalhos.push(trabalho);
    }

    removerTrabalho(trabalho: Trabalho): void {
        this.trabalhos = this.trabalhos.filter(t => t.getId() !== trabalho.getId());
    }
}