document.addEventListener("DOMContentLoaded", start);

function start() {
  const dyr = {
    navn: "gris",
    type: "pattedyr",
    billede: "http://mabe-kea.dk/E19/pics/pig.png",
    levested: "svinefarme",
  };

  const destination = document.querySelector("#dyr");
  const type = `Type: ${dyr.type}`;
  const levested = `Levested: ${dyr.levested}`;

  destination.querySelector("h3").textContent = dyr.navn;
  destination.querySelector("img").src = dyr.billede;
  destination.querySelector("#p1").textContent = type;
  destination.querySelector("#p2").textContent = levested;
}
