let sentence=prompt("Input a sentence.")

console.log(sentence)

let Sentence=sentence.length
let first=sentence.charAt(0).toUpperCase();

let last=sentence.charAt(Sentence-1).toUpperCase();


    //function1
    function full(name){

 alert(name)

}

full("First letter of the sentence is "+first);
full("Last letter of the sentence is "+last);
full("The first plus the last is "+first.concat(last));
full("The reverse of the previous is "+last.concat(first))


let fullName=sentence.concat(last.concat(first));
//function2
    function othername(full){

        alert(full);

    }

othername(fullName);

let division=Math.floor(Sentence/2)
let division2=sentence.charAt(division);
let final_result=division2.concat(fullName)
alert(final_result)
