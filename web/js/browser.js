let userAgent = navigator.userAgent;
         let browserName;
         let extLink;

         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "Google Chrome";
             extLink = "https://chrome.google.com/webstore/category/extensions?hl=ru";

           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "Firefox";
             extLink = "https://addons.mozilla.org/ru/firefox/";

           }  else if(userAgent.match(/safari/i)){
             browserName = "Safari";
             extLink = "https://developer.apple.com/safari/extensions/";

           }else if(userAgent.match(/opr\//i)){
             browserName = "Opera";
             extLink = "https://addons.opera.com/ru/extensions/";

           } else if(userAgent.match(/edg/i)){
             browserName = "Edge";
             extLink = "https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home";

           }else{
             browserName = "Google Chrome";
             extLink = "https://chrome.google.com/webstore/category/extensions?hl=ru";

             //ВЫВОД ТЕКСТА ЧТО НЕ ПОДДЕРЖИВАЕТ ВАШ БРАУЗЕР
             var x = document.getElementById('red');
             x.style.display = 'block';
           }

          document.querySelector(".NiceBtn").innerText="Установить расширение для "+ browserName;
          document.getElementById('ext_link').setAttribute('href', extLink);
