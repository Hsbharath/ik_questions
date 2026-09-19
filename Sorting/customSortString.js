/* 
Question Description
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
S was sorted in some custom order previously. We want to permute the characters of T so taht they match the order that 
S was sorted.More specifically, if x occurs before y in S, the x should occur before y in the returned string.
Return any permutation of T as a string) that satisifies this property.

*/

const customSortString = (s, t) => {

    let freq = new Array(26).fill(0);

    for(let char of t){
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index]++;
    }

    let result = [];

    for(let char of s){
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        let count = freq[index];
        for(let i = 0; i < count; i++){
            result.push(char);
        }
        freq[index] = 0; 
    }

    for(let i = 0; i < 26; i++){
        let count = freq[i];
        let char = String.fromCharCode(i + 'a'.charCodeAt(0));
        for(let i = 0; i < count; i++){
            result.push(char);
        }
    }

    return result.join('');

}

const s = "car", t = "acacac";
console.log(customSortString(s, t));