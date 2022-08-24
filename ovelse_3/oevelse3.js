// let randTal;
// let antalGaet;

// randTal = Math.floor(Math.random() * 11);

// const tal

// const button = document.querySelector("#button");

// button.addEventListener("click", clickButton);

// function tjekTal{
//     console.log("clickButton")

// }

// function guessNumber{

// }

// if (input == randTal) {
//     console.log("Correct");

//   } else {
//     console.log("Wrong");
//   }

document.querySelector("button").addEventListener("click", tjekTal);
let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 11);
console.log(ranNum);

function tjekTal() {
  forsoeg++;
  const brugerTal = document.querySelector("#tal").value;
  if (ranNum > brugerTal) {
    alert(" Øv!" + brugerTal + " var for lavt. Prøv igen :)");
    console.log(ranNum, brugerTal);
  } else if (ranNum < brugerTal) {
    alert(" Øv!" + brugerTal + " var for højt. Prøv igen :)");
    console.log(ranNum, brugerTal);
  } else {
    alert(
      brugerTal +
        " er rigtigt!" +
        " Du brugte " +
        forsoeg +
        " forsøg. Prøv igen med et nyt tal :)"
    );
    console.log("Du gættede rigtigt!");
    location.reload();
  }
}

// Value bruges for at se, hvad "brugeren" har skrevet/indtastet
// location.reload bruges til at reloade siden, i dette tilfælde sker det, når man har gættet rigtigt
