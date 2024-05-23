// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
     menuIcon.classList.toggle('fa-xmark');
     navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 100;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if(top >= offset && top < offset + height) {
               // active navbar links
               navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
               });
               // active sections for animation on scroll
               sec.classList.add('show-animate');
          }
          // if want to use animation that repeats on scroll use this
          else {
               sec.classList.remove('show-animate');
          }
     });
     // sticky header
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);

     //remove toggle icon and navbar when click navbar links (scroll)
     menuIcon.classList.remove('fa-xmark');
     navbar.classList.remove('active');

     // animation footer on scroll
     let footer = document.querySelector('footer');
     footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
     
     // Contact
     const scriptURL = 'https://script.google.com/macros/s/AKfycbzdAKSfgqdA30LQxenT2Nm0xSWeleBb-34pKOMw2Vr4F2ontPxzN8SIuio0WLM-aILO/exec'
     const form = document.forms['submit-to-google-sheet']
     const msg = document.getElementById("msg")
   
     form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
         .then(response =>{
             msg.innerHTML = "សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ"
             setTimeout(function(){
                 msg.innerHTML = ""
             },5000)
             form.reset()
         })
         .catch(error => console.error('Error!', error.message))
     })
}