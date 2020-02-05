function three_in_one(){
  var txt;
  var major;
  var check ;
  var name ;

  check= confirm("Press ok to continue to ");
  if (check == true) {
    alert("Welcome 102d5");
    name =prompt("Please enter your name",'ahmad');
    major=prompt("Please enter your major");  
    setTimeout(function(){ alert("Thank you");}, 2500);  
  }
  
 
  if (check == true) 
  {   txt = "You pressed OK!"; }
  else 
  {   txt = "You pressed Cancel!"; }

  if (check == true && name !=null) 
  {  name= name+' ' + major; }

  return [txt,name]; 
}


var txt;
var name; 
[txt,name]=three_in_one();
document.write('<h3>'+"Helo "+name +'</h3>');
document.write('<h3>'+txt+'</h3>');
