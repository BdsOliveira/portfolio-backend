import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

export class CreateProjectController {
    constructor(
        private createProjectUseCase: CreateProjectUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { title, objective, features, skills, images, github_url, live_url, is_visible } = req.body;

        await this.createProjectUseCase.execute({
            title, objective, features, skills, images, github_url, live_url, is_visible
        });

        return res.status(201).send();
    }
}