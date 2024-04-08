// clicking the presaved 4 bed button
var buttonToBeClicked = document.getElementById("bed4");
buttonToBeClicked.click();
// clicking the presaved 5+ bath button
var buttonToBeClicked = document.getElementById("bath5");
buttonToBeClicked.click();

var buttonToBeClicked = document.getElementById("houseBox");
buttonToBeClicked.click();

function bedSelected(bedButton) {
        if (bedButton.classList.contains('clicked')) {
                // Button is already clicked, so unclick it
                bedButton.classList.remove('clicked');
        } else {
                // Button is not clicked, so click it
                bedButton.classList.add('clicked');
        }
}


var active2 = document.getElementById("active2");

function delete0() {
        var listing = document.getElementById("listing0");
        listing.classList.add("hide");

        var button = document.getElementById("dButton0");
        button.classList.add('hide');
}

function delete1() {
        var listing = document.getElementById("listing1");
        listing.classList.toggle("hide");

        var button = document.getElementById("dButton1");
        button.classList.add('hide');
}