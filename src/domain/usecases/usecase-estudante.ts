// src/domain/usecases/usecase-estudante.ts
import { IUseCase } from '../../contracts/iusecase';
import { IEstudante } from '../interfaces/IEstudante';

export interface IEntradaUseCaseEstudante {
    id: number;
}

export interface ISaidaUseCaseEstudante {
    estudante: IEstudante | null;
}

export class UseCaseEstudante implements IUseCase<IEntradaUseCaseEstudante, ISaidaUseCaseEstudante> {
    async perform(entrada: IEntradaUseCaseEstudante): Promise<ISaidaUseCaseEstudante> {
        console.log(`Buscando estudante com ID: ${entrada.id}`);
        return { estudante: null };
    }
}