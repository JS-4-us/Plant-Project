'use strict';

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
window.addEventListener('scroll', function () {
  var div = document.querySelector('div');
  div.classList.toggle('sticky', window.scrollY > 0);
});

//Setting the data for the plants
var indoorCounter = 0;
var outdoorCounter = 0;

var inDoor = ['AloeVeraRock', 'EuphorbiaTrigona', 'Fernwood Sansevieria', 'Gasteria Flow', 'SansevieriaCylindricaHandshake', 'SansevieriaLaurentiiDwarf', 'Succulentmix', 'TillandsiaCurlySlim', 'AlocasiaCulcullata', 'AlocasiaZebrina', 'BegoniaMaculataWightii', 'Ctenanthe', 'CycasRevoluta', 'FicusBonsai', 'PottedLivistoniaRotundifoliadouble', 'Rhapisexcelsa', 'AnthuriumMix', 'GuzmaniaMix', 'OncidiumOrchid', 'PhalaenopsisOrchid -Purple', 'PhalaenopsisOrchidWhite', 'Spathiphyllum\'Peace Lily\'', 'StrelitziaReginae', 'VrieseaMix'];

var inDoorDiscreption = ['The Aloe Vera thrives on bright light conditions, but not direct sunlight. Heat is fine because they react similar to a cacti in hot conditions.', 'African Milk Tree is a tall, rugged, easy-care plant with thorns.', 'Fernwood Sansevieria has dark green leaves with striking light green tiger-print striping.', 'Because of their special ability to retain water, succulents tend to thrive in warm, dry climates and don’t mind a little neglect.', 'These are very low maintenance plants.Truly, they thrive on neglect.', 'Is Hardy drought tolerant and low maintenance air purifier houseplant.', 'Because of their special ability to retain water, succulents tend to thrive in warm, dry climates and don’t mind a little neglect.', 'Tillandsia Curly Slim is a popular air plant, Has thick curly leaves that curl back on themselves a few times.', 'They need bright light, but no direct sunlight, Water a little but often', 'They need bright light, but no direct sunligh, Water a little but often', 'Commonly referred to as the Polka dot Begonia, is undoubtedly one of the most strikingly gorgeous species of indoor plants.', 'Ctenanthe are related to Maranta, Calathea and Stromanthe. All are known and cherished for their extraordinary decorative foliage and are sometimes called Prayer Plants due to the way the leaves close upwards in a prayer-like fashion in the dar', 'Cycas Revoluta or the Sago Palm is a beautiful easy care houseplant. semi glossy deep green leaves are quite tough and solid so resist damage well and maintain a rigid and symmetrical shape.', 'Ficus bonsai tree produce glossy, waxy leaves which are long lasting. They can feature aerial roots from the trunk and branches. It also lends itself to formal upright, slanting, semi-cascade, twin-trunk, triple-truck and clasped to rock.', 'This stunning palm has fan-shaped leaves. To encourage growth. Allow to dry out between watering', 'hapis excelsa demands soil that is constantly moist, but never soggy. Do not permit standing water to collect, as it will rot the root system.', 'The flamingo flower is a lover of light - but not direct sunlight.', 'Growing guzmania bromeliads is simple and their unique growth habit and flower bracts will add interest to the home year round.', 'Oncidiums are popular indoor and florist orchids for a very good reason, are an excellent choice for beginner orchid growers.', 'Phalaenopsis Orchid are some of the most stunning indoor plants. ', 'Once the orchid soil becomes dry to the touch, water thoroughly. Avoid allowing water to keep the soil soaked; you want it to drain away easily.', 'With the graceful common name “peace lily”, Spathiphyllum is an easy care, low light houseplant.', 'Strelitzia reginae, commonly known as the crane flower or bird of paradise, is a species of flowering plant indigenous to South Africa.', 'This plant variety does best in indirect light or moderate shade.'];


var outDoor = ['Adonidia Merrillii', 'BismarckiaNobilis', 'CarpentariaPalmTree', 'CocosNucifera', 'CoperniciAalba', 'CycasRevoluta', 'VeitchiaMerrillii', 'washingtoniarobusta', 'Alternanthera', 'AmaranthusCaudatus', 'FicusCarica-FigTree', 'GerberaMix-Seasonal', 'HelianthusSunflower Plant', 'poinsettia', 'Punica Granatum- Pomegranate', 'RhoeoDiscolor', 'BougainvilleaGlabraNanaRed', 'BougainvilleaMix', 'Bougainvillea-orange', 'BougainvilleaWhite', 'Jacquemontia', 'JasminSambac',
  'Mandevilla', 'Tristelateia'];

