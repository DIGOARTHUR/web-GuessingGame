let deckCard = [
    "club_2.svg",
    "club_5.svg",
    "club_A.svg",
    "club_J.svg",
    "club_K.svg",
    "diamond_3.svg",
    "diamond_6.svg",
    "diamond_7.svg",
    "diamond_A.svg",
    "diamond_J.svg",
    "diamond_K.svg",
    "diamond_Q.svg",
    "heart_4.svg",
    "heart_6.svg",
    "heart_10.svg",
    "heart_A.svg",
    "heart_Q.svg",
    "spade_2.svg",
    "spade_5.svg",
    "spade_8.svg",
    "spade_A.svg",
];


let cardHTML = "";
const column01 = document.querySelector("#column01");
const column02 = document.querySelector("#column02");
const column03 = document.querySelector("#column03");
var i = 0;
var positionTop = 0;                  //  set your counter to 1
var positionTop2 = 0;
var positionTop3 = 0;

function myLoop(array) {

    //  create a loop function
    setTimeout(function () {   //  call a 3s setTimeout when the loop is called
        if (i < 7) {
            1
            column01.innerHTML += `<img class='imgCard' style="position: absolute; top:${positionTop += 50}px" src="./cards/${array[i]}"/>`
        }
        if (i >= 7 && i < 14) {
            column02.innerHTML += `<img class='imgCard2' style="position: absolute; top:${positionTop2 += 50}px" src="./cards/${array[i]}"/>`
        }
        if (i >= 14 && i < 21) {
            column03.innerHTML += `<img class='imgCard3' style="position: absolute; top:${positionTop3 += 50}px" src="./cards/${array[i]}"/>`
        }

        i++;                    //  increment the counter
        if (i < deckCard.length) {           //  if the counter < 10, call the loop function
            myLoop(array);             //  ..  again which will trigger another 
        } else {
            i = 0
            positionTop = 0;                  //  set your counter to 1
            positionTop2 = 0;
            positionTop3 = 0;
        }                     //  ..  setTimeout()
    }, 200)


}

let cont = 0

function result() {

    console.log(deckCard[10])

}


myLoop(deckCard);
let newDeckCard = []
const file1 = [20, 17, 14, 11, 8, 5, 2, 18, 15, 12, 9, 6, 3, 0, 19, 16, 13, 10, 7, 4, 1]

const file2 = [20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1, 18, 15, 12, 9, 6, 3, 0]

const file3 = [18, 15, 12, 9, 6, 3, 0, 20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1,]
function myFunction(op) {

    console.log(op)
    switch (op) {
        case 1: for (let index in deckCard) {

            newDeckCard.push(deckCard[file1[index]])


        }
            deckCard = newDeckCard
            newDeckCard = []

            clearTable()
            result()

            break

        case 2: for (let index in deckCard) {

            newDeckCard.push(deckCard[file2[index]])

        }
            deckCard = newDeckCard
            newDeckCard = []
            clearTable()
            result()
            break
        case 3: for (let index in deckCard) {

            newDeckCard.push(deckCard[file3[index]])

        }

            deckCard = newDeckCard
            newDeckCard = []

            clearTable()

            result();
            break
    }


}


function clearTable() {

    for (let i = 0; i < 7; i++) {
        var child = document.querySelector(".imgCard");

        column01.removeChild(child)

    }
    for (let i = 0; i < 7; i++) {
        var child = document.querySelector(".imgCard2");

        column02.removeChild(child)

    }
    for (let i = 0; i < 7; i++) {
        var child = document.querySelector(".imgCard3");

        column03.removeChild(child)

    }
    myLoop(deckCard);
}





