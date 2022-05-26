//GO TO TOP PAGE AFTER RELOADING
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


//setSearch
var Duck =  "https://duckduckgo.com/?q";
var Google =  "https://www.google.com/search";
var Yahoo =  "https://search.yahoo.com/search?p";
var Mailru =  "https://go.mail.ru/search?q";
var Ukrnet =  "https://search.ukr.net/?q";

//UI SEARCH OPTION
if (!localStorage.setSearchRadio) localStorage.setSearchRadio = "Google"
	const $select = document.querySelector('#selectBox_btn');
  $select.value = localStorage.getItem("setSearchRadio")


	if (localStorage.getItem("setSearchRadio") == "Duck") {
		document.getElementById("searchTxt").action = Duck;
	}
	if (localStorage.getItem("setSearchRadio") == "Google") {
		document.getElementById("searchTxt").action = Google;
	}
	if (localStorage.getItem("setSearchRadio") == "Yahoo") {
		document.getElementById("searchTxt").action = Yahoo;
	}
	if (localStorage.getItem("setSearchRadio") == "Mailru") {
		document.getElementById("searchTxt").action = Mailru;
	}
	if (localStorage.getItem("setSearchRadio") == "Ukrnet") {
		document.getElementById("searchTxt").action = Ukrnet;
	}

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
if (localStorage.getItem('lastnews1') !== "seen") {
		document.getElementById("news").style.display = "block";
	}
//THEME
if (!localStorage.theme) localStorage.theme = "CSS/main.css"
var csslink = document.getElementById("theme");
	csslink.setAttribute('href', localStorage.getItem('theme'));

//BACKGROUND IMAGE
document.querySelector('body').style.backgroundImage = 'url('+ localStorage.getItem('customimg') + ')';


//Перебор LS для нахождения ярлыков
var IsLen = localStorage.length;
	if(IsLen > 1){
		for (var i = 0; i < IsLen; i++) {
			var key = localStorage.key(i);
			var href = key;
			var string = localStorage.getItem(i);/*null*/
			var str = string;
			var app = document.querySelector('.app');
			var realtitle = document.createElement("center");
			var div = document.createElement("div");
			var text_div = document.createElement("div");
			var title = document.createElement("a");
			var img = document.createElement("img");
			var delbtn = document.createElement("button");

			//Вывод ярлыков  Если содержит && и если не содержит
			if (localStorage.getItem(key).indexOf('.') > -1 && localStorage.getItem(key).indexOf('.css') < 0)
			{
				app.appendChild(div)

				div.className = 'title-div'
				div.id = key

		  		//title.innerText = href
				title.setAttribute('href', localStorage.getItem(key));
				title.className = 'title'
				div.appendChild(title)

				/*IMAGE*/
				img.setAttribute('src', "https://www.google.com/s2/favicons?domain=" + localStorage.getItem(key));
				img.className = 'icons'
				title.appendChild(img)

				div.appendChild(text_div)
				text_div.className = "tt-div"

				//TITLE
				realtitle.innerText = href

				text_div.appendChild(realtitle)


				//Delete-BTN
				delbtn.className = 'delbtn'
				delbtn.id = key
				app.appendChild(delbtn)
			  	delbtn.innerHTML  = "<i class='fa-solid fa-trash'></i>"
			  	delbtn.setAttribute('onclick', "del_btn(id);")
			  	//delbtn.onclick = function(){localStorage.removeItem(name); location.reload();};//НЕ РАБОТАЕТ
			  	//delbtn.onclick = localStorage.removeItem(href);

			}


		}
	}

function del_btn(id){
	document.getElementById(id).style.display = "none";
	localStorage.removeItem(id);
	//location.reload(); //потом убрать
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

document.addEventListener('DOMContentLoaded', function() {
    var addobj_btn = document.getElementById('addobj');
    // onClick's logic below:
    addobj_btn.addEventListener('click', function() {
        addobj();
    });
});

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
    alert("Заполните URL");
    return;
	}
	if (href === "") {
    alert("Заполните NAME");
    return;
	}

	if (string.indexOf('https://') > -1) {
		//Текст ярлыка = хреф(urltitle)
		title.innerText = href

		//Присваиваем Тайтлу(ссылке) стиль .app(ярлык)
		app.appendChild(title)


		//Сохраняем ярылк в LS
	   	try {
    	localStorage.setItem(href, title);
} catch(e) {
    if(e.name == "NS_ERROR_FILE_CORRUPTED") {
        alert("Похоже произошла ошибка хранилища в вашем бразуере. Для исправлении ошибки очистите хрнилище зайдя в Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. Это очищет поврежденное хранилище вашего браузера на всех сайтах.");
    }
}

	   	/*Добавляем фавиконку*/
		img.setAttribute('src', "https://www.google.com/s2/favicons?domain=" + string);
		img.className = 'icons'
		app.appendChild(img)

		//Delete-BTN
				delbtn.className = 'delbtn'
				delbtn.id = href
				app.appendChild(delbtn)
		  	delbtn.innerText = "🗑"
		  	delbtn.setAttribute('onclick', "del_btn(id);")


	//delbtn.onclick = localStorage.removeItem(href);
		//Очищаем поля создания ярлыка
		document.getElementById("urltitle").value = "";
		document.getElementById("urlinput").value = "";
	}
	else
		alert('Некорректная ссылка!');
		return;

	/*urlinput.select();

  /* Copy the text inside the text field */
 /* document.execCommand("copy");*/
}

