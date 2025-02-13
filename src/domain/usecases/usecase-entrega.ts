// src/domain/usecases/usecase-entrega.ts
import { IUseCase } from '../../contracts/iusecase';
import { IEntrega } from '../interfaces/IEntrega';

export interface IEntradaUseCaseEntrega {
    id: number;
}

export interface ISaidaUseCaseEntrega {
    entrega: IEntrega | null;
}

export class UseCaseEntrega implements IUseCase<IEntradaUseCaseEntrega, ISaidaUseCaseEntrega> {
    async perform(entrada: IEntradaUseCaseEntrega): Promise<ISaidaUseCaseEntrega> {
        console.log(`Buscando entrega com ID: ${entrada.id}`);
        return { entrega: null };
    }
}