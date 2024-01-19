import axios from "axios";

const getDBZ = async () => {
    try {
    const response = await axios.get('https://dragonball-api.com/api/characters?page=1&limit=4&gender=Male&race=Saiyan');
    const dbzData = response.data;
    console.log('API Response:', dbzData);


    } catch (error) {
        console.error('Could not get Dragon Ball Z-data:', error);
    }
    
}

getDBZ()