var secretWord = words[Math.floor(Math.random() * words.length)];
var secretLetters = secretWord.split("");
var attempts = 0;
var firstletter = 0;
document.getElementById('letter0.' + attempts).value = secretWord.charAt(0);
var letterCount = 5;

function MaakRood() {
    var Title = document.getElementById('red').style.color = 'red';
}

function AddLetters() {
    var woord = document.getElementById('woord_0').value;
    for (i = 0; i < letterCount; i++) {
        var elementid = "letter" + i + "." + attempts;
        console.log("getting element with id: " + elementid);

        document.getElementById(elementid).value = woord.charAt(i);
    };
}


function Check() {
    console.log('entering check');
    AddLetters();
    // get the HTML elements
    var letters = [];
    var search;

    for (i = 0; i < 5; i++) {
        var userInput = document.getElementById("woord_0").value;
        var inputArray = new Array(userInput);
        inputArray = userInput.split(''); // voorbeeld ["p", "i", "z", "z", "a"]

        if (userInput.length == 5) {
            for (i = 0; i < 5; i++) {
                search = 'letter' + i + '.' + attempts;
                console.log('looking for element with id = ' + search);
                letters[i] = document.getElementById(search).value;
                if (document.getElementById("woord_0").value == secretLetters) {
                    document.getElementById("Game").innerHTML = "<h1 class='YouWon'>You won! <br/>" + secretLetters + " was correct!</h1>";
                }
                if (attempts == 5) {
                    document.getElementById("Game").innerHTML = "<h1 class='GameOver'> BIEEEMMMM you're ded!</h1><br/>";
                }
            }
        } else {
            alert("Please enter at least 5 characters!");
        }
    }

    for (i = 0; i < 5; i++) {
        var id = 'letterCell.' + i + '.' + attempts;
        var selectedElement = document.getElementById(id);

        if (letters[i] == secretLetters[i]) {
            selectedElement.style.background = "red";
        } else if (inputArray.indexOf(secretLetters[i]) > -1) {
            selectedElement.style.backgroundColor = "yellow";
        }
        console.log("Checking letters: " + letters);
        console.log("Checking userInput: " + userInput);
        console.log("Checking inputArray: " + inputArray);
        console.log("Checking inputArray: ");
    }
    attempts++;
    document.getElementById('letter0.' + attempts).value = secretWord.charAt(0);
}


function generateGrid() {
    var cols = 6;

    document.getElementById('value5').onclick = function click() {

    }

    document.getElementById('value6').onclick = function click() {
        var table = document.getElementById("LingoTable");
        table.innerHTML = "";
        var secretWord6 = words6[Math.floor(Math.random() * words6.length)];
        var secretLetters = secretWord6.split("");

        for (i = 0; i < cols; i++) {
            var row = table.insertRow(-1);
            for (var c = 0; c < (cols); c++) {
                var cell1 = row.insertCell(-1);
                cell1.innerHTML = "<input type ='text' id='letter" +
                    c + "." +
                    attempts + "'disabled>";
                document.getElementById('letter0.' + firstletter).value = secretWord6.charAt(0);
                console.log(secretWord6);
            }
            attempts++;
        }
    }

    document.getElementById('value7').onclick = function click() {
        cols = 7;
        console.log("Checking cols: " + cols);
        console.log("Checking table: " + table);
    }

    document.getElementById('value8').onclick = function click() {
        cols = 8;
        console.log("Checking cols: " + cols);
    }
}


console.log(secretWord);
console.log(secretLetters);