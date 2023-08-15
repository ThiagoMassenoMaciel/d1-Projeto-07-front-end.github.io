const random = Math.round(Math.random() * 10);
console.log(random)

const button_try = document.querySelector('#FirstButton')
const button_reset = document.querySelector('#SecondButton')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const screen2_h2 = document.querySelector('.screen2 h2')
document.addEventListener('keyup', callfunction_Challenge_01)

let counter = 1;

button_try.addEventListener('click', Check_Try_Is_Equal)
button_reset.addEventListener('click', PlayAgain)      

function Check_Try_Is_Equal( event){
  console.log("event :"+event)

  event.preventDefault()

  let user = document.querySelector('#FirstInput')
  console.log(user.value)

  if( Number(user.value) == random){

    swap_display_none()
    screen2_h2.innerText = `Finally you got it! after ${counter} tries`

  }
  user.value = " ";  // If it was a tag h2    must use       number_user.innerText = " "  
  ++counter
}

function swap_display_none(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function PlayAgain(){
  swap_display_none();
  counter = 1;
}


function callfunction_Challenge_01(o){
  console.log("Object_Event_Details \,"+o);
  console.log(".key "+o.key)

  if(o.key == 'Enter' && screen1.classList.contains('hide')){
    PlayAgain(); // Just execute if the display are on the second screen ---> thisis a moment that screen1 are display : none ;
  }
}