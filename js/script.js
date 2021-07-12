var IsLen = localStorage.length;
	if(IsLen > 1){
		for (var i = 0; i < IsLen; i++) {
			var key = localStorage.key(i);
			var href = key;
			var string = localStorage.getItem(i);/*null*/
			var str = string;
			var app = document.querySelector('.app')
			var title = document.createElement("a"); 
			
			
			if (localStorage.getItem(key).indexOf('www') > -1)
			{
		  		title.innerText = href
				title.setAttribute('href', localStorage.getItem(key));
				title.className = 'title'
				app.appendChild(title)
		  		
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
	/*urlinput.select();

  /* Copy the text inside the text field */
 /* document.execCommand("copy");*/
}
function showTasks(){
	var IsLen = localStorage.length;
	if(IsLen > 1){
		for (var i = 0; i < IsLen; i++) {
			var key = localStorage.key(i);
			var href = key;
			var string = localStorage.getItem(tits);
			var str = string;
			var app = document.querySelector('.app')
			var title = document.createElement("a"); 
			
			title.innerText = href
			title.setAttribute('href', str);
			title.className = 'title'
			app.appendChild(title)
		}
	}
}
function wipedata(){
	localStorage.clear(); 
}