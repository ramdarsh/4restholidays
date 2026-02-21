// Basic interactions: mobile nav toggle, smooth scrolling, simple form handling
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav if open
        const nav = document.getElementById('nav-list');
        if(nav && nav.classList.contains('show-nav')) nav.classList.remove('show-nav');
      }
    })
  })

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if(toggle && navList){
    toggle.addEventListener('click', ()=>{
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      navList.classList.toggle('show-nav');
    })
  }

  // Simple form submit (placeholder behavior)
  const form = document.getElementById('enquiryForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      // Basic validation
      if(!data.get('name') || !data.get('email') || !data.get('phone')){
        alert('Please fill Name, Phone and Email.');
        return;
      }
      // Simulate submit
      e.target.querySelector('button[type=submit]').disabled = true;
      e.target.querySelector('button[type=submit]').innerText = 'Sending...';
      setTimeout(()=>{
        alert('Thank you! Your enquiry has been received. We will contact you soon.');
        e.target.reset();
        e.target.querySelector('button[type=submit]').disabled = false;
        e.target.querySelector('button[type=submit]').innerText = 'Enquire Now';
      },900);
    })
  }
});
