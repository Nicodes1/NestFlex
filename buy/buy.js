
let popup = document.getElementById("popup");
function openFilter(){
    popup.classList.add("open-popup");
}
function closeFilter(){
    popup.classList.remove("open-popup")
}
function changeListings(){
    popup.classList.remove("open-popup")
}

function bedSelected(bedButton){
    bedButton.classList.add('clicked')
}

// let filterPop() = document.getElementsByClassName('filterPop')
// function reset(){

// }