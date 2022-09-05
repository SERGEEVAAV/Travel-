console.log("1.Верстка валидная\n2.Вёрстка семантическая\n в коде странице присутствуют следующие элементы:\n  -<header>, <main>, <footer>\n  <section>,\n  <h1>, <h2>,\n  <nav>, ul > li > a,\n  <button>\n3.Вёрстка соответствует макету\n4.Интерактивность, реализуется через css");

// Menu opening Hamburger
const hamburger = document.querySelector('.hamburger');
const navigation__list = document.querySelector('.navigation__list');

const body = document.querySelector('.menu_close');

hamburger.addEventListener('click', (e)  => {
e.preventDefault();
// document.body.classList.add('menu__opened');
hamburger.classList.toggle('_active');
navigation__list.classList.toggle('_active'); 
body.classList.toggle('_active');

 
});


//Closing menu by body

window.addEventListener('click', (e) => {
    const target = e.target
    if (!target.closest('.navigation__list') && !target.closest('.hamburger')) {
        navigation__list.classList.remove('_active') || hamburger.classList.remove('_active');
    } else {
        navigation__list.add('_active') || hamburger.add('_active');
    }
    
})



//Closing menu by link
const links = Array.from(navigation__list.children);

links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
});

function closeOnClick() {
    hamburger.classList.remove('_active');
    navigation__list.classList.remove('_active');
    body.classList.remove('_active');

}

//Add menu items
// let p1 = document.createElement('li');
// p1.className = 'navigation__link';
// // p1.setAttribute('class', 'navigation__link close_menu');
// p1.id = 'myList';
// p1.innerHTML = 'Account'; 

let p2 = document.createElement('li');
p2.classList.add('navigation__link');
p2.innerHTML = 'Social Media';

navigation__list.append(p2);



//Создаём ссылку
const node = document.createElement('a');

// //Текст для проверки
const textnode = document.createTextNode("Account");
// //Прикрепляем текст к ссылке
node.appendChild(textnode);
// //Прикрепляем элемент списка к элементу с айдишником myList
document.getElementById("myList").appendChild(node);


 
 

 
