// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("secretCodeWord", () => {
    it("should return a coded message", () => {
        expect(secretCodeWord(secretCodeWord1)).toBe("L4ck4d41s1c4l");
        expect(secretCodeWord(secretCodeWord2)).toBe("G0bbl3dyg00k");
        expect(secretCodeWord(secretCodeWord3)).toBe("3cc3ntr1c");
    })
})


// b) Create the function that makes the test pass.

// Pseudocode:
// 1. Create a function that takes in a string and returns a coded message.
// 2. Create a function that takes in an array and a letter and returns an array of words that contain the letter.


const secretCodeWord = (word) => {
    let codedWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a") {
            codedWord += "4";
        } else if (word[i] === "e") {
            codedWord += "3";
        } else if (word[i] === "i") {
            codedWord += "1";
        } else if (word[i] === "o") {
            codedWord += "0";
        } else {
            codedWord += word[i];
        }
    }
    return codedWord;
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe ("letterInWord", () => {
    it("should return an array of words containing a letter", () => {
        expect(letterInWord(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]);
        expect(letterInWord(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
    })
})


// b) Create the function that makes the test pass.

// psuedeocode:
// Create a function that takes in an array of words 
// and a single letter and returns an array of all the words containing that particular letter.
// 

const letterInWord = (array, letter) => {
    let wordsWithLetter = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(letter)) {
            wordsWithLetter.push(array[i]);
        }
    }
    return wordsWithLetter;
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe ("fullHouse", () => {
    it("should return true if the array is a full house", () => {
        expect(fullHouse(hand1)).toBe(true);
        expect(fullHouse(hand2)).toBe(false);
        expect(fullHouse(hand3)).toBe(false);
    })
})


// b) Create the function that makes the test pass.

// Psuedocode:
// 1. Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”.
// 2. Create a function that takes in an array of numbers and returns true if the array is a full house.
// 3. Create a function that takes in an array of numbers and returns false if the array is not a full house.

const fullHouse = (array) => {
    let pair = 0;
    let threeOfaKind = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                pair++;
            }
        }
    }
}





















