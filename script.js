//expands the white boxes after hovering on them
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.myself').forEach(div => {
      div.addEventListener('mouseenter', function() {
          this.classList.add('expanded');
      });
  });
});
//create the typing effect
function typeEffect(element, text, speed) {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

typing_speed =120; 
const title = document.getElementById('typing-title');
title.innerHTML = '';
title.className = 'typing_title';
//initialize the typing effect on the title
document.addEventListener('DOMContentLoaded', (event) => {
  typeEffect(title, "\"Hi, I'm Valentin.\"", typing_speed);
});

const subtitle = document.getElementById('typing-subtitle');
subtitle.innerHTML ="\u200B"; //invisible character to keep the size proportion the same
subtitle.className = 'typing_subtitle';
setTimeout(3000); //delay the typing effect on the "About_Me" text
//initialize the typing effect on the about me section
document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    typeEffect(subtitle, "<About_Me>", typing_speed);
  }, 3000); // 3000 milliseconds delay after opening the page
});


