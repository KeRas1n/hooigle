//GO TO TOP PAGE AFTER RELOADING
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//SPAWN ICONS
//document.getElementById(body).onload =  fetchBookmarks();



//AUTOCOMPPLETE RADIUS
window.onload = OnLoad;
function OnLoad(){
	fetchBookmarks(); //фетчим ярлыки

	//COntrol Autocomplete css
	var autoComplete = document.querySelector('.ui-menu');
	autoComplete.style.borderRadius = localStorage.getItem("searchRad")/2 + "px";
	///
	//ПОЛЗУНКИ
//set borderRadius SEARCh
var search = document.querySelector('#searchtext');
var chooseSearch = document.querySelector('.chooseSearch');

search.style.borderRadius = localStorage.getItem("searchRad") + "px";
chooseSearch.style.borderRadius = localStorage.getItem("searchRad") + "px";

//ADDICO
document.getElementById('myBtn').style.borderRadius = localStorage.getItem("iconRad") + "px";


//variables
var image = document.querySelector('.background-image');
var blur = document.querySelector('#blur');
var opac = document.querySelector('#opac');
var iconRad = document.querySelector('#iconRad');
var searchRad = document.querySelector('#searchRad');

//set blur
image.style.filter = "blur("+localStorage.getItem("blur")+"px)";
blur.value = localStorage.getItem("blur");

//set opac
image.style.opacity = localStorage.getItem("opac")/10;
opac.value = localStorage.getItem("opac");

//set iconRad
iconRad.value = localStorage.getItem("iconRad");

//set searchRad
searchRad.value = localStorage.getItem("searchRad");
}



//IF NO INFO
//
if (!localStorage.getItem("blur")) {
	localStorage.setItem("blur", 0);
}

if (!localStorage.getItem("opac")) {
	localStorage.setItem("opac", 10);
}

if (!localStorage.getItem("iconRad")) {
	localStorage.setItem("iconRad", 50);
}

if (!localStorage.getItem("searchRad")) {
	localStorage.setItem("searchRad", 30);
}
//setSearch
var Duck =  "https://duckduckgo.com";
var Google =  "https://www.google.com/search";
var Yahoo =  "https://search.yahoo.com";
var Mailru =  "https://go.mail.ru";
var Ukrnet =  "https://search.ukr.net";
var Yandex =  "https://yandex.ru/search/";
var Bing =  "https://www.bing.com/";
var Baidu = " "


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
	if (localStorage.getItem("setSearchRadio") == "Yandex") {
		document.getElementById("searchTxt").action = Yandex;
	}
	if (localStorage.getItem("setSearchRadio") == "Bing") {
		document.getElementById("searchTxt").action = Bing;
	}
	if(localStorage.getItem("setSearchRadio") == "Baidu"){

		document.getElementById("searchTxt").action = Baidu;
		var ourInput  = document.getElementById("searchtext");
  	document.addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
	    	if (!ourInput)
      	{
	        return;
	        alert("EMPTY");
      	}
      	else{
      		location.href = "https://www.baidu.com/baidu?wd=" + ourInput.value;
      	}

	    }
});
	}

	if (localStorage.getItem("setSearchRadio") == "Yandex"){
			document.getElementById("searchtext").name = "text";
	}
	else{
		document.getElementById("searchtext").name = "q";
	}

//RadioTHEME
if (!localStorage.radioTheme) localStorage.radioTheme = "1"
var option = document.getElementsByName("r");
  	option[localStorage.getItem('radioTheme')].checked = true;


//LAST NEWS
if (localStorage.getItem('lastnews1') !== "seen") {
		document.getElementById("news").style.display = "block";
	}
//THEME
if (!localStorage.theme) localStorage.theme = "CSS/main.css"
var csslink = document.getElementById("theme");
	csslink.setAttribute('href', localStorage.getItem('theme'));

//BACKGROUND IMAGE
document.querySelector('.background-image').style.backgroundImage = 'url('+ localStorage.getItem('customimg') + ')';

