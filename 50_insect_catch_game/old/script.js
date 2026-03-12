const screens = document.querySelectorAll(".screen");
const choose_rola_btns = document.querySelectorAll(".choose-rola-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.querySelector(".game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let seconds = 0;
let score = 0;
let selected_rola = {};

start_btn.addEventListener("click", () => screens[0].classList.add("up"));

choose_rola_btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.src;
    selected_rola = { src };
    screens[1].classList.add("up");

    setTimeout("createRola", 1000)
    // startGame();
  });
});

function startGame()
{
  setInterval(increaseTime, 1000);
}

function increaseTime()
{
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createRola()
{
  const rola = document.createElement("img");
  rola.classList.add("rola");
  const { x, y } = getRandomLocation();
  rola.style.top = y + "px";
  rola.style.left = x + "px";
  rola.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`
  rola.src = selected_rola.src;

  rola.addEventListener("click", catchRola);

  game_container.appendChild(rola)
}

function getRandomLocation()
{
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.floor(Math.random() * (width - 200) + 100);
  const y = Math.floor(Math.random() * (height - 200) + 100);

  return {
    x: x,
    y: y,
  }
}

function catchRola()
{

}
