function updateAge() {
  // Birth: August 19, 2008, 16:05 Tehran time (UTC +3:30)
  const birth = new Date(Date.UTC(2008, 7, 19, 12, 35, 0));

  const now = new Date();

  let years = now.getUTCFullYear() - birth.getUTCFullYear();
  let months = now.getUTCMonth() - birth.getUTCMonth();
  let days = now.getUTCDate() - birth.getUTCDate();
  let hours = now.getUTCHours() - birth.getUTCHours();
  let seconds = now.getUTCSeconds() - birth.getUTCSeconds();

  if (seconds < 0) {
    seconds += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const prevMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0));
    days += prevMonth.getUTCDate();
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById("age").textContent =
    `${years} years, ${months} months, ${days} days, ${hours} hours, ${seconds} seconds old`;
}

updateAge();
setInterval(updateAge, 1000);
