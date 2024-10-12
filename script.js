function  analyzesentence(sentence){
    let lenght = 0;
    let wordcount = 0;
    let vowelcount = 0;
 
    const vowels = "aeiouAEIOu";
// Loop through each character in the sentence
    for(let char of sentence){
        lenght++;// Count each character
        // Count vowels
        if(vowels.indexOf(char)!== -1){
            vowelcount++;
        }
         // Count spaces to determine words
        if(char === ''){
            wordcount++;
        }

    }

}

    // Calculate the total number of words
     wordcount++;// Add one for the last word
     
    //ccheck if the last character is a period
     if(sentence[sentence.lenght -1] === '.'){
        length--;
    
    return{ length, wordcount , vowelcount};
}
//example
const sentence = print("Enter a sentence ending with a point:");
const result = analyzesentence(sentence);
console.log("Length of the sentence (excluding the period):", result.lenght)
console.log("Number of words in the sentence:", result.wordcount)
console.log("Number of vowels in the sentence:" , result.vowelcount)