/*
//Перебор LS для нахождения ярлыков
var IsLen = localStorage.length;
	if(IsLen > 1){
		for (var i = 0; i < IsLen; i++) {
			var key = localStorage.key(i);
			var href = key;
			var string = localStorage.getItem(i);//null
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

				//IMAGE
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
			  	delbtn.innerHTML  = "del"
			  	delbtn.setAttribute('onclick', "del_btn(id);")
			  	//delbtn.onclick = function(){localStorage.removeItem(name); location.reload();};//НЕ РАБОТАЕТ
			  	//delbtn.onclick = localStorage.removeItem(href);

			}


		}
	}
*/
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

	var siteName = document.getElementById("urltitle").value;
	var siteUrl  = document.getElementById("urlinput").value;

	if(!validateForm(siteName, siteUrl)){
    	return false;
  }
  else{



	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	  //test if bookmarks is null
  	if(localStorage.getItem('bookmarks') === null){
    	//initialize an array
    	var bookmarks = [];

    	//add bookmark into the array
    	bookmarks.push(bookmark);


	    //set to localStorage
	    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	    //re-fetch bookmarks
  		fetchBookmarks();

  		//clear form
   	document.getElementById("urltitle").value = "";
		document.getElementById("urlinput").value = "";
  } else{
    //get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    if(!checkBookmark(siteUrl)){
    	bookmarks.push(bookmark);
    } else{
      alert(siteUrl +" Уже добавлен!");
    }
    //re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //clear form
   	document.getElementById("urltitle").value = "";
	document.getElementById("urlinput").value = "";
    //re-fetch bookmarks
  	fetchBookmarks();
}

//Prevent form from submitting
	//e.preventDefault();
}
//check if bookmark already exists in array
function checkBookmark(url){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  var found = bookmarks.some(function(el){
    return el.url === url;
  });

  if(found){
    return true;
  }
  return false;
}
}
function extraBookmark(name){
	document.getElementById(name).style.display = "block";

}
//delete bookmark
function deleteBookmark(url){

  //get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var realName;
  var realUrl;

  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url === url){
    	bookmarks.splice(i, 1);
    }
  }


  //re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //re-fetch bookmarks
  fetchBookmarks();
}


var siteEditName;
var siteEditUrl;

var newsiteEditName;
var newsiteEditUrl;

var editTitleForm = document.getElementById("urltitle2");
var editUrlForm	= document.getElementById("urlinput2");

function editBookmark(url){
  //get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url === url){
    	siteEditName = bookmarks[i].name;
    	siteEditUrl = bookmarks[i].url;

      //remove from array
      /*bookmarks[i].url = "JA GAY";
      bookmarks[i].name = "JA NE GAY";*/
    }
  }


	editUrlForm.value = url;
	editTitleForm.value = siteEditName;


//MODAL
	var modal = document.getElementById("EditModal");
	var span = document.getElementsByClassName("close")[2];

modal.style.display = "block";

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}

var EditBtn = document.getElementById("editobj");

EditBtn.onclick = function() {
	newsiteEditName = editTitleForm.value;
	newsiteEditUrl = editUrlForm.value;

	if(!validateForm(newsiteEditName, newsiteEditUrl)){
    	return false;
  }
  else{

  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url === siteEditUrl){

      bookmarks[i].url = newsiteEditUrl;
      bookmarks[i].name = newsiteEditName;
    }
  }

  //re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //re-fetch bookmarks
  fetchBookmarks();
}
}



