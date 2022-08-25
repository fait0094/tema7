document.addEventListener("DOMContentLoaded", start);

function start() {
  const dyr = {
    navn: "gris",
    type: "pattedyr",
    billede: "http://mabe-kea.dk/E19/pics/pig.png",
    levested: "svinefarme",
  };

  const destination = document.querySelector("#dyr-article");
  const tekst = `Dyr: ${dyr.navn}, type: ${dyr.type}, levested: ${dyr.levested}`;

  destination.querySelector("p").textContent = tekst;
  destination.querySelector("img").src = dyr.billede;
}
