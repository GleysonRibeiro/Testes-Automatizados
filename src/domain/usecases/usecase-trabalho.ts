export interface Trabalho {
    id: number;
    titulo: string;
    disciplina: string;
    dataEntrega: Date;
}

export interface IEntradaUseCaseTrabalho {
    idProfessor: number;
}

export interface ISaidaUseCaseTrabalho {
    trabalhos: Trabalho[];
}

//export class UseCaseTrabalho implements IUseCase<ent, sai> {......
