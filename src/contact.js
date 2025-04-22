import Pbj4 from './epic.jpeg';

export default function contact(){
    const main = document.querySelector(".main");
    main.innerHTML = '';
    const heading = document.createElement("h1");
    heading.textContent = "Contact us!";
    main.appendChild(heading);
    const number = document.createElement("p");
    number.textContent = "1-800-SANDWICH";
    main.appendChild(number);
    const text = document.createElement("p");
    text.textContent = "Contact us at the number above any time during store hours. Our wonderful staff will be there to answer any-and-all Peanut Butter & Jelly questions you may have!"
    main.appendChild(text);
    const img = new Image();
    img.src = Pbj4;
    main.appendChild(img);
}