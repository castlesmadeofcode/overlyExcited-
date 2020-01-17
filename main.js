// // Practice: Stacking Words
// // The learning objects of this exercise is to use iteration and string concatenation

// // For this exercise, you need to create a single JavaScript function named
// //  addExcitement that will use console.log() to print out a sentence to the
// //   browser console.

// // Create an addExcitement function that should console.log() rows of words. It 
// // should take an array containing the words of a sentence and output them in the 
// // developer console.

// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = "" 

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp += theWordArray[i] + " ";

//         // Print buildMeUp to the console
//         // console.log(buildMeUp);
//     }
// }

// // Invoke the function and pass in the array
// addExcitement(sentence);




// Practice: Some words are more exciting than others

// The learning objective of this exercise is to use the JavaScript if statement 
// inside a loop to do one operation when a certain conditions is true, and a different
//  operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. 
// Read the following English statement and write the equivalent in JavaSript code to make
//  it work.

// If the current value of the counter variable can be evenly divided by 3 
// (using the JavaScript remainder operator) add a single exclamation point (!)
//  to the current word in the array.

        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */

         //place is always 1 ahead of index

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        let place = i + 1;
        buildMeUp += theWordArray[i] + " ";
         if (place % 3  === 0) {
            buildMeUp += "! ";
         }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

addExcitement(sentence)