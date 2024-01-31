"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const _displayCharacters = void 0;
// export { _displayCharacters as displayCharacters };
import { showmodal } from "./showModal";
export function displayCharacters (characters) {
    var dbzContainer = document.getElementById('dbzContainer');
    characters.forEach(function (character) {
        var characterElement = document.createElement('div');
        characterElement.innerHTML = "<h2>".concat(character.name, "</h2> <img src=\"").concat(character.image, "\" alt=\"").concat(character.name, "\" class=\"dbzCharacters\">");
        characterElement.addEventListener('click', function (event) { return (0, showmodal)(character, event); });
        dbzContainer.appendChild(characterElement);
    });
};
const _displayCharacters = displayCharacters;
// export { _displayCharacters as displayCharacters };
