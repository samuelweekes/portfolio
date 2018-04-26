//Grab html elements
const navbar = document.getElementsByClassName("top-nav-bar")[0];
const projectSection = document.getElementById("project");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");
const skillSection = document.getElementById("skill");
//Grab individual html elements
const aboutCode = document.getElementsByClassName("about-me-joke")[0];
const contactItem = document.getElementsByClassName("contact-item");
const projectItemLeft = document.getElementsByClassName("project-img-right");
const projectItemRight = document.getElementsByClassName("project-img-left");
const skill1 = document.getElementsByClassName("skill-hr1")[0];
const skill2 = document.getElementsByClassName("skill-hr2")[0];
const skill3 = document.getElementsByClassName("skill-hr3")[0];
const skill4 = document.getElementsByClassName("skill-hr4")[0];
const skill5 = document.getElementsByClassName("skill-hr5")[0];
const skills = [skill1, skill2, skill3, skill4, skill5];
const skillsAnim = ['skill-hr1-anim', 'skill-hr2-anim', 'skill-hr3-anim', 'skill-hr4-anim', 'skill-hr5-anim'];

window.addEventListener('scroll', () => {scrollFunction()});

function getPos(el) {
  for (var lx=0, ly=0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return {x: lx,y: ly};
}

function scrollFunction() {
  if(window.pageYOffset >= getPos(aboutSection).y*0.8) {
    aboutCode.classList.add('about-me-joke-animation');
  }
  if(window.pageYOffset+700 >= getPos(contactSection).y) {
    for(let i=0;i<contactItem.length;i++) {
      contactItem[i].classList.add('contact-item-animate');
    }
  }
  if(window.pageYOffset+700 >= getPos(projectSection).y*1.5) {
    for(let i=0;i<projectItemLeft.length;i++) {
      projectItemLeft[i].classList.add('project-img-animate-left');
    }
    for(let x=0;x<projectItemRight.length;x++) {
      projectItemRight[x].classList.add('project-img-animate-right');
    }
  }
  if(window.pageYOffset >= getPos(skillSection).y*0.9) {
    for(let i=0;i<skills.length;i++) {
      skills[i].classList.add(skillsAnim[i]);
    }
  }
}
