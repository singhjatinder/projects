function register(){
    window.location.href = '/register';
}
function addUtensil(){
    let j;
    for (let i=2; i<1000; i++){
        if(!document.getElementById("utensilName"+i)){
            j=i;
            break;
        }
    }
    document.getElementById("addUtensil").innerHTML +=
        '<div class="utensil mb-3">\n' +
        '    <div class="d-flex">\n' +
        '        <label class="col-2"  for="utensilName'+j+'">Utensil '+j+': </label>\n' +
        '        <input class="form-control" id="utensilName'+j+'" name="utensilName" type="text" placeholder="Enter Utensil Name">\n<div class="col-1"></div>' +
        '        <label class="col-1" for="utensilQuantity'+j+'">Quantity: </label>\n' +
        '        <input class="form-control" id="utensilQuantity'+j+'" name="utensilQuantity" type="number" placeholder="Enter Quantity Here">\n' +
        '    </div>\n' +
        '</div>';
}

function addIngredients(){
    let j;
    for (let i=1; i<1000; i++){
        if(!document.getElementById("ingredientsName" + i)){
            j=i;
            break;
        }
    }
    document.getElementById("addIngredients").innerHTML +=
        '<div class="section mb-3">\n' +
        '    <div class="d-flex">\n' +
        '        <label class="col-2" for="ingredientsName'+j+'">Ingredient '+j+': </label>\n' +
        '        <input class="form-control" id="ingredientsName'+j+'" name="ingredientsName" type="text" placeholder="Enter Ingredients Name">\n<div class="col-1"></div>' +
        '        <label class="col-1" for="ingredientsQuantity'+j+'">Quantity: </label>\n' +
        '        <input class="form-control" id="ingredientsQuantity'+j+'" name="ingredientsQuantity" type="number" placeholder="Enter Quantity Here">\n' +
        '    </div>\n' +
        '</div>';
}

function addSteps(){
    let j;
    for (let i=1; i<1000; i++){
        if(!document.getElementById("step" + i)){
            j=i;
            break;
        }
    }
    document.getElementById("addSteps").innerHTML += '<div class="section mb-3">\n' +
        '    <div class="d-flex">\n' +
        '        <label class="col-1"  for="step'+j+'">Step '+j+': </label>\n' +
        '        <textarea class="form-control" id="step'+j+'" name="step" type="text" placeholder="Enter a Step"></textarea>\n' +
        // '        <label class="col-1"  for="picture'+j+'">Picture</label>\n' +
        // '        <input class="form-control" id="picture'+j+'" name="picture'+j+'" accept="image/*" type="file">\n' +
        '    </div>\n' +
        '</div>';
}
