//RadioTHEME
if (!localStorage.radioTheme) localStorage.radioTheme = "1"
var option = document.getElementsByName("r");
  	option[localStorage.getItem('radioTheme')].checked = true;

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

//BACKGROUND IMAGE
document.querySelector('body').style.backgroundImage = 'url('+ localStorage.getItem('customimg') + ')';



var IsLen = localStorage.length;
	if(IsLen > 1){
		for (var i = 0; i < IsLen; i++) {
			var key = localStorage.key(i);
			var href = key;
			var string = localStorage.getItem(i);/*null*/
			var str = string;
			var app = document.querySelector('.app')
			var title = document.createElement("a"); 
			var img = document.createElement("img"); 
			
			
			if (localStorage.getItem(key).indexOf('htt') > -1)
			{
		  		title.innerText = href
				title.setAttribute('href', localStorage.getItem(key));
				title.className = 'title'
				app.appendChild(title)

				/*IMAGE*/
				img.setAttribute('src', "https://www.google.com/s2/favicons?domain=" + localStorage.getItem(key));
				img.className = 'icons'
				app.appendChild(img)

		  		
			}
			
			
		}
	}

/*var nId = 0;
if (!localStorage.theme) localStorage.theme = "black"
document.body.className = localStorage.theme

toggleThemeBtn.onclick = () => {
	document.body.classList.toggle("white")
	toggleThemeBtn.innerText = document.body.classList.contains("white") ?"СМЕНИТЬ ТЕМУ НА ТЁМНУЮ": "СМЕНИТЬ ТЕМУ НА СВЕТЛУЮ"
	localStorage.theme = document.body.className || "black"
}*/



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

function addobj(){
	/* СТРИНГ И ХРЕФ ПОМЕНЯНЫ МЕСТАМИ*/
	var href = document.getElementById("urltitle").value;
	var string = document.getElementById("urlinput").value;
	var app = document.querySelector('.app')
	var title = document.createElement("a");
	var img = document.createElement("img");    
	
	
	title.setAttribute('href', string);
	title.className = 'title'
	
	if (string === "") {
    alert("Заполните URL и NAME");
    return;
	}
	if (href === "") {
    alert("Заполните URL и NAME");
    return;
	}

	if (string.indexOf('https://') > -1) {
		title.innerText = href


		app.appendChild(title)
		
	   	localStorage.setItem(href, title);
	   	/*IMAGE*/
		img.setAttribute('src', "https://www.google.com/s2/favicons?domain=" + string);
		img.className = 'icons'
		app.appendChild(img)
		document.getElementById("urltitle").value = "";
		document.getElementById("urlinput").value = "";
	}
	else 
		alert('INCORRRECT URL!');
		return;
	
	/*urlinput.select();

  /* Copy the text inside the text field */
 /* document.execCommand("copy");*/
}

function wipedata(){
	localStorage.clear(); 
	location.reload();
}

function setSearch($value) {
  /*var selectBox = document.getElementById("selectBox");*/
  if ($value === "Duck") {
  	document.getElementById("searchTxt").action = "https://duckduckgo.com/?q";
  }
  if ($value === "Google") {
  	document.getElementById("searchTxt").action = "https://www.google.com/search";
  }
  if ($value === "Yahoo") {
  	document.getElementById("searchTxt").action = "https://search.yahoo.com/search?p";
  }
  if ($value === "Mailru") {
  	document.getElementById("searchTxt").action = "https://go.mail.ru/search?q";
  }
  if ($value === "Ukrnet") {
  	document.getElementById("searchTxt").action = "https://search.ukr.net/?q";
}

}

  function setScream() {
  var inputstr = document.getElementById("searchtext");


  	/*if (inputstr.indexOf('ялох') > -1){*/
  	if (inputstr.value === "порно") {
  		document.getElementById("searchTxt").action = "https://susq.ru/onlyfans.mp4";
  	}
  	if (inputstr.value === "Порно") {
  		document.getElementById("searchTxt").action = "https://susq.ru/onlyfans.mp4";
  	}
  	/*}*/
} 


function previewFile() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    document.querySelector('body').style.backgroundImage = 'url('+ reader.result + ')';
    localStorage.setItem('customimg', reader.result);
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
function check()
{
	var csslink = document.getElementById("theme");
    var option =document.getElementsByName("r");
  	if(option[0].checked){
    	//1
		var themelink = "CSS/light-theme.css";
		csslink.setAttribute('href', "CSS/light-theme.css");
		localStorage.setItem('theme', themelink);
		localStorage.setItem('radioTheme', '0');
  	}
  	var option=document.getElementsByName("r");
  	if(option[1].checked){
    	//2
		csslink.setAttribute('href', "CSS/main.css");
		var themelink = "CSS/main.css";
		localStorage.setItem('theme', themelink);
		localStorage.setItem('radioTheme', '1');
  	}
}
function deleteCustomImg(){
	localStorage.removeItem('customimg');
	location.reload();
}
function wipeicons(){
	var IsLen = localStorage.length;
	
	if(IsLen > 1){
		for (var i = 0; i < IsLen; i++) {
			var key = localStorage.key(i);
			var string = localStorage.getItem(i);/*null*/
			var str = string;
			var icons = localStorage.getItem(key).indexOf('htt') > -1;
			localStorage.removeItem(icons);

			if (icons)
			{
				localStorage.removeItem(icons);
				alert("nice cock (стирай из меню хули, фича не работает(: ))")
		  		
			}
		}
	}

	//localStorage.removeItem('customimg');
	location.reload();
}
function weather()
{
    if (document.getElementById("hidden").style.display == "none") {
    	document.getElementById("hidden").style.display = "block";
    	localStorage.setItem('weather', 'yes');
    	document.getElementById("weather").style.borderColor = "red";
    }
    else if (document.getElementById("hidden").style.display == "block") {
    	document.getElementById("hidden").style.display = "none";
    	localStorage.setItem('weather', 'no');
    	document.getElementById("weather").style.borderColor = "";
    }
    
}
function closenews()
{
	document.getElementById("news").style.display = "none";
	localStorage.setItem('lastnews1', 'seen');
}

    

