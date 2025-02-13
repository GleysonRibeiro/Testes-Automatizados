import { Pessoa } from './Pessoa';

export class Estudante extends Pessoa {
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
        super(id, nome, email);
        this.matricula = matricula;
        this.curso = curso;
        this.periodo = periodo;
    }

    getMatricula(): string {
        return this.matricula;
    }

    setMatricula(novaMatricula: string): void {
        this.matricula = novaMatricula;
    }

    getCurso(): string {
        return this.curso;
    }

    setCurso(novoCurso: string): void {
        this.curso = novoCurso;
    }

    getPeriodo(): number {
        return this.periodo;
    }

    setPeriodo(novoPeriodo: number): void {
        this.periodo = novoPeriodo;
    }

    getTipo(): string {
        return 'Estudante';
    }
}