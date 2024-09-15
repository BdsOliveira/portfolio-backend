import { Project } from "../../entities/Project";
import { ListProjectsDTOInterface } from "../../useCases/ListProjects/ListProjectsDTO";

export interface ProjectRepositoryInterface {
	findByid(id: string): Promise<Project>;
	getAllProjects(data: ListProjectsDTOInterface): Promise<Project[]>;
	update(project: Project): Promise<Project>;
	save(project: Project): Promise<Project>;
	delete(id: string): Promise<void>;
}