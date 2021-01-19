var leftPlantImg = document.getElementById('left_plant_img');
var middlePlantImg = document.getElementById('middle_plant_img');
var rightPlantImg = document.getElementById('right_plant_img');

var leftPlantText = document.getElementById('left_plant_h2');
var middlePlantText = document.getElementById('middle_plant_h2');
var rightPlantText = document.getElementById('right_plant_h2');


// here we should work..
//================================
// function renderImgs(leftPlant,middlePlant,rightPlant){
//     // leftPlantImg.setAttribute('src',);
//     // middlePlantImg.setAttribute('src',//src of the imgs);
//     // rightPlantImg.setAttribute('src',);

//     leftPlantText.textContent= //array of names
//     middlePlantText.textContent= //array of names
//     rightPlantText.textContent= //array of names
// }


shownImgArray=[];
function pickAnImg (){
    do{
    var leftPlant= math.round(math.random()*(48-1));
    var middlePlant= math.round(math.random()*(48-1));
    var rightPlant= math.round(math.random()*(48-1));
    }while (leftPlant===rightPlant||middlePlant===rightPlant||leftPlant===middlePlant||checkAvailability(leftPlant)|| checkAvailability(middlePlant)||checkAvailability(rightPlant));

    shownImgArray=[];

    shownImgArray.push(rightPlant,leftPlant,middlePlant);

    console.log(shownImgArray);
    renderImgs(leftPlant,middlePlant,rightPlant);

}

function checkAvailability(selectedNameImg){
    for (var index = 0; index < array.length; index++) {
        if (shownImgArray[index]===selectedNameImg) {
            return true;
            
        }
        
    }
    return false;
}

pickAnImg();