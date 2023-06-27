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


var $leftColumn = document.querySelector("#leftColumn");
var $middleColumn = document.querySelector("#middleColumn");
var $rightColumn = document.querySelector("#rightColumn");
var countCards = 0;
var positionTop = 0;
var toggleColumn = 1;
var countShuffle = 0;



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
        countShuffle+=1;
        break;
        case 2: for (let index in deckCard) {
            
            newDeckCard.push(deckCard[shuffleForSelect_middletColumn[index]])

        }
        countShuffle+=1;
        break;
        case 3: for (let index in deckCard) {
            
            newDeckCard.push(deckCard[shuffleForSelect_rightColumn[index]])
        }
        countShuffle+=1;
        break;
    }

    
       
    if(countShuffle<3){
        console.log(countShuffle)
        deckCard = newDeckCard
        clearTable();
        toPutCardsOnTheTable(deckCard);
    }else{
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

