import { Request, Response } from "express";
import { ActualRepository } from "../../../config/ActualRepository"
import { ListProjectsController } from "./ListProjectsController";
import { ListProjectsUseCase } from "./ListProjectsUseCase";

export class ListProjectsFactory {
    private repository: ActualRepository;
    private useCase: ListProjectsUseCase;
    private controller: ListProjectsController;

    constructor() {
        this.repository = new ActualRepository();
        this.useCase = new ListProjectsUseCase(this.repository);
        this.controller = new ListProjectsController(this.useCase);

        this.start = this.start.bind(this);
    }

    async start(req: Request, res: Response): Promise<Response> {
        return await this.controller.handle(req, res)
    }
}
