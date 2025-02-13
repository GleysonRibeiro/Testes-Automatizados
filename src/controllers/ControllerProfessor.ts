import { Request, Response } from 'express';
import { IUseCase } from '../contracts/iusecase';
import { IEntradaUseCaseProfessor, ISaidaUseCaseProfessor } from '@domain/usecases/usecase-professor';

export class ControllerProfessor {
    private useCase: IUseCase<IEntradaUseCaseProfessor, ISaidaUseCaseProfessor>;

    constructor(useCase: IUseCase<IEntradaUseCaseProfessor, ISaidaUseCaseProfessor>) {
        this.useCase = useCase;
    }

    async handle(req: Request, resp: Response): Promise<void> {
        try {
            const { id } = req.params;

            const entrada: IEntradaUseCaseProfessor = {
                id: parseInt(id as string)
            };

            const resultado = await this.useCase.perform(entrada);

            resp.status(200).json({
                mensagem: 'Professor recuperado com sucesso',
                dados: resultado.professor
            });
        } catch (error) {
            resp.status(500).json({
                mensagem: 'Erro ao recuperar professor',
                erro: error instanceof Error ? error.message : 'Erro desconhecido'
            });
        }
    }
}