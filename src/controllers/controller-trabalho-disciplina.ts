import { Request, Response } from 'express';
import { IUseCase } from '../contracts/iusecase';
import { IEntradaUseCaseTrabalho, ISaidaUseCaseTrabalho } from '../domain/usecases/usecase-trabalho';

export interface IControllerTrabalho {
    handle(req: Request, resp: Response): Promise<void>;
}

export class ControllerTrabalhoDisciplina implements IControllerTrabalho {
    uc: IUseCase<any, any>;

    constructor(uc: IUseCase<any, any>) {
        console.log('ControllerTrabalhoDisciplina instanciado');
        this.uc = uc;
    }

    public async handle(req: Request, resp: Response): Promise<void> {
        const { idProfessor } = req.params;

        console.log('ControllerTrabalhoDisciplina.handle() chamado', idProfessor);
        
        const dto_usecase: IEntradaUseCaseTrabalho = {
            idProfessor: parseInt(idProfessor as string),
        };
        
        const resposta: ISaidaUseCaseTrabalho = await this.uc.perform(dto_usecase);
        console.log('Resposta UseCase', resposta.trabalhos);
        
        const minha_resposta = {
            mensagem: 'Trabalhos do Professor Recuperados',
            trabalhos: resposta.trabalhos,
        };
        
        resp.status(200).json(minha_resposta).end();
    }
}