//фетч bookmarks
function fetchBookmarks(){
   if(localStorage.getItem('bookmarks')){

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('app');

  //get output id


  //build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    bookmarksResults.innerHTML += '<div class="title-div">' +
    								'<a href ="'+url+'" class="title">'+'<img class ="icons" src = " https://www.google.com/s2/favicons?domain='+url+'"></a>' + '<div class = "tt-div"><center>'+name+'</center><button onClick="extraBookmark(\''+name+'\')" id = "icon_dots" class="icon_dots">...</button>'+
                                  ' <ul id = "'+name+'" class = "extra_icon"><li><button onClick="deleteBookmark(\''+url+'\')" href="#">Удалить</button></h3></li>'+
                                  ' <li><button onClick="editBookmark(\''+url+'\')"  href="#">Изменить</button> ' +
                                  '</h3></li></ul></div>';
  }
  bookmarksResults.innerHTML += '<button id="myBtn" class = "addico"> <img class="icons" src="img/icons/+.png" alt="+"> </button>';

}


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//КОНТРОЛИМ ИХ CSS
		var addico = document.getElementById('myBtn');

Array.from(document.querySelectorAll('.title'))
    .forEach(function(val) {
        val.style.borderRadius = localStorage.getItem("iconRad") + "px";
});
addico.style.borderRadius = localStorage.getItem("iconRad") + "px";
}

//validate form
function validateForm(siteName, siteUrl){
   if(!siteName || !siteUrl){
    alert("Пожалуйста заполните поля");
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
  /*if(!siteUrl.match(regex)){
    alert("Please use a valid URL");
    return false;
  }*/

  return true;
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
	if (selBox.value === "Yandex") {
  	document.getElementById("searchTxt").action = Yandex;
  	localStorage.setItem("setSearchRadio", "Yandex")
	}
	if (selBox.value === "Bing") {
  	document.getElementById("searchTxt").action = Bing;
  	localStorage.setItem("setSearchRadio", "Bing")
	}
	if (selBox.value === "Baidu") {
  	document.getElementById("searchTxt").action = Baidu;
  	localStorage.setItem("setSearchRadio", "Baidu")

  	var ourInput  = document.getElementById("searchtext");
  	document.addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
	    	if (!ourInput)
      	{
	        return;
	        alert("EMPTY");
      	}
      	else{
      		location.href = "https://www.baidu.com/baidu?wd=" + ourInput.value;
      	}

	    }
});




	}

	if (selBox.value === "Yandex") {
  	document.getElementById("searchtext").name = "text";
	}
	else if(selBox.value === "Baidu"){
		document.getElementById("searchtext").name = " ";
	}
	else{
		document.getElementById("searchtext").name = "q";
	}
};


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
    document.querySelector('.background-image').style.backgroundImage = 'url('+ reader.result + ')';
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
	document.querySelector('.background-image').style.backgroundImage = 'url()';
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

var uploadModal = document.getElementById("uploadModal");

// Get the button that opens the modal

var uploadBtn = document.getElementById("UploadBtn");

// Get the <span> element that closes the modal

var span2 = document.getElementsByClassName("close")[1];


// When the user clicks on the button, open the modal

uploadBtn.onclick = function() {
  uploadModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span2.onclick = function() {
  uploadModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == uploadModal) {
    uploadModal.style.display = "none";
  }
}



//RANGE ПОЛЗУНОК / ПОЛЗУНКИ
//BLUR
var blur = document.querySelector('#blur');

var rangeValue = function(){
  var newValue = blur.value;
  var image = document.querySelector('.background-image');
  image.style.filter = "blur("+newValue+"px)";

  localStorage.setItem("blur", newValue)
}
blur.addEventListener("input", rangeValue);

//OPACIY
var opac = document.querySelector('#opac');

var rangeValue = function(){
  var opacValue = opac.value;
  var imagee = document.querySelector('.background-image');
  imagee.style.opacity = opacValue/10;
  console.log(opacValue);

  localStorage.setItem("opac", opacValue)
}
opac.addEventListener("input", rangeValue);
//iconSize
/*
var iconSize = document.querySelector('#iconSize');

var rangeValue = function(){
  var iconSizeValue = iconSize.value;
  var imagee = document.querySelector('.background-image');
  imagee.style.opacity = opacValue/10;
  console.log(opacValue);

  localStorage.setItem("opac", iconSizeValue)
}
iconSize.addEventListener("input", rangeValue);*/

