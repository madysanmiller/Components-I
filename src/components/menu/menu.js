import './menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(menuItems) {
  const menuWrap = document.createElement('div');
  const menuList = document.createElement('ul');

  menuWrap.appendChild(menuList);

  menuWrap.classList.add('menu');

//   menuItems.forEach(linkText => {
//       const link = document.createElement('li');
//       link.textContent = linkText;
//       menuList.appendChild(link);
//   })

//   const buttonMenu = document.querySelector('menu-button');

//   buttonMenu.addEventListener('click', () => {
//       menuWrap.classList.toggle('menu--open');
//   })

//   return menuWrap;
// }

// document.querySelector('.header').appendChild(menuMaker(menuItems));

for (let i = 0; i < menuItems.length; i++) {
  let link = document.createElement("li");
  link.textContent = menuItems[i];
  menuList.appendChild(link);
}

let buttonMenu = document.querySelectorAll(".menu-button")[0];

buttonMenu.addEventListener("click", () => {
  if (!menuWrap.classList.contains("menu--open")) {
    menuWrap.classList.add("menu--open");
  }
  else { menuWrap.classList.remove("menu--open");
}
});
return menuWrap;
}

const menuHeader = document.querySelectorAll(".header")[0];
menuHeader.appendChild(menuMaker(menuItems));
