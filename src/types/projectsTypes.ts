interface techTasks {
  common: string;
  items: string[];
}

export interface description {
  title: string;
  subTitle: string;
  techTasks: techTasks;
  stack: string[];
}

export interface ProjectProps {
  id: number;
  imgLink: string;
  description: description;
  gitLink: string;
  prodLink: string;
}

