import { Pessoa } from './Pessoa';

export class Professor extends Pessoa {
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
        super(id, nome, email);
        this.registro = registro;
        this.titulacao = titulacao;
        this.salario = salario;
    }

    getRegistro(): string {
        return this.registro;
    }

    setRegistro(novoRegistro: string): void {
        this.registro = novoRegistro;
    }

    getTitulacao(): string {
        return this.titulacao;
    }

    setTitulacao(novaTitulacao: string): void {
        this.titulacao = novaTitulacao;
    }

    getSalario(): number {
        return this.salario;
    }

    setSalario(novoSalario: number): void {
        this.salario = novoSalario;
    }

    getTipo(): string {
        return 'Professor';
    }
}