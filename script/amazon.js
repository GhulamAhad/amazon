// const apiKey = "a4ea1145be22b234c6fe8cdd7f337009";
// const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

// const countryShow = document.querySelector(".country_show");
// const temperature = document.querySelector(".t_show");
// const strom = document.querySelector(".st_show");
// const serchBTn = document.querySelector(".serch_btn");
// const geatInput = document.querySelector(".counry_nput");
// const waetherCurrent = document.querySelector(".w_show");

// const firstH9 = document.querySelector(".first-10");
// const firstH8 = document.querySelector(".first-9");
// const firstH7 = document.querySelector(".first-8");
// const firstH6 = document.querySelector(".first-7");
// const firstH5 = document.querySelector(".first-6");
// const firstH4 = document.querySelector(".first-5");
// const firstH3 = document.querySelector(".first-4");
// const firstH2 = document.querySelector(".first-3");
// const firstH1 = document.querySelector(".first-2");
// const firstH0 = document.querySelector(".first-1");
// const timeA = document.querySelector(".time-1");
// const timeB = document.querySelector(".time-2");
// const timeC = document.querySelector(".time-3");
// const timeD = document.querySelector(".time-4");
// const timeE = document.querySelector(".time-5");
// const timeF = document.querySelector(".time-6");
// const timeG = document.querySelector(".time-7");
// const timeH = document.querySelector(".time-8");
// const timeI = document.querySelector(".time-9");
// const timej = document.querySelector(".time-10");
// const firstD = document.querySelector(".date_1");
// const SecouD = document.querySelector(".date_2");
// const thirdD = document.querySelector(".date_3");
// const forthD = document.querySelector(".date_4");
// const wA = document.querySelector(".condition_1");
// const wB = document.querySelector(".condition_2");
// const wC = document.querySelector(".condition_3");
// const wD = document.querySelector(".condition_4");
// const makeDaysWeater=(timeGet,temperature2)=>{
//   const html=`<div class="first">
//                             <p class="time-8">${timeGet}</p>
//                             <img src=${''} class="rainy">
//                             <p class="first-8">${temperature2}<span>°C</span></p>`
// }

// async function cheakWeather(city) {
//   try {
//     const response = await fetch(
//       apiURL + city + `&appid=${apiKey}&units=metric`
//     );
//     if (!response.ok) {
//       throw new Error("City not found");
//     }
//     const data = await response.json();
//     console.log(data);

//     countryShow.innerText = `${data.city.name}, ${data.city.country}`;
//     temperature.innerText = `${Math.round(data.list[0].main.temp)}`;
//     strom.innerText = `${data.list[0].wind.speed}`;
//     waetherCurrent.innerText = data.list[0].weather[0].main;

//     houresWeater(data);
//     daysWeather(data);
//   } catch (error) {
//     console.error(error);
//     alert(error.message);
//   }
// }

// const daysWeather = (getDays) => {

//   console.log(getDays);
//   // Implement logic to display daily weather if needed
// };

// const houresWeater = (getHour) => {
// const timeOn = [timeA, timeB, timeC, timeD,timeE,timeF,timeG,timeH,timeI,timej];
// const hourlyWeather = [firstH0, firstH1, firstH2, firstH3,firstH4,firstH5,firstH6,firstH7,firstH8,firstH9];

// for (let i = 0; i < hourlyWeather.length; i++) {
//     // Get the hour from dt_txt
// const dateTime = new Date(getHour.list[i].dt * 1000); // Convert UNIX timestamp to milliseconds
// const hours = dateTime.getHours();
// const formattedHour = hours > 12 ? hours - 12 : hours;
// const period = hours >= 12 ? 'PM' : 'AM';

//     const timepe=hourlyWeather[i].innerText = `${Math.round(getHour.list[i].main.temp)}°C`;
//     const tim=timeOn[i].innerText = `${formattedHour} ${period}`; // Display hour in AM/PM format
//     makeDaysWeater(tim,timepe) ;
//   }
// };

// serchBTn.addEventListener("click", function () {
//   const get = geatInput.value.trim();
//   if (get) {
//     cheakWeather(get);
//   } else {
//     alert("Please enter a city name");
//   }
// });

const apiKey = "a4ea1145be22b234c6fe8cdd7f337009";
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

const countryShow = document.querySelector(".country_show");
const temperature = document.querySelector(".t_show");
const strom = document.querySelector(".st_show");
const serchBTn = document.querySelector(".serch_btn");
const greatInput = document.querySelector(".counry_nput");
const waetherCurrent = document.querySelector(".w_show");
const contanerMovements = document.querySelector(".position2");
const detectNext = document.querySelector(".condition_2");
const daysWea = document.querySelector(".days_Wheater");
const background = document.querySelector(".wather_contaner");

// Function to check weather
async function cheakWeather(city) {
  try {
    const response = await fetch(
      apiURL + city + `&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    countryShow.innerText = `${data.city.name}, ${data.city.country}`;
    temperature.innerText = `${Math.round(data.list[0].main.temp)}`;
    strom.innerText = `${data.list[0].wind.speed}`;
    const current = data.list[0].weather[0].main;
    // console.log(current);
    waetherCurrent.innerText = current;
    if (current === "Clouds") {
      background.style.backgroundImage = `url(cluds.jpg)`;
    } else if (current === "Rain") {
      background.style.backgroundImage = `url(rany.jpg)`;
    } else if (current === "Clear") {
      background.style.backgroundImage = `url(clear.webp)`;
    }

    houresWeater(data);
    daysWeather(data);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
//function for getDays
const daysWeather = (getDays) => {
  const getDay = Object.entries(getDays.list).filter(
    (n, v) => v != 0 && v % 9 === 0
  );
  console.log(getDay)
  daysWea.innerHTML = "";
  getDay.forEach((element) => {
    const imge = element[1].weather[0].icon;
    const weather = element[1].weather[0].main;
    const dateTime = new Date(element[1].dt * 1000);
    const hours = dateTime.toLocaleDateString();

    const html = `<div class="days_count">
                    <div class="only_img_bg">
                        <img src="https://openweathermap.org/img/wn/${imge}@2x.png" class="imge1">
                    </div>
                    <div>
                        <h4 class="date_1">${hours}</h4>
                        <p class="condition_1">${weather}</p>
                    </div>
                </div>`;
    daysWea.insertAdjacentHTML("beforeend", html);
    console.log(hours);
  });
};

// Function to display hourly weather
const houresWeater = (getHour) => {
  const gethours = Object.entries(getHour.list).slice(0, 10);
  contanerMovements.innerHTML = "";

  gethours.forEach((element) => {
    const imge = element[1].weather[0].icon;
    const temper = Math.round(element[1].main.temp);
    const dateTime = new Date(element[1].dt * 1000);
    const hours = dateTime.getHours();
    const formattedHour = hours > 12 ? hours - 12 : hours;
    const period = hours >= 12 ? "PM" : "AM";

    const html = `<div class="first">
      <p class="time">${formattedHour} ${period}</p>
      <img src="https://openweathermap.org/img/wn/${imge}@2x.png" class="rainy" alt="${element[1].weather[0].description}">
      <p class="temperature">${temper}<span>°C</span></p>
    </div>`;

    contanerMovements.insertAdjacentHTML("beforeend", html); // Append instead of prepend
  });
};

// Add event listener to the search button
serchBTn.addEventListener("click", () => {
  const city = greatInput.value;
  cheakWeather(city);
});

// Initial check for a default city
cheakWeather("lahore");
