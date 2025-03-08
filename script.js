// Переменные
let stars = 0; // Текущее количество звезд
let starsPerSecond = 0; // Автоматический доход в секунду

// Элементы DOM
const starsCountElement = document.getElementById('starsCount');
const clickButton = document.getElementById('clickButton');
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');

// Функция обновления счетчика звезд
function updateStarsCount() {
  starsCountElement.textContent = stars.toFixed(0);
}

// Клик по кнопке
clickButton.addEventListener('click', () => {
  stars += 1;
  updateStarsCount();
});

// Улучшение 1: +1 звезда/сек за 10 звезд
upgrade1.addEventListener('click', () => {
  if (stars >= 10) {
    stars -= 10;
    starsPerSecond += 1;
    updateStarsCount();
    alert('Улучшение куплено: +1 звезда/сек!');
  } else {
    alert('Недостаточно звезд!');
  }
});

// Улучшение 2: +5 звезд/сек за 50 звезд
upgrade2.addEventListener('click', () => {
  if (stars >= 50) {
    stars -= 50;
    starsPerSecond += 5;
    updateStarsCount();
    alert('Улучшение куплено: +5 звезд/сек!');
  } else {
    alert('Недостаточно звезд!');
  }
});

// Автоматический доход
setInterval(() => {
  stars += starsPerSecond;
  updateStarsCount();
}, 1000);