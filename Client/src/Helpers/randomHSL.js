function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

function randomHSL() {
    const h = getRandom(0, 360);
    const s = getRandom(0, 100);
    const l = getRandom(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

export default randomHSL