function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    const paletteContainer = document.getElementById('colorPalette');
    paletteContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        const randomColor = generateRandomColor();
        colorBox.style.backgroundColor = randomColor;

        const colorCode = document.createElement('div');
        colorCode.classList.add('color-code');
        colorCode.textContent = randomColor;

        colorBox.appendChild(colorCode);
        paletteContainer.appendChild(colorBox);
    }
}
