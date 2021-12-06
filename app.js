const billAmount = document.querySelector(".bill-amount-textarea");
const cashGiven = document.querySelector(".cash-given-textarea")
const btnCheck = document.querySelector("#btn-chk");
const messageOne = document.querySelector("#error-msg-one");
const messageTwo = document.querySelector("#error-msg-two");
var notesToBeReturned = document.querySelectorAll(".notes");

//var difference = (cashGiven.value - billAmount.value);
var denomination = [2000, 500, 100, 20, 10, 5, 1];

 
function cashToBeReturned(change)
{
     for(var i = 0; i<denomination.length; i++)
     {
         var numberOfNotes = Math.trunc(change/denomination[i]);
         change = change % denomination[i];
         notesToBeReturned[i].innerText = numberOfNotes;
         console.log(numberOfNotes);
     }
}

function clickEventHandler()
{
     if(billAmount.value>0)
     {
        var difference = cashGiven.value - billAmount.value;
        if(difference < 0)
        {
            messageTwo.style.display = "block";
            messageOne.style.display = "none";
        }
        else
        {
             cashToBeReturned(difference);
             messageOne.style.display = "none";
             messageTwo.style.display = "none";
        }
    }
    else
    {
        messageOne.style.display = "block";
        messageTwo.style.display = "none";
    }
}



btnCheck.addEventListener("click", clickEventHandler);