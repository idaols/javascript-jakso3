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
const sodexoLanguageBtn = document.querySelector("#sodexoLanguageBtn");
const sodexoSortBtn = document.querySelector("#sodexoSortBtn");
const sodexoRandomBtn = document.querySelector("#sodexoRandomBtn");
const fazerLanguageBtn = document.querySelector("#fazerLanguageBtn");
const fazerSortBtn = document.querySelector("#fazerSortBtn");
const fazerRandomBtn = document.querySelector("#fazerRandomBtn");

//Defining language
let sodexoLangFi = true;
let fazerLangFi = true;

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
 *
 * @param {array} coursesFi shows course's finnish names
 * @param {array} coursesEn shows course's english names
 * @param {array} menuList list of courses
 * @param {boolean} langFi true/false
 */
const changeLanguage = (coursesFi, coursesEn, menuList, langFi) => {
  if (langFi) {
    showMenu(coursesEn, menuList);
  } else {
    showMenu(coursesFi, menuList);
  }
};

/**
 * Change language for Sodexo menu
 */
const changeSodexoLanguage = () => {
  changeLanguage(sodexoCoursesFi, sodexoCoursesEn, sodexoMenuList, sodexoLangFi);
  if (sodexoLangFi) {
    sodexoLangFi = false;
  } else {
    sodexoLangFi = true;
  }
};

/**
 * Change language for Fazer menu
 */
const changeFazerLanguage = () => {
  changeLanguage(fazerCoursesFi, fazerCoursesEn, fazerMenuList, fazerLangFi);
  if (fazerLangFi) {
    fazerLangFi = false;
  } else {
    fazerLangFi = true;
  }
};

/**
 * Function that sorts the menu asc/desc
 *
 * @param {array} coursesFi shows course's finnish names
 * @param {array} coursesEn shows course's english names
 * @param {array} menuList list of courses
 * @param {boolean} langFi true/false
 */
const sortMenu = (coursesFi, coursesEn, menuList, langFi) => {
  if (langFi) {
    coursesFi.reverse();
    showMenu(coursesFi, menuList);
  } else {
    coursesEn.reverse();
    showMenu(coursesEn, menuList);
  };
};

/**
 * Sorts Sodexo menu
 */
const sortSodexoMenu = () => {
  sortMenu(sodexoCoursesFi, sodexoCoursesEn, sodexoMenuList, sodexoLangFi);
};

/**
 * Sorts Fazer menu
 */
const sortFazerMenu = () => {
  sortMenu(fazerCoursesFi, fazerCoursesEn, fazerMenuList, fazerLangFi);
};

/**
 * Function that selects random course
 * @param {array} courses list of courses
 */
const selectRandom = (courses) => {
  const pickRandom = Math.floor(Math.random() * courses.length);
  alert(courses[pickRandom]);
};

/**
 * Select random course from Sodexo menu
 */
const selectSodexoRandom = () => {
  if (sodexoLangFi) {
    selectRandom(sodexoCoursesFi);
  } else {
    selectRandom(sodexoCoursesEn);
  }

};

/**
 * Select random course from Fazer menu
 */
const selectFazerRandom = () => {
  if (fazerLangFi) {
    selectRandom(fazerCoursesFi);
  } else {
    selectRandom(fazerCoursesEn);
  }

};


// Event listeners
sodexoLanguageBtn.addEventListener('click', changeSodexoLanguage);
sodexoSortBtn.addEventListener('click', sortSodexoMenu);
sodexoRandomBtn.addEventListener('click', selectSodexoRandom);
fazerLanguageBtn.addEventListener('click', changeFazerLanguage);
fazerSortBtn.addEventListener('click', sortFazerMenu);
fazerRandomBtn.addEventListener('click', selectFazerRandom);





