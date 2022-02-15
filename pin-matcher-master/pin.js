document.getElementById('pin-button').addEventListener('click', function(){
    
    const pinButtonNumber = Math.round(Math.random()*10000)
    
 document.getElementById('pin-display').value = pinButtonNumber;
   
     
    
    
})
document.getElementById('calc').addEventListener('click', function(event){
    const calcButton = event.target.innerText
    const calcDisplay =  document.getElementById('calc-display')
    if(isNaN(calcButton)){
        
        if(calcButton == 'C'){
            calcDisplay.value = ''
        }
    }
  else{
   
    const calcDisplayText = calcDisplay.value;
    calcNewNumber = calcDisplayText + calcButton;
     calcDisplay.value = calcNewNumber;
  }
})

document.getElementById('submit-click').addEventListener('click', function(){
 const displayFirst = document.getElementById('pin-display').value;
 const displaySecond = document.getElementById('calc-display').value;
 const passNotification = document.getElementById('pass')
 const failNotification = document.getElementById('fail')
 if(displayFirst == displaySecond){
     
     passNotification.style.display= 'block'
     failNotification.style.display= 'none'
 }
 else{
   
    failNotification.style.display= 'block'
    passNotification.style.display= 'none'
 }
})