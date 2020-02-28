
function translateAmPm(time){
  if(time.charAt(8)=="A"){
     if(time.substring(0,2) == "12"){
       return time.replace("12","00").substring(0,8);
      }
      else{
        return time.substring(0,8);
      }
  }
  if(time.charAt(8)=="P"){
     if(time.substring(0,2) == "12"){
       return time.substring(0,8);
     }
     else{

       return (parseInt (time.substring(0,2)) + 12) + time.substring(2,8);  //use parseInt to convert string to number.
       return time.substring(0,8);   
     }
  } 
}

console.log(translateAmPm("03:05:45PM"));    // 15:05:45
