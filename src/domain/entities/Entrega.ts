import { IEntrega } from '../interfaces/IEntrega';
import { IEstudante } from '../interfaces/IEstudante';
import { ITrabalho } from '../interfaces/ITrabalho';

export class Entrega implements IEntrega {
    private id: number;
    private dataEntrega: Date;
    private nota: number;
    private aluno: IEstudante;
    private trabalho: ITrabalho;

    constructor(
        id: number,
        dataEntrega: Date,
        nota: number,
        aluno: IEstudante,
        trabalho: ITrabalho
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

    getAluno(): IEstudante {
        return this.aluno;
    }

    setAluno(novoAluno: IEstudante): void {
        this.aluno = novoAluno;
    }

    getTrabalho(): ITrabalho {
        return this.trabalho;
    }

    setTrabalho(novoTrabalho: ITrabalho): void {
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