document.addEventListener('DOMContentLoaded', function() {
    var wipe_btn = document.getElementById('wipedata');
    // onClick's logic below:
    wipe_btn.addEventListener('click', function() {
       wipedata();
    });
});
function wipedata(){
	localStorage.clear();
	location.reload();
}
/*
var el = document.getElementById("selectBox_btn");
if(el){
  el.addEventListener('change', setSearch);
}
*/
var selBox = document.getElementById("selectBox_btn");
selBox.onchange = function(){
    if (selBox.value === "Duck") {
  	document.getElementById("searchTxt").action = Duck;
  	localStorage.setItem("setSearchRadio", "Duck")
  }
  if (selBox.value === "Google") {
  	document.getElementById("searchTxt").action = Google;
  	localStorage.setItem("setSearchRadio", "Google")
  }
  if (selBox.value === "Yahoo") {
  	document.getElementById("searchTxt").action = Yahoo;
  	localStorage.setItem("setSearchRadio", "Yahoo")
  }
  if (selBox.value === "Mailru") {
  	document.getElementById("searchTxt").action = Mailru;
  	localStorage.setItem("setSearchRadio", "Mailru")
  }
  if (selBox.value === "Ukrnet") {
  	document.getElementById("searchTxt").action = Ukrnet;
  	localStorage.setItem("setSearchRadio", "Ukrnet")
	}
};
/*
window.onload=function(){
	const selectElement = document.querySelector("#selectBox_btn");
  selectElement.addEventListener('change', setSearch);
}
*/
//document.getElementById("selectBox").addEventListener("change", setSearch);

function setSearch($value) {
  /*var selectBox = document.getElementById("selectBox");*/
  if ($value === "Duck") {
  	document.getElementById("searchTxt").action = Duck;
  	localStorage.setItem("setSearchRadio", "Duck")
  }
  if ($value === "Google") {
  	document.getElementById("searchTxt").action = Google;
  	localStorage.setItem("setSearchRadio", "Google")
  }
  if ($value === "Yahoo") {
  	document.getElementById("searchTxt").action = Yahoo;
  	localStorage.setItem("setSearchRadio", "Yahoo")
  }
  if ($value === "Mailru") {
  	document.getElementById("searchTxt").action = Mailru;
  	localStorage.setItem("setSearchRadio", "Mailru")
  }
  if ($value === "Ukrnet") {
  	document.getElementById("searchTxt").action = Ukrnet;
  	localStorage.setItem("setSearchRadio", "Ukrnet")
	}
}

//SetScream()
var inputstr = document.getElementById("searchtext");
inputstr.onchange = function(){
if (inputstr.value === "порно") {
  		document.getElementById("searchTxt").action = "img/onlyfans.mp4";
  	}
  	if (inputstr.value === "Порно") {
  		document.getElementById("searchTxt").action = "img/onlyfans.mp4";
  	}

};

////////
var customimg_pr = document.getElementById("previewFile");
customimg_pr.onchange = function(){

//function previewFile() {
	uploadModal.style.display = "none";

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

//////



var light_theme_btn = document.getElementById("light");
light_theme_btn.onchange = function(){
var csslink = document.getElementById("theme");

  	if(document.getElementById('light').checked){
    	//1
		var themelink = "CSS/light-theme.css";
		csslink.setAttribute('href', "CSS/light-theme.css");
		localStorage.setItem('theme', themelink);
		localStorage.setItem('radioTheme', '0');
  	}
}

var dark_theme_btn = document.getElementById("dark");
dark_theme_btn.onchange = function(){
var csslink = document.getElementById("theme");

  	if(document.getElementById('dark').checked){
    	//2
		csslink.setAttribute('href', "");
		var themelink = "";
		localStorage.setItem('theme', themelink);
		localStorage.setItem('radioTheme', '1');
  	}
}


document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('deleteCustomImg');
    // onClick's logic below:
    btn.addEventListener('click', function() {
        deleteCustomImg();
    });
});


function deleteCustomImg(){
	if (!localStorage.getItem('customimg')) {
		alert("У вас не установлен задний фон")
	}
	else{
		localStorage.removeItem('customimg');
	document.querySelector('body').style.backgroundImage = 'url()';
	}

}

/*
function wipeicons(){
	var IsLen = localStorage.length;

	if(IsLen > 1){
		for (var i = 0; i < IsLen; i++) {
			var key = localStorage.key(i);
			var string = localStorage.getItem(i);null
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
}*/

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
document.addEventListener('DOMContentLoaded', function() {
    var closenews_btn = document.getElementById('closenews');
    // onClick's logic below:
    closenews_btn.addEventListener('click', function() {
        closenews()
    });
});

function closenews()
{
	document.getElementById("news").style.display = "none";
	try {
    localStorage.setItem('lastnews1', 'seen');
} catch(e) {
    if(e.name == "NS_ERROR_FILE_CORRUPTED") {
        alert("Похоже произошла ошибка хранилища в вашем бразуере. Для исправлении ошибки очистите хрнилище зайдя в Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. Это очищет поврежденное хранилище вашего браузера НА ВСЕХ сайтах.");
    }
}

}

// Get the modal
var modal = document.getElementById("myModal");
var uploadModal = document.getElementById("uploadModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var uploadBtn = document.getElementById("UploadBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
uploadBtn.onclick = function() {
  uploadModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  uploadModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == uploadModal) {
    uploadModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}