// script.js - enkel interaktivitet
document.getElementById('year').textContent = new Date().getFullYear();

// meny-toggle för mobil
const btn = document.querySelector('.menu-toggle');
const navUL = document.querySelector('.main-nav ul');
if(btn){
  btn.addEventListener('click', ()=> {
    if(getComputedStyle(navUL).display === 'flex'){
      navUL.style.display = 'none';
    } else {
      navUL.style.display = 'flex';
      navUL.style.flexDirection = 'column';
      navUL.style.background = '#071821';
      navUL.style.padding = '12px';
      navUL.style.position = 'absolute';
      navUL.style.right = '16px';
      navUL.style.top = '64px';
      navUL.style.borderRadius = '8px';
    }
  });
}

// Enkel klientvalidering (visar alert vid lyckad inskickning)
const forms = document.querySelectorAll('form');
forms.forEach(f => {
  f.addEventListener('submit', (e) => {
    // Allow normal submit - Formspree/Netlify will handle it.
    // But show a quick message for usability:
    setTimeout(()=> {
      try { alert('Tack! Din ansökan/melding har skickats.'); } catch(e){}
    }, 200);
  });
});
