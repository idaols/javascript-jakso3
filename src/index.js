import LunchMenu from '../sodexo-day-example.json';
// Test
console.log('lunch menu object', LunchMenu);

const coursesFi = [];
const coursesEn = [];

for (let i in LunchMenu.courses) {
  coursesFi.push(LunchMenu.courses[i].title_fi);
  coursesEn.push(LunchMenu.courses[i].title_en);
};

const menuList = document.querySelector(".menuList");
const randomDish = document.querySelector(".randomDish");
const languageBtn = document.querySelector("#languageBtn");
const sortBtn = document.querySelector("#sortBtn");
const randomBtn = document.querySelector("#randomBtn");


let langFi = true;

coursesFi.sort();
coursesEn.sort();


const showMenuFi = () => {
  menuList.innerHTML = ``;
  for (let i = 0; i < coursesFi.length; i++) {
    menuList.innerHTML += `
      <li>${coursesFi[i]}</li>
      `;
  };
};

showMenuFi();

const showMenuEn = () => {
  menuList.innerHTML = ``;
  for (let i = 0; i < coursesEn.length; i++) {
    menuList.innerHTML += `
      <li>${coursesEn[i]}</li>
      `;
  };
};

const changeLanguage = () => {
  randomDish.innerHTML = ``;
  if (langFi) {
    showMenuEn();
    langFi = false;
  } else {
    showMenuFi();
    langFi = true;
  }
};

const sortMenu = () => {
  randomDish.innerHTML = ``;
  if (langFi) {
    coursesFi.reverse();
    showMenuFi();
  } else {
    coursesEn.reverse();
    showMenuEn();
  };
};


const selectRandom = () => {
  const picRandom = Math.floor(Math.random() * coursesFi.length);
  if (langFi) {
    randomDish.innerHTML = ``;
    randomDish.innerHTML += `
    <p class="rndmDish">Random dish: ${coursesFi[picRandom]}</p>`;
  } else {
    randomDish.innerHTML = ``;
    randomDish.innerHTML += `
    <p class="rndmDish">Random dish: ${coursesEn[picRandom]}</p>`;
  }
};





languageBtn.addEventListener('click', changeLanguage);
sortBtn.addEventListener('click', sortMenu);
randomBtn.addEventListener('click', selectRandom);





