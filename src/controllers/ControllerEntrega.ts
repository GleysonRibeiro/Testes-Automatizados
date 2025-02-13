import { Request, Response } from 'express';
import { IUseCase } from '../contracts/iusecase';
import { IEntradaUseCaseEntrega, ISaidaUseCaseEntrega } from '@domain/usecases/usecase-entrega';

export class ControllerEntrega {
    private useCase: IUseCase<IEntradaUseCaseEntrega, ISaidaUseCaseEntrega>;

    constructor(useCase: IUseCase<IEntradaUseCaseEntrega, ISaidaUseCaseEntrega>) {
        this.useCase = useCase;
    }

    async handle(req: Request, resp: Response): Promise<void> {
        try {
            const { id } = req.params;

            const entrada: IEntradaUseCaseEntrega = {
                id: parseInt(id as string)
            };

            const resultado = await this.useCase.perform(entrada);

            resp.status(200).json({
                mensagem: 'Entrega recuperada com sucesso',
                dados: resultado.entrega
            });
        } catch (error) {
            resp.status(500).json({
                mensagem: 'Erro ao recuperar entrega',
                erro: error instanceof Error ? error.message : 'Erro desconhecido'
            });
        }
    }
}