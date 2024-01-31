"use strict";
import { showmodal } from "../functions/showModal.js";
export function displayCharacters (characters) {
    var dbzContainer = document.getElementById('dbzContainer');
    characters.forEach(function (character) {
        var characterElement = document.createElement('div');
        characterElement.innerHTML = "<h2>".concat(character.name, "</h2> <img src=\"").concat(character.image, "\" alt=\"").concat(character.name, "\" class=\"dbzCharacters\">");
        characterElement.addEventListener('click', function (event) { return (0, showmodal)(character, event); });
        dbzContainer.appendChild(characterElement);
    });
};
