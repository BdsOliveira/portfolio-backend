import { Request, Response } from "express";
import { ListProjectsUseCase } from "./ListProjectsUseCase";

export class ListProjectsController {
    constructor(
        private listProjectsUseCase: ListProjectsUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {

        let { page_number, items_per_page, query } = req.body;

        if (!page_number) {
            page_number = 0;
        }
        
        if (!items_per_page) {
            items_per_page = 10;
        }

        const projectList = await this.listProjectsUseCase.execute({
            page_number, items_per_page, query
        });

        return res.status(201).json(projectList);
    }
}