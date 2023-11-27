import htmlIcon from "../assets/skills icons/html.png";
import CssIcon from "../assets/skills icons/css.png";
import ScssIcon from "../assets/skills icons/sass.png";
import JsIcon from "../assets/skills icons/js.png";
import ReactIcon from "../assets/skills icons/reactjs.png";
import ReduxIcon from "../assets/skills icons/redux.png";
import BootstrapIcon from "../assets/skills icons/bootstrap.png";
import TailwindIcon from "../assets/skills icons/tailwind.png";
import GitIcon from "../assets/skills icons/git.png";
import GithubIcon from "../assets/skills icons/github.png";

// projects import
import project1Img from "../assets/Projects/project1.png";

// certificate import
import htmlCer from "../assets/certificates/html.png";
import responsiveCer from "../assets/certificates/responsive_web.png";
import jsCer from "../assets/certificates/js.png";
import reactReduxCer from "../assets/certificates/react_redux.png";
import freeCodeCampIcon from "../assets/icons/freecodecamp.png";
import sololearnIcon from "../assets/icons/sololearn.png";

export const skillsData = [
  { id: 1, skillName: "HTML 5", img: htmlIcon },
  { id: 2, skillName: "CSS", img: CssIcon },
  { id: 3, skillName: "SCSS", img: ScssIcon },
  { id: 4, skillName: "Bootstrap 5", img: BootstrapIcon },
  { id: 5, skillName: "Tailwind", img: TailwindIcon },
  { id: 6, skillName: "JavaScript", img: JsIcon },
  { id: 7, skillName: "ReactJS", img: ReactIcon },
  { id: 8, skillName: "Redux-Toolkit", img: ReduxIcon },

  { id: 9, skillName: "Git", img: GitIcon },
  { id: 10, skillName: "Github", img: GithubIcon },
];

export const projectsData = [
  {
    id: 1,
    projectName: "luxe - vogue",
    img: project1Img,
    desc: "Explore my e-commerce showcase: user-friendly design, seamless navigation, and eye-catching product displays. Experience digital retail elegance in action",
    activeLink: "https://luxe-vogue.netlify.app/",
    repoLink: "https://github.com/sanyamnegi9/Luxe-Vogue",
  },
  {
    id: 2,
    projectName: "luxe - vogue",
    img: project1Img,
    desc: "Explore my e-commerce showcase: user-friendly design, seamless navigation, and eye-catching product displays. Experience digital retail elegance in action",
    activeLink: "https://luxe-vogue.netlify.app/",
    repoLink: "https://github.com/sanyamnegi9/Luxe-Vogue",
  },
  {
    id: 3,
    projectName: "luxe - vogue",
    img: project1Img,
    desc: "Explore my e-commerce showcase: user-friendly design, seamless navigation, and eye-catching product displays. Experience digital retail elegance in action",
    activeLink: "https://luxe-vogue.netlify.app/",
    repoLink: "https://github.com/sanyamnegi9/Luxe-Vogue",
  },
];

export const coursesData = [
  {
    id: 1,
    img: sololearnIcon,
    courseName: "HTML",
    organization: "Sololearn",
    skills: "HTML, HTML5",
    credentialUrl: "https://www.sololearn.com/certificates/CT-7AWTQ4DM",
    certificate: htmlCer,
  },
  {
    id: 2,
    img: sololearnIcon,
    courseName: "React + Redux",
    organization: "Sololearn",
    skills: "Redux.js, React.js",
    credentialUrl: "https://www.sololearn.com/certificates/CT-NYBMO4EZ",
    certificate: reactReduxCer,
  },
  {
    id: 3,
    img: freeCodeCampIcon,
    courseName: "Responsive Web Design",
    organization: "freeCodeCamp",
    skills: "HTML, Cascading Style Sheets (CSS), Responsive Web Design",
    credentialUrl:
      "https://www.freecodecamp.org/certification/Sanyamnegi/responsive-web-design",
    certificate: responsiveCer,
  },
  {
    id: 4,
    img: freeCodeCampIcon,
    courseName: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    skills: "JavaScript, ES6",
    credentialUrl:
      "https://www.freecodecamp.org/certification/Sanyamnegi/javascript-algorithms-and-data-structures",
    certificate: jsCer,
  },
];
