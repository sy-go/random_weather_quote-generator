function generateRandNum(num){
return Math.floor(Math.random() * num);
}

const wordsBank = {
    words1 :['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satudray', 'Sunday'],
    words2 :['Sunny','Partly Sunny','Cloudy', 'Rainy', 'Drizzle','Patchy Rain'],
    words3 : ['Low', 'Low-Moderate', 'Moderate','Strong','Storm', 'Hurricane'] 
}

let wordIndex = generateRandNum(wordsBank.words1.length)
//console.log(wordsBank.words1[wordIndex])

function weatherForecast(){
    console.log(`On ${wordsBank.words1[generateRandNum(wordsBank.words1.length)]}, we expect to have ${wordsBank.words2[wordIndex]} weather, with some ${wordsBank.words3[wordIndex]} wind.`)
    
}
weatherForecast();
