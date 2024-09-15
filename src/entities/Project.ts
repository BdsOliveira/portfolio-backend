import { uuid } from "uuidv4";

export class Project {
    public readonly id: string;

    public title: string;
    public objective: string;
    public features: string[];
    public skills: string[];
    public images: string[];
    public github_url: string;
    public live_url: string;
    public is_visible: boolean;

    constructor(props: Omit<Project, 'id'>, id?: string) {
        Object.assign(this, props);
    
        if (!id) {
          this.id = uuid();
        }
      }
}