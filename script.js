document.addEventListener("DOMContentLoaded", () => {
  var date = document.getElementById("date");
  var hrs = document.getElementById("hr");
  var mins = document.getElementById("mn");
  var sec = document.getElementById("sc");
  var ampm = document.getElementById("ampm");

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const updateClock = () => {
    let today = new Date();
    let d = today.getDate();
    let mo = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    const amorpm = h >= 12 ? "P.M." : "A.M.";

    h = h % 12;
    h = h ? h : 12;

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    date.textContent = `${d} ${months[mo]} ${y}`;
    hrs.textContent = `${h}`;
    mins.textContent = `${m}`;
    sec.textContent = `${s}`;
    ampm.textContent = `${amorpm}`;
  };
  updateClock();
  setInterval(updateClock, 1000);
});
