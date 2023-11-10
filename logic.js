var planetNumber = 1;

async function logPlanet() {
    const lien = "https://laboweb.ecam.be/planet/"+planetNumber
    fetch(lien)
    .then ((res => res.json()))
    .then (res2 =>{
        console.table(res2);
        document.getElementById("Planet name").textContent = (res2.name)
        document.getElementById("Planet diameter").textContent = ("diameter :" + res2.diameter)
        document.getElementById("Planet distance").textContent = ("distance :" + res2.distance)
        document.getElementById("Planet star").textContent = ("star :" + res2.star)
        document.getElementById("Planet moons").textContent = ("moons :" + res2.moons)
    });
    planetNumber = planetNumber + 1;
  }
  var button = document.getElementById("button");
  button.addEventListener("click", logPlanet);