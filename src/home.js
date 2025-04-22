import Pbj5 from './home.jpeg';

export default function home(){
    const main = document.querySelector(".main");
    main.innerHTML = '';
    const heading1 = document.createElement("h1");
    heading1.textContent = "Papa Joe's PB&J's";
    main.appendChild(heading1);
    const welcome = document.createElement("p");
    welcome.textContent = "Well yeeeehaaaawww do we got some great dang ol' Peanut and Butter Jelly Sandwiches for you today! Best in the business! Peanut butter from fresh picked Peruvian peanuts. Jelly just like mama used to make. Bread imported from the Amish. Best PB&J sandwich you've ever had or your money back!"
    main.appendChild(welcome);

    const hours = document.createElement("div");
    const heading2 = document.createElement("h2");
    heading2.textContent = "Hours";
    hours.appendChild(heading2);
    const list = document.createElement("ul");

    let liArray = [];
    for(let i = 0; i<=6; i++){
        liArray[i] = document.createElement("li");
    };

    liArray[0].textContent = "Sunday: 10am - 5pm";
    liArray[1].textContent = "Monday: 8am - 8pm";
    liArray[2].textContent = "Tuesday: 8am - 8pm";
    liArray[3].textContent = "Wednesday: 8am - 8pm";
    liArray[4].textContent = "Thursday: 8am - 8pm";
    liArray[5].textContent = "Friday: 8am - 10pm";
    liArray[6].textContent = "Saturday: 8am - 10pm";

    for(let i = 0; i<=6; i++){
        list.appendChild(liArray[i]);
    };

    hours.appendChild(list);
    main.appendChild(hours);

    const location = document.createElement("div");
    const heading3 = document.createElement("h2");
    heading3.textContent = "Location";
    location.appendChild(heading3);
    const address = document.createElement("p");
    address.textContent = "126 PBJ Lane";
    location.appendChild(address);
    main.appendChild(location);

    const img = new Image();
    img.src = Pbj5;
    main.appendChild(img);

};