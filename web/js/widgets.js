//КНОПКИ ВКЛЮЧЕНИЯ ВИДЖЕТОВ
//
//Погода from LOCAL
if(!localStorage.getItem("weather")){
	localStorage.setItem("weather", "on");
}

if(localStorage.getItem("weather") == "on"){
	document.querySelector('.weather_widget').style.display = "inline-block";
	document.getElementById('weather_wid').checked = true;
}
else{
	document.querySelector('.weather_widget').style.display = "none";
}
//CURRENCY FROM LOCAL
if(!localStorage.getItem("currency")){
	localStorage.setItem("currency", "on");
}

if(localStorage.getItem("currency") == "on"){
	document.querySelector('.currency_widget').style.display = "inline-block";
	document.getElementById('currency_wid').checked = true;
}
else{
	document.querySelector('.currency_widget').style.display = "none";
}


weather_checkbox = document.getElementById('weather_wid');
weather_checkbox.addEventListener('click', Weather);
widget_holder = document.querySelector('.widget-holder');

currency_checkbox = document.getElementById('currency_wid');
currency_checkbox.addEventListener('click', Currency);

function Weather(){
	if(weather_checkbox.checked){
    	localStorage.setItem("weather", "on");
    	document.querySelector('.weather_widget').style.display = "inline-block";
    }
    else{
    	localStorage.setItem("weather", "off");
    	document.querySelector('.weather_widget').style.display = "none";
    }

}

function Currency(){
	if(currency_checkbox.checked){
    	localStorage.setItem("currency", "on");
    	document.querySelector('.currency_widget').style.display = "inline-block";
    }
    else{
    	localStorage.setItem("currency", "off");
    	document.querySelector('.currency_widget').style.display = "none";
    }

}

var apiKey = keys.first_w_api;

let pogoda = {
	apiKey,
	fetchWeather: function(city){

			fetch("https://api.openweathermap.org/data/2.5/weather?q="
			+city
			+"&units=metric&lang=ru&appid="
			+ this.apiKey)
		.then((response) => response.json())
		.then((data) => this.displayWeather(data));



	},
	displayWeather:function(data){
		try {

		const { name, dt } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity, feels_like} = data.main;
		const { speed } = data.wind;
		console.log(name,icon,description,temp,humidity,speed);
		document.querySelector(".city").innerText = "Погода в " + name;
		document.querySelector(".weather_icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";

		document.querySelector(".weather_description").innerText = description;
		document.querySelector(".temp").innerText = temp + "°C";
		document.querySelector(".humidity").innerText = "Влажность: " + humidity + "%";
		document.querySelector(".wind").innerText = "Скорость ветра: " + speed + " м/с";
		document.querySelector(".feel-temp").innerText = "Ощущаеться как " + feels_like + "°C";
		document.querySelector(".weather").classList.remove("loading");

		dateObj = new Date(dt * 1000);
		utcString = dateObj.toUTCString();

		var localDate = new Date(utcString);

		realtime = localDate.toLocaleTimeString();
		time = realtime.slice(0, -3);
		document.querySelector(".time_weather").innerText = time;

		document.querySelector("#loading_weather").style.display="none";
		document.querySelector("#error").style.display = "none";
		localStorage.setItem("weather_city", name);
		}
		catch(err) {
			document.querySelector("#error").style.display = "block";
		  document.querySelector("#error").innerText = "Город не найден";

		}


	},
	search: function () {



		if(document.querySelector(".weather_search_bar").value == "хотевице" || document.querySelector(".weather_search_bar").value == "Хотевице"){
			this.fetchWeather("Chotěvice");
		}
		else{
			this.fetchWeather(document.querySelector(".weather_search_bar").value);
		}

		document.querySelector(".weather_search_bar").value = "";

	}
};

document.querySelector(".search_weather button").addEventListener("click", function (){
	pogoda.search();
});

document.querySelector(".search_weather").addEventListener("keyup", function(event){
	if (event.key == "Enter"){
		pogoda.search();
	}
})

if(!localStorage.getItem("weather_city")){
	pogoda.fetchWeather("Kyiv");
}
else{
	pogoda.fetchWeather(localStorage.getItem("weather_city"));
}
if(localStorage.getItem("weather") == "on"){
	document.querySelector('.weather_widget').style.display = "inline-block";
}


//http://api.openweathermap.org/geo/1.0/direct?q=Denver&appid=9096ff0d0c3025f842533426b9a370a7
//
//https://api.openweathermap.org/data/2.5/weather?q=[NAME OF CITY]&appid=9096ff0d0c3025f842533426b9a370a7
//https://
//api.openweathermap.org/data/2.5/weather?q=[NAME OF CITY]&units=metric&appid=9096ff0d0c3025f842533426b9a370a7


//CURRENCY


const rates = {};
const courseUSD = document.querySelector('[data-value="USD"]');
const courseEUR = document.querySelector('[data-value="EUR"]');

const input = document.querySelector('#curr_input');
const result = document.querySelector('#curr_result');

const result_select = document.querySelector('#curr_result_option');
const input_select = document.querySelector('#curr_input_option');




getCurrencies();

async function getCurrencies (){
	const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
	const data = await response.json();
	const result = await data;
	console.log(result);


	console.log(result.Valute.USD);

	rates.USD = result.Valute.USD.Value;
	rates.EUR = result.Valute.EUR.Value;
	rates.CZK = result.Valute.CZK.Value / 10;
	rates.UAH = result.Valute.UAH.Value / 10;

	console.log(rates);

	courseUSD.innerText = "USD: " + rates.USD.toFixed(2);
	courseEUR.innerText = "EUR: " + rates.EUR.toFixed(2);

	document.querySelector("#loading_curr").style.display="none";
	document.querySelector(".currency_content").classList.remove("loading");;




	if (rates.USD >	result.Valute.USD.Previous){
		courseUSD.classList.add("grow");
	}
	else if(rates.USD == result.Valute.USD.Previous){
		return;
	}
	else{
		courseUSD.classList.add("fall");
	}

	if (rates.EUR >	result.Valute.EUR.Previous){
		courseEUR.classList.add("grow");
	}
	else if(rates.EUR == result.Valute.EUR.Previous){
		return;
	}
	else{
		courseEUR.classList.add("fall");
	}
}

input.oninput =	function(){
	ConvertValue();
}

result_select.oninput =	function(){
	ConvertValue();
}

input_select.oninput =	function(){
	ConvertValue();
}

function ConvertValue(){

	result.value = ((input.value * rates[input_select.value]) / (rates[result_select.value])).toFixed(3);


	//result = UAH / CZK = RUB/CZK:RUB/UAH
	//A/B = ГРН/РУБ * РУБ/ДОЛЛАР = ГРН К ДОЛЛАР
}
