import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';


const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
homeButton.style.cursor = "pointer";
menuButton.style.cursor = "pointer";
contactButton.style.cursor = "pointer";

homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', contact);

home();





