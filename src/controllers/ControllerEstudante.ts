import { Request, Response } from 'express';
import { IUseCase } from '../contracts/iusecase';
import { IEntradaUseCaseEstudante, ISaidaUseCaseEstudante } from '@domain/usecases/usecase-estudante';

export class ControllerEstudante {
    private useCase: IUseCase<IEntradaUseCaseEstudante, ISaidaUseCaseEstudante>;

    constructor(useCase: IUseCase<IEntradaUseCaseEstudante, ISaidaUseCaseEstudante>) {
        this.useCase = useCase;
    }

    async handle(req: Request, resp: Response): Promise<void> {
        try {
            const { id } = req.params;

            const entrada: IEntradaUseCaseEstudante = {
                id: parseInt(id as string)
            };

            const resultado = await this.useCase.perform(entrada);

            resp.status(200).json({
                mensagem: 'Estudante recuperado com sucesso',
                dados: resultado.estudante
            });
        } catch (error) {
            resp.status(500).json({
                mensagem: 'Erro ao recuperar estudante',
                erro: error instanceof Error ? error.message : 'Erro desconhecido'
            });
        }
    }
}