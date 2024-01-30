import axios from "axios";
import { dbzCharacter } from "./interface/dbzCharacters";
import { displayCharacters } from "./functions/displayCharacters";
import { scrollToDbzCharacters } from "./functions/scrollToDbzCharacters";


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

getDBZ()