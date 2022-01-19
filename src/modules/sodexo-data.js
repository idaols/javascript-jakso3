import sodexoLunchMenu from '../assets/sodexo-day-example.json';
// Test
console.log('lunch menu object', sodexoLunchMenu);

const coursesFi = [];
const coursesEn = [];

const parseSodexoMenu = (menu) => {
  const courses = Object.values(menu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};

parseSodexoMenu(sodexoLunchMenu.courses);

const sodexoData = { coursesEn, coursesFi };
export default sodexoData;
