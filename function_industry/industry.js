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

alert("Welcome to System Analyzer Pro(SAP)");
while(action != "exit" || "quit"){
    var action = prompt("What would you like SAP to run?\n update checker, backup or quit");
    if(action == "update checker"){
        updateChecker(files);
    }
    if(action == "backup"){
        backup(files);
    }
    if(action == "exit" || "quit"){
        alert("Thank you for choosing SAP!");
    }
}