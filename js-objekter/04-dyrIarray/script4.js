// document.addEventListener("DOMContentLoaded", start);

// function start() {
//   const dyr = {
//     navn: "gris",
//     type: "pattedyr",
//     billede: "http://mabe-kea.dk/E19/pics/pig.png",
//     levested: "svinefarme",
//   };

//   const destination = document.querySelector("#dyr-article");
//   const tekst = `Dyr: ${dyr.navn}, type: ${dyr.type}, levested: ${dyr.levested}`;

//   destination.querySelector("p").textContent = tekst;
//   destination.querySelector("img").src = dyr.billede;
// }

let dyrarray = [
  {
    navn: "frø",
    type: "amfibie",
    levested: "vand",
    billede: "http://mabe-kea.dk/E19/pics/frog.png",
  },
  {
    navn: "gris",
    type: "pattedyr",
    levested: "svinefarme",
    billede: "http://mabe-kea.dk/E19/pics/pig.png",
  },
  {
    navn: "ræv",
    type: "pattedyr",
    levested: "skoven",
    billede: "http://mabe-kea.dk/E19/pics/fox.png",
  },
  {
    navn: "sild",
    type: "fisk",
    levested: "havet",
    billede: "http://mabe-kea.dk/E19/pics/sild.png",
  },
  {
    navn: "krokodille",
    type: "krybdyr",
    levested: "lavvand",
    billede: "http://mabe-kea.dk/E19/pics/kroko.png",
  },
];

console.log(dyrarray);

// fem dyr: gris, frø, ræv, sild og krokodille
// egenskaber: navn, type, levested og billede
// billed-url

// lav et script, som viser araryet i Console
