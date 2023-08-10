// let cardarray=[
// {
//     'name':'1',
//     'img':'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
// },
// {
//     'name':'2',
//     'img':'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
// },
// {
//     'name':'3',
//     'img':'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
// },
// {
//     'name':'4',
//     'img':'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
// },
// {
//     'name':'5',
//     'img':'https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
// },
// {
//     'name':'6',
//     'img':'https://images.unsplash.com/photo-1489674267075-cee793167910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
// }

// ];
// const parentdiv=document.getElementById('card-section');

// //duplicate card
// const gamecard=cardarray.concat(cardarray);
// //shuffle
// let shuffle=Array.from(gamecard).sort(() => {
//     return 0.5 - Math.random();
// });


// let clickcount=0;
// let first='';
// let second=''; 
// //styling match card
// const  card_matches=()=>{
//     let card_selected=document.querySelectorAll('.card_selected');
//     card_selected.forEach((curElem)=>{
//         curElem.classList.add('card_match');

//     })
// }
// //reseting
// const reset=()=>{
//     first='';
//     second='';
//     clickcount=0;
//     let card_selected=document.querySelectorAll('.card_selected');
//     card_selected.forEach((curElem)=>{
//         curElem.classList.remove('card_selected');

//     })

// }

// parentdiv.addEventListener('click', () => {
//     let curcard = event.target;
//     if (curcard.id === "card-section") {
//       return false;
//     }
//     clickcount++;
//     if (clickcount < 3) {
//       if (clickcount === 1) {
//         first = curcard.dataset.name;
//         curcard.parentElement.classList.add('card_selected'); // Add the class to the parent element (main card)
//       } else {
//         second = curcard.dataset.name;
//         curcard.parentElement.classList.add('card_selected'); // Add the class to the parent element (main card)
//       }
//         if(first!=='' && second!==''){
//             if(first===second){
//                 // curcard.classList.add('card_match');
//                 setTimeout(()=>{
//                     card_matches();
//                 reset();

//                 },1000)
                
//             }else{
//                 setTimeout(()=>{
                    
//                 reset();

//                 },1000)

//             }
//         }
        
//     }
   
    
   



// })

// for (var i = 0; i < shuffle.length; i++){
//     const childDiv= document.createElement('div') ;
//     childDiv.classList.add('card');
//     childDiv.dataset.name=shuffle[i].name;
//     //childDiv.style.backgroundImage=`url(${shuffle[i].img})`;
//     const frontdiv= document.createElement('div') ;
//     childDiv.classList.add('front-card');

//     const backdiv= document.createElement('div') ;
//     childDiv.classList.add('back-card');

//     childDiv.style.backgroundImage=`url(${shuffle[i].img})`;

//     parentdiv.appendChild(childDiv);
//     childDiv.appendChild(frontdiv);
//     childDiv.appendChild(backdiv);
// }


// UPDATE

let cardsArray = [
    {
        'name': '1',
        'img': './imag/1.png',
    },
    {
        'name': '2',
        'img': './imag/2.png',
    },
    {
        'name': '3',
        'img': './imag/3.png',
    },
    {
        'name': '4',
        'img': './imag/4.png',
    },
    {
        'name': '5',
        'img': './imag/5.png',
    },
    {
        'name': '6',
        'img': './imag/6.png',
    }
];


const parentDiv = document.querySelector('#card-section');

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         // console.log(i, j)
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
//     return array
// }
//
// const shuffledChild = myNumbers(gameCard)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


let clickCount = 0;
let firstCard = "";
let secondCard = "";


// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}


// step 7

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

// step 4
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if(curCard.id === "card-section"){return false }

    clickCount ++;

    if(clickCount < 3){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            }else{
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})


// step 1 to add the card
for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}

