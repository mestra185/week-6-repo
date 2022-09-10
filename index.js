

class Deck{ 
    constructor (){
        this.suits = ['H', 'C', 'D', 'S'];
        this.ranks = [[2, '2'],[ 3, '3'],[ 4 , '4'],[ 5 , '5'],[ 6 , '6'],[7 , '7'],[ 8, '8'] ,[ 9 , '9'], [10 , '10'],[ 11, '11'],[ 12, 'Q'], [ 13 , 'K'],[ 14 , 'A']];
        this.deck = [];
        
    }

    create () {

        
        for (let suiteCounter = 0; suiteCounter < this.suits.length; suiteCounter++){
            for (let rankCounter = 0; rankCounter < this.ranks.length; rankCounter++){
                this.deck.push(this.ranks[rankCounter] + this.suits[suiteCounter])
            }

          
             
            
        }

      
        console.log(this.deck)
        

    }






    shuffleCards () {
        for(let card = 0; card < 52; card++){
            let tempCard = this.deck[card];
            let randomIndex = Math.floor(Math.random() * 52);
            this.deck[card] = this.deck[randomIndex];
            this.deck[randomIndex] = tempCard
        }
        return this.deck 
    }



    
}



class numOnCards{
    constructor(newArray){
        this.newArray = newArray

        
    }
    valToCards(){
        for (let i = 0 ; i < this.newArray.length; i++){
            switch (this.newArray[i]){
                case '3,3D':
                   this.newArray[i] = 3
        
                    break;
               case '7,7H':
                   this.newArray[i] = 7
                    break;
                case '14,AH':
                   this.newArray[i] = 14
                    break;
                case '6,6D':
                  this.newArray[i] = 6
                        break;
        
                case '2,2H':
                    this.newArray[i] = 2
                        break;
        
                case '6,6C':
                    this.newArray[i] = 6
                    break;
        
                case '5,5D':
                    this.newArray[i] = 5
                    break;
        
                case '10,10S':
                   this.newArray[i] = 10
                    break;
                case  '5,5S':
                    this.newArray[i] = 5
                    break;
        
                case '10,10D':
                    this.newArray[i] = 10
                    break;
        
                case '11,11H':
                    this.newArray[i] = 11
                    break;
        
                case '13,KH':
                    this.newArray[i] = 13
                    break;
        
                case   '4,4C':
                    this.newArray[i] = 4
                    break;
        
                case '12,QH':
                    this.newArray[i] = 12
                    break;
        
                case '13,KD':
                    this.newArray[i] = 13
                    break;
        
                case '4,4H':
                    this.newArray[i] = 4
                    break;
        
                case '7,7D':
                    this.newArray[i] = 7
                    break;
        
                case '11,11S':
                   this.newArray[i] = 11
                    break;
        
                case '13,KS':
                    this.newArray[i] = 13
                    break;
        
                case  '8,8S':
                    this.newArray[i] = 8
                    break;
                case  '9,9S':
                    this.newArray[i] = 9
                    break;
        
                case '3,3H':
                    this.newArray[i] = 3
                    break
                case '3,3C':
                    this.newArray[i] = 3
                    break
        
                case '7,7S':
                    this.newArray[i] = 7
                    break;
        
                case '13,KC':
                    this.newArray[i] = 13
                    break;
        
                case  '12,QC':
                    this.newArray[i] = 12
                    break;
        
                case  '14,AC':
                    this.newArray[i] = 14
                    break;
        
                case '12,QD':
                    this.newArray[i] = 12
                    break;
        
                case '6,6S':
                    this.newArray[i] = 6
                    break;
        
                case '10,10H':
                    this.newArray[i] = 10
                    break;
        
                case  '8,8C':
                    this.newArray[i] = 8
                    break;
        
                case '5,5H':
                    this.newArray[i] = 5
                    break;
        
                case '14,AD':
                    this.newArray[i] = 14
                    break;
        
                case  '7,7C':
                    this.newArray[i] = 7 
                    break;
        
                case '2,2D':
                    this.newArray[i] = 2
                    break;
        
                case '8,8D':
                    this.newArray[i] = 8
                    break;
        
                case   '4,4D':
                    this.newArray[i] = 4
                    break;
        
                case  '14,AS':
                    this.newArray[i] = 14
                    break;
        
                case '2,2S':
                    this.newArray[i] = 2
                    break;
        
                case '9,9H':
                    this.newArray[i] = 9
                    break;
        
                case '11,11C':
                    this.newArray[i] = 12
                    break;
        
                case   '3,3S':
                    this.newArray[i] = 3
                    break;
        
                case '9,9D':
                    this.newArray[i] = 9
                    break;
        
                case  '8,8H':
                    this.newArray[i] = 8
                    break;
        
                case  '12,QS':
                    this.newArray[i] =12
                    break;
        
                case '9,9C':
                    this.newArray[i] = 9
                    break;
                case  '4,4S':
                    this.newArray[i] = 4
                    break; 
        
                case   '11,11D':
                    this.newArray[i] = 11
                    break;
        
                case  '6,6H':
                    this.newArray[i] = 6
                    break;
        
                case '5,5C':
                    this.newArray[i] = 5
                    break;
        
                case '2,2C':
                    this.newArray[i] = 2
                    break;
                case '10,10C': 
                    this.newArray[i] = 10
                    break;
        
                
            }
            
            
        }
        return this.newArray

}


} 









