const lapTimeInput = document.getElementById('lap-time');
const addLapButton = document.getElementById('add-lap');
const lapTimesList = document.getElementById('lap-times-list');
const bestLapDisplay = document.getElementById('best-lap');
const averageLapDisplay = document.getElementById('average-lap');

let lapTimes = [];

function updateLapStats() {
  if (lapTimes.length === 0) {
    bestLapDisplay.textContent = 'N/A';
    averageLapDisplay.textContent = 'N/A';
    return;
  }

  const bestLap = Math.min(...lapTimes);
  const averageLap = lapTimes.reduce((acc, time) => acc + time, 0) / lapTimes.length;

  bestLapDisplay.textContent = bestLap.toFixed(2);
  averageLapDisplay.textContent = averageLap.toFixed(2);
}

function addLapTime() {
  const lapTime = parseFloat(lapTimeInput.value);

  if (isNaN(lapTime) || lapTime <= 0) {
    alert('Please enter a valid lap time');
    return;
  }

  lapTimes.push(lapTime);
  const li = document.createElement('li');
  li.textContent = `Lap Time: ${lapTime} seconds`;
  lapTimesList.appendChild(li);

  updateLapStats();

  lapTimeInput.value = '';
}

addLapButton.addEventListener('click', addLapTime);
