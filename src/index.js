const coursesEn = ["Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

const menuList = document.querySelector(".menuList");
const randomDish = document.querySelector(".randomDish");
const languageBtn = document.querySelector("#languageBtn");
const sortBtn = document.querySelector("#sortBtn");
const randomBtn = document.querySelector("#randomBtn");


let langFi = true;

coursesEn.sort();
coursesFi.sort();


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





