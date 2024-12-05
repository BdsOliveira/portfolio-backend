import { Request, Response } from "express";
import {
  CreateProjectUseCase,
  MissingParameterError,
} from "./CreateProjectUseCase";
import { CreateProjectDTOType } from "./CreateProjectDTO";

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const project: CreateProjectDTOType = { ...req.body };

    try {
      return res.status(201).json(await this.createProjectUseCase.execute(project));
    } catch (error: any) {
      if (error instanceof MissingParameterError) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Unexpected error" });
    }
  }
}
