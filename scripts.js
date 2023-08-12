// ГАМБУРГЕР

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger_active');
  nav.classList.toggle('nav-menu_active');
});

// ЗАГОЛОВОК АНИМ

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('second_title_active');
    } else {
      change.target.classList.remove('second_title_active');
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let title = document.querySelectorAll('.second_title');

for (let elm of title) {
  observer.observe(elm);
}

// ПАРАГРАФ АНИМ

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('second_par_active');
    } else {
      change.target.classList.remove('second_par_active');
    }
  });
}

let option = {
  threshold: [0.5],
};
let observere = new IntersectionObserver(onEntry, options);
let par = document.querySelectorAll('.second_par');

for (let elm of par) {
  observer.observe(elm);
}

// ДИВЫ АНИМ

document.addEventListener('DOMContentLoaded', () => {
  const secondMain = document.querySelector('.second_main');
  const div = document.querySelector('.sum_cont');
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let secondMainCenter = 850;

    if (scrollTop >= secondMainCenter) {
      div.classList.add('sum_cont_active');
    } else {
      div.classList.remove('sum_cont_active');
    }
  });
});

// Имплементация регистрации и входа

//Вход

let modalWindow = document.querySelector('.modal_window');
let closeBtn = document.querySelector('.close-modal-window');
let overlay = document.querySelector('.overlay');
let openBtn = document.querySelectorAll('.slider-btn');
let body = document.querySelector('body');

let show_logIn_window = function () {
  overlay.classList.remove('hidden');
  modalWindow.classList.remove('hidden');
  body.style.overflow = 'hidden';
};

let hide_logIn_window = function () {
  overlay.classList.add('hidden');
  modalWindow.classList.add('hidden');
  body.style.overflow = 'visible';
};

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', show_logIn_window);

  closeBtn.addEventListener('click', hide_logIn_window);
}

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    hide_logIn_window();
    hide_logUp_window();
    hide_settings_window();
  }
});

// Регистрация

const username = document.querySelector('.user-log-in');
const password = document.querySelector('.pass-log-in');
const logInBtn = document.querySelector('.modal_window_btn');
const registerLink = document.querySelector('.register-link');
const registerModalWindow = document.querySelector('.modal-window_register');
const closeRegisterBtn = document.querySelector('.close_modal_window');
const logInLink = document.querySelector('.logIn-link');
const registerModalWindowBtn = document.querySelector('.register_window_btn');
const userLogUp = document.querySelector('.user-log-up');
const passLogUp = document.querySelector('.pass-log-up');
const firstPage = document.getElementById('first_page');
const secondPage = document.getElementById('second_page');
const Body = document.querySelector('body');
const cabinet = document.querySelector('.cabinet');
const cabinetHover = document.querySelector('.cabinet_2');
const logInAlert = document.querySelector('.log-in-alert');

show_logUp_window = function () {
  hide_logIn_window();
  overlay.classList.remove('hidden');
  registerModalWindow.classList.remove('hidden');
  body.style.overflow = 'hidden';
};

hide_logUp_window = function () {
  overlay.classList.add('hidden');
  registerModalWindow.classList.add('hidden');
  body.style.overflow = 'visible';
};

logInLink.addEventListener('click', () => {
  hide_logUp_window();
  show_logIn_window();
});

closeRegisterBtn.addEventListener('click', hide_logUp_window);

registerLink.addEventListener('click', show_logUp_window);

// Механика
// создаем пустой массив
account = {};
// добавляем по кнопке добавление данных в local storage
registerModalWindowBtn.addEventListener('click', (e) => {
  e.preventDefault();
  account.username = userLogUp.value;
  account.password = passLogUp.value;
  hide_logUp_window();
  show_logIn_window();
  let addAccountData = localStorage.setItem(
    'accounts',
    JSON.stringify(account)
  );
});
// берем данные из local storage
const getAccountData = localStorage.getItem('accounts');
const accDataParsed = JSON.parse(getAccountData);
// console.log(accDataParsed);

// проверка совпадения данных регистрации и входа
logInBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    (accDataParsed.username === username.value) &
    (accDataParsed.password === password.value)
  ) {
    // firstPage.classList.add('hidden');
    // secondPage.classList.remove('hidden');
    // Body.style.backgroundColor = 'rgb(65, 65, 65)';
    cabinet.textContent = 'ЛИЧНЫЙ КАБИНЕТ';
    cabinet.classList.add('hidden');
    cabinetHover.classList.remove('hidden');
    hide_logIn_window();
  } else {
    logInAlert.classList.add('log-in-alert_active');
    setTimeout(() => {
      logInAlert.classList.remove('log-in-alert_active');
    }, 3000);
  }
});

cabinet.addEventListener('click', () => {
  show_logIn_window();
});

cabinetHover.addEventListener('click', () => {
  firstPage.classList.add('hidden');
  secondPage.classList.remove('hidden');
  Body.style.backgroundColor = 'rgb(65, 65, 65)';
});

// Sticky nav

stickyNav = document.querySelector('.sticky_nav');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1) {
    stickyNav.classList.add('sticky');
  } else {
    stickyNav.classList.remove('sticky');
  }
});

