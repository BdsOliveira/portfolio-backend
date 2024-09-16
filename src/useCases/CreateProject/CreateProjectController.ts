import { Request, Response } from "express";
import {
  CreateProjectUseCase,
  MissingParameterError,
} from "./CreateProjectUseCase";
import { CreateProjectDTOInterface } from "./CreateProjectDTO";

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data: CreateProjectDTOInterface = { ...req.body };
    console.log(data);

    try {
      return res.status(201).json(await this.createProjectUseCase.execute(data));
    } catch (error: any) {
      if (error instanceof MissingParameterError) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Unexpected error" });
    }
  }
}
