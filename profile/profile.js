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
                // Reset the result count or perform any other desired action
                let spanElement = document.getElementById('resultCount');
                spanElement.textContent = ''; // Resetting the result count
        } else {
                // Button is not clicked, so click it
                bedButton.classList.add('clicked');
                // Set the result count or perform any other desired action
                let spanElement = document.getElementById('resultCount');
                spanElement.textContent = '4'; // Setting the result count
        }
}