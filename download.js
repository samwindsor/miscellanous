var elementIsClicked = false; // declare the variable that tracks the state
function clickHandler(){ // declare a function that updates the state
  elementIsClicked = true;
}

var element = document.getElementById('down'); // grab a reference to your element
element.addEventListener('click', clickHandler);
if(elementIsClicked){
	let params3 = `scrollbars=no,resizable=no,status=no,location=yes,toolbar=no,menubar=no,
width=650,height=350,top =1500, left = 500`;

var wiin = window.open('C:/Users/Ibo/Desktop/New folder/virus.html', 'test6', params3);
wiin.moveTo(900,500);
}