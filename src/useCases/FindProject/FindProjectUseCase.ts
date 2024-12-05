import { Project } from "../../entities/Project";
import { ProjectRepositoryInterface } from "../../repositories/projetcs/ProjectRepositoryInterface";
import { FindProjectDTOInterface } from "./FindProjectDTO";

export class FindProjectUseCase {
  constructor(private projectRepository: ProjectRepositoryInterface) {}

  async execute(data: FindProjectDTOInterface): Promise<Project> {
    const { id } = data;
    
    if (!id) {
      throw new MissingParameterError("id");
    }
    return await this.projectRepository.findByid(id);
  }
}

export class MissingParameterError extends Error {
  constructor(paramName: string) {
    super(`Missing parameter: ${paramName}`);
  }
}
export class NotFoundError extends Error {
  constructor(error: string) {
    super(error);
  }
}
