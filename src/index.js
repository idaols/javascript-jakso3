// Importing modules
import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';
import { fetchData } from './modules/network';
import { Sortable } from '@shopify/draggable';

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('./service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// };


// Selecting elements
const sodexoMenuList = document.querySelector("#menuListSodexo");
const fazerMenuList = document.querySelector("#menuListFazer");
const languageBtn = document.querySelector("#languageBtn");
const sortBtn = document.querySelector("#sortBtn");
const randomBtn = document.querySelector("#randomBtn");

//Defining language and sorting
let langFi = true;
let reversed = false;


//Renders Sodexo data
const renderSodexo = (fi, sort, random = false) => {

  fetchData(SodexoData.sodexoDataUrl).then(data => {
    let courses = SodexoData.parseSodexoMenu(data.courses);
    const coursesFi = courses[0];
    const coursesEn = courses[1];
    if (sort) {
      coursesFi.reverse();
      coursesEn.reverse();
    }
    if (fi === true) {
      if (random) {
        selectRandom(coursesFi);
      }
      showMenu(coursesFi, sodexoMenuList);
    } else {
      if (random) {
        selectRandom(coursesEn);
      }
      showMenu(coursesEn, sodexoMenuList);
    }
  });

};

renderSodexo(langFi, reversed);


//Renders Fazer Data
const renderFazer = (fi, sort) => {
  if (fi === true) {
    fetchData(FazerData.fazerLunchMenuFiUrl, true).then(data => {
      const menuData = JSON.parse(data.contents);
      console.log(menuData);
      let course = FazerData.parseFazerMenu(menuData.LunchMenus[0]);
      if (sort) {
        course.reverse();
      }
      showMenu(course, fazerMenuList);
    });
  } else {
    fetchData(FazerData.fazerLunchMenuEnUrl, true).then(data => {
      const menuData = JSON.parse(data.contents);
      console.log(menuData);
      let course = FazerData.parseFazerMenu(menuData.LunchMenus[0]);
      if (sort) {
        course.reverse();
      }
      showMenu(course, fazerMenuList);
    });
  }
};

renderFazer(langFi, reversed);


/**
 * Function showing the menu
 *
 * @param {array} courses course's names
 * @param {array} menuList list of courses
 */
const showMenu = (courses, menuList) => {
  menuList.innerHTML = ``;
  for (let i = 0; i < courses.length; i++) {
    menuList.innerHTML += `
      <li>${courses[i]}</li>
      `;
  };
};

/**
 * Function for changing the language of the menu
 */
const changeLanguage = () => {
  if (langFi) {
    langFi = false;
  } else {
    langFi = true;
  }
  renderSodexo(langFi, reversed);
  renderFazer(langFi, reversed);
};


/**
 * Function that sorts the menu asc/desc
 */
const sortMenu = () => {
  if (reversed) {
    reversed = false;
  } else {
    reversed = true;
  }
  renderSodexo(langFi, reversed);
  renderFazer(langFi, reversed);
};


/**
 * Function that selects random course
 */
const selectRandom = (course) => {
  let pickRandom;
  pickRandom = Math.floor(Math.random() * course.length);
  alert('Random course: ' + course[pickRandom]);

};


// Week5 implementation

// Selecting elements
const themeBtn = document.querySelector("#themeBtn");

// Getting the current theme from localstorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light") {
  document.body.classList.add("light-theme");
}

/**
 * Function to change the theme between light and dark
 */
const changeTheme = () => {
  document.body.classList.toggle("light-theme");
  let theme = "dark";
  if (document.body.classList.contains("light-theme")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
};


/**
 * Function to dragging the menu-cards and changing their order
 */
const changeOrder = () => {
  const sortable = new Sortable(document.querySelectorAll('.menu-grid-container'), {
    draggable: 'article',
    mirror: {
      constrainDimensions: true,
    },
  });
  localStorage.setItem("order", sortable);
};

changeOrder();



// Event listeners
languageBtn.addEventListener('click', changeLanguage);
sortBtn.addEventListener('click', sortMenu);
randomBtn.addEventListener('click', () => {
  renderSodexo(langFi, reversed, true);
});
themeBtn.addEventListener('click', changeTheme);


