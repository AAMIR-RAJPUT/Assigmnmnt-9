//?chp # 17 ---- 20
//?q1
// emptyMultiArray[0] = []; // Add an empty array as the first element
// emptyMultiArray[1] = []; // Add another empty array as the second element

// // Now you can add values to the inner arrays to create a 2D array
// emptyMultiArray[0][0] = 1;
// emptyMultiArray[0][1] = 2;
// emptyMultiArray[1][0] = 3;
// emptyMultiArray[1][1] = 4;

// This results in a 2D array like:
// [
//   [1, 2],
//   [3, 4]
// ]

//?q2
// for (var i = 1; i <= 10; i++) {
    //     console.log(i);
    // }
//?q3
// // Prompt the user for the table number and length
// var tableNumber = parseInt(prompt("Enter the table number:"));
// var tableLength = parseInt(prompt("Enter the table length:"));

// // Check if the inputs are valid numbers
// if (isNaN(tableNumber) || isNaN(tableLength)) {
//     console.log("Please enter valid numbers.");
// } else {
//     // Print the multiplication table
//     console.log("Multiplication table for " + tableNumber + " up to " + tableLength + ":\n");
//     for (var i = 1; i <= tableLength; i++) {
//         console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
//     }
// }

//?q4
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Printing items of the array using a for loop:");
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//?q5

//  // a. Counting: 1, 2, 3, ... , 15
//  var counting = "Counting: ";
//  for (var i = 1; i <= 15; i++) {
    //      counting += i + ", ";
//  }

//  // b. Reverse counting: 10, 9, 8, ... , 1
//  var reverseCounting = "Reverse counting: ";
//  for (var i = 10; i >= 1; i--) {
    //      reverseCounting += i + ", ";
//  }

//  // c. Even: 0, 2, 4, ... , 20
//  var even = "Even: ";
//  for (var i = 0; i <= 20; i += 2) {
//      even += i + ", ";
//  }

//  // d. Odd: 1, 3, 5, ... , 19
//  var odd = "Odd: ";
//  for (var i = 1; i <= 19; i += 2) {
//      odd += i + ", ";
//  }

//  // e. Series: 2k, 4k, 6k, ... , 20k
//  var series = "Series: ";
//  for (var i = 2; i <= 20; i += 2) {
    //      series += (i * 2) + "k, ";
    //  }
    
    //  // Display the series in the browser
//  document.write(counting + "<br>");
//  document.write(reverseCounting + "<br>");
//  document.write(even + "<br>");
//  document.write(odd + "<br>");
//  document.write(series)
//?q6

// Define the array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for input
// var userInput = prompt("Enter an item to search:");

// // Function to check if an item exists in the array
// function itemExists(array, item) {
    //     for (var i = 0; i < array.length; i++) {
        //         if (array[i] === item) {
            //             return true;
            //         }
//     }
//     return false;
// }

// // Check if the item is found and inform the user
// if (itemExists(A, userInput)) {
//     alert("The item '" + userInput + "' is found in the list.");
// } else {
    //     alert("The item '" + userInput + "' is not found in the list.");
    // }
    
    //
    //?q7
    //     var A = [24, 53, 78, 91, 12];
    
// // Initialize a variable to store the largest number
// var largestNumber = A[0];

// // Loop through the array to find the largest number
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
    //         largestNumber = A[i];
    //     }
    // }
    
    // // Display the largest number
    // console.log("The largest number in the array is: " + largestNumber);
    
    //?q8
    //     var A = [24, 53, 78, 91, 12];
    
// // Initialize a variable to store the smallest number
// var smallestNumber = A[0];

// // Loop through the array to find the smallest number
// for (var i = 1; i < A.length; i++) {
    //     if (A[i] < smallestNumber) {
        //         smallestNumber = A[i];
        //     }
// }

// // Display the smallest number
// console.log("The smallest number in the array is: " + smallestNumber);

//?q9
// Loop from 1 to 100
// for (var i = 1; i <= 100; i++) {
//     // Check if the current number is a multiple of 5
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

    
    
    


















// //?q1
// // Prompt the user for their first name
// var firstName = prompt("Enter your first name:");

// // Prompt the user for their last name
// var lastName = prompt("Enter your last name:");

// // Combine the first and last names into a single variable
// var fullName = firstName + " " + lastName;

// // Greet the user using their full name
// alert("Hello, " + fullName + "! Nice to meet you.");
//?q2
// // Prompt the user for their favorite mobile phone model
// var userInput = prompt("What is your favorite mobile phone model?");
        
// // Calculate the length of the user input
// var inputLength = userInput.length;
        
// // Display the length in the browser
// document.write("The length of your input is: " + inputLength);

//?q3
        // // Define the word
        // var word = "Pakistani";
        
        // // Find the index of the letter "n"
        // var indexOfN = word.indexOf("n");
        
        // // Display the result in the browser
        // document.write("The index of 'n' in 'Pakistani' is: " + indexOfN);
    //?q4
    // var word = "Hello World";
        
    // // Find the last index of the letter "l"
    // var lastIndex = word.lastIndexOf("l");
    
    // // Display the result in the browser
    // document.write("The last index of 'l' in 'Hello World' is: " + lastIndex);
//?q5

// // Define the word
// var word = "Pakistani";
        
// // Find the character at the 3rd index
// var characterAt3rdIndex = word.charAt(3);

// // Display the result in the browser
// document.write("The character at the 3rd index in 'Pakistani' is: " + characterAt3rdIndex);
//?q7
// var word = "Hyderabad";
        
//         // Replace "Hyder" with "Islam"
//         var replacedWord = word.replace("Hyder", "Islam");
        
//         // Display the result in the browser
//         document.write("After replacement: " + replacedWord);
//?q8
// // Define the original message
// var message = "Ali and Sami are best friends. They play cricket and football together.";
        
// // Replace all occurrences of "and" with "&"
// var replacedMessage = message.replace(/and/g, "&");

// // Display the result in the browser
// document.write("Original Message: " + message + "<br>");
// document.write("After replacement: " + replacedMessage);

//?q9
// // Define the string
// var str = "472";
        
// // Convert the string to a number
// var num = Number(str);

// // Display the values and types in the browser
// document.write("Original String: " + str + "<br>");
// document.write("Converted Number: " + num + "<br>");
// document.write("Type of Original String: " + typeof str + "<br>");
// document.write("Type of Converted Number: " + typeof num + "<br>");

// //?q10
// // Prompt the user for input
// var userInput = prompt("Enter some text:");
        
// // Convert the input to uppercase
// var uppercaseInput = userInput.toUpperCase();

// // Display the uppercase input in the browser
// document.write("Original Input: " + userInput + "<br>");
// document.write("Uppercase Input: " + uppercaseInput);


// //?q11
// // Prompt the user for input
// var userInput = prompt("Enter some text:");
        
// // Function to convert a string to title case
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

// // Convert the user input to title case
// var titleCaseInput = toTitleCase(userInput);

// // Display the title case input in the browser
// document.write("Original Input: " + userInput + "<br>");
// document.write("Title Case Input: " + titleCaseInput);

//// //?q12
// // Define the variable num
// var num = 35.36;
        
// // Convert num to a string and remove the dot
// var numAsString = num.toString().replace(".", "");

// // Display the result in the browser
// document.write("Original Number: " + num + "<br>");
// document.write("Number as String (Dot Removed): " + numAsString);
// //?q13

//  // Prompt the user for a username
//  var username = prompt("Enter a username:");
        
//  // Function to check if the username contains special symbols
//  function containsSpecialSymbols(username) {
//      var specialSymbols = ['@', '.', '!'];
//      for (var i = 0; i < specialSymbols.length; i++) {
//          if (username.includes(specialSymbols[i])) {
//              return true;
//          }
//      }
//      return false;
//  }
 
//  // Check if the username is valid
//  if (containsSpecialSymbols(username)) {
//      alert("Please enter a valid username without special symbols [@, ., !]");
//  } else {
//      alert("Username is valid: 

//?q14

//  // Define the array of items
//  var A = ["cake", "apple pie", "cookie", "chips", "patties"];
        
//  // Prompt the user for input
//  var userInput = prompt("Enter an item to search:");
 
//  // Function to perform case-insensitive search
//  function searchItem(array, item) {
//      item = item.toLowerCase();
//      for (var i = 0; i < array.length; i++) {
//          if (array[i].toLowerCase() === item) {
//              return true;
//          }
//      }
//      return false;
//  }
 
//  // Check if the item is found and inform the user
//  if (searchItem(A, userInput)) {
//      alert("The item '" + userInput + "' is found in the list.");
//  } else {
//      alert("The item '" + userInput + "' is not found in the list.");
//  }
//?q15
// Function to check if a string contains both alphabets and numbers
// function containsAlphabetsAndNumbers(str) {
//     var hasAlphabets = false;
//     var hasNumbers = false;
//     for (var i = 0; i < str.length; i++) {
//         if (/[a-zA-Z]/.test(str[i])) {
//             hasAlphabets = true;
//         } else if (/[0-9]/.test(str[i])) {
//             hasNumbers = true;
//         }
//     }
//     return hasAlphabets && hasNumbers;
// }

// // Prompt the user for a password
// var password = prompt("Enter a password:");

// // Check if the password meets the requirements
// if (
//     password.length >= 6 &&
//     /^[a-zA-Z]/.test(password) &&
//     containsAlphabetsAndNumbers(password)
// ) {
//     alert("Password is valid.");
// } else {
//     alert("Please enter a valid password that meets the specified requirements.");
// }
//?q16

//    // Define the string
//    var university = "University of Karachi";
        
//    // Use the split method to convert the string to an array
//    var universityArray = university.split(' ');
   
//    // Display the elements of the array in the browser
//    document.write("Original String: " + university + "<br>");
//    document.write("Array Elements: " + universityArray.join(', '));

//?q17

// // Prompt the user for input
// var userInput = prompt("Enter some text:");
        
// // Check if the user provided input
// if (userInput !== null && userInput !== "") {
//     // Get the last character of the input
//     var lastCharacter = userInput.charAt(userInput.length - 1);
    
//     // Display the last character in the browser
//     alert("The last character of your input is: " + lastCharacter);
// } else {
//     alert("You didn't provide any input.");
// }


// //?q18
//  // Define the string
//  var sentence = "The quick brown fox jumps over the lazy dog";
        
//  // Function to count occurrences of a word in a string (case-insensitive)
//  function countOccurrences(inputString, word) {
//      var count = 0;
//      var regex = new RegExp("\\b" + word + "\\b", "gi"); // Create a case-insensitive regex pattern
//      var matches = inputString.match(regex);
//      if (matches) {
//          count = matches.length;
//      }
//      return count;
//  }
 
//  // Count the occurrences of "the" in the string
//  var wordToSearch = "the";
//  var occurrences = countOccurrences(sentence, wordToSearch);
 
//  // Display the result in the browser
//  document.write("Original String: " + sentence + "<br>");
//  document.write("Occurrences of '" + wordToSearch + "': " + occurrences);