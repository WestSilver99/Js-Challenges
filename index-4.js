const getDate = document.getElementById("d-day");

function calculateDay() {
  const eve = new Date("2022-12-24");
  const date = new Date();
  const dDay = eve - date;

  const day = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(Math.floor((dDay / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const min = String(Math.floor((dDay / (1000 * 60)) % 60)).padStart(2, "0");
  const sec = String(Math.floor((dDay / 1000) % 60)).padStart(2, "0");
  getDate.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

calculateDay();
setInterval(calculateDay, 1000);
