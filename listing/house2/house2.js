let popup = document.getElementById("popup");
function openFilter(){
    popup.classList.add("open-popup");
}
function closeFilter(){
    popup.classList.remove("open-popup")
}
let confirm = document.getElementById("confirm");
function sent(){
    let confirm = document.getElementById("confirm");
    confirm.classList.add("open-confirm");
}

function yes(){
    let confirm = document.getElementById("confirm");
    popup.classList.remove("open-popup");
    confirm.classList.remove("open-confirm");
    let confirmed = document.getElementById("confirmed");
    confirmed.classList.add("open-confirmed");
}
function no(){
    let confirm = document.getElementById("confirm");
    confirm.classList.remove("open-confirm");
}
function closeConfirmed(){
    let confirmed = document.getElementById("confirmed");
    confirmed.classList.remove("open-confirmed")
}

function toggleHeart() {
    var hiddenElement = document.getElementById("filledheart");
    var hideElement = document.getElementById("emptyheart");

    if (hideElement.style.display === "block") {
        hideElement.style.display = "none";
    } else {
        hideElement.style.display = "block";
  }

    if (hiddenElement.style.display === "none") {
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
  }
  }