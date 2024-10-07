
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
const background = document.querySelector(".first_dive");

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
    waetherCurrent.innerText = current;
    if (current === "Clouds") {
      background.style.backgroundImage = `url(assets/imge2.webp)`;
    } else if (current === "Rain") {
      background.style.backgroundImage = `url(assets/rainy2.jpg)`;
    } else if (current === "Clear") {
      background.style.backgroundImage = `url(assets/clear.webp)`;
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
    const tempermin = Math.round(element[1].main.temp_min);
    const tempermax = Math.round(element[1].main.temp_max);

console.log(tempermin,tempermax)
    const dateTime = new Date(element[1].dt * 1000);
    const hours = dateTime.toLocaleDateString();

    const html = `<div class="days_count">
                    <div class="only_img_bg">
                        <img src="https://openweathermap.org/img/wn/${imge}@2x.png" class="imge1">
                    </div>
                    <div class="border">
                        <h4 class="date_1">${hours}</h4>
                        <p class="condition_1">${weather}</p>
                    </div>
                    <div class="min_max_temp">
                        <p>${tempermin}°C</p>
                        <p>${tempermax}°C</p>
                    </div>
                </div>`;
    daysWea.insertAdjacentHTML("beforeend", html);
    // console.log(hours);
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
      <p class="time">${formattedHour}:00</p>
      <img src="https://openweathermap.org/img/wn/${imge}@2x.png" class="rainy" alt="${element[1].weather[0].description}">
      <p class="temperature">${temper}<span>°C</span></p>
    </div>`;

    contanerMovements.insertAdjacentHTML("beforeend", html);
  });
};

// Add event listener to the search button
serchBTn.addEventListener("click", () => {
  const city = greatInput.value;
  cheakWeather(city);
});

// Add event listener for the Enter key
greatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const city = greatInput.value;
    cheakWeather(city);
  }
});

// Initial check for a default city
cheakWeather("lahore")