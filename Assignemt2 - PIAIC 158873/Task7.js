var oprator = prompt("Please enter arithmatic oprator: ");

var n1 = parseFloat(prompt("Please enter first number: "));
var n2 = parseFloat(prompt("Please enter second number: "));

var output;

if (oprator == "+") 
    {
        output = n1 + n2;
    } 

else if (oprator == "-") 
    {
        output = n1 - n2;
    } 
    
else if (oprator == "*") 
    {
        output = n1 * n2;
    } 
    
else 
    {
        output = n1 / n2;
    }

alert(n1 +' ' + oprator + ' ' + n2 +' = ' + output);

//Remarks: 2 + 5 = 7