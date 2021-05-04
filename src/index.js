module.exports = function toReadable (number) {
    let message = '';
    const numToWord = [
        {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'},
        {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'},
        {10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'},
    ];

    if (number >= 0 && number <= 9) {
        message = `${numToWord[0][number]}`;
    } else if (number >= 10 && number <= 19) {
        message = `${numToWord[1][number]}`
    } else if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            message = `${numToWord[2][number]}`
        } else {
            const units = number % 10
            const dozens = number - units
            message = `${numToWord[2][dozens]} ${numToWord[0][units]}`
        }
    } else if (number >= 100 && number < 1000) {
        const hundred = 'hundred';

        if (number % 100 === 0) {
            number = number / 100;

            message = `${numToWord[0][number]} ${hundred}`;
        } else if (number % 10 === 0) {
            const dozens = number % 100;
            const hundreds = number - dozens;
            number = hundreds / 100;

            message = `${numToWord[0][number]} ${hundred} ${numToWord[2][dozens]}`;
        } else {
            let dozens = number % 100;
            const hundreds = number - dozens;
            const units = dozens % 10;
            number = hundreds / 100;

            if (dozens - units === 0) {
                message = `${numToWord[0][number]} ${hundred} ${numToWord[0][units]}`;
            } else if (dozens > 10 && dozens <= 19) {
                message = `${numToWord[0][number]} ${hundred} ${numToWord[1][dozens]}`
            } else if (units && !(dozens % 10)) {
                dozens = dozens - units
                message = `${numToWord[0][number]} ${hundred} ${numToWord[2][dozens]} ${numToWord[0][units]}`
            } else {
                message = `${numToWord[0][number]} ${hundred} ${numToWord[2][dozens - units]} ${numToWord[0][units]}`;
            }

        }
    }

    return message
}
