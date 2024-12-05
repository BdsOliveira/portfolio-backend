type CreateProjectDTOType = {
  title: string;
  objective: string;
  features: Array<string>;
  skills: Array<string>;
  images: Array<string>;
  github_url: string;
  live_url: string;
  is_visible?: boolean;
}

class CreateProjectDTO {
  
  title;
  objective;
  features;
  skills;
  images;
  github_url;
  live_url;
  is_visible?;

  constructor(data: CreateProjectDTOType) {
    this.title = data.title;
    this.objective = data.objective;
    this.features = [...data.features];
    this.skills = [...data.skills];
    this.images = [...data.images];
    this.github_url = data.github_url;
    this.live_url = data.github_url;
    this.is_visible = data.is_visible;
  }
}

export {
  CreateProjectDTO,
  CreateProjectDTOType
}