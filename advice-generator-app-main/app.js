const apiHost = "https://api.adviceslip.com/advice";
const newAdvice = document.querySelector("#newAdvice");

let db = false;
let interval;
let adviceNum = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(ms, resolve));
}

async function fetchAdvice() {
  if (db) return;
  db = true;
  document.querySelector("#adviceText").innerText = "";
  await fetch(apiHost)
    .then((response) => response.json())
    .then(async (data) => {
      adviceNum++;
      document.querySelector("#adviceId").textContent = `ADVICE #${adviceNum}`;
      const advice = '"' + data.slip.advice + '"';
      let curr = 0;
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      interval = setInterval(() => {
        if (curr == advice.length) {
          clearInterval(interval);
          interval = undefined;
          return;
        }
        let letter = advice[curr];
        document.querySelector("#adviceText").textContent += letter;
        curr += 1;
      }, 25);
    });
  db = false;
}

fetchAdvice();
newAdvice.addEventListener("click", fetchAdvice);
