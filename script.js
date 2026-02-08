function updateAge() {
  // Birth: August 19, 2008, 4:05 PM Tehran time (UTC +3:30)
  const birthDateUTC = Date.UTC(2008, 7, 19, 12, 35);
  // Explanation:
  // 16:05 Tehran = 12:35 UTC

  const now = new Date().getTime();
  const ageMs = now - birthDateUTC;

  const ageYears = ageMs / (1000 * 60 * 60 * 24 * 365.2422);

  document.getElementById("age").textContent = ageYears.toFixed(9);
}

updateAge();
setInterval(updateAge, 100);
