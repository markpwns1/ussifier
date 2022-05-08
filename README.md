# ussifier
An algorithm to apply "pussy blends" to English words, inspired by Michael Dow's paper on this very topic.

## Usage
Simply download `ussify.js` and use like so:
```js
const ussifier = require("./ussify");

console.log(ussifier.ussify("taiwan")); // "taiwussy"
console.log(ussifier.ussify("step-grandfather")); // "step-grussy"
console.log(ussifier.ussify("anthropology")); // "anthropolussy"
```

Note that words with one syllable will simply be replaced with "ussy". This is intentional.

## Algorithm
The algorithm is as follows:
1. Separate the word as best as possible into its syllables
2. If the word has one syllable, return "ussy"
3. If the word has two syllables, keep the first syllable and append "ussy"
4. Otherwise, keep the first 2 syllables and append "ussy"

## Bibliography
1. Dow, M. (2018). Congrès annuel de l’Association canadienne de linguistique 2018. In *A corpus study of phonological factors in novel English blends.* Regina. Retrieved 2022, from https://cla-acl.artsci.utoronto.ca/wp-content/uploads/actes-2018/Dow-2018.pdf. 
