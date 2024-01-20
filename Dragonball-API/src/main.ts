import axios from "axios";

interface dbzCharacter {
    name: string;
    image: string;
    ki: number;
    gender: string;
    race: string;
}

const getDBZ = async () => {
    try {
    const response = await axios.get<dbzCharacter[]>('https://dragonball-api.com/api/characters?page=1&limit=4&gender=Male&race=Saiyan');
    const dbzData = response.data;
    console.log('API Response:', dbzData);
    displayCharacters(dbzData);

    const btn = document.getElementById('btn') as HTMLButtonElement;
    if (btn) {
        btn.addEventListener('click', scrollToDbzCharacters)
    }

    } catch (error) {
        console.error('Could not get Dragon Ball Z-data:', error);
    }
    
};

const displayCharacters = (characters: dbzCharacter[]) => {
    const dbzContainer = document.getElementById('dbzContainer') as HTMLElement;

    characters.forEach(character =>{
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `<h2>${character.name}</h2> <img src="${character.image}" alt="${character.name}" class="dbzCharacters">`;

        characterElement.addEventListener('click', (event) => showmodal(character, event));
        dbzContainer.appendChild(characterElement);
    });
};

let currentmodal: HTMLElement | null = null;

const showmodal = (character: dbzCharacter, event: MouseEvent) => {

    if (currentmodal) {
        closeModal();
    }
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <h2>${character.name}</h2>
    <p>Gender: ${character.gender}</p>
    <p>Race: ${character.race}
    <p>Power Level: ${character.ki}</p>
    <button id="closeBtn">Close</button>
    `;

    const closeBtn = modal.querySelector('#closeBtn') as HTMLButtonElement;
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    document.body.appendChild(modal)
    currentmodal = modal;
};

const closeModal = () => {
    if (currentmodal) {
        currentmodal.remove();
        currentmodal = null;
    }
};

const scrollToDbzCharacters = () => {
const dbzContainer = document.getElementById('dbzContainer') as HTMLDivElement;
if (dbzContainer) {
    dbzContainer.scrollIntoView({ behavior: 'smooth'});
}
};

getDBZ()