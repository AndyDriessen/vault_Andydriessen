
//var numberButton = document.getElementById("btn-1");
var codeContainer = document.getElementById("code-container");
//get all elements (div) with the classname "buttonNumber"
var numberButtons = document.getElementsByClassName('buttonNumber');
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;
var greenBlock = document.getElementById("greenBlock");
var redBlock = document.getElementById("redBlock");
var intervalTimer = 0;

function disableButtons() {

	//used to loop through all buttons and disable them with attribute disable
	//so that it isn't possible to click more then three times
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].setAttribute('disabled', 'disabled');
	}
	
}

function enableButtons() {

	//used to loop through all buttons and enable them again, remove attribute disabled
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].removeAttribute('disabled');
	}

}



function getNumber(clickedButton)
{

    clickCounter++;
    codeContainer.innerHTML += clickedButton.value;

    if(clickCounter == 1)
    {      
        numberOne = clickedButton.value;
    }
    if(clickCounter == 2)
    {        
        numberTwo = clickedButton.value;
    }
    if(clickCounter == 3)
    {      
        numberThree = clickedButton.value;       
    }

    if(clickCounter == 3) {
        disableButtons();
        if(numberOne == 1 && numberTwo == 1 && numberThree == 1) {
            var blink = setInterval(function() {	
                //add +1 every time the setinterval function runs		
                intervalTimer++;
            
                //method to show div on and off
                //change the css of the green and red box to create a blinking effect
                if (greenBlock.style.visibility == 'hidden') {
                    greenBlock.style.visibility = 'visible';
                }else {
                    greenBlock.style.visibility = 'hidden';
                }
                //check if the interval has runned ten times
                if(intervalTimer == 6) {            
                    //ClearInterval function stops the interval after 10 times
                    clearInterval(blink);   
                    codeContainer.innerHTML = "";             
                }
            
            }, 500);
        intervalTimer = 0;
        clickCounter = 0;
        //enableButtons(); 
        }
        else {
            
            var blink = setInterval(function() {
	
                //add +1 every time the setinterval function runs		
                intervalTimer++;
            
                //method to show div on and off
                //change the css of the green and red box to create a blinking effect
                
                
                if (redBlock.style.visibility == 'hidden') {
                    redBlock.style.visibility = 'visible';
                }else {
                    redBlock.style.visibility = 'hidden';
                }
            
                //check if the interval has runned ten times
                if(intervalTimer == 6) {
            
                    //ClearInterval function stops the interval after 10 times
                    clearInterval(blink);
                
                }
            
            }, 500);
        intervalTimer = 0;
        codeContainer.innerHTML = "";
        clickCounter = 0;
        
        }enableButtons(); 
    }

    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);

    
}