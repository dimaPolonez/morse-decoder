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

let arrTen = [];
let arrTwo = [];
let arrDec = [];
let result = [];

    for (let i = 0; i < expr.length;){
        arrTen.push(expr.substring(i , i + 10));
        i += 10;
    }

arrTwo = arrTen.map (function (value) {
    let result = [];
    for (let i = 0; i < value.length;){
        result.push(value.substring(i , i + 2));
        i += 2;
    }
    return result;
})

arrDec = arrTwo.map (function (value) {
    let result = [];
    for (let i = 0; i < value.length; i++){
        if (value[i] === '10') {
            result.push('.');
        } else if (value[i] === '11'){
            result.push('-');
        } else if (value[i] === '**'){
            result.push('**');
        }
    }
    return result;
})

arrDec.forEach(function (item) {
    item = item.join('');
    if (item.includes('**') === true) {
        result.push(' ');
    } else {
        result.push(MORSE_TABLE[item]);
    }
});

result = result.join('').toString();

return result;
}


module.exports = {
    decode
}