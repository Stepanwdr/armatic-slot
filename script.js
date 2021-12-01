const slotCombItems=document.querySelectorAll('.slot_comb_item')
const spinBtns=document.querySelectorAll('.spin_by_coin_btn')
const congText=document.querySelector('.cong_text')
const congModal=document.querySelector('.cong_modal')
const myBalance=document.querySelector('.my_balance')
let sevens=[]
let six=[]
let fives=[]
let congrutulation='';
let balance=1000
let tl=gsap.timeline()
let coinValue=0
let anim=0
spinBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      if (anim==0){
        /*let audio = new Audio('audio_file.mp3');
        audio.play();*/
   sevens=[]
 six=[]
 fives=[]
      coinValue=btn.innerHTML
      balance=balance-coinValue
    if( balance<0){
        balance=0
        myBalance.innerHTML= balance
        congText.innerHTML='Insufficient Balance'
        return
    }
      myBalance.innerHTML= balance
      getRandomCombination=(x,y)=>{
        return Math.floor(Math.random()*(y-x)+x)
        }
        slotCombItems.forEach(n => {
      let combItem=n.innerHTML=getRandomCombination(5,8) 
console.log(combItem);
      switch (combItem) {
        case 5:
          fives.push(combItem)
          break
        case 6:
          six.push(combItem)
          break
          case 7:
              sevens.push(combItem)
              break
        default:console.log(fives,' ',six,' ',sevens);
      }
     } ) 
      tl.from(slotCombItems,{y:"-100px",stagger:0.2,onComplete:()=>getSpinResult(coinValue)})
     anim=1
    }})
})

    getSpinResult=(coinValue)=>{
        anim=0
        winCoin=''
        let combination=3
     switch(combination){
        case sevens.length:
            winCoin=coinValue*10
            break
        case six.length:
          winCoin=coinValue*5
            break
        case fives.length:
            winCoin=coinValue*3
            break
        default:return winCoin;
    }
    countBalance(winCoin)

    }

    countBalance=(winCoin)=>{
        congText.innerHTML='YOU ARE WIN '+ winCoin +'AMD'
        balance=balance+winCoin
        tl.from(congModal,{y:-200, duration:1})
       
    }
   


/* init */
myBalance.innerHTML=balance