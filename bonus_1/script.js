const stopBtn = document.getElementById("stop");
const playBtn = document.getElementById("play");
const timerEl = document.getElementById("timer");
const root = document.querySelector(":root");
const alarm = document.getElementById("alarm");

// State
let totalSeconds = 300;
let playing = false;
let currentSeconds = totalSeconds;
let timeInterval = setInterval(run, 1000);

timerEl.textContent = formatTime(totalSeconds);

// EventListeners
playBtn.addEventListener("click", () =>
{
	playing = !playing;
	playBtn.classList.toggle("play");
	const playIcon = playBtn.querySelector("i");
	playIcon.classList.toggle("fa-play");
	playIcon.classList.toggle("fa-pause");
});

stopBtn.addEventListener("click", () =>
{
	reset();
	document.querySelector("body").style.backgroundColor = "#222";
	alarm.pause();
	alarm.currentTime = 0;
});

// Helper Functions
function run()
{
	if(playing) {
		currentSeconds -= 1;
		if(currentSeconds <= 0) {
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
	clearInterval(timeInterval);
	timeInterval = setInterval(run, 1000);
	document.querySelector("body").style.backgroundColor = "#f00";
	alarm.play();
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
