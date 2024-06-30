const coin = document.querySelector('.coinBtn')
const dice = document.querySelector('.diceBtn')

const CoinResult = document.querySelector('#resultC')
const DiceResult = document.querySelector('#resultD')

coin.addEventListener('click', () => {
    let num = Math.random();

    if(num < 0.5){
        CoinResult.innerHTML = "Heads !"
    }else{
        CoinResult.innerHTML = "Tails !"
    }
})

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

dice.addEventListener('click', ()=>{
    DiceResult.innerHTML = randomIntFromInterval(1,6) + "!"
})