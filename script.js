const endingMusic = document.getElementById("endingMusic");
const shutdownSound = document.getElementById("shutdownSound");
const shutdownScreen = document.getElementById("shutdownScreen");

const eggWindow = document.getElementById("eggWindow");
const creditsScreen = document.getElementById("creditsScreen");
const birthdayCheckBtn = document.getElementById("birthdayCheckBtn");

let runAwayCount = 0;

const mainWindow = document.getElementById("mainWindow");
const authWindow = document.getElementById("authWindow");
const poopWindow = document.getElementById("poopWindow");

const quiz1 = document.getElementById("quiz1");
const quiz2 = document.getElementById("quiz2");
const quiz3 = document.getElementById("quiz3");
const quiz4 = document.getElementById("quiz4");
const quiz5 = document.getElementById("quiz5");

const wrongWindow = document.getElementById("wrongWindow");
const wrongImage = document.getElementById("wrongImage");
const wrongText = document.getElementById("wrongText");

let currentQuiz = 1;

function hideAllWindows() {
  mainWindow.style.display = "none";
  authWindow.style.display = "none";
  poopWindow.style.display = "none";

  quiz1.style.display = "none";
  quiz2.style.display = "none";
  quiz3.style.display = "none";
  quiz4.style.display = "none";
  quiz5.style.display = "none";
  birthdayWindow.style.display = "none";
  binaryWindow.style.display = "none";

  wrongWindow.style.display = "none";
}

function showMiniWindow() {
  hideAllWindows();
  authWindow.style.display = "block";
}

function showPoopWindow() {
  hideAllWindows();
  poopWindow.style.display = "block";
}

function goBackMain() {
  hideAllWindows();
  mainWindow.style.display = "block";
}

function  tTest() {
  hideAllWindows();
  currentQuiz = 1;
  quiz1.style.display = "block";
}

function goQuiz2() {
  hideAllWindows();
  currentQuiz = 2;
  quiz2.style.display = "block";
}

function goQuiz3() {
  hideAllWindows();
  currentQuiz = 3;
  quiz3.style.display = "block";
}

function goQuiz4() {
  hideAllWindows();
  currentQuiz = 4;
  quiz4.style.display = "block";
}

function goQuiz5() {
  hideAllWindows();
  currentQuiz = 5;
  quiz5.style.display = "block";
}

function showWrong(imageName, textMessage) {
  hideAllWindows();

  wrongImage.src = imageName;
  wrongText.innerHTML = textMessage;

  wrongWindow.style.display = "block";
}

function backToQuiz() {
  hideAllWindows();

  if (currentQuiz === 1) quiz1.style.display = "block";
  if (currentQuiz === 2) quiz2.style.display = "block";
  if (currentQuiz === 3) quiz3.style.display = "block";
  if (currentQuiz === 4) quiz4.style.display = "block";
  if (currentQuiz === 5) quiz5.style.display = "block";
}

const birthdayWindow = document.getElementById("birthdayWindow");
const birthdayInput = document.getElementById("birthdayInput");
const birthdayMessage = document.getElementById("birthdayMessage");
const binaryWindow = document.getElementById("binaryWindow");

function finalError() {
  hideAllWindows();

  let count = 0;
  const total = 20;

  const errorTimer = setInterval(() => {
    const popup = document.createElement("div");

    popup.className = "window mini-window";
    popup.style.display = "block";
    popup.style.left = Math.random() * (window.innerWidth - 320) + "px";
    popup.style.top = Math.random() * (window.innerHeight - 220) + "px";
    popup.style.zIndex = 1000 + count;

    popup.innerHTML = `
      <div class="title-bar">
        <span>CRITICAL ERROR</span>
        <div class="title-buttons">
          <div class="title-btn">×</div>
        </div>
      </div>

      <div class="window-body center">
        <div class="question">
          시스템 오류 발생<br>
          404 not found
        </div>
      </div>
    `;

    document.querySelector(".desktop").appendChild(popup);

    count++;

    if (count >= total) {
      clearInterval(errorTimer);

      setTimeout(() => {
        birthdayWindow.style.display = "block";
        birthdayInput.focus();
      }, 500);
    }
  }, 120);
}

function checkBirthday() {
  const answer = birthdayInput.value;

  if (answer === "050310") {
    birthdayMessage.textContent = "인증 성공. 파일 복구 중...";

    document.body.classList.add("correct-effect");

    setTimeout(() => {
      document.body.classList.remove("correct-effect");
      birthdayWindow.style.display = "none";
binaryWindow.style.display = "block";

setTimeout(() => {
  showCredits();
}, 12000);    }, 1200);

  } else {
    birthdayMessage.textContent = ";;;";
    birthdayInput.value = "";
    birthdayInput.focus();
  }
}

function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("time").textContent = `${h}:${m}`;
}

updateTime();
setInterval(updateTime, 1000);

function runAwayButton() {
  if (birthdayInput.value === "050310") return;

  runAwayCount++;

  if (runAwayCount > 5) {
    birthdayCheckBtn.textContent = "이번만 봐줌";
    return;
  }

  const x = Math.random() * 180 - 90;
  const y = Math.random() * 120 - 60;

  birthdayCheckBtn.style.transform = `translate(${x}px, ${y}px)`;
}

birthdayInput.addEventListener("input", () => {
  birthdayInput.value = birthdayInput.value.replace(/[^0-9]/g, "");

  if (birthdayInput.value === "050310") {
    birthdayCheckBtn.textContent = "확인";
    birthdayCheckBtn.style.transform = "translate(0, 0)";
  }
});

function openEasterEgg() {
  eggWindow.style.display = "block";
}

function showCredits() {

  binaryWindow.style.display = "none";

  creditsScreen.style.display = "block";

  endingMusic.volume = 0.7;

  endingMusic.play();

  // 엔딩 끝나고 종료화면

  setTimeout(() => {

    creditsScreen.style.display = "none";

    shutdownScreen.style.display = "flex";

    shutdownSound.play();

  }, 52000);
}