
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



