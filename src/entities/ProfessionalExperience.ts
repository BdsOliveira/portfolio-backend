import { uuid } from "uuidv4";

export class ProfessionalExperience {
    public readonly id: string;

    public role: string;
    public company: string;
    public begin_date: string[];
    public end_date: string[];
    public type: string[]; // Remote|Presencial|Hybrid

    constructor(props: Omit<ProfessionalExperience, 'id'>, id?: string) {
        Object.assign(this, props);
    
        if (!id) {
          this.id = uuid();
        }
      }
}