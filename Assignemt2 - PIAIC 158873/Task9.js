var vowell = prompt("Please Enter a character to check vowel: ");

if (    vowell === "A" || vowell === "a" || 
        vowell === "E" || vowell === "e" ||
        vowell === "I" || vowell === "i" ||
        vowell === "O" || vowell === "o" ||
        vowell === "U" || vowell === "u"
    ) 
        {
            alert(vowell+ ' ' + "is a vowel.");
        } 
    
else 
        {
            alert(vowell+ ' ' + "is Consonant.");
        } 
