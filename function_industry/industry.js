/**
 * Created by jasonwolf on 1/16/14.
 */
//update checker and backup.



//update checker
files = 10;
function backup(files){
    var uploaded = 0;
    var update = prompt(files +" Files will be uploaded would you like to continue?");
    if(update=="yes"){
        while(files >= 1){
        uploaded++;
        files--;
        console.log(uploaded+" files were uploaded to the server "+files+" Remaining");
        }
    }
}

function updateChecker(files){
    files = files / 2 + 2;
    var update = prompt(files +" Files will be updated would you like to continue?");
    var updated = 0;
    if(update=="yes"){
        while(files >= 1){
            updated++;
            files--;
            console.log(updated+" files were updated on your system "+files+" Remaining...");

        }
    }
}

updateChecker(files);
backup(files);