//iconRad

var iconRad = document.querySelector('#iconRad');

var rangeValue = function(){
  var iconBorderValue = iconRad.value;
  var addico = document.querySelector('.addico');
  //var icons = document.querySelectorAll('.title');

  Array.from(document.querySelectorAll('.title'))
    .forEach(function(val) {
        val.style.borderRadius = iconBorderValue + "px";
});
    addico.style.borderRadius = iconBorderValue + "px";
  //icons.style.borderRadius = iconBorderValue;

  localStorage.setItem("iconRad", iconBorderValue)
}
iconRad.addEventListener("input", rangeValue);

//searchRad

var searchRad = document.querySelector('#searchRad');

var rangeValue = function(){
  var searchBorderValue = searchRad.value;
  var search = document.querySelector('#searchtext');
  var chooseSearch = document.querySelector('.chooseSearch');
  var autoComplete = document.querySelector('.ui-menu');



  search.style.borderRadius = searchBorderValue + "px";
  chooseSearch.style.borderRadius = searchBorderValue + "px";
  autoComplete.style.borderRadius = searchBorderValue/2 + "px";


  //icons.style.borderRadius = iconBorderValue;

  localStorage.setItem("searchRad", searchBorderValue)
}
searchRad.addEventListener("input", rangeValue);

/////////////////////

/// MENU
var btn_menu = document.querySelector('#menu_btn');
btn_menu.addEventListener('click', function() {
        openBackMenu();
});

var btn_menu = document.querySelector('#menu_btn_cl');
btn_menu.addEventListener('click', function() {
        closeMenu();
});

function openBackMenu(){
	var menu = document.querySelector('.back_menu');
   menu.style.display = "block";
   setTimeout(openMenu, 20);

}

function openMenu(){
	var realmenu = document.querySelector('.hidden-menu');
	realmenu.style.right = "0";
}

function closeBackMenu(){
	var menu = document.querySelector('.back_menu');
   menu.style.display = "none";


}

function closeMenu(){
	var realmenu = document.querySelector('.hidden-menu');
	realmenu.style.right = "-500px";
	setTimeout(closeBackMenu, 20);
}

window.addEventListener('click', function(e){
  if (document.getElementById('back_menu').contains(e.target)){
    closeMenu();
  }
});
/*
window.addEventListener('click', function(e){
  if (document.querySelectorAll('.extra_icon').contains(e.target)){
    console.log("ААААА")
  }
  else{
  	Array.from(document.querySelectorAll('.extra_icon'))
    .forEach(function(val) {
        val.style.display = "none";
});
  }
});*/

const extra_icon = document.querySelectorAll(".extra_icon");

/*
extra_icon.forEach(function(icon) {
  icon.addEventListener("click", (e) => {
  	alert("Please");
    const target = "." + e.target.classList[1];
    const notTarget = document.querySelectorAll(".extra_icon:not(" + target + ")");
    console.log(target);
    console.log(notTarget);
  });
});*/

const popup = document.querySelectorAll('.extra_icon');

document.onclick = function(e){
	if (event.target.className != 'icon_dots') {
			Array.from(document.querySelectorAll('.extra_icon'))
    .forEach(function(val) {
    	if(val.style.display == "block"){
        val.style.display = "none";
    	}
});
    };

};
/*
Array.from(document.querySelectorAll('.extra_icon'))
    .forEach(function(val) {
        val.style.display = "block";
});*/

//ВКЛАДКИ МЕНЮ
const btns_tabs = document.querySelectorAll('.tablinks')

btns_tabs.forEach(btn => {
	btn.addEventListener('click', function() {
	openTab(btn.value);
})
})

//вкладка по умолчанию
document.getElementById("defaultOpen").click();

//вкладки
function openTab(tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    document.querySelector('button[name="' + tab +'"]').className += " active";
    //evt.currentTarget.className += " active";
}