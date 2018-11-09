// var name = "Joar";
// var age = 19;


// if(age < 18) 
//     {
//         //kod körs om sant
//         console.log("STOP! Du är " + age + " år");
//     }

// else if(age > 18 && age < 45)
//     {
//         console.log("SHUTDOWN! YOUR AGE IS TOO c0ol 4 SCho_oL")
//     }

// else
//     {
//         //kod körs om false
//         console.log("välkommen! DU ÄR " + age + " ÅR");
//     }

/*
**********
    --- ECKSDE ---
**********
*/

// deklarera en variabel
var secretNumber = 7;

// user imput - ta emot data

// läser av villkoret && user imput

while(secretNumber !== userInput) {

    var userInput = Number(prompt("Gissa ett nummer mellan 1-10 o_o"));


    if(userInput === 6 || userInput === 8)
    {
        prompt("DET BRÄNNS!! gissa igen");
    }

    else if (userInput > secretNumber) 
    {
        prompt("Du gissade för högt! gissa igen");
    }

    else if (userInput === secretNumber) 
    {
    document.writeln("Grattis! du har gissat rätt nummer!!! 10p ");
    break;
    }

    else {
        prompt("Du gissade för lågt! gissa igen");
    }
}





    // var age = Number(prompt("Din ålder: "));

    // if(age < 0) {
    //     document.writeln("Du är tyvärr inte född ännu :(")
    // }

    // else if(age%2 == 0){
    //     document.writeln("ohhh! jämnt")
    // }

    // else if(age%2 != 0) {
    //     document.writeln("INTE JÄMNT")
    // }



