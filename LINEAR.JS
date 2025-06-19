const display=calculator.getElementById("display");

function appendtodisplay(input){
    display.value+=input;

}

function cleardisplay(){
    display.value="";
}
 
function calculation(){
    try{
        display.value=eval(display.value);
    }
     catch{
        display.value="error";
     }
    

}