const fazerLunchMenuFiUrl = 'https://www.foodandco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=270540&weekDate=2022-02-01';
const fazerLunchMenuEnUrl = 'https://www.foodandco.fi/api/restaurant/menu/week?language=en&restaurantPageId=270540&weekDate=2022-02-01';


/**
 * Extract vegan diets from Fazer menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */
const parseFazerMenu = (menu) => {
  const course = [];
  const setMenus = menu.SetMenus;
  for (const setMenu of setMenus) {
    const meals = setMenu.Meals;
    for (const meal of meals) {
      const name = meal.Name;
      course.push(name);
    }
  }
  return course;
};


const FazerData = { parseFazerMenu, fazerLunchMenuFiUrl, fazerLunchMenuEnUrl };
export default FazerData;
