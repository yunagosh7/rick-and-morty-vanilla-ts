import { CharacterService } from "./services/CharactersService.js";

const button = document.getElementById("button")

if(button) {
  button.onclick = () => console.log("button")
}

async function main() {
  const characters = await CharacterService.fetchAllCharacters();
  console.log(characters)
}

main()