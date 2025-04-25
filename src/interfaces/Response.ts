import { Character } from "./Character";

interface Info {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface AllCharactersResponse { 
  info: Info;
  status: number;
  results: Array<Character>
}