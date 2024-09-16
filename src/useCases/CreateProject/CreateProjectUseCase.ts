import { Project } from "../../entities/Project";
import { ProjectRepositoryInterface } from "../../repositories/projetcs/ProjectRepositoryInterface";
import { CreateProjectDTOInterface } from "./CreateProjectDTO";

export class CreateProjectUseCase {
  constructor(private projectRepository: ProjectRepositoryInterface) {}

  async execute(data: CreateProjectDTOInterface): Promise<Project> {
    const {
      title,
      objective,
      features,
      skills,
      images,
      github_url,
      live_url,
      is_visible,
    } = data;

    if (!title) {
      throw new MissingParameterError("title");
    }

    if (!objective) {
      throw new MissingParameterError("objective");
    }

    if (!features) {
      throw new MissingParameterError("features");
    }

    if (!skills) {
      throw new MissingParameterError("skills");
    }

    if (!images) {
      throw new MissingParameterError("images");
    }

    if (!github_url) {
      throw new MissingParameterError("github_url");
    }

    if (!live_url) {
      throw new MissingParameterError("live_url");
    }

    if (!is_visible) {
      data.is_visible = true;
    }

    const project = new Project(data);
    return await this.projectRepository.save(project);
  }
}

export class MissingParameterError extends Error {
  constructor(paramName: string) {
    super(`Missing parameter: ${paramName}`);
  }
}
