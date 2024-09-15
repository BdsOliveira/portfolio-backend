import { Request, Response } from "express";
import { ActualRepository } from "../../../config/ActualRepository"
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

export class CreateProjectFactory {
    private repository: ActualRepository;
    private useCase: CreateProjectUseCase;
    private controller: CreateProjectController;

    constructor() {
        this.repository = new ActualRepository();
        this.useCase = new CreateProjectUseCase(this.repository);
        this.controller = new CreateProjectController(this.useCase);

        this.start = this.start.bind(this);
    }

    async start(req: Request, res: Response): Promise<Response> {
        return await this.controller.handle(req, res)
    }
}
