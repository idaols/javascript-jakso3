import fazerLunchMenuFi from '../assets/fazer-week-example.json';
import fazerLunchMenuEn from '../assets/fazer-week-example-en.json';


const coursesFi = [];
const coursesEn = [];

/**
 * Extract vegan diets from Fazer menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */
const parseFazerMenu = (menu, course) => {
  const setMenus = menu.SetMenus;
  for (const setMenu of setMenus) {
    const meals = setMenu.Meals;
    for (const meal of meals) {
      const name = meal.Name;
      course.push(name);
    }
  }

};

parseFazerMenu(fazerLunchMenuFi.LunchMenus[0], coursesFi);
parseFazerMenu(fazerLunchMenuEn.LunchMenus[0], coursesEn);

const FazerData = { coursesEn, coursesFi };
export default FazerData;
