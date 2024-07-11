import { IconType } from "react-icons";

export interface Skill {
  title: string;
  about: string;
  Icon: IconType;
}

export interface lang {
  Icon: IconType;
  name: string;
  level: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployedurl: string;
  giturl: string;
  category: Category[];
  TechStack: string[];
}

export type Category =
  | "Web"
  | "App"
  | "Python"
  | "Java"
  | "DataScience"
  | "Testing"
  | "Api";
