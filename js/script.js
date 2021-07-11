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