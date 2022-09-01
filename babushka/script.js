const url = "https://babushka-dd8a.restdb.io/rest/menu";

const key = {
  headers: {
    "x-apikey": "600ec2fb1346a1524ff12de4",
  },
};

let data;
let filter = "alle";
const overskrift = document.querySelector("section h1");

document
  .querySelectorAll("button")
  .forEach((knap) => knap.addEventListener("click", filtrerMad));

function filtrerMad() {
  filter = this.dataset.kategori;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  console.log(filter);
  vis();
  overskrift.textContent = this.textContent;
}

async function hentData() {
  const response = await fetch(url, key);
  const json = await response.json();
  data = json;
  vis();
}

function vis() {
  const holder = document.querySelector("#holder");
  const skabelon = document.querySelector("template").content;
  holder.textContent = "";
  data.forEach((mad) => {
    if (filter == "alle" || filter == mad.kategori) {
      const klon = skabelon.cloneNode(true);
      klon
        .querySelector("article")
        .addEventListener("click", () => visMad(mad));
      klon.querySelector("img").src = "billeder/" + mad.billednavn + "-md.jpg";
      klon.querySelector("h2").textContent = mad.navn;
      klon.querySelector("p").textContent = mad.kortbeskrivelse;
      klon.querySelector("p+p").textContent = "Pris: " + mad.pris + ",-";
      holder.appendChild(klon);
    }
  });
}

document
  .querySelector("#popop")
  .addEventListener("click", () => (popop.style.display = "none"));

function visMad(madData) {
  console.log(madData);
  const popop = document.querySelector("#popop");
  popop.style.display = "flex";
  popop.querySelector("img").src = "billeder/" + madData.billednavn + "-md.jpg";
  popop.querySelector("img").alt = madData.navn;
  popop.querySelector("h2").textContent = madData.navn;
  popop.querySelector("p").textContent = madData.langbeskrivelse;
  popop.querySelector("p+p").textContent =
    "Oprindelsesregion: " + madData.oprindelsesregion;
  popop.querySelector("p+p+p").textContent = "Pris: " + madData.pris + ",-";
}

hentData();
