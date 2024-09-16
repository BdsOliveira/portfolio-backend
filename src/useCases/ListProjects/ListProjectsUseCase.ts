import { Project } from "../../entities/Project";
import { ProjectRepositoryInterface } from "../../repositories/projetcs/ProjectRepositoryInterface";
import { ListProjectsDTOInterface } from "./ListProjectsDTO";

export class ListProjectsUseCase {
  constructor(private projectRepository: ProjectRepositoryInterface) {}

  async execute(data: ListProjectsDTOInterface): Promise<Project[]> {
    return await this.projectRepository.getAllProjects(data);
  }
}
