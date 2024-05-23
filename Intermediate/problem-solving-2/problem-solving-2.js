// find longest word from an array and return this index

function longestString(words){

    let longestWord = '';

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return [longestWord, words.indexOf(longestWord)];
}

const longestStrings = longestString(["Mahabur", "Ahnaf", "Nusrat", "Bangladesh"]);
console.log(longestStrings);