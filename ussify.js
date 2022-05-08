
/*
    ALGORITHM:
    1. Separate the word as best as possible into its syllables
    2. If the word has one syllable, return "ussy"
    3. If the word has two syllables, keep the first syllable and append "ussy"
    3. Otherwise, keep the first 2 syllables and append "ussy"
*/


const vowels = "aeiouyAEIOUY";
const consonants = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ";

const isConsonant = x => consonants.includes(x);
const isVowel = y => vowels.includes(y);

function stripTrailing(f) {
    return word => {
        let last = word.length;
        for(let i = word.length - 1; i > -1 && f(word[i]); i--) {
            last = i;
        }
        return word.slice(0, last);
    }
}

const stripTrailingConsonants = stripTrailing(isConsonant);
const stripTrailingVowels = stripTrailing(isVowel);
const stripTrailingE = stripTrailing(x => x == "e");

function fixLE(word) {
    if(word.endsWith("le")) return word.slice(0, word.length - 2) + "el";
    return word;
}

function syllables(word) {
    let i = 0;
    const s = [ ];
    if(isConsonant(word[i])) {
        do {
            let syllable = "";
            do {
                syllable += word[i++];
            } while(isConsonant(word[i]));
            while(isVowel(word[i])) {
                syllable += word[i++];
            }
            s.push(syllable);
        } while(i < word.length);
    }
    else {
        do {
            let syllable = "";
            do {
                syllable += word[i++];
            } while(isVowel(word[i]));
            while(isConsonant(word[i])) {
                syllable += word[i++];
            }
            s.push(syllable);
        } while(i < word.length);
    }
    return s;
}

function ussify(word, maxSyllables = 2) {
    const s = syllables(stripTrailingConsonants(stripTrailingE(fixLE(word))));
    const syllableOffset = s.length > 1? -1 : 0;
    return stripTrailingVowels(s.slice(0, Math.min(s.length - syllableOffset, maxSyllables + 1)).join("")) + "ussy";
}

exports.ussify = ussify;
