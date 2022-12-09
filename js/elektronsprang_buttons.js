
// Array of wavelengths for buttons:
var lengder2 = [103, 113, 122, 269, 294, 301, 397, 410, 423, 434, 457, 486, 600, 656];
var lamda = "\u03BB";

// make a buttton for every iten in Array of buttons.
for (var i=0; i < lengder2.length; i++) {

//	var  controlDiv = document.getElementById("animation_controls");
	var  controlDiv = document.getElementById("listOfButtons"); 			// Put then into Juilens UL-element.
	var btn = document.createElement("BUTTON");        						// Create a <button> element  
	var t = document.createTextNode(lamda + " = " + lengder2[i] + "nm");  	// set the label for the button
 	var li = document.createElement("LI"); 									// make a LIelement to put the button in.
	btn.setAttribute("onclick", "testFire("+i+");" ); 						
	btn.setAttribute("title", tooltipText + " " + lengder2[i] + "nm" ); 
	//btn.setAttribute("alt", "Skyt foton med bølgelengde " + lengder2[i] + " nanometer" ); 

	btn.appendChild(t);  	//add the test to button.	
	li.appendChild(btn);  	// add the button the list item
                       
	controlDiv.appendChild(li); 	// add <li> to the UL-list.
	//controlDiv.appendChild(btn);  // Append the text to <button>
	
	              

}