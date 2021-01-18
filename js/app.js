"use strict"

//JS for slideshow images (main page)
var counter = 1;
setInterval(function () {
  document.getElementById('r' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

//JS for navbar movement
window.addEventListener("scroll", function () {
  var div = document.querySelector("div");
  div.classList.toggle("sticky", window.scrollY > 0);
})

//Setting the data for the plants
var indoorCounter = 0;
var outdoorCounter = 0;

var inDoor = ["AloeVeraRock", "EuphorbiaTrigona", "Fernwood Sansevieria", "Gasteria Flow", "SansevieriaCylindricaHandshake", "SansevieriaLaurentiiDwarf", "Succulentmix", "TillandsiaCurlySlim", "AlocasiaCulcullata", "AlocasiaZebrina", "BegoniaMaculataWightii", "Ctenanthe", "CycasRevoluta", "FicusBonsai", "PottedLivistoniaRotundifoliadouble", "Rhapisexcelsa", "AnthuriumMix", "GuzmaniaMix", "OncidiumOrchid", "PhalaenopsisOrchid -Purple", "PhalaenopsisOrchidWhite", "Spathiphyllum'Peace Lily'", "StrelitziaReginae", "VrieseaMix"];

var outDoor = ["Adonidia Merrillii", "BismarckiaNobilis", "CarpentariaPalmTree", "CocosNucifera", "CoperniciAalba", "CycasRevoluta", "VeitchiaMerrillii", "washingtoniarobusta", "Alternanthera", "AmaranthusCaudatus", "FicusCarica-FigTree", "GerberaMix-Seasonal", "HelianthusSunflower Plant", "poinsettia", "Punica Granatum- Pomegranate", "RhoeoDiscolor", "BougainvilleaGlabraNanaRed", "BougainvilleaMix", "Bougainvillea-orange", "BougainvilleaWhite", "Jacquemontia", "JasminSambac", "Mandevilla", "Tristelateia"]

var arrayOfPlants = [];

function InDoorPlant(name) {
  this.name = name;
  this.categories = "indoor";
  while (indoorCounter < 8) {
    this.img = "img/InDoor/cactus&Succulents" + name + ".jpg";
    this.type = "cactus&Succulents";
    break;
  }
  while (indoorCounter >= 8 && indoorCounter <= 15) {
    this.img = "img/InDoor/EvergreenPlants" + name + ".jpg";
    this.type = "EvergreenPlants";
    break;
  }
  while (indoorCounter >= 16 && indoorCounter < 24) {
    this.img = "img/InDoor/FloweringPlants" + name + ".jpg";
    this.type = "FloweringPlants";
    break;
  }
  indoorCounter++;
}

function OutDoorPlant(name) {
  this.name = name;
  this.categories = "outdoor";
  while (outdoorCounter < 8) {
    this.img = "img/OutDoor/Palms" + name + ".jpg";
    this.type = "Palms";
    break;
  }
  while (outdoorCounter >= 8 && outdoorCounter <= 15) {
    this.img = "img/OutDoor/Seasonals & Ground Covers" + name + ".jpg";
    this.type = "Seasonals & Ground Covers";
    break;
  }
  while (outdoorCounter >= 16 && outdoorCounter < 24) {
    this.img = "img/OutDoor/Vines & Climbers" + name + ".jpg";
    this.type = "Vines & Climbers";
    break;
  }
  outdoorCounter++;
}

function creatingIndoorObjects(plantArray) {
  for (let i = 0; i < plantArray.length; i++) {
    var temp = new InDoorPlant(plantArray[i]);
    arrayOfPlants.push(temp);
  }
}

function creatingOutdoorObjects(plantArray) {
  for (let i = 0; i < plantArray.length; i++) {
    var temp = new OutDoorPlant(plantArray[i])
    arrayOfPlants.push(temp);
  }
}


//Creating the objects for the plants
creatingIndoorObjects(inDoor);
creatingOutdoorObjects(outDoor);
console.log(arrayOfPlants);

