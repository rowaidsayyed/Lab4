function three_in_one(){
    var txt;
    var major;
    var check ;
  
    check= confirm("Press a button!");
    var name =prompt("Please enter your name",'102 programmer');
    setTimeout(function(){ alert("Welcome 102d5");}, 1500);
    setTimeout(function(){ prompt("Please enter your major");}, 3000);
    
    if (check == true) 
    {   txt = "You pressed OK!"; }
    else 
    {   txt = "You pressed Cancel!"; }
  
    return [txt,name]; 
  }
  
  
  var txt;
  var name; 
  [txt,name]=three_in_one();
  document.write('<h3>'+"Helo "+name +'</h3>');
  document.write('<h3>'+txt+'</h3>');
  