var outDoorDiscreption = ['is an evergreen, single-stemmed palm tree that grows about 6 metres tall.', 's a stunning, large palm widely cultivated in the tropics for its beautiful silver-blue foliage although a green leaf variety exists.', 'usually has 10-12 pinnate, or feather-like, type leaves with 90-100 leaflets. They grow from a smooth green crownshaft up to 6 feet long.', 'is a large palm, growing up to 30 m (100 ft) tall, with pinnate leaves 4–6 m (13–20 ft) long, and pinnae 60–90 cm (2–3 ft) long', 'as a tough, grey, cylindrical trunk that retains the spiky bases of old leaves for several years when the palm is young.', ' is a low growing single trucked cycad, topped with whorled feathery leaves.', 'The Manila Palm is a small, showy palm, with beautiful cascading leaves and large bunches of striking red fruit at Christmas time', 'is a tall evergreen palm with a columnar trunk topped with a relatively small rounded crown of beautifully shaped, fan-like, rich green leaves, up to 3-5 ft. ', 'A strong border, bedding or edging plant. Also used in containers, planters, window boxes and hanging baskets.', 'Amaranthus caudatus is a species of annual flowering plant. It goes by common names such as love-lies-bleeding', 'Common fig Ficus carica is an Asian species of flowering plant in the mulberry family, known as the common fig.', 'These pretty Gerbera come in a multitude of colours and make a cheerful splash of colour on a windowsill.', 'Helianthus annuus, the common sunflower, is a large annual forb of the genus Helianthus grown as a crop for its edible oil and edible fruits.', 'The poinsettia is a commercially important plant species of the diverse spurge family.', 'The pomegranate is a fruit-bearing deciduous shrub in the family Lythraceae, subfamily Punicoideae, that grows between 5 and 10 m tall.', 'Rhoeo, including Rhoeo discolor and Rhoeo spathacea, is a plant of many names. Used to create a tropical effect and for its foliage colour.', 'Bougainvillea is a genus of thorny ornamental vines, bushes, and trees with flower-like spring leaves near its flowers.', 'Bougainvillea is a genus of thorny ornamental vines, bushes, and trees with flower-like spring leaves near its flowers.', ' Bougainvillea can be used as a houseplant or hanging basket in cooler climates.', ' Bougainvillea can be used as a houseplant or hanging basket in cooler climates.', 'Jacquemontia is a plant genus in the morning glory family Convolvulaceae.', 'The Arabian Jasmine is evergreen, scented flowers, twining climber or scrambler with angular stems and bushy growth. ', 'Mandevilla is used for its flower display and tropical flowering. Used both as a vine and as a small shrub.', 'Tristellateia is used for its strong and prolific flower display which helps provide a tropical effect throughout the year.'];

var arrayOfPlants = [];
var plantsPrices = [];

function randomizePrices() {
  for (let i = 0; i < 48; i++) {
    plantsPrices.push(Math.floor(Math.random() * (40 - 5) + 5));
  }
  // if(localStorage > 0) {
  //   localStorage.getItem('prices');
  // } else {
  //   localStorage.setItem('prices', plantsPrices);
  // }
}
randomizePrices();


function InDoorPlant(name, discreption, price) {
  this.name = name;
  this.discreption = discreption;
  this.price = price;
  this.categories = 'indoor';
  while (indoorCounter < 8) {
    this.img = 'img/InDoor/cactus&Succulents/' + name + '.jpg';
    this.type = 'cactus&Succulents';
    break;
  }
  while (indoorCounter >= 8 && indoorCounter <= 15) {
    this.img = 'img/InDoor/EvergreenPlants/' + name + '.jpg';
    this.type = 'EvergreenPlants';
    break;
  }
  while (indoorCounter >= 16 && indoorCounter < 24) {
    this.img = 'img/InDoor/FloweringPlants/' + name + '.jpg';
    this.type = 'FloweringPlants';
    break;
  }
  indoorCounter++;
}

function OutDoorPlant(name, discreption, price) {
  this.name = name;
  this.discreption = discreption;
  this.price = price;
  this.categories = 'outdoor';
  while (outdoorCounter < 8) {
    this.img = 'img/OutDoor/Palms/' + name + '.jpg';
    this.type = 'Palms';
    break;
  }
  while (outdoorCounter >= 8 && outdoorCounter <= 15) {
    this.img = 'img/OutDoor/Seasonals & Ground Covers/' + name + '.jpg';
    this.type = 'Seasonals & Ground Covers';
    break;
  }
  while (outdoorCounter >= 16 && outdoorCounter < 24) {
    this.img = 'img/OutDoor/Vines & Climbers/' + name + '.jpg';
    this.type = 'Vines & Climbers';
    break;
  }
  outdoorCounter++;
}

function creatingIndoorObjects(inDoorPlants, Discreption, price) {
  for (let i = 0; i < inDoorPlants.length; i++) {
    var temp = new InDoorPlant(inDoorPlants[i], Discreption[i], price[i]);
    arrayOfPlants.push(temp);
  }
}

function creatingOutdoorObjects(outDoorPlants, Discreption, price) {
  for (let i = 0; i < outDoorPlants.length; i++) {
    var temp = new OutDoorPlant(outDoorPlants[i], Discreption[i], price[i]);
    arrayOfPlants.push(temp);
  }
}


