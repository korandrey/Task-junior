// Реализация смены языка
let googlePlay = document.querySelector('.content-box__footer_google');
let contentBox = document.querySelector('.content-box');
let footer = document.querySelector('ul');
console.log(footer);

function changeLang() {
    let selectBox = document.querySelector(".selectBox");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue === 'en') {
  
        contentBox.innerHTML =
            '<div class="content-box__header">' +
            '<div class="content-box__header_logo">' +
            '<img class="logo" src="images/logo.jpg" alt="logo">' +
            '</div>' +
            '</div>' +
            '<div class="content-box__form">'+
            '<div class="content-box__form_input">' +
            '<input type="text" placeholder="GLN">' +
            '<input type="email" placeholder="User">' +
            '<input type="password" placeholder="Password">' +
            '<button type="submit">Sign in</button>' +
            '<a href="">Online-demo</a>' +
            '</div>' +
            '</div>'+

            '<div class="content-box__footer">'+
            '<a href="https://play.google.com/store">'+
            '<div class="content-box__footer_google">'+
            '<img src="images/googlePlay-EN.jpg" alt="googlePlay-EN">'+
            '</div>'+
            '</a>'+
            '</div>'
            ;

        footer.innerHTML =
                    '<li>HelpDesk</li>'+
                    '<li>Documentation</li>'+
                    '<li> <img src="icon/mail-black-envelope-symbol.png" alt="mail"> support@edweb.ru</li>'+
                    '<li class="footer__phone"> <img src="icon/icon-phone.png" alt="phone">8-800-7777-801</li>'+
                    '<li class="footer__language"> <img id="worlwide" src="icon/worlwide.png" alt="language">'+ 
                    '</li>'+
                    '<form>'+
                            '<select class="selectBox" onchange="changeLang()" name="language" size="1">'+
                                '<option id="option_ru" value="ru">RU</option>'+
                                '<option id="option_en" value="en">EN</option>'+
                            '</select>'+
                        '</form>'
                    ;
    } else {
        contentBox.innerHTML =
        '<div class="content-box__header">' +
            '<div class="content-box__header_logo">' +
            '<img class="logo" src="images/logo.jpg" alt="logo">' +
            '</div>' +
            '</div>' +
            '<div class="content-box__form">'+
            '<div class="content-box__form_input">' +
            '<input type="text" placeholder="GLN">' +
            '<input type="email" placeholder="Пользователь">' +
            '<input type="password" placeholder="Пароль">' +
            '<button type="submit">Войти</button>' +
            '<a href="">Онлайн-демо</a>' +
            '</div>' +
            '</div>'+

            '<div class="content-box__footer">'+
            '<a href="https://play.google.com/store">'+
            '<div class="content-box__footer_google">'+
            '<img src="images/googleplay-RU.jpg" alt="googleplay-RU">'+
            '</div>'+
            '</a>'+
            '</div>'
            ;

        footer.innerHTML =
        '<li>HelpDesk</li>'+
        '<li>Документация</li>'+
        '<li> <img src="icon/mail-black-envelope-symbol.png" alt="mail"> support@edweb.ru</li>'+
        '<li class="footer__phone"> <img src="icon/icon-phone.png" alt="phone">8-800-7777-801</li>'+
        '<li class="footer__language"> <img id="worlwide" src="icon/worlwide.png" alt="language">'+ 
            '<form>'+
                '<select class="selectBox" onchange="changeLang()" name="language" size="1">'+
                    '<option id="option_ru" value="ru">RU</option>'+
                    '<option id="option_en" value="en">EN</option>'+
                '</select>'+
            '</form>'+ 
        '</li>';
    }
}