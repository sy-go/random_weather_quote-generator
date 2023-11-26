function generateRandNum(num) {
    return Math.floor(Math.random() * num);
}

const wordsBank = {
    words1: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satudray', 'Sunday'],
    words2: ['Sunny', 'Partly Sunny', 'Cloudy', 'Rainy', 'Drizzle', 'Patchy Rain'],
    words3: ['Low', 'Low-Moderate', 'Moderate', 'Strong', 'Storm', 'Hurricane'],
    words4: [9, 11, 13, 15, 17, 19],
    words5: [18, 20, 25, 28, 30, 33, 37]
}


let sentencesArray = [];

for (par in wordsBank) {
    let wordIndex = generateRandNum(wordsBank[par].length)
    switch (par) {
        case 'words1':
            sentencesArray.push(`On coming ${wordsBank.words1[wordIndex]}.`)
            break;
        case 'words2':
            sentencesArray.push(`We expect to have ${wordsBank.words2[wordIndex]} weather.`)
            break;
        case 'words3':
            sentencesArray.push(`With some ${wordsBank.words3[wordIndex]} wind.`)
            break;
        case 'words4':
            sentencesArray.push(`The lowest temperture is expected to be ${wordsBank.words4[wordIndex]} Celsius.`)
            break;
        case 'words5':
            sentencesArray.push(`The highest temperture is expected to be ${wordsBank.words5[wordIndex]} Celsius. ${'\n'}    ______${'\n'}   /       )========H${'\n'} |------------|           ${'\n'} |@@-@@--@@-@@|`)
            break;
        default :
            'invalid data'
    }
}
function weatherForecast(par) {
    let say = par.join('\n');
   console.log(say);
}

weatherForecast(sentencesArray);
