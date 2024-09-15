import { ProfessionalExperience } from "./../../../entities/ProfessionalExperience";
import { ProfessionalExperienceRepositoryInterface } from "./../ProfessionalExperienceRepositoryInterface";

export class InMemoryProfessionalExperiencesRepository implements ProfessionalExperienceRepositoryInterface {
    findByid(id: string): Promise<ProfessionalExperience> {
        throw new Error("Method not implemented.");
    }
    getAllProfessionalExperiences(): Promise<ProfessionalExperience[]> {
        throw new Error("Method not implemented.");
    }
    update(ProfessionalExperience: ProfessionalExperience): Promise<ProfessionalExperience> {
        throw new Error("Method not implemented.");
    }
    save(ProfessionalExperience: ProfessionalExperience): Promise<ProfessionalExperience> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}