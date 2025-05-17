/// Navbar
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

/// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

///category portfolio
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');

    if (category === 'all' || cardCategory === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

  // Tampilkan semua saat halaman pertama kali dimuat
  document.addEventListener('DOMContentLoaded', () => {
    filterProjects('all');
  });

  ///category filterCertificate
 function filterCertificate(category) {
  const cards = document.querySelectorAll('.certificate-card');

  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');

    if (category === 'all' || cardCategory === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

  // Tampilkan semua saat halaman pertama kali dimuat
  document.addEventListener('DOMContentLoaded', () => {
    filterCertificate('all');
  });
