const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here

    /*на входе в функцию последовательность вид "1011", на выходе "точки-тире"*/
    function show_morze_tire(morze) {
        var sumstr = "";
        var k = 0;
        while (k < morze.length) {
            if (morze.substr(k, 2) == "00") {
                sumstr = sumstr + "";
            };
            if (morze.substr(k, 2) == "10") {
                sumstr = sumstr + ".";
            };
            if (morze.substr(k, 2) == "11") {
                sumstr = sumstr + "-";
            };
            k = k + 2;
        }
        return sumstr;
    }

    /*на входе "точки-тире"" - на выходе буква из алфавита*/
    function show_morze_compare(morze) {
        for (var key in MORSE_TABLE) {
            //key - точка-тире , MORSE_TABLE[key] - буква
            if (key == morze) {
                return MORSE_TABLE[key];
            } //end if
        } // for key
    } // end func

    var j = 0;
    var extract = "";
    var sumstring = "";
    //нарезаем входящий параметр-строку по 10 символов
    while (j < expr.length) {
        extract = expr.substr(j, 10);
        j = j + 10;
        //исключаем символы пробелов
        if (extract != "**********") {
            sumstring = sumstring + show_morze_compare(show_morze_tire(extract));
        } else {
            //полученные символы складываем в строку
            sumstring = sumstring + " ";
        } // end if

    } // end нарезка по 10 символов
    return sumstring;
}

module.exports = {
    decode
}