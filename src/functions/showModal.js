"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const _showmodal = void 0;
// export { _showmodal as showmodal };
var currentmodal = null;
export function showmodal (character, event) {
    if (currentmodal) {
        closeModal();
    }
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = "\n    <p>Gender: ".concat(character.gender, "</p>\n    <p>Race: ").concat(character.race, "\n    <p>Power Level: ").concat(character.ki, "</p>\n    <button id=\"closeBtn\">Close</button>\n    ");
    var closeBtn = modal.querySelector('#closeBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    var clickedElement = event.currentTarget;
    var rect = clickedElement.getBoundingClientRect();
    var modalWidth = modal.offsetWidth;
    var modalHeight = modal.offsetHeight;
    modal.style.position = 'absolute';
    modal.style.top = "".concat(rect.top + window.scrollY + (rect.height - modalHeight) / 2, "px");
    modal.style.left = "".concat(rect.left + window.scrollX + (rect.width - modalWidth) / 2, "px");
    document.body.appendChild(modal);
    currentmodal = modal;
};
const _showmodal = showmodal;
export { _showmodal as showmodal };
var closeModal = function () {
    if (currentmodal) {
        currentmodal.remove();
        currentmodal = null;
    }
};
