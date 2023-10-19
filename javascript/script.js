const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

btn.addEventListener('click', ()=>{
    const playerOneRandNum = Math.floor(Math.random()*6)+1;
    const playerTwoRandNum = Math.floor(Math.random()*6)+1;
    img1.src=`images/${playerOneRandNum}.png`;
    img2.setAttribute('src', 'images/'+playerTwoRandNum+'.png');
    console.log('images/'+playerTwoRandNum+'.png');
   
    if(playerOneRandNum > playerTwoRandNum){
        result.innerHTML = '🚩Player 1 Wins'
    }else if(playerTwoRandNum > playerOneRandNum){
        result.innerHTML = 'Player 2 Wins🚩'
    }else{
        result.innerHTML = '🚩Draw🚩';
    }
})
