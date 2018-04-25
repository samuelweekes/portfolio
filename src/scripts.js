//Grab html elements
const navbar = document.getElementsByClassName("top-nav-bar")[0];
const projectSection = document.getElementById("project");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");
//Grab individual html elements
const aboutCode = document.getElementsByClassName("about-me-joke")[0];
const contactItem = document.getElementsByClassName("contact-item");
const projectItemLeft = document.getElementsByClassName("project-img-right");
const projectItemRight = document.getElementsByClassName("project-img-left");
window.addEventListener('scroll', () => {scrollFunction()});

function getPos(el) {
  for (var lx=0, ly=0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return {x: lx,y: ly};
}

function scrollFunction() {

  if(window.pageYOffset > 20) {
    navbar.classList.add("top-nav-changed");
  } else if (window.pageYOffset < 50) {
    navbar.classList.remove("top-nav-changed");
  }

  if(window.pageYOffset >= getPos(aboutSection).y*0.7) {
    aboutCode.classList.add('about-me-joke-animation');
  }

  if(window.pageYOffset+700 >= getPos(contactSection).y) {
    for(i=0;i<contactItem.length;i++) {
      contactItem[i].classList.add('contact-item-animate');
    }
  }

  if(window.pageYOffset+700 >= getPos(projectSection).y*1.5) {
    for(i=0;i<projectItemLeft.length;i++) {
      projectItemLeft[i].classList.add('project-img-animate-left');
    }
    for(x=0;x<projectItemRight.length;x++) {
      projectItemRight[x].classList.add('project-img-animate-right');
    }
  }

}
