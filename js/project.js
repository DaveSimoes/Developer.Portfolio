AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Nhaac Restaurant WebSite",
   /* cardImage: "assets/images/design/ProjetoPizza.png",*/
    cardImage: "assets/images/designs/ProjetoPizza.png",
    description: "Nhaac Restaurant WebSite.",
    /* tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png", */
    Previewlink: "https://davesimoes.github.io/nhaackdavesimoes.github.io//",
    Githublink: "https://github.com/DaveSimoes/nhaackdavesimoes.github.io",
  },
  {
    title: "Registration Form",
    cardImage: "assets/images/designs/Blog_dark_light.png",
    description: "Registration Form built in JavaScript, HTML and CSS",
 /* tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png", */
    Previewlink: "",
    Githublink: "https://github.com/DaveSimoes/landing_page_darktheme",
  },
  {
    title: "Landing Page Nike",
    cardImage: "assets/images/designs/Projeto_Chuteira.jpg",
    description: "Landing Page Nike built using JS, HTML and CSS",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/DaveSimoes/LightandDarktheme",
  },
  {
    title: "Tutorial Rest API (In Developing)",
    cardImage: "assets/images/designs/rest_tutorial.png",
    description: "Tutorial Rest API Website",
 /* tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png", */
    Previewlink: "",
    Githublink: "https://github.com/DaveSimoes/LightandDarktheme",
  },
  {
    title: "BMI Calculator",
    cardImage: "assets/images/designs/bmicalculator.png",
    description: "BMI Calculator app. Developed built using Flutter",
    Previewlink: "",
    Githublink: "https://github.com/DaveSimoes/MyFirstAppMobile",
  },
 {
    title: "Responsive Resume Website",
    cardImage: "assets/images/designs/Resume_app.png",
    description: "Poker game built using typescript.",
  /*  tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png", */
    Previewlink: "https://davidsimoes-resume.netlify.app/",
    Githublink: "",
  }, 
 /* {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  }, */
/*  {
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    tagimg:
    Previewlink: "",
    Githublink: "", 
  }, */
 /* {
    title: "Minesweeper Game",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Minesweeper Game built using python Object Oriented Programming.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  }, */
/*  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  }, */
 /* {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    tagimg:
      "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "",
    Githublink: "",
  }, */
 /* {
    title: "Music Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  }, */
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
