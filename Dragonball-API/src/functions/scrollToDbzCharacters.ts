
export const scrollToDbzCharacters = () => {
    const dbzContainer = document.getElementById('dbzContainer') as HTMLDivElement;
    if (dbzContainer) {
        dbzContainer.scrollIntoView({ behavior: 'smooth'});
    }
    };