const sodexoDataUrl = 'https://www.sodexo.fi/ruokalistat/output/daily_json/152/2022-02-07';

/**
 * Extract course titles from Sodexo menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */
const parseSodexoMenu = (menu) => {
  const coursesEn = [];
  const coursesFi = [];
  const courses = Object.values(menu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
  return [coursesFi, coursesEn];
};

const SodexoData = { parseSodexoMenu, sodexoDataUrl };
export default SodexoData;

