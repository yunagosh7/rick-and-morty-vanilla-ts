import { constants } from "../constants/index.js";
import { Character } from "../interfaces/Character";
import { AllCharactersResponse } from "../interfaces/Response";
import { apiFetch } from "./apiFetch.js";

async function fetchAllCharacters(): Promise<Character[]> {
  const res = await apiFetch<AllCharactersResponse>('/character');
  return res.results;
}

export const CharacterService = { 
  fetchAllCharacters
} 