// кнопка возврата на главную
const backArrow = document.querySelector('.back-arrow');

backArrow.addEventListener('click', () => {
  firstPage.classList.remove('hidden');
  secondPage.classList.add('hidden');
  Body.style.backgroundColor = 'rgb(0, 0, 0)';
});

const yourName = document.querySelector('.your_name');

yourName.textContent = `Здраствуйте, ${accDataParsed.username}!`;

// настройки модал окно

const settingsModal = document.querySelector('.modal_window_settings');
const openSettingsBtn = document.querySelector('.open-settings');
const closeSettings = document.querySelector('.close-settings-window');
const secondOverlay = document.querySelector('.overlay_2');

openSettingsBtn.addEventListener('click', () => {
  settingsModal.classList.remove('hidden');
  secondOverlay.classList.remove('hidden');
});

let hide_settings_window = function () {
  settingsModal.classList.add('hidden');
  secondOverlay.classList.add('hidden');
};

closeSettings.addEventListener('click', () => {
  hide_settings_window();
});

// параметры
const saveBtn = document.querySelector('.modal-save-btn');
const userName = document.getElementById('user-name');
const userAge = document.getElementById('user-age');
const userWeight = document.getElementById('user-weight');
const userHeight = document.getElementById('user-height');

parameters = {};
saveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  parameters.name = userName.value;
  parameters.age = userAge.value;
  parameters.weight = userWeight.value;
  parameters.height = userHeight.value;
  hide_settings_window();
  let addParametrsData = localStorage.setItem(
    'parametrs',
    JSON.stringify(parameters)
  );
});
// берем данные из local storage
const getParametrsData = localStorage.getItem('parametrs');
const parDataParsed = JSON.parse(getParametrsData);

// суем данные в параметры личного кабинета
document.getElementById('name-li').textContent = `Имя: ${parDataParsed.name}`;
document.getElementById('age-li').textContent = `Возраст: ${parDataParsed.age}`;
document.getElementById(
  'weight-li'
).textContent = `Вес: ${parDataParsed.weight}`;
document.getElementById(
  'height-li'
).textContent = `Рост: ${parDataParsed.height}`;
// console.log(parDataParsed);

// добавление аватара
const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');
const avatar = document.querySelector('.avatar-load');

avatarInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      // Создаем элемент img для предварительного просмотра аватара
      const image = document.createElement('img');
      image.src = e.target.result;
      image.width = 220;
      image.height = 220;
      image.classList.add('rounded-avatar');
      // Сохраняем изображение в Local Storage
      localStorage.setItem('userAvatar', e.target.result);

      avatarPreview.innerHTML = '';
      avatarPreview.appendChild(image);
    };

    reader.readAsDataURL(file);
  }
});
//при загрузке окно подгружаем картинку из local storage
window.onload = () => {
  const savedAvatar = localStorage.getItem('userAvatar');
  if (savedAvatar) {
    const image = document.createElement('img');
    image.src = savedAvatar;
    image.width = 220;
    image.height = 220;
    image.classList.add('rounded-avatar');
    avatarPreview.appendChild(image);
  }
};
// BMI calc

// формула
let BMI = Number(
  (parDataParsed.weight / parDataParsed.height ** 2) * 10000
).toFixed(1);
// пихаем в модал окно
const contentModalTitle = document.getElementById('staticBackdropLabel');
const modalBody = document.querySelector('.body-modal');
const staticBackdropBTN = document.getElementById('staticBackdrop');
const modalbackdround = document.querySelector('.modal');

contentModalTitle.textContent = `Ваш Индекс Массы Тела: ${BMI} kg/m2`;

if (BMI <= 18) {
  modalBody.textContent = `Вы имеете не здоровые признаки худобы!`;
  modalBody.style.backgroundColor = 'red';
} else if ((BMI > 18) & (BMI < 25)) {
  modalBody.textContent = `Ваше тело в полном порядке!`;
  modalBody.style.backgroundColor = 'green';
} else if (BMI > 25) {
  modalBody.textContent = `Вы имеете не здоровые признаки полноты!`;
  modalBody.style.backgroundColor = 'red';
}

// кнопка тренировки

const trainingBtn = document.querySelector('.training-btn');
const trainingAlert = document.querySelector('.training-alert');

trainingBtn.addEventListener('click', () => {
  if (cabinet.classList.contains('hidden')) {
    window.location.href = 'training/index.html';
  } else {
    trainingAlert.classList.add('training-alert_active');
    setTimeout(() => {
      trainingAlert.classList.remove('training-alert_active');
    }, 3000);
  }
});

// График

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'День 1',
      'День 2',
      'День 3',
      'День 4',
      'День 5',
      'День 6',
      'День 7',
    ], // данные по X (по дням)
    datasets: [
      {
        label: 'Количество велотренировок',
        data: [2, 2, 3, 5, 6, 4, 3], // данные по Y (по кол-ву)
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Количество пробежек',
        data: [1, 3, 4, 2, 5, 8, 3],
        borderColor: 'rgb(192, 39, 39)',
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.35,
        borderCapStyle: 'round',
      },
    },
  },
});
