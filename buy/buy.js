
let popup = document.getElementById("popup");
function openFilter(){
    popup.classList.add("open-popup");
}
function closeFilter(){
    popup.classList.remove("open-popup")
}
function changeListings(){
    popup.classList.remove("open-popup")
    let targetDivs = document.getElementsByClassName("hideable");
    for (let i = 0; i < targetDivs.length; i++) {
        targetDivs[i].classList.toggle("hide");
    }
}

function bedSelected(bedButton){
    bedButton.classList.add('clicked')
    let spanElement = document.getElementById('resultCount');
        spanElement.textContent = '4';
}
let buttons = document.getElementsByClassName('bedButton');
function reset() {
    for (let i = 0; i < buttons.length; i++) {
        console.log("hello")
        buttons[i].classList.remove('clicked');
    }
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function savedFilter(){
    // inputting the pre saved amount of min price
    var inputField = document.getElementById("priceMin");
    var textToFill = "900,000";
    inputField.value = textToFill;

    // inputting the pre saved amount of max price
    var inputField = document.getElementById("priceMax");
    var textToFill = "4,000,000";
    inputField.value = textToFill;

    // inputting the pre saved amount of min square feet
    var inputField = document.getElementById("squareMin");
    var textToFill = "1,000";
    inputField.value = textToFill;

    // inputting the pre saved amount of max square feet
    var inputField = document.getElementById("squareMax");
    var textToFill = "6,000";
    inputField.value = textToFill;

    // clicking the presaved 4 bed button
    var buttonToBeClicked = document.getElementById("bed4");
    buttonToBeClicked.click();
    // clicking the presaved 5+ bath button
    var buttonToBeClicked = document.getElementById("bath5");
    buttonToBeClicked.click();

    var buttonToBeClicked = document.getElementById("houseBox");
    buttonToBeClicked.click();
}