//Creating the objects for the plants
creatingIndoorObjects(inDoor, inDoorDiscreption, plantsPrices);
creatingOutdoorObjects(outDoor, outDoorDiscreption, plantsPrices);
console.log(arrayOfPlants);


// shop.js
var cartItems = [];
var table = document.getElementById('item-table');
var indoor = document.getElementById('indoor');
var tableRowOne = document.createElement('tr');
var tableRowTwo = document.createElement('tr');


indoor.addEventListener('change', function (event) {
  // event.preventDefault();
  tableRowOne.innerHTML = '';
  tableRowTwo.innerHTML = '';
  table.appendChild(tableRowOne);
  table.appendChild(tableRowTwo);
  var type = event.target.value;
  var arrayOfType = [];
  for (let index = 0; index < arrayOfPlants.length; index++) {
    if (arrayOfPlants[index].type === type) {
      arrayOfType.push(arrayOfPlants[index]);
    }
  }
  for (let index = 0; index < arrayOfType.length; index++) {
    var tableItem = document.createElement('td');
    var imgTag = document.createElement('img');
    var par = document.createElement('p');
    var price = document.createElement('span');
    var div = document.createElement('div');
    var button = document.createElement('button');
    if (index < 4) {
      button.setAttribute('class', arrayOfType[index].name);
      button.addEventListener('click', cart);
      tableRowOne.appendChild(tableItem);
      imgTag.setAttribute('src', '/' + arrayOfType[index].img);
      tableItem.appendChild(imgTag);
      div.appendChild(par);
      div.appendChild(price);
      tableItem.appendChild(div);
      par.textContent = `${arrayOfType[index].name}`;
      price.textContent = `${arrayOfType[index].price} JD`;
      tableItem.appendChild(button);
      button.textContent = 'Add to cart';
    } else {
      button.setAttribute('class', arrayOfType[index].name);
      button.addEventListener('click', cart);
      tableRowTwo.appendChild(tableItem);
      imgTag.setAttribute('src', '/' + arrayOfType[index].img);
      tableItem.appendChild(imgTag);
      div.appendChild(par);
      div.appendChild(price);
      tableItem.appendChild(div);
      par.textContent = `${arrayOfType[index].name}`;
      price.textContent = `${arrayOfType[index].price} JD`;
      tableItem.appendChild(button);
      button.textContent = 'Add to cart';
    }

  }
});
var outdoor = document.getElementById('outdoor');


outdoor.addEventListener('change', function (event) {
  // event.preventDefault();
  tableRowOne.innerHTML = '';
  tableRowTwo.innerHTML = '';
  table.appendChild(tableRowOne);
  table.appendChild(tableRowTwo);
  var type = event.target.value;
  var arrayOfType = [];
  for (let index = 0; index < arrayOfPlants.length; index++) {
    if (arrayOfPlants[index].type === type) {
      arrayOfType.push(arrayOfPlants[index]);
    }
  }
  for (let index = 0; index < arrayOfType.length; index++) {
    var tableItem = document.createElement('td');
    var imgTag = document.createElement('img');
    var par = document.createElement('p');
    var price = document.createElement('span');

    var div = document.createElement('div');

    var button = document.createElement('button');
    if (index < 4) {
      button.setAttribute('class', arrayOfType[index].name);
      button.addEventListener('click', cart);
      tableRowOne.appendChild(tableItem);
      imgTag.setAttribute('src', '/' + arrayOfType[index].img);
      tableItem.appendChild(imgTag);
      div.appendChild(par);
      div.appendChild(price);
      tableItem.appendChild(div);
      par.textContent = `${arrayOfType[index].name} `;
      price.textContent = `${arrayOfType[index].price} JD`;
      

      tableItem.appendChild(button);
      button.textContent = 'Add to cart';
    } else {
      button.setAttribute('class', arrayOfType[index].name);
      button.addEventListener('click', cart);
      tableRowTwo.appendChild(tableItem);
      imgTag.setAttribute('src', '/' + arrayOfType[index].img);
      tableItem.appendChild(imgTag);
      div.appendChild(par);
      div.appendChild(price);
      tableItem.appendChild(div);

      par.textContent = `${arrayOfType[index].name}  `;
      price.textContent = `${arrayOfType[index].price} JD`;


      tableItem.appendChild(button);
      button.textContent = 'Add to cart';
    }

  }
});





function cart(event) {
  // cartItems.push(event.target.classList.value);
  for (let index = 0; index < arrayOfPlants.length; index++) {
    if (arrayOfPlants[index].name === event.target.classList.value) {
      cartItems.push(arrayOfPlants[index]);
      var disableButton = document.getElementsByClassName(arrayOfPlants[index].name)[0];
      disableButton.setAttribute('disabled', true);
      disableButton.textContent = 'Added to the Cart';
    }
  }
  storeData();
}

function storeData() {
  localStorage.setItem('items', JSON.stringify(cartItems));
}



