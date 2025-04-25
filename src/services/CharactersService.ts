import { constants } from "../constants/index.js";
import { Character } from "../interfaces/Character";
import { AllCharactersResponse } from "../interfaces/Response";

async function fetchAllCharacters(): Promise<Character[]> {
  const res = await fetch(constants.apiBaseUrl + '/character');
  const data = await res.json() as AllCharactersResponse;
  return data.results;
}

export const CharacterService = { 
  fetchAllCharacters
} 