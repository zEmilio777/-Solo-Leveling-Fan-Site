const buttons = document.querySelectorAll('nav button.nav-btn');
const sections = document.querySelectorAll('main section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.getAttribute('data-target');

    sections.forEach(section => {
      if(section.id === target){
        section.classList.add('active');
        section.scrollTop = 0;
      } else {
        section.classList.remove('active');
      }
    });
  });
});
