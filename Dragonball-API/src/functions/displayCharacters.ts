import { dbzCharacter } from "../interface/dbzCharacters";
import { showmodal } from "./showModal";

export const displayCharacters = (characters: dbzCharacter[]) => {
    const dbzContainer = document.getElementById('dbzContainer') as HTMLElement;

    characters.forEach(character =>{
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `<h2>${character.name}</h2> <img src="${character.image}" alt="${character.name}" class="dbzCharacters">`;

        characterElement.addEventListener('click', (event) => showmodal(character, event));
        dbzContainer.appendChild(characterElement);
    });
};