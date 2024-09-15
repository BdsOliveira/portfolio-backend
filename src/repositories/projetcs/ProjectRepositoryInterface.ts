import { Project } from "../../entities/Project";

export interface ProjectRepositoryInterface {
	findByid(id: string): Promise<Project>;
	getAllProjects(): Promise<Project[]>;
	update(project: Project): Promise<Project>;
	save(project: Project): Promise<Project>;
	delete(id: string): Promise<void>;
}