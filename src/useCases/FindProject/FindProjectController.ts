import { Request, Response } from "express";
import {
  FindProjectUseCase,
  MissingParameterError,
  NotFoundError,
} from "./FindProjectUseCase";
import { FindProjectDTOInterface } from "./FindProjectDTO";

export class FindProjectController {
  constructor(private findProjectUseCase: FindProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params["id"];
    
    try {
      return res.status(201).json(await this.findProjectUseCase.execute({id}));
    } catch (error: any) {
      
      if (error instanceof MissingParameterError) {
        console.log(id);
        return res.status(400).json({ error: error.message });
      }
      
      if (error instanceof NotFoundError) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Unexpected error" });
    }
  }
}
