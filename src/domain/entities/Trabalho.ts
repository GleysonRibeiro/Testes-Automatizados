export class Trabalho {
    private id: number;
    private titulo: string;
    private descricao: string;
    private dataEntrega: Date;

    constructor(
        id: number,
        titulo: string, 
        descricao: string, 
        dataEntrega: Date
    ) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataEntrega = dataEntrega;
    }

    getId(): number {
        return this.id;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(novoTitulo: string): void {
        this.titulo = novoTitulo;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(novaDescricao: string): void {
        this.descricao = novaDescricao;
    }

    getDataEntrega(): Date {
        return this.dataEntrega;
    }

    setDataEntrega(novaDataEntrega: Date): void {
        this.dataEntrega = novaDataEntrega;
    }

    // Método para verificar se o trabalho está atrasado
    estaAtrasado(): boolean {
        return new Date() > this.dataEntrega;
    }
}