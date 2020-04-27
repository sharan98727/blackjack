let x = [];  //defining an array used afterwards for deciding the winner and drawconditions
function startA() {
  //using the window we are making the variable global
  window.card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
  let cardnumber1a = card[Math.floor(Math.random() * 12)];  //getting a random value to card
  document.getElementById("card1").innerText = cardnumber1a; //giving that value inside card
  let cardnumber1b = card[Math.floor(Math.random() * 12)];
  document.getElementById("card2").innerText = cardnumber1b;
  window.sumA = cardnumber1a + cardnumber1b;  
  window.playerA = [];  //creating an array of playerA and pushing the card nubmers
  playerA.push(cardnumber1a);
  playerA.push(cardnumber1b);
  if (sumA == 17 || sumA == 18 || sumA == 19 || sumA == 20) {
    alert("your score is" + sumA + "you can hold");
  }
}
//we are calling this function when we click on playonA button
function playonA() {
  cardnumberA = card[Math.floor(Math.random() * 12)];
  var div = document.createElement("div");
  div.textContent = cardnumberA;
  div.classList.add('cardA');
  document.body.appendChild(div);    //appending a newcard
  console.log(cardnumberA);
  playerA.push(cardnumberA);
  sumA = sumA + cardnumberA;
  //various condition after we calculate the sumA
  if (sumA == 21) {

    alert("you are winner");

  }

  if (sumA == 17 || sumA == 18 || sumA == 19 || sumA == 20) {
    alert("your score is" + sumA + "you can hold");
    window.resultA = sumA;   //storing the sum and storing it in different variable and making it global
  }
  
  if (sumA > 21) {
    alert("you lose");  //condition for lost case
    x.push(0);
  }
}

function holdA() {
  if (playerA.length == 2) {
    x.push(sumA);                   //pushing the sum into an array A   
  }                                 
  if (playerA.length > 2) {

    x.push(resultA);
  }
  
  }

//this function operates in similar way to function startA
function startB() {
  window.card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
  let cardnumber2a = card[Math.floor(Math.random() * 12)];
  document.getElementById("card3").innerText = cardnumber2a;
  let cardnumber2b = card[Math.floor(Math.random() * 12)];
  document.getElementById("card4").innerText = cardnumber2b;
  window.sumB = cardnumber2a + cardnumber2b;
  window.playerB = [];
  playerB.push(cardnumber2a);
  playerB.push(cardnumber2b);
  if (sumB == 17 || sumB == 18 || sumB == 19 || sumB == 20) {
    alert("your score is" + sumB + "you can hold");
  }
}

function playonB() {
  cardnumberB = card[Math.floor(Math.random() * 12)];
  var div = document.createElement("div");
  div.textContent = cardnumberB;
  div.classList.add('cardB');
  document.body.appendChild(div);
  console.log(cardnumberB);
  playerB.push(cardnumberB);
  sumB = sumB + cardnumberB;
  if (sumB == 21) {
    alert("you are winner");
  }
  if (sumB == 17 || sumB == 18 || sumB == 19 || sumB == 20) {
    alert("your score is" + sumB + "you can hold");
    window.resultB = sumB;
  }
  if (sumB > 21) {
    alert("you lose");
    x.push(0);
    holdB();
  }
}

function holdB() {
  if (playerB.length == 2) {
    x.push(sumB);
  }
  if (playerB.length > 2 && (sumB==17 || sumB==18 || sumB==19 || sumB==20)) {
    x.push(resultB);
  }
// we can enter this  loop only if both the playerA and playerB have played and pushed thier values into array X
if(x.length == 2)
{
   if(x[0]==0 && x[1]==0)
   {
     alert("game draw");
   }
   if(x[0]>x[1])
   {
     alert("playerA win")
   }
   if(x[0]<x[1])
   {
     alert("playerB win")
   }
   if(resultA==resultB)
   {
     alert("playerA win")
   }
}
}
