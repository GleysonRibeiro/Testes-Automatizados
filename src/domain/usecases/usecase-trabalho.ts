// src/domain/usecases/usecase-trabalho.ts
import { IUseCase } from '../../contracts/iusecase';
import { ITrabalho } from '../interfaces/ITrabalho';

export interface IEntradaUseCaseTrabalho {
    id: number;
}

export interface ISaidaUseCaseTrabalho {
    trabalho: ITrabalho | null;
}

export class UseCaseTrabalho implements IUseCase<IEntradaUseCaseTrabalho, ISaidaUseCaseTrabalho> {
    async perform(entrada: IEntradaUseCaseTrabalho): Promise<ISaidaUseCaseTrabalho> {
        console.log(`Buscando trabalho com ID: ${entrada.id}`);
        return { trabalho: null };
    }
}
