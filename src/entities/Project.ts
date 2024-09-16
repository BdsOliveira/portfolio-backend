import { uuid } from "uuidv4";

export class Project {
    readonly id?: string;
    private title: string;
    private objective: string;
    private features: string[];
    private skills: string[];
    private images: string[];
    private github_url: string;
    private live_url: string;
    private is_visible: boolean;

    constructor(
        props: Omit<Project, 'id'>, id?: string
    ) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}