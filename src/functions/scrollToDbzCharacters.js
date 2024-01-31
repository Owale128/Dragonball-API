"use strict";

export function scrollToDbzCharacters () {
    var dbzContainer = document.getElementById('dbzContainer');
    if (dbzContainer) {
        dbzContainer.scrollIntoView({ behavior: 'smooth' });
    }
};

