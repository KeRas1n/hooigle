if (!localStorage.radioTheme) localStorage.radioTheme = "1"

var option = document.getElementsByName("r");
  	option[localStorage.getItem('radioTheme')].checked = true;

