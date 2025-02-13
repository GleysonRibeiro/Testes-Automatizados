// src/domain/usecases/usecase-disciplina.ts
import { IUseCase } from '../../contracts/iusecase';
import { IDisciplina } from '../interfaces/IDisciplina';

export interface IEntradaUseCaseDisciplina {
    id: number;
}

export interface ISaidaUseCaseDisciplina {
    disciplina: IDisciplina | null;
}

export class UseCaseDisciplina implements IUseCase<IEntradaUseCaseDisciplina, ISaidaUseCaseDisciplina> {
    async perform(entrada: IEntradaUseCaseDisciplina): Promise<ISaidaUseCaseDisciplina> {
        console.log(`Buscando disciplina com ID: ${entrada.id}`);
        return { disciplina: null };
    }
}