let myDeck = new Deck();

myDeck.create();
myDeck.shuffleCards();

let shuffledDeck = myDeck.shuffleCards();
console.log(shuffledDeck);
let display = [...shuffledDeck]

let numberOnDeck = new numOnCards(shuffledDeck);
console.log(numberOnDeck)

let values = numberOnDeck.valToCards();




console.log(display)










class HandOutDeck {
    constructor (shuffled1Deck) {

        this.shuffled1Deck = shuffled1Deck
        

    }

    handout(){
        let playerCards = [];
        let player2Cards = [];
     for (let ranCard = 0; ranCard < 52; ranCard++){
        if (ranCard % 2 === 0){
            playerCards.push(this.shuffled1Deck[ranCard]);


        }else if (ranCard % 2 === 1){
        {player2Cards.push(this.shuffled1Deck[ranCard])};
        }


     }
     return [playerCards, player2Cards]
     



     }
}


let cardsForPlayers = new HandOutDeck(values)
let cardsForPlayers2 = new HandOutDeck(display)
cardsForPlayers2.handout()
cardsForPlayers.handout()
let myCardsForPlayers = cardsForPlayers.handout()

console.log(myCardsForPlayers)
let display2 = cardsForPlayers2.handout()






class dualOfPlayers {
    constructor(arr2, arr3){
    this.arr2= arr2
    this.arr3=arr3
    console.log(this.arr2)
    this.name = prompt('What is your name?')
    this.player = 0
    this.computer = 0

   
   
    
    }
   goToWar() {

    for (let i = 0; i < 26; i++){
        
        let arrA = this.arr2[0][i]
        let arrB = this.arr2[1][i]
        let arrC = this.arr3[0][i]
        let arrD = this.arr3[1][i]
        if( arrA> arrB){
             console.log(arrA)
             alert(`${this.name} you Won! ${arrC}`)
             this.player += 1
             
        }else if(arrA< arrB){


         console.log(arrB)
        alert(`${this.name} You Lost! ${arrD}`)
        this.computer+= 1
        }
        
    }
    if (this.player1 > 13){
        alert(`${this.name} you are Winner!`)
    } else{
        alert(`${this.name} you loser!`)
    }
   

    }
    
}
let fight = new dualOfPlayers(myCardsForPlayers, display2)
fight.goToWar()
console.log(fight.goToWar)

function doSomething(){
    console.log('hello world')
}

doSomething()





