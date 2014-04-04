// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");

    var avgNumbers = function(arr){

        var total = arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
        //console.log(total);
        var avg = total/arr.length;
        //console.log(avg);
        return avg;
        //CODE GOES HERE
    };
    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");
        var fullName = function(f,l){
            var name = f + l;
            //console.log(name);
            return name;


        };
        //PUT FUNCTION HERE

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

        var  wordCount = function(ipsum){
            var arr = ipsum.split(" ");
            //console.log(arr.length);
            return arr.length;

    };
    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        var charCount = function(ipsum){
            var arr = ipsum.length;
            return arr;


        };

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        var vowelsInWord = function(word){

            var vowels = word.match(/a/gi);
            var vowels2 = word.match(/i/gi);

            var totalVowels = vowels.concat(vowels2);



            //console.log(totalVowels.length);
            return totalVowels.length;



        };

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");





    /** Had to look to the internet for help with this one but I wanted to make sure you know that I understand what is going on.
     * the function requires input that gets called arr
     * I then create two arrays one for the odd numbers one for even
     * I then use a for loop to make sure that the loop doesn't become an infinite-loop.
     * add an if inside that, this if uses the modular % to see if there is a remainder when devided by 2 if there is no remainder it must be even.
     * else push it to the oddArr
     * return values.
    **/






    var findNum = function(arr){

        var evenArr = [];
        var oddArr = [];


        for (var i=0;i<arr.length;i++){
            if ((arr[i]+2)%2==0) {
                evenArr.push(arr[i]);
            }
            else {
                oddArr.push(arr[i]);
            }
        }
        //console.log(evenArr);
        //console.log(oddArr);
        return evenArr;


    };


    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();