/**
 * Created by jasonwolf on 1/16/14.
 */
/* Website Build validator.... makes sure there are no files left out of a final web build */
var indexPage = true;
var cascadingStyleSheet = true;
var javaScript = true;
var imageFolder = true;

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

}
