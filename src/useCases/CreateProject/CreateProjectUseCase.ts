import { Project } from "../../entities/Project";
import { ProjectRepositoryInterface } from "../../repositories/projetcs/ProjectRepositoryInterface";
import { CreateProjectDTOInterface } from "./CreateProjectDTO";

export class CreateProjectUseCase {
    constructor(
        private projectRepository: ProjectRepositoryInterface
    ) {
    }

    async execute(data: CreateProjectDTOInterface) {
        const project = new Project(data);
        await this.projectRepository.save(project);
    }
}
