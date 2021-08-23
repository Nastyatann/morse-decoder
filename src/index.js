const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = [];
    let lettersDecode = [];
    let str = '';
    let n = expr.length;

    for (let i = 0; i < n; i++) {
        if (expr[i] === '*') {
            letters.push(' ');
            i += 10;
        }
        if (expr[i] === '1') {
            if (expr[i + 1] === '0') {
                str += '.';
            } else {
                str += '-';
            }
            i++;
            if ((i + 1) % 10 === 0) {
                letters.push(str);
                str = '';
            }
        }
    }
    for (let j = 0; j < letters.length; j++) {
        if (letters[j] != ' ') {
            lettersDecode[j] = MORSE_TABLE[letters[j]];
        } else {
            lettersDecode.push(' ');
        }
    }
    return  lettersDecode.join('');
}



module.exports = {
    decode
}