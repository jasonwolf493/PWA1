/**
 * Created by jasonwolf on 1/16/14.
 */
//a small function to remind the user of a date, time and the plans they have that day.
function reminder(date, time, plans){
    console.log("You have a reminder set for "+date+" At "+time+" for your event of... "+plans);
    alert("You have a reminder set for "+date+" at "+time+" for your event of... "+plans);
}


var repeat = "yes"
while(repeat == "yes"){
//morning plans
    var morning = prompt("do you have plans for the morning?");
    if(morning == "yes"){
        var c = prompt("What are your plans for the morning?");            //What the plan for the morning is
        var setReminder = prompt("would you like to set a reminder for the morning event?\nyes or no");
        if(setReminder == "yes"){
            var a = prompt("What will the date be for your event?");      //date of event
            var b = prompt("What will the time for the event be?");       //Time of event
            reminder(a, b, c);
            var repeat = prompt("would you like to add another event?");
        }else{
            setReminder = false;                        // resets setReminder to false
        }
    }else{}
}

//Afternoon plans
var afternoon = prompt("do you have plans for the afternoon?");
if(afternoon == "yes"){
    var c = prompt("What are your plans for the afternoon?");
    var setReminder = prompt("would you like to set a reminder for the afternoon event?\nyes or no");
    if(setReminder == "yes"){
        var a = prompt("What will the date be for your event?");
        var b = prompt("What will the time for the event be?");
        reminder(a, b, c);
    }else{
        setReminder = false;
    }
}else{}

//Night plans
var night = prompt("do you have plans for the night?")

if(night == "yes"){

    var c = prompt("What are your plans for the night?");
    var setReminder = prompt("would you like to set a reminder for the night event?\nyes or no");
    if(setReminder == "yes"){
        var a = prompt("What will the date be for your event?");
        var b = prompt("What will the time for the event be?");
        reminder(a, b, c);
    }else{
        setReminder = false;
    }
}else{}