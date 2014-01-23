/**
 * Created by jasonwolf on 1/16/14.
 */
/* Website Build validator.... makes sure there are no files left out of a final web build */
/* CHANGE THE VARS BELOW TO SEE HOW THE PROGRAM WORKS AND TO SEE THE DIFFERENT ALERTS YOU WILL GET...*/
var indexPage = true;
var cascadingStyleSheet = true;
var javaScript = false;
var imageFolder = false;

if(indexPage && cascadingStyleSheet && javaScript && imageFolder){

    console.log("all is working");
    console.log("Index page found: " + indexPage);
    console.log("CSS found: " + cascadingStyleSheet);
    console.log("Java Script found: " + javaScript);
    console.log("image folder found: " + imageFolder);
alert("Nothing appears to be missing \nYou should still double check all of your files.");
}else{
    console.log("There appears to be some missing files...");
    console.log("Index page found: " + indexPage);
    console.log("CSS found: " + cascadingStyleSheet);
    console.log("Java Script found: " + javaScript);
    console.log("image folder found: " + imageFolder);

};


if(indexPage != true || cascadingStyleSheet != true || javaScript != true || imageFolder != true){
    if(indexPage === false){
        alert("We couldn't find your index page.");
    }
    if(cascadingStyleSheet === false){
        alert("Your CSS wasn't found.");
    }
    if(javaScript === false){
        alert("Your Java Script couldn't be located.");
    }
    if(imageFolder === false){
        alert("Your image folder wasn't found.")

    }


}else{

    alert("The validation of all your files has been completed \nDouble check your files and run this again to be sure everything is where it should be.");
};