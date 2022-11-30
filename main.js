//* GALLERY

const showAllBtn = document.querySelector('.showAllBtn');
const minimalismBtn = document.querySelector('.minimalismBtn');
const vintageBtn = document.querySelector('.vintageBtn');
const creativeBtn = document.querySelector('.creativeBtn');
const filterBtnAll = document.querySelectorAll('.filterBtn');

const allPhotos = document.querySelectorAll('.photo');
const minimalismPhotos = document.querySelectorAll('.minimalism');
const vintagePhotos = document.querySelectorAll('.vintage');
const creativePhotos = document.querySelectorAll('.creative');

filterBtnAll.forEach((btn) => {
  btn.addEventListener('click', () => {
    allPhotos.forEach((photo) => {
      photo.classList.add('hide');

      if (btn.classList.contains('minimalismBtn')) {
        minimalismPhotos.forEach((photo) => {
          photo.classList.remove('hide');
        });
        document.querySelector('.photos').style.flexDirection = 'column';
      } else if (btn.classList.contains('vintageBtn')) {
        vintagePhotos.forEach((photo) => {
          photo.classList.remove('hide');
        });
        if (window.innerWidth > 767) {
          document.querySelector('.photos').style.flexDirection = 'row';
        }
      } else if (btn.classList.contains('creativeBtn')) {
        creativePhotos.forEach((photo) => {
          photo.classList.remove('hide');
        });
        if (window.innerWidth > 767) {
          document.querySelector('.photos').style.flexDirection = 'row';
        }
      } else {
        allPhotos.forEach((photo) => {
          photo.classList.remove('hide');
        });
        document.querySelector('.photos').style.flexDirection = 'column';
      }
    });
  });
});

//* Hamburger Menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navmenu');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

//* Sticky Navbar

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', window.scrollY > 150);
});
