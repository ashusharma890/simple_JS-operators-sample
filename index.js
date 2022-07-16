let para=document.getElementsByTagName("p");
let input1=document.getElementById("num1");
let input2=document.getElementById("num2");
let operator=document.getElementById("operator");
let result=document.getElementById("result");


function calculateMyResult(){
    // document.write("<h2>This is operators webpage by Ashu!!</h2>");
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);

    let op = operator.value;

    if(op === '/' && num2==0){
        // alert("You can't perform this operation!!!!!!!!");
        // prompt("Action not allowed");

        result.innerText = "Action not allowed!!!";
        return;
    }

    switch (op){
        case "+":
            result.innerText = "Ans =" + (num1 + num2);
            break;

        case "-":
            result.innerText = "Ans =" + (num1 - num2);
            break;
        
            case "*":
                result.innerText = "Ans =" + (num1 * num2);
                break;

                case "/":
                    result.innerText = "Ans =" + (num1 / num2);
                    break;

                default:
                    break;
    }
}

// console.log(para);

function changeText(){
    // para[0].innerHTML = "Bye";
    para[1].innerHTML = "See";
    para[2].innerHTML = "You";
    para[3].innerHTML="Again";
    para[4].innerHTML = "User";

    para[0].style.color="red";
    para[1].style.color="red";
    para[2].style.color="red";
    para[3].style.color="red";
    para[4].style.color="red";
}