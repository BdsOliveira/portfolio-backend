import { Project } from "../../entities/Project";
import { ProjectRepositoryInterface } from "../../repositories/projetcs/ProjectRepositoryInterface";
import { CreateProjectDTO, CreateProjectDTOType } from "./CreateProjectDTO";

export class CreateProjectUseCase {
  constructor(private projectRepository: ProjectRepositoryInterface) { }

  async execute(data: CreateProjectDTOType): Promise<Project> {
    const projectDTO: CreateProjectDTO = new CreateProjectDTO(data);
    console.log(projectDTO);

    for (const key in projectDTO) {
      if (Object.prototype.hasOwnProperty.call(projectDTO, key)) {
        console.log("key", key, projectDTO[key], "type", typeof projectDTO[key]);        
      }
    }
    
    if (!projectDTO.title) {
      throw new MissingParameterError("title");
    }

    if (!projectDTO.objective) {
      throw new MissingParameterError("objective");
    }

    if (!projectDTO.features) {
      throw new MissingParameterError("features");
    }

    if (!projectDTO.skills) {
      throw new MissingParameterError("skills");
    }

    if (!projectDTO.images) {
      throw new MissingParameterError("images");
    }

    if (!projectDTO.github_url) {
      throw new MissingParameterError("github_url");
    }

    if (!projectDTO.live_url) {
      throw new MissingParameterError("live_url");
    }

    if (!projectDTO.is_visible) {
      data.is_visible = true;
    }

    const project = new Project(projectDTO);
    return await this.projectRepository.save(project);
  }
}

export class MissingParameterError extends Error {
  constructor(paramName: string) {
    super(`Missing parameter: ${paramName}`);
  }
}
