let deckCard = [
    "10_of_clubs.svg",
    "10_of_diamonds.svg",
    "10_of_hearts.svg",
    "10_of_spades.svg",
    "2_of_clubs.svg",
    "2_of_diamonds.svg",
    "2_of_hearts.svg",
    "2_of_spades.svg",
    "3_of_clubs.svg",
    "3_of_diamonds.svg",
    "3_of_hearts.svg",
    "3_of_spades.svg",
    "4_of_clubs.svg",
    "4_of_diamonds.svg",
    "4_of_hearts.svg",
    "4_of_spades.svg",
    "5_of_clubs.svg",
    "5_of_diamonds.svg",
    "5_of_hearts.svg",
    "5_of_spades.svg",
    "6_of_clubs.svg",
    "6_of_diamonds.svg",
    "6_of_hearts.svg",
    "6_of_spades.svg",
    "7_of_clubs.svg",
    "7_of_diamonds.svg",
    "7_of_hearts.svg",
    "7_of_spades.svg",
    "8_of_clubs.svg",
    "8_of_diamonds.svg",
    "8_of_hearts.svg",
    "8_of_spades.svg",
    "9_of_clubs.svg",
    "9_of_diamonds.svg",
    "9_of_hearts.svg",
    "9_of_spades.svg",
    "ace_of_clubs.svg",
    "ace_of_diamonds.svg",
    "ace_of_hearts.svg",
    "ace_of_spades.svg",
    "jack_of_clubs.svg",
    "jack_of_diamonds.svg",
    "jack_of_hearts.svg",
    "jack_of_spades.svg",
    "king_of_clubs.svg",
    "king_of_diamonds.svg",
    "king_of_hearts.svg",
    "king_of_spades.svg",
    "queen_of_clubs.svg",
    "queen_of_diamonds.svg",
    "queen_of_hearts.svg",
    "queen_of_spades.svg",
];


var $leftColumn = document.querySelector("#leftColumn");
var $middleColumn = document.querySelector("#middleColumn");
var $rightColumn = document.querySelector("#rightColumn");
var countCards = 0;
var positionTop = 0;
var toggleColumn = 1;
var countShuffle = 0;

startRandomCards(deckCard)

function startRandomCards(deckCard) {
    for (let index = deckCard.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [deckCard[index], deckCard[randomIndex]] = [deckCard[randomIndex], deckCard[index]];
    }
    deckCard = deckCard;
}



toPutCardsOnTheTable(deckCard);

function toPutCardsOnTheTable(deckCard) {

    setTimeout(() => {
        if (countCards < 21) {
            switch (toggleColumn) {
                case 1:
                    console.log(toggleColumn)
                    $leftColumn.innerHTML += `<img class='imgCard' style="position: absolute; top:${positionTop}px" src="./cards/${deckCard[countCards]}"/>`
                    toggleColumn += 1;
                    break;
                case 2:
                    $middleColumn.innerHTML += `<img class='imgCard' style="position: absolute; top:${positionTop}px" src="./cards/${deckCard[countCards]}"/>`
                    toggleColumn += 1;
                    break;
                case 3:
                    $rightColumn.innerHTML += `<img class='imgCard' style="position: absolute; top:${positionTop}px" src="./cards/${deckCard[countCards]}"/>`
                    toggleColumn = 1
                    positionTop += 50
                    break;
            }
        }
        countCards++;
        if (countCards < deckCard.length) {
            toPutCardsOnTheTable(deckCard);
        } else {
            countCards = 0;
            positionTop = 0;
        }
    }, 20)


}



function selectColumn(column) {
    shuffleCards(column)

}


function shuffleCards(column) {
    let newDeckCard = []

    const shuffleForSelect_leftColumn = [20, 17, 14, 11, 8, 5, 2, 18, 15, 12, 9, 6, 3, 0, 19, 16, 13, 10, 7, 4, 1]
    const shuffleForSelect_middletColumn = [20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1, 18, 15, 12, 9, 6, 3, 0]
    const shuffleForSelect_rightColumn = [18, 15, 12, 9, 6, 3, 0, 20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1,]
    switch (column) {
        case 1: for (let index in deckCard) {

            newDeckCard.push(deckCard[shuffleForSelect_leftColumn[index]])
        }
            countShuffle += 1;
            break;
        case 2: for (let index in deckCard) {

            newDeckCard.push(deckCard[shuffleForSelect_middletColumn[index]])

        }
            countShuffle += 1;
            break;
        case 3: for (let index in deckCard) {

            newDeckCard.push(deckCard[shuffleForSelect_rightColumn[index]])
        }
            countShuffle += 1;
            break;
    }


    if (countShuffle < 3) {
        console.log(countShuffle)
        deckCard = newDeckCard
        clearTable();
        toPutCardsOnTheTable(deckCard);
    } else {
        deckCard = newDeckCard
        console.log(countShuffle)
        clearTable();
        result();
    }

}


function clearTable() {

    var $imgCard = document.querySelectorAll(".imgCard");
    $imgCard.forEach((item) => {
        item.remove()
    })

}



function result() {

    console.log(deckCard[10])

}

