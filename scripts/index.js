const themeSwitch = document.querySelectorAll('.theme-switcher__checkbox');
const headerMenuItems = document.querySelectorAll('.header__menu-item');
const hamburgerButton = document.querySelector('.header__hamburger-button');


//тумблер темы
themeSwitch.forEach(item => item.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';
  
    if (currentTheme === 'light') {
      targetTheme = 'dark'
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
  }));

  //открытие и закрытие габургера по кнопке
  hamburgerButton.addEventListener('click', () => {
      hamburgerButton.classList.toggle('header__hamburger-button_status_active');
  })

  //закрытие габургера с переходом по ссылке пункта меню
  headerMenuItems.forEach(item => item.addEventListener('click', () => {
    hamburgerButton.classList.remove('header__hamburger-button_status_active');
}))