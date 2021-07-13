
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
			
			
			if (localStorage.getItem(key).indexOf('https://www.') > -1)
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

var nId = 0;
if (!localStorage.theme) localStorage.theme = "black"
document.body.className = localStorage.theme

toggleThemeBtn.onclick = () => {
	document.body.classList.toggle("white")
	toggleThemeBtn.innerText = document.body.classList.contains("white") ?"СМЕНИТЬ ТЕМУ НА ТЁМНУЮ": "СМЕНИТЬ ТЕМУ НА СВЕТЛУЮ"
	localStorage.theme = document.body.className || "black"
}

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
	nId  = nId+1;
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


	title.innerText = href


	app.appendChild(title)
	
   	localStorage.setItem(href, title);
   	/*IMAGE*/
	img.setAttribute('src', "https://www.google.com/s2/favicons?domain=" + string);
	img.className = 'icons'
	app.appendChild(img)
	document.getElementById("urltitle").value = "";
	document.getElementById("urlinput").value = "";
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
  	/*}*/
} 


function previewFile() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  var customimg = 'customimg';

  reader.onloadend = function () {
    document.querySelector('body').style.backgroundImage = 'url('+ reader.result + ')';
    localStorage.setItem(customimg, reader.result);
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}