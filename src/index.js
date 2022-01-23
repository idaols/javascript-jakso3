import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';

const sodexoCoursesFi = SodexoData.coursesFi;
const sodexoCoursesEn = SodexoData.coursesEn;
const fazerCoursesFi = FazerData.coursesFi;
const fazerCoursesEn = FazerData.coursesEn;

const sodexoMenuList = document.querySelector("#menuListSodexo");
const fazerMenuList = document.querySelector("#menuListFazer");
const sodexoLanguageBtn = document.querySelector("#sodexoLanguageBtn");
const sodexoSortBtn = document.querySelector("#sodexoSortBtn");
const sodexoRandomBtn = document.querySelector("#sodexoRandomBtn");
const fazerLanguageBtn = document.querySelector("#fazerLanguageBtn");
const fazerSortBtn = document.querySelector("#fazerSortBtn");
const fazerRandomBtn = document.querySelector("#fazerRandomBtn");


let sodexoLangFi = true;
let fazerLangFi = true;

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


const changeLanguage = (coursesFi, coursesEn, menuList, langFi) => {
  if (langFi) {
    showMenu(coursesEn, menuList);
  } else {
    showMenu(coursesFi, menuList);
  }
};

const changeSodexoLanguage = () => {
  changeLanguage(sodexoCoursesFi, sodexoCoursesEn, sodexoMenuList, sodexoLangFi);
  if (sodexoLangFi) {
    sodexoLangFi = false;
  } else {
    sodexoLangFi = true;
  }
};

const changeFazerLanguage = () => {
  changeLanguage(fazerCoursesFi, fazerCoursesEn, fazerMenuList, fazerLangFi);
  if (fazerLangFi) {
    fazerLangFi = false;
  } else {
    fazerLangFi = true;
  }
};

const sortMenu = (coursesFi, coursesEn, menuList, langFi) => {
  if (langFi) {
    coursesFi.reverse();
    showMenu(coursesFi, menuList);
  } else {
    coursesEn.reverse();
    showMenu(coursesEn, menuList);
  };
};

const sortSodexoMenu = () => {
  sortMenu(sodexoCoursesFi, sodexoCoursesEn, sodexoMenuList, sodexoLangFi);
};

const sortFazerMenu = () => {
  sortMenu(fazerCoursesFi, fazerCoursesEn, fazerMenuList, fazerLangFi);
};


const selectRandom = (courses) => {
  const pickRandom = Math.floor(Math.random() * courses.length);
  alert(courses[pickRandom]);
};

const selectSodexoRandom = () => {
  if (sodexoLangFi) {
    selectRandom(sodexoCoursesFi);
  } else {
    selectRandom(sodexoCoursesEn);
  }

};

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





