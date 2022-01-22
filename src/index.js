// Week2 Task2

import fazerLunchMenu from './assets/fazer-week-example.json';

const menu =
  [
    { name: 'Lingonberry jam', price: 4.00 },
    { name: 'Mushroom and bean casserole', price: 5.50 },
    { name: 'Chili-flavoured wheat', price: 3.00 },
    { name: 'Vegetarian soup', price: 4.80 },
    { name: 'Pureed root vegetable soup with smoked cheese', price: 8.00 }
  ];


// A

/**
 * Function that validates a name for a meal
 * @param {String} meal - takes input string as a parameter
 */
menu.forEach((meal) => {
  const regex = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  let mealName = meal.name;
  let validator = regex.test(mealName);
  if (validator) {
    console.log(mealName + ' is a valid name');
  } else {
    console.log(mealName + ' is NOT valid!');
  }
});


/**
 * Function that sorts the menu based on price,
 * from the most expensive to the cheapest
 */
const sortMenu = () => {
  let sortPrice = menu.sort((a, b) => {
    return b.price - a.price;
  });
  console.log('Sorted by price', sortPrice);
};


/**
 * Function that displays only items costing less than 5 €
 */
const filterMenu = () => {
  const filtered = menu.filter(f => f.price < 5);
  console.log('Filtered by price', filtered);
};


/**
 * Function that raises all prices 15%
 */
const raisePrice = () => {
  const raised = menu.map(r => (r.price * 1.15).toFixed(2));
  console.log('Raised by 15%', raised);
};

/**
 * Function that calculates price of the whole menu
 */
const eatWholeMenu = () => {
  const reduced = menu.reduce((a, b) => ({ price: a.price + b.price }));
  console.log('Whole menu price', reduced);
};


// Function calls
sortMenu();
filterMenu();
raisePrice();
eatWholeMenu();

// B

const dietVegan = [];

/**
 * Extract vegan diets from Fazer menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */
const parseFazerMenu = (menu) => {
  const setMenus = menu.SetMenus;
  for (const setMenu of setMenus) {
    const meals = setMenu.Meals;
    for (const meal of meals) {
      const name = meal.Name;
      const diets = meal.Diets;
      for (const diet of diets) {
        if (diet === 'Veg') {
          dietVegan.push(name);
        }
      }
    }
  }

};

parseFazerMenu(fazerLunchMenu.LunchMenus[0]);
console.log('Vegan dishes', dietVegan);




