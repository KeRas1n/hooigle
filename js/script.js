if (!localStorage.theme) localStorage.theme = "black"
document.body.className = localStorage.theme

toggleThemeBtn.onclick = () => {
	document.body.classList.toggle("white")
	document.head.classList.toggle("whitesearch")
	toggleThemeBtn.innerText = document.body.classList.contains("white") ?"СМЕНИТЬ ТЕМУ НА ТЁМНУЮ": "СМЕНИТЬ ТЕМУ НА СВЕТЛУЮ"
	localStorage.theme = document.body.className || "black"
}