TRs = [];
cardSuit = ['clubs', 'spades', 'diamonds', 'hearts'];
faceCards = ['jack', 'queen', 'king']
counter = 2;
counterOfCardSuit = 0;
width = 100;
margin = 3;
height = 150;
padding = 5;
wrapperPadding = 10;
wrapperWidth = 900;
cardsInOneLine = Math.floor((wrapperWidth - wrapperPadding * 2) / (width + 4 + margin * 2));
numberOfLines = Math.ceil(52 / cardsInOneLine);
for (i = 0; i < numberOfLines; i++) {
    TDs = [];
    cardsInCurrentLine = !(52 % cardsInOneLine) ? cardsInOneLine : i !== numberOfLines - 1 ? cardsInOneLine : 52 % cardsInOneLine
    for (j = 0; j < cardsInCurrentLine; j++){
        data = [];
        if (counter <= 10) {
            data.push(`<div class="left-top">${counter} <img src="images/${cardSuit[counterOfCardSuit]}.svg" alt="${cardSuit[counterOfCardSuit]}" width="10" height="10"></div>`);
            data.push(`<div class="right-bottom">${counter} <img src="images/${cardSuit[counterOfCardSuit]}.svg" alt="${cardSuit[counterOfCardSuit]}" width="10" height="10"></div>`);
            counterOfCardSuit++;
            if (counterOfCardSuit === 4) {
                counterOfCardSuit = 0;
                counter++;
            }
        } else if (counter <= 13){
            data.push(`<div class="left-top">${faceCards[counter - 11][0].toUpperCase()} <img src="images/${cardSuit[counterOfCardSuit]}.svg" alt="${cardSuit[counterOfCardSuit]}" width="10" height="10"></div>`);
            data.push(`<div class="mid"><img src="images/${faceCards[counter - 11]}.svg" alt="${faceCards[counter - 11]}" width="60" height="60"></div>`);
            data.push(`<div class="right-bottom">${faceCards[counter - 11][0].toUpperCase()} <img src="images/${cardSuit[counterOfCardSuit]}.svg" alt="${cardSuit[counterOfCardSuit]}" width="10" height="10"></div>`);
            counterOfCardSuit++;
            if (counterOfCardSuit === 4) {
                counterOfCardSuit = 0;
                counter++;
            }
        } else {
            data.push(`<div class="left-top">T<img src="images/${cardSuit[counterOfCardSuit]}.svg" alt="${cardSuit[counterOfCardSuit]}" width="10" height="10"></div>`);
            data.push(`<div class="mid"><img src="images/${cardSuit[counterOfCardSuit]}.svg" alt="${cardSuit[counterOfCardSuit]}" width="60" height="60"></div>`);
            data.push(`<div class="right-bottom">T<img src="images/${cardSuit[counterOfCardSuit]}.svg" alt="${cardSuit[counterOfCardSuit]}" width="10" height="10"></div>`);
            counterOfCardSuit++;
            if (counterOfCardSuit === 4) {
                counterOfCardSuit = 0;
                counter++;
            }
        }


        TDs.push(`<td><div class="card">${data.join('')}</div></td>`);
    }
    TRs.push(`<tr>${TDs.join('')}</tr>`);
}
document.write(`<style>.card{width: ${width}px; height: ${height}px; margin: ${margin}px; padding: ${padding}px;}
    .wrapper{width: ${wrapperWidth}px; padding: ${wrapperPadding}px;} .left-top {left: ${padding}px; top: ${padding}px;}
    .right-bottom {right: ${padding}px; bottom: ${padding}px; }</style>`)
document.write(`<div class="wrapper"><table class="cards">${TRs.join('')}</table></div>`);