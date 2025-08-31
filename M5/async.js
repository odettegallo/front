function sayWord(word) {
    console.log(word);
}
function sayGreeting(goodMorning, callback) {
    sayWord(goodMorning);
}
sayGreeting("Good morning");