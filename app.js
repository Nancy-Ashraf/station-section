const trains = {
  1: {
    speed: 50,
    lightening: 10,
    humidity: 23,
    doorStatus: "open",
    alarm: "normal",
    location: "Alexandria",
  },
  2: {
    speed: 50,
    lightening: 10,
    humidity: 23,
    doorStatus: "open",
    alarm: "normal",
    location: "Cairo",
  },
  3: {
    speed: 50,
    lightening: 10,
    humidity: 23,
    doorStatus: "open",
    alarm: "normal",
    location: "Dahb",
  },
};

const trainButtons = document.querySelectorAll(".train-button");
const container = document.querySelector(".container");

const createTrainTemplate = (train) => {
  return `<div class="layer-content">
    <div class="layer-info">
      
      <span>speed=${train.speed}</span>
      <br/>
      <span>lightening=${train.lightening}</span>
      <br/>
      <span>humidity=${train.humidity}</span>
      <br/>
      <span>door statu=${train.doorStatus}</span>
      <br/>
      <span>alarm=${train.alarm}</span>
      <br/>
      <span>location=${train.location}</span>
      <br/>
    </div> 
    </div>`;
};

trainButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    const trainElementDiv = document.createElement("div");
    trainElementDiv.classList.add("train-info");
    trainElementDiv.innerHTML = createTrainTemplate(
      trains[Number(e.target.id)]
    );
    if (container.querySelector(".train-info")) {
      container.querySelector(".train-info").remove();
    }
    container.appendChild(trainElementDiv);
  });
});
