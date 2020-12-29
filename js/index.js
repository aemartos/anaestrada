// Change background color (randomly selected)
const bgColors = [
    '#FFBF00',
    '#FF5252',
    '#00FFBB',
    '#87C860',
    '#894598'
];
document.body.style.background = bgColors[Math.floor(Math.random() * 5)];

// Set favicon according to browser color scheme
let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
const setColorScheme = e => {
    if (e.matches) {
        // Dark theme
        var favicon = document.querySelectorAll('link[data-type="favicon"]');
        var i = favicon.length;
        while (i--) {
            favicon[i].setAttribute('href', favicon[i].dataset.light);
        }
    } else {
        // Light theme
        var favicon = document.querySelectorAll('link[data-type="favicon"]');
        var i = favicon.length;
        while (i--) {
            favicon[i].setAttribute("href", favicon[i].dataset.dark);
        }
    }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);