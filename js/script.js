if (!localStorage.theme) localStorage.theme = "CSS/main.css"
var csslink = document.getElementById("theme");
  csslink.setAttribute('href', localStorage.getItem('theme'));


//WEATHER
if (localStorage.getItem('weather') == "yes") {
    	document.getElementById("hidden").style.display = "block";
    }
if (localStorage.getItem('weather') == "yes") {
		document.getElementById("weather").style.borderColor = "red";
	}
//LAST NEWS
if (localStorage.getItem('lastnews1') == "seen") {
		document.getElementById("news").style.display = "none";
	}

if (!localStorage.theme) localStorage.theme = "CSS/main.css"
var csslink = document.getElementById("theme");
	csslink.setAttribute('href', localStorage.getItem('theme'));


function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Текст скопирован: " + copyText.value);
} 