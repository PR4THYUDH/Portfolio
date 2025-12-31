import { Skills } from "./skills";

export interface Skillcategory {
    title: string;
    description: string;
    icon: string; // logo path or bootstrap icon class
    bgClass: string;
    skills: Skills[];
}
