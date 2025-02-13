// src/domain/usecases/usecase-professor.ts
import { IUseCase } from '../../contracts/iusecase';
import { IProfessor } from '../interfaces/IProfessor';

export interface IEntradaUseCaseProfessor {
    id: number;
}

export interface ISaidaUseCaseProfessor {
    professor: IProfessor | null;
}

export class UseCaseProfessor implements IUseCase<IEntradaUseCaseProfessor, ISaidaUseCaseProfessor> {
    async perform(entrada: IEntradaUseCaseProfessor): Promise<ISaidaUseCaseProfessor> {
        console.log(`Buscando professor com ID: ${entrada.id}`);
        return { professor: null };
    }
}