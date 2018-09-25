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
            '<img class="logo" src="images/logo.jpg" alt="">' +
            '</div>' +
            '</div>' +
            '<div class="content-box__form">' +
            '<form action="login" method="post">' +
            '<input type="text" placeholder="GLN">' +
            '<input type="email" placeholder="User">' +
            '<input type="password" placeholder="Password">' +
            '<button type="submit">Sign in</button>' +
            '</form>' +

            '<a href="">Online-demo</a>' +
            '</div>' +

            '<div class="content-box__footer">' +
            '<a href="https://play.google.com/store">' +
            '<div class="content-box__footer_googlePlay">' +
            '<img src="images/googlePlay-EN.png" alt="googlePlay-EN">' +
            '</div>' +
            '</a>' +
            '</div>'
            ;

        footer.innerHTML =
                    '<li>HelpDesk</li>'+
                    '<li>Documentation</li>'+
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
    } else {
        contentBox.innerHTML =
        '<div class="content-box__header">' +
        '<div class="content-box__header_logo">' +
        '<img class="logo" src="images/logo.jpg" alt="">' +
        '</div>' +
        '</div>' +
        '<div class="content-box__form">' +
        '<input type="text" placeholder="GLN">' +
        '<input type="email" placeholder="Пользователь">' +
        '<input type="password" placeholder="Пароль">' +
        '<button type="submit">Войти</button>' +

        '<a href="">Онлайн-демо</a>' +
        '</div>' +

        '<div class="content-box__footer">' +
        '<a href="https://play.google.com/store">' +
        '<div class="content-box__footer_googlePlay">' +
        '<img src="images/googlePlay-RU.png" alt="googlePlay-RU">' +
        '</div>' +
        '</a>' +
        '</div>'
        ;

        footer.innerHTML =
            '<li>HelpDesk</li>' +
            '<li>Документация</li>' +
            '<li>' +
            '<svg style="display: none;">' +
            '<symbol id="email">' +
            '<image width="20" height="15" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAQAAABOkSfeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiCQ8CKx8610b8AAABMElEQVQoz33Rr0tdARQH8M+93qAYXhAR1AXFIAsDuYiIoCKCiKAydAub8ILBFQ3ymlqsYlI2MYwxk27hyX7IfgWLIu8uDBYMc2X7AwSDBn2Wpz7U90483w8HzjlBLqXCf5VK14V6p6FDg6q8K8m24wpdDkN1NkwZt3QvW4lHkrT36iLHUl5qlvHX6i02azlZNIfjSAgymow78rmIjcra8AyE4XV7zE97Op0VFujxzX6BISya0KbXvlqnztXa1aXjJiyGaVk7WlWJNNjxxZP74II3PhhwoN0jvwz4akvmKo7kwZpF64bAQSHr99aEB6aRjwT4aMq8yTtXfO5fPJM0eiwMcnl/tEh7XeIzL+JXyW8Pg9yubn2+l/n1UPwp+RHkGJZVvp7GmxFqbDkpw6qluATHWkp48BXKxAAAAABJRU5ErkJggg==" />' +
            '</symbol>' +
            '</svg>' +
            '<svg width="20px" height="15px" class="icon_email" xmlns:xlink="http://www.w3.org/2000/svg" viewBox="0 0 20 15">' +
            '<use class="email-1" xlink:href="#email" x="0" y="0" />' +
            '</svg>' +

            'support@edweb.ru</li>' +
            '<li>' +
            '<svg style="display: none;">' +
            '<symbol id="phone">' +
            '<image width="14" height="14" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiCQ8CKyyFByfqAAAA3ElEQVQY023MsUpCYQAF4E9djELKSS4ZzQ0NBdESiOAgNfoEEc3R3GBLS/QAbbUFTRHtPcC9W0RDFAT5Q1AI4WBJtyUk9Z6znQ+OuBWHOI3342JqvHknKjjQMJG8BTCtnoWfSD27zcIb9F2vXmXhpZ68SlKaxMLuu6oVi75CHA3G8LQXOuoq1oRwP8qFtug1dNSU1b2Fx6ifTIWlEIVuNCi0ER58WDenKRe6Go5t+gkvufTvItl2aB5PymYxcDFEkqa2ZcXh0PuHJFV7tkRmcOd8BElKNuyo+Xbk7BcS61Fh2frsKwAAAABJRU5ErkJggg==" />' +
            '</symbol>' +
            '</svg>' +
            '<svg width="14px" height="14px" class="icon_phone" xmlns:xlink="http://www.w3.org/2000/svg" viewBox="0 0 14 14">' +
            '<use class="phone-1" xlink:href="#phone" x="0" y="0" />' +
            '</svg>' +

            '8-800-7777-801</li>'
            ;
    }
}