var paswd = "BlockChains";

var u_paswd = prompt("Please enter your password: ");

if (u_paswd == '') 
  {
    alert("Please enter Password !");
  } 
else if (u_paswd === paswd) 
  {
    alert("Correct! The password you entered matches the original password !");
  } 

else 
  {
    alert("Incorrect password");
  }