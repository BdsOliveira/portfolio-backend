import { Project } from "../../../entities/Project";
import { ProjectRepositoryInterface } from "./../ProjectRepositoryInterface";

export class InMemoryProjectsRepository implements ProjectRepositoryInterface {
    findByid(id: string): Promise<Project> {
        throw new Error("Method not implemented.");
    }
    getAllProjects(): Promise<Project[]> {
        throw new Error("Method not implemented.");
    }
    update(project: Project): Promise<Project> {
        throw new Error("Method not implemented.");
    }
    save(project: Project): Promise<Project> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}