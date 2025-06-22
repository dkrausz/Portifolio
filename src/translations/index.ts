import { en } from "./english";
import { ptBr } from "./portuguese";

export type TLanguage = {
  about: string;
  technologies: string;
  projects: string;
  readMore: string;
  gitHub: string;
  deploy: string;
  aboutMe: string;
  homeText: string;
};

export enum Language {
  EN = "en",
  PT = "ptBr",
}

export const languages = {
  [Language.EN]: en,
  [Language.PT]: ptBr,
};

export type LanguageCode = keyof typeof languages;
