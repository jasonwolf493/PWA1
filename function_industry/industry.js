/**
 * Created by jasonwolf on 1/16/14.
 */
//update checker and backup.



//update checker
files = 10;
function backup(files){
var uploaded = 0;
    while(files >= 1){
    uploaded++;
    files--;
    console.log(uploaded+" files were uploaded to the server "+files+" Remaining");

    }
}
backup(files);