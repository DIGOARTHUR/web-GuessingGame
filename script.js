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


var column01 = document.querySelector("#column01");
var column02 = document.querySelector("#column02");
var column03 = document.querySelector("#column03");
var countCards = 0;
var positionTop = 0;
var toggleColumn = 1

function toPutCardsOnTheTable(array) {

    setTimeout(() => {
        if (countCards < 21) {
            switch (toggleColumn) {
                case 1:
                    console.log(toggleColumn)
                    column01.innerHTML += `<img class='imgCard' style="position: absolute; top:${positionTop}px" src="./cards/${array[countCards]}"/>`
                    toggleColumn += 1;
                    break;
                case 2:
                    column02.innerHTML += `<img class='imgCard2' style="position: absolute; top:${positionTop}px" src="./cards/${array[countCards]}"/>`
                    toggleColumn += 1;
                    break;
                case 3:
                    column03.innerHTML += `<img class='imgCard3' style="position: absolute; top:${positionTop}px" src="./cards/${array[countCards]}"/>`
                    toggleColumn = 1
                    positionTop += 50
                    break;
            }
        }
        countCards++;
        if (countCards < deckCard.length) {
            toPutCardsOnTheTable(array);
        } else {
            countCards = 0
            positionTop = 0;
        }
    }, 20)


}



let cont = 0

function result() {

    console.log(deckCard[10])

}


toPutCardsOnTheTable(deckCard);
let newDeckCard = []
const file1 = [20, 17, 14, 11, 8, 5, 2, 18, 15, 12, 9, 6, 3, 0, 19, 16, 13, 10, 7, 4, 1]

const file2 = [20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1, 18, 15, 12, 9, 6, 3, 0]

const file3 = [18, 15, 12, 9, 6, 3, 0, 20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1,]


var contador = 0;
function myFunction(op) {

    if (contador == 3) {
        console.log(deckCard[10])
    }
    console.log(op)
    switch (op) {
        case 1: for (let index in deckCard) {

            newDeckCard.push(deckCard[file1[index]])


        }
            deckCard = newDeckCard
            newDeckCard = []

            clearTable()
            result()
            contador++;
            break

        case 2: for (let index in deckCard) {

            newDeckCard.push(deckCard[file2[index]])

        }
            deckCard = newDeckCard
            newDeckCard = []
            clearTable()
            result()
            contador++;
            break
        case 3: for (let index in deckCard) {

            newDeckCard.push(deckCard[file3[index]])

        }

            deckCard = newDeckCard
            newDeckCard = []

            clearTable()
            contador++;
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
    toPutCardsOnTheTable(deckCard);
}





