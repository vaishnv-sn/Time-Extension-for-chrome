const timeElement = document.getElementById('time');
const currentTime = new Date().toTimeString();
timeElement.textContent = `Current time is: ${currentTime}`
