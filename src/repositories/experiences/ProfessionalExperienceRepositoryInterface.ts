import { ProfessionalExperience } from "./../../entities/ProfessionalExperience";

export interface ProfessionalExperienceRepositoryInterface {
	findByid(id: string): Promise<ProfessionalExperience>;
	getAllProfessionalExperiences(): Promise<ProfessionalExperience[]>;
	update(professionalExperience: ProfessionalExperience): Promise<ProfessionalExperience>;
	save(professionalExperience: ProfessionalExperience): Promise<ProfessionalExperience>;
	delete(id: string): Promise<void>;
}