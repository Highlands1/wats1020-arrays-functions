var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
//Create a Function in truncate.js called truncateWords() that accepts the following arguments:
//longText (a String of text)
//numWords (an Integer representing how many words to keep in the text)
var truncateWords = function(longText, numWords){
    //Use the split() function to split the String into an Array  
  var longTextArray = longText.split(" ");
    //Use the length attribute to find the number of words in the Array
  var wordCount = longTextArray.length;
    //Determine how many words should be removed from the Array
    //the following line of code did not make a diff on the output
        //var removeWords = wordCount - numWords; 
    //Remove those words from the Array using the splice() function
 var shortTextArray = longTextArray.splice(0, numWords);  
    //Add an additional String item to the Array to put an ellipses (...) into the Array
  shortTextArray[8] ="..."
  var shortText = shortTextArray.join(" ");
  //Use the join() function to combine the items in the Array into a String again
  //Return the truncated String from the Function
  //Output the results to the console.log
  console.log('originalText: ' + longText);
  console.log('shortText: ' + shortText);
};

var shortText = truncateWords(originalText, wordLimit);