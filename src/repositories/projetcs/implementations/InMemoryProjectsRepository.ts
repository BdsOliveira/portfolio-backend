import { Project } from "../../../entities/Project";
import { NotFoundError } from "../../../useCases/FindProject/FindProjectUseCase";
import { ProjectRepositoryInterface } from "./../ProjectRepositoryInterface";

export class InMemoryProjectsRepository implements ProjectRepositoryInterface {

    private projects: Project[] = [];
    constructor() {}
    findByid(id: string): Promise<Project> {
        const project = this.projects.find((project) => project.id === id)

        if (!project) {
            throw new NotFoundError("Project not found");
        }
        return Promise.resolve(project);
    }
    getAllProjects(): Promise<Project[]> {
        return Promise.resolve(this.projects);
    }
    update(project: Project): Promise<Project> {
        throw new Error("Method not implemented.");
    }
    save(project: Project): Promise<Project> {
        this.projects.push(project);
        return Promise.resolve(project);
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}