import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

export class CreateProjectController {
    constructor(
        private createProjectUseCase: CreateProjectUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { title, objective, features, skills, images, github_url, live_url, is_visible } = request.body;

        await this.createProjectUseCase.execute({
            title, objective, features, skills, images, github_url, live_url, is_visible
        });

        return response.status(201).send();
    }
}