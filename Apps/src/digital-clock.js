setInterval(() => {
  const time = document.getElementById("time");
  const date = document.getElementById("date");
  const timeNow = new Date();
  const timeString = timeNow.toLocaleTimeString();
  const dateString = timeNow.toLocaleDateString();
  time.textContent = timeString;
  date.textContent = dateString;
});
