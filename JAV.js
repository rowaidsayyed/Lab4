var txt;
var major;
var check ;
check= confirm("Press a button!");
setTimeout(function(){ alert("Welcome 102d5");}, 1500);
setTimeout(function(){ prompt("Please enter your major");}, 3000);

if (check == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

document.write('<h3>'+txt+'</h3>');
