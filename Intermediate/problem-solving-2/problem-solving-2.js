// from a sentence find name use in how many times and which position find first
const sentence = "Hi, James went to the theater. James watched an engaging play. James then met the cast and director during the post-show discussion."

// find match count
const matchSearch = sentence.match(/james/gi);
const matchSearchCount = matchSearch ? matchSearch.length : 0; // if search option match then return length else 0
console.log('Search result find how much time:',matchSearchCount);

// first match position
const position = sentence.search(/james/i); // search option return match position
console.log('Find match result position',position);