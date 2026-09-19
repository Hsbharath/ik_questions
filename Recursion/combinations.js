/*
Question: Description
Given a digit string excluded 0 and 1, return all possible letter combinations 
that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) 
is given below.
1	
2 ABC	
3 DEF
4 GHI	
5 JKL	
6 MNO
7 PQRS	
8 TUV	
9 WXYZ
*/

const combinations = (digits) => {

    const digitsToLetters = {
        2: "ABC",	
        3 : "DEF",
        4 : "GHI",	
        5 : "JKL",	
        6 : "MNO",
        7 : "PQRS",	
        8 : "TUV"	,
        9 : "WXYZ",
    }

    const results = [];
    const current = [];

    const backtrack = (index) => {
        if(index === digits.length){
            results.push(current.join(""));
            return;
        }
        
        let letters = digitsToLetters[digits[index]];

        for(let letter of letters){
            current.push(letter);
            backtrack(index + 1);
            current.pop();
        }
    }

    backtrack(0);
    return results;

}

console.log(combinations("23"));