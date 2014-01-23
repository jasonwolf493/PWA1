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
}else{
console.log("not working");

}
