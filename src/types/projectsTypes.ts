interface techTasks {
  common: string;
  items: string[];
}

interface description {
  title: string;
  subTitle: string;
  techTasks: techTasks;
}

export interface ProjectProps {
  id: number;
  imgLink: string;
  description: description;
  gitLink: string;
  prodLink: string;
}

