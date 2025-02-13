import { Estudante } from './Estudante';
import { Trabalho } from './Trabalho';

export class Entrega {
    private id: number;
    private dataEntrega: Date;
    private nota: number;
    private aluno: Estudante;
    private trabalho: Trabalho;

    constructor(
        id: number,
        dataEntrega: Date,
        nota: number,
        aluno: Estudante,
        trabalho: Trabalho
    ) {
        this.id = id;
        this.dataEntrega = dataEntrega;
        this.nota = nota;
        this.aluno = aluno;
        this.trabalho = trabalho;
    }

    getId(): number {
        return this.id;
    }

    getDataEntrega(): Date {
        return this.dataEntrega;
    }

    setDataEntrega(novaDataEntrega: Date): void {
        this.dataEntrega = novaDataEntrega;
    }

    getNota(): number {
        return this.nota;
    }

    setNota(novaNota: number): void {
        if (novaNota >= 0 && novaNota <= 10) {
            this.nota = novaNota;
        } else {
            throw new Error('Nota deve estar entre 0 e 10');
        }
    }

    getAluno(): Estudante {
        return this.aluno;
    }

    setAluno(novoAluno: Estudante): void {
        this.aluno = novoAluno;
    }

    getTrabalho(): Trabalho {
        return this.trabalho;
    }

    setTrabalho(novoTrabalho: Trabalho): void {
        this.trabalho = novoTrabalho;
    }

    // Método para verificar se a entrega está atrasada
    estaAtrasada(): boolean {
        return this.dataEntrega > this.trabalho.getDataEntrega();
    }

    // Método para calcular o atraso em dias
    diasDeAtraso(): number {
        if (!this.estaAtrasada()) return 0;
        
        const diferencaTempo = this.dataEntrega.getTime() - this.trabalho.getDataEntrega().getTime();
        return Math.ceil(diferencaTempo / (1000 * 3600 * 24)); // Converte milissegundos para dias
    }
}