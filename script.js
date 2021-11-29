//hjelpevariabel
const morseCodeArray =  ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '&nbsp;', '·−·−', '−−−·', '·−−·−'],
      alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 'æ', 'ø', 'å'],
      soundAraay = [];
      app = document.getElementById('app')
      output = document.getElementById('output')
      textValue = document.getElementById('text-value'),
      checkbox = document.getElementById('sound-toggle');

//Model
let morse = '', sound;

//View
function render() {
    output.innerHTML = morse;
}

render();

//Controller
function createSoundElement() {
    textValue.onkeyup = playSound;
    sound = document.createElement('audio');
    sound.autoplay = true;
    sound.volume = 0.1;
    document.body.appendChild(sound);
}

createSoundElement();

function toMorseCode(text) {
    let textArray = text.toLowerCase().split(''), result = [];
    for (let i = 0; i < textArray.length; i++) {
        let index = alphabetArray.indexOf(textArray[i]);
        if (index === -1) continue;
        result.push(morseCodeArray[index]);
    }
    morse = result.join(' ');
    render();
}

function playSound(evt) {
    let key = evt.key.toLowerCase();
    if (!checkbox.checked || !alphabetArray.includes(key) || key === ' ') return;
    sound.src = `sounds/${key}.mp3`;
}

/*function clear();
    output = result;
    render();*/