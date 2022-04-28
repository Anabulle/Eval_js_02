let number = Math.floor(Math.random() * 1001);
let compte = 25;
let essai = document.querySelector('#count');
let test = document.querySelector('#test');
let error = document.querySelector('#error');
let enterNumber = document.getElementById('enterNumber');

console.log(number);
test.addEventListener("click", function() {
    testNumber();
});
enterNumber.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        test.click();
    }
});

function testNumber() {
    enterNumber = document.getElementById('enterNumber').value;
    if (enterNumber == "" || enterNumber == null || isNaN(enterNumber)) {
        error.style.display = "block";
        error.textContent = "erreur entrez une donnée valide dans le champ";
        error.style.color = '#480473';
        setTimeout(function() {
            error.style.display = "none";
        }, 5000);

    } else if (compte == 0) {
        document.getElementById('reponse').textContent = "vous avez perdu :(";
        compte = 26;
        number = Math.floor(Math.random() * 1001);
    } else if (enterNumber > number) {
        document.getElementById('reponse').textContent = "c'est moins";
        document.getElementById('reponse').style.color = '#480473';
        compte--;
        essai.textContent = compte;
    } else if (enterNumber < number) {
        document.getElementById('reponse').textContent = "c'est plus";
        document.getElementById('reponse').style.color = ' #480473';
        compte--;
        essai.textContent = compte;
    } else {
        compte--;
        document.getElementById('reponse').textContent = "félicitation vous avez trouvé! en " + (25 - compte) + " essais cliquez sur tester pour recommencer";
        document.getElementById('reponse').style.color = '#6404ae';
        essai.textContent = compte;
        compte = 26;
        number = Math.floor(Math.random() * 1001);
    }
}