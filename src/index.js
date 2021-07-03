module.exports = function toReadable (number) {
    let word = {
        one: ['zero ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '],
        two: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ten: ['', '', 'twenty ', 'thirty ', 'forty ',  'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '],
        hundred: ['hundred '],
    }
    number = number.toString();
    if (number.length === 1) {
        let inWord = word.one[Number(number)].trim()
        return inWord
    }
    else if (number.length === 2 && number[0] == 1){
        let inWord = word.two[Number(number[1])];
        return inWord
    }
    else if (number.length === 2 && number[0] != 1) {
        let inWordOne = word.ten[Number(number[0])];
        let inWordTwo = word.one[Number(number[1])].trim();
        if (number[1] != 0){
            return inWordOne + inWordTwo
        } else {
            return inWordOne.trim();
        }
    }
    else if (number.length === 3) {
        if (number[1] == 0 && number[2] != 0) {
            let inWordOne = word.one[Number(number[0])];
            let inWordTwo = word.hundred[0];
            let inWordThree = word.one[Number(number[2])].trim();
            return inWordOne + inWordTwo + inWordThree
        }
        else if (number[1] == 0 && number[2] == 0) {
                let inWordOne = word.one[Number(number[0])];
                let inWordTwo = word.hundred[0].trim();
                return inWordOne + inWordTwo
        }
        else if (number[1] == 1) {
            let inWordOne = word.one[Number(number[0])];
            let inWordTwo = word.hundred[0];
            let inWordThree = word.two[Number(number[2])].trim();
            return inWordOne + inWordTwo + inWordThree
        } else {
            if (number[2] != 0) {
                let inWordOne = word.one[Number(number[0])];
                let inWordTwo = word.hundred[0];
                let inWordThree = word.ten[Number(number[1])];
                let inWordFour = word.one[Number(number[2])].trim();
                return inWordOne + inWordTwo + inWordThree + inWordFour
            } else {
                let inWordOne = word.one[Number(number[0])];
                let inWordTwo = word.hundred[0];
                let inWordThree = word.ten[Number(number[1])].trim();
                return inWordOne + inWordTwo + inWordThree
            }
        }
    }
}
