"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// // const _scrollToDbzCharacters = void 0;
// export { _scrollToDbzCharacters as scrollToDbzCharacters };
export function scrollToDbzCharacters () {
    var dbzContainer = document.getElementById('dbzContainer');
    if (dbzContainer) {
        dbzContainer.scrollIntoView({ behavior: 'smooth' });
    }
};
const _scrollToDbzCharacters = scrollToDbzCharacters;
// export { _scrollToDbzCharacters as scrollToDbzCharacters };
