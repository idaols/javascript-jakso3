// Importing modules
import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';

// Data
const sodexoCoursesFi = SodexoData.coursesFi;
const sodexoCoursesEn = SodexoData.coursesEn;
const fazerCoursesFi = FazerData.coursesFi;
const fazerCoursesEn = FazerData.coursesEn;

// Selecting elements
const sodexoMenuList = document.querySelector("#menuListSodexo");
const fazerMenuList = document.querySelector("#menuListFazer");
const languageBtn = document.querySelector("#languageBtn");
const sortBtn = document.querySelector("#sortBtn");
const randomBtn = document.querySelector("#randomBtn");

//Defining language
let langFi = true;


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

showMenu(sodexoCoursesFi, sodexoMenuList);
showMenu(fazerCoursesFi, fazerMenuList);

/**
 * Function for changing the language of the menu
 */
const changeLanguage = () => {
  if (langFi) {
    showMenu(sodexoCoursesEn, sodexoMenuList);
    showMenu(fazerCoursesEn, fazerMenuList);
    langFi = false;
  } else {
    showMenu(sodexoCoursesFi, sodexoMenuList);
    showMenu(fazerCoursesFi, fazerMenuList);
    langFi = true;
  }
};


/**
 * Function that sorts the menu asc/desc
 */
const sortMenu = () => {
  if (langFi) {
    sodexoCoursesFi.reverse();
    fazerCoursesFi.reverse();
    showMenu(sodexoCoursesFi, sodexoMenuList);
    showMenu(fazerCoursesFi, fazerMenuList);
  } else {
    sodexoCoursesEn.reverse();
    fazerCoursesEn.reverse();
    showMenu(sodexoCoursesEn, sodexoMenuList);
    showMenu(fazerCoursesEn, fazerMenuList);
  };
};


/**
 * Function that selects random course
 */
const selectRandom = () => {
  let pickRandom;
  if (sodexoCoursesFi.length > fazerCoursesFi.length) {
    pickRandom = Math.floor(Math.random() * fazerCoursesFi.length);
  } else {
    pickRandom = Math.floor(Math.random() * sodexoCoursesFi.length);
  }

  if (langFi) {
    alert('Sodexo: ' + sodexoCoursesFi[pickRandom] + '\n' + 'Fazer:' + fazerCoursesFi[pickRandom]);
  } else {
    alert('Sodexo: ' + sodexoCoursesEn[pickRandom] + '\n' + 'Fazer:' + fazerCoursesEn[pickRandom]);
  }

};


// Event listeners
languageBtn.addEventListener('click', changeLanguage);
sortBtn.addEventListener('click', sortMenu);
randomBtn.addEventListener('click', selectRandom);





