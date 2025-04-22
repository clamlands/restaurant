import Pbj1 from './regular.jpeg';
import Pbj2 from './mexican.jpeg';
import Pbj3 from './icecream.jpeg';

export default function menu(){
    const main = document.querySelector(".main");
    main.innerHTML = '';
    const heading = document.createElement("h1")
    heading.textContent = "Our World-class menu!";
    main.appendChild(heading);
    const item1 = document.createElement("div");
    item1.classList.add("item");
    const text1 = document.createElement("div");
    text1.textContent = "Regular PB&J - $4.99";
    const img1 = new Image();
    img1.src = Pbj1;
    item1.appendChild(text1);
    item1.appendChild(img1);
    main.appendChild(item1);

    const item2 = document.createElement("div");
    item2.classList.add("item");
    const text2 = document.createElement("div");
    text2.textContent = "PB&J Quesadilla- $7.99";
    const img2 = new Image();
    img2.src = Pbj2;
    item2.appendChild(text2);
    item2.appendChild(img2);
    main.appendChild(item2);

    const item3 = document.createElement("div");
    item3.classList.add("item");
    const text3 = document.createElement("div");
    text3.textContent = "Ice Cream PB&J - $9.99";
    const img3 = new Image();
    img3.src = Pbj3;
    item3.appendChild(text3);
    item3.appendChild(img3);
    main.appendChild(item3);

};