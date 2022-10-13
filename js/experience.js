AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Front End Developer",
    cardImage: "assets/images/experience-page/Del.png",
    place: "D&L IT ",
    time: "(Jan, 2021 - Current Time)",
    desp: "<ul><li>Development of Websites on demand using JavaScript, React, HTML, CSS</li><li>Consulting work for our Customers</li><li>Prospection and creation of course via web</li><li>Starting development mobile application by React Native</li><li>JavaScript Blog Creation</li></ul>" 
  },

  {
    title: "System Engineer",
    cardImage: "assets/images/experience-page/Marinit_1.png",
    place: "Marin IT AS",
    time: "(Jan, 2012 - 2021)",
    desp: "<ul><li>Development and improvement on Demand of JavaScript, HTML, CSS, XML and LotuScript software used on the company's Vessels and Its Onshore Offices in Brazil and Norway</li> <li>Development and creation of new application in Javascript, HTML, CSS, XML and LotuScript, for QMS Department which has been used at Vessels company </li> <li>Responsible by support and improvement to Vessels software such as : SGS/SGI,  Material Movement and Certificates and Documents applications</li><li>Management of applications hosted on the cloud by using Microsoft Azure</li> <li>Domino Administrator for Notes Application hosted in Domino Server.</li> </ul>" 
  },
  {
    title: "System Engineer",
    cardImage: "assets/images/experience-page/Brdistribuidora_1.png", 
    place: "BR Oil Distributor (Petrobras)",
    time: "(Sep, 2010- Aug, 2012)",
    desp: "<ul><li>Development and support to Web applications in JavaScript, Java, HTML, CSS, XML and LotuScript</li><li>Development of API`s on Demand for BR customers </li><li>Support by Call Center for BR`s Users </li><li>Domino Server Administrator</li></ul>",
  },
  {
    title: "System Engineer",
    cardImage: "assets/images/experience-page/IBM.png",    
    place: "IBM (International Business Machines Corporation)",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<ul><li>Development of Audit System Program in JavaScript/LotuScript </li><li>Development of JavaScript, PHP, LotuScript codes used by customers also maintenance of Domino Server and IBM® Db2®</li><li>Supervision of applications running on DB2 Server for occasional critical environments</li><li>Supervisor and support for junior and intern developers</li> </ul>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Github screen (project)

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Nhaac Restaurant Website",
   /* cardImage: "assets/images/experience-page/1.jpg",*/
    cardImage: "assets/images/designs/ProjetoPizza.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Registration Form",
  /*  cardImage: "assets/images/experience-page/2.jpg", */
    cardImage: "assets/images/designs/Blog_dark_light.png",
    description: "Registration Form to receive newsletter",
  },
  {
    title: "Landing Page Nike",
    /* cardImage: "assets/images/experience-page/3.jpg", */
    cardImage: "assets/images/designs/Projeto_Chuteira.jpg",
    description:
      "Landing Page Football Boots Nike ",
  },
  {
    title: "Tutorial Rest API (In Developing)",
    cardImage: "assets/images/designs/rest_tutorial.png",
    description:"REST API  tutorial for all levels: What is Rest?, HTTP methods, Resource Name, IdemPotence...",
  },
  {
    title: "BMI calculator",
    cardImage:"assets/images/designs/BMI Calculator.jpg",
    description:"BMI Calculator app. Developed using Flutter",
  },
];

/* const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
    (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards); 

// Hackathon Section

 /*const hackathonsection = document.querySelector(".hackathon-section"); */


/* const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3); */
