const resetBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");
const timerEl = document.getElementById("timer");
const root = document.querySelector(":root");

const totalSeconds = 300;
let playing = false;
let currentSeconds = totalSeconds;

timerEl.textContent = formatTime(totalSeconds);

const timeInterval = setInterval(run, 1000);

playBtn.addEventListener("click", () =>
{
	playing = !playing;
	playBtn.classList.toggle("pause");
	const playIcon = playBtn.querySelector("i");
	playIcon.classList.toggle("fa-play");
	playIcon.classList.toggle("fa-pause");
});

resetBtn.addEventListener("click", reset);

function run()
{
	if(playing) {
		currentSeconds -= 1;
		if(currentSeconds <= 0) {
			clearInterval(timeInterval);
			reset();
			return;
		}	
		timerEl.textContent = formatTime(currentSeconds);
		root.style.setProperty("--degrees", calcDeg());
	}
}

function reset()
{
	playing = false;
	playBtn.classList.remove("pause");
	const playIcon = playBtn.querySelector("i");
	playIcon.classList.remove("fa-pause");
	playIcon.classList.add("fa-play");
	currentSeconds = totalSeconds;
	timerEl.textContent = formatTime(currentSeconds);
	root.style.setProperty("--degrees", "0deg");
}

function calcDeg()
{
	return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

function formatTime(seconds)
{
	const minutes = Math.floor(seconds / 60);
	const newSeconds = seconds % 60;

	return `${minutes.toString().padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
}
