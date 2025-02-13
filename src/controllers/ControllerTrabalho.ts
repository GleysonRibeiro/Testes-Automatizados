import { Request, Response } from 'express';
import { IUseCase } from '../contracts/iusecase';
import { IEntradaUseCaseTrabalho, ISaidaUseCaseTrabalho } from '@domain/usecases/usecase-trabalho';

export class ControllerTrabalho {
    private useCase: IUseCase<IEntradaUseCaseTrabalho, ISaidaUseCaseTrabalho>;

    constructor(useCase: IUseCase<IEntradaUseCaseTrabalho, ISaidaUseCaseTrabalho>) {
        this.useCase = useCase;
    }

    async handle(req: Request, resp: Response): Promise<void> {
        try {
            const { id } = req.params;

            const entrada: IEntradaUseCaseTrabalho = {
                id: parseInt(id as string)
            };

            const resultado = await this.useCase.perform(entrada);

            resp.status(200).json({
                mensagem: 'Trabalho recuperado com sucesso',
                dados: resultado.trabalho
            });
        } catch (error) {
            resp.status(500).json({
                mensagem: 'Erro ao recuperar trabalho',
                erro: error instanceof Error ? error.message : 'Erro desconhecido'
            });
        }
    }
}