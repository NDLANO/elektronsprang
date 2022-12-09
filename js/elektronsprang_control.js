
function testFire(id) {
	document.myFunction(id, lengder2[id]);
	

}

function byttRinger(num) {
//	console.log("Bytt ring");
	document.switchRing(num);
}

function hideText(hide) {

	if (hide) {
	//	document.getElementById("forklaring").style.visibility = "hidden";
	//	document.getElementById("animation_controls").style.visibility = "visible";
			document.getElementById("forklaring").style.display = "none";
	//	document.getElementById("animation_controls").style.display = "inline";
	}
	else {
		document.getElementById("forklaring").style.display = "inline";
	//	document.getElementById("animation_controls").style.display = "none";
	}

}


function visOppgave(vis) {
	//console.log("Vis oppgave" + vis);

	if (!vis) {
		document.getElementById("oppgave").style.display = "none";
		document.getElementById("animation_controls").style.display = "inline";
	
		document.visSpektrum(false);
	}
	else {
		document.getElementById("responseText").innerHTML = ""
		document.getElementById("oppgave").style.display = "inline";
		document.getElementById("animation_controls").style.display = "none";
		document.visSpektrum(true);
	}

}


function svarOppgave(svar) {

	if(svar == 1) {
		// riktig  
		document.buttonSvar(true);
	}
	else  {
		// feil
		document.buttonSvar(false);
	}


}



document.setResponseText = function(svar) {


	if(svar) {
		// riktig  
	
		document.getElementById("responseText").innerHTML = "Riktig!"
	}
	else  {
		// feil
		document.getElementById("responseText").innerHTML = "Feil!"
	}


 }
