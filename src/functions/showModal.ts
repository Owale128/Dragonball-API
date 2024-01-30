import { dbzCharacter } from "../interface/dbzCharacters";

let currentmodal: HTMLElement | null = null;

export const showmodal = (character: dbzCharacter, event: MouseEvent) => {

    if (currentmodal) {
        closeModal();
    }
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <p>Gender: ${character.gender}</p>
    <p>Race: ${character.race}
    <p>Power Level: ${character.ki}</p>
    <button id="closeBtn">Close</button>
    `;

    const closeBtn = modal.querySelector('#closeBtn') as HTMLButtonElement;
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    const clickedElement = event.currentTarget as HTMLElement;
    const rect = clickedElement.getBoundingClientRect();
    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;

    modal.style.position = 'absolute';
    modal.style.top = `${rect.top + window.scrollY + (rect.height - modalHeight) / 2}px`;
    modal.style.left = `${rect.left + window.scrollX + (rect.width - modalWidth) / 2}px`;

    document.body.appendChild(modal)
    currentmodal = modal;
};

const closeModal = () => {
    if (currentmodal) {
        currentmodal.remove();
        currentmodal = null;
    }
};