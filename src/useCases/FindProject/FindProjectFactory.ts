import { Request, Response } from "express";
import { ActualRepository } from "../../../config/ActualRepository";
import { FindProjectController } from "./FindProjectController";
import { FindProjectUseCase } from "./FindProjectUseCase";

export class FindProjectFactory {
  private repository: ActualRepository;
  private useCase: FindProjectUseCase;
  private controller: FindProjectController;

  constructor() {
    this.repository = new ActualRepository();
    this.useCase = new FindProjectUseCase(this.repository);
    this.controller = new FindProjectController(this.useCase);

    this.start = this.start.bind(this);
  }

  async start(req: Request, res: Response): Promise<Response> {
    return await this.controller.handle(req, res);
  }
}
