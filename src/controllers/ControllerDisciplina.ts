import { Request, Response } from 'express';
import { IUseCase } from '../contracts/iusecase';
import { IEntradaUseCaseDisciplina, ISaidaUseCaseDisciplina } from '@domain/usecases/usecase-disciplina';

export class ControllerDisciplina {
    private useCase: IUseCase<IEntradaUseCaseDisciplina, ISaidaUseCaseDisciplina>;

    constructor(useCase: IUseCase<IEntradaUseCaseDisciplina, ISaidaUseCaseDisciplina>) {
        this.useCase = useCase;
    }

    async handle(req: Request, resp: Response): Promise<void> {
        try {
            const { id } = req.params;

            const entrada: IEntradaUseCaseDisciplina = {
                id: parseInt(id as string)
            };

            const resultado = await this.useCase.perform(entrada);

            resp.status(200).json({
                mensagem: 'Disciplina recuperada com sucesso',
                dados: resultado.disciplina
            });
        } catch (error) {
            resp.status(500).json({
                mensagem: 'Erro ao recuperar disciplina',
                erro: error instanceof Error ? error.message : 'Erro desconhecido'
            });
        }
    }
}