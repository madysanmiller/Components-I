import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'

// /* Article
//   Step 1: Write a component called 'articleMaker' to create an article.
//   Your component is a function that takes an article object as its only argument,
//   and returns a DOM node looking like the one below:

//   <div class="article">
//     <h2>{title of the article}</h2>
//     <p class="date">{date of the article}</p>

//     {three separate paragraph elements}

//     <span class="expandButton">+</span>
//   </div>

//   Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
//   This listener should toggle the class 'article-open' on div.article.

//   Step 3: Don't forget to return something from your function!

//   Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
//   to create a div.article element and append it to the DOM inside div.articles (see index.html).

//   Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
//   Refresh the page to see the new article.
// */
// function articleMaker (artObj) {
//     const articleWrap = document.createElement('div');
//     const articleTitle = document.createElement('h2');
//     const articleDate = document.createElement('p');
//     const articleParagraph1 = document.createElement('p');
//     const articleParagraph2 = document.createElement('p');
//     const articleParagraph3= document.createElement('p');
//     const expandButton = document.createElement('span');

//     articleWrap.classList.add('article');
//     articleDate.classList.add('date');
//     expandButton.classList.add('expandButton');

//     articleWrap.appendChild(articleTitle);
//     articleWrap.appendChild(articleDate);
//     articleWrap.appendChild(articleParagraph1);
//     articleWrap.appendChild(articleParagraph2);
//     articleWrap.appendChild(articleParagraph3);
//     articleWrap.appendChild(expandButton);

//     articleTitle.textContent = articleObj.title;
//     articleDate.textContent = articleObj.date;
//     articleParagraph1.textContent = articleObj.firstParagraph;
//     articleParagraph2.textContent = articleObj.secondParagraph;
//     articleParagraph3.textContent = articleObj.thirdParagraph;
//     expandButton.textContent = "+";

//     expandButton.addEventListener('click', () => {
//         articleWrap.classList.toggle('article-open');
//     })
//         return articleWrap;
// }

// data.forEach(article => {
//     document.querySelector('div.articles').appendChild(articleMaker(article));
// })

// /* Menu
//   Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

//   <div class="menu">
//     <ul>
//       {each menu item as an <li>}
//     </ul>
//   </div>

//   The 'menuMaker' takes an array of menu items as its only argument.

//   Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
//   Add those items to the <ul>

//   Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

//   Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

//   Step 5: Don't forget to return your div.menu.

//   Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
// */

// function menuMaker(menuItems) {
//     const menuWrap = document.createElement('div');
//     const menuList = document.createElement('ul');

//     menuWrap.appendChild(menuList);

//     menuWrap.classList.add('menu');

//     menuItems.forEach(linkText => {
//         const link = document.createElement('li');
//         link.textContent = linkText;
//         menuList.appendChild(link);
//     })

//     const menuButton = document.querySelector('menu-button');

//     menuButton.addEventListener('click', () => {
//         menuWrap.classList.toggle('menu--open');
//     })

//     return menuWrap;
// }

// document.querySelector('.header').appendChild(menuMaker(menuItems));