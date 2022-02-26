export default function randomHEX(){
    const randomHEX = Math.floor(Math.random()*16777215).toString(16);
    return '#'+randomHEX
}