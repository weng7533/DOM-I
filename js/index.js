


const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelector('header');
const a1 = document.querySelector('a:nth-child(1)');
const a2 = document.querySelector('a:nth-child(2)');
const a3 = document.querySelector('a:nth-child(3)');
const a4 = document.querySelector('a:nth-child(4)');
const a5 = document.querySelector('a:nth-child(5)');
const a6 = document.querySelector('a:nth-child(6)');

a1.textContent = siteContent.nav["nav-item-1"];
a2.textContent = siteContent.nav["nav-item-2"];
a3.textContent = siteContent.nav["nav-item-3"];
a4.textContent = siteContent.nav["nav-item-4"];
a5.textContent = siteContent.nav["nav-item-5"];
a6.textContent = siteContent.nav["nav-item-6"];




const ctaCtaTextH1 = document.querySelector('.cta .cta-text h1');
//console.log(ctaCtaTextH1)
ctaCtaTextH1.textContent = siteContent.cta["h1"];
ctaCtaTextH1.style.display = 'flex';
ctaCtaTextH1.style.wordSpacing = '100vw';

const ctaCtaTextButton = document.querySelector('.cta .cta-text button');
ctaCtaTextButton.textContent = siteContent.cta["button"];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

const mainContentH41 = document.querySelector('.main-content .top-content .text-content:nth-child(1) h4:nth-child(1)');
mainContentH41.textContent = siteContent["main-content"]["features-h4"];

const mainContentP1 = document.querySelector('.main-content .top-content .text-content:nth-child(1) p')
mainContentP1.textContent = siteContent["main-content"]["features-content"];

const mainContentH2 = document.querySelector('.main-content .top-content .text-content:nth-child(2) h4')
mainContentH2.textContent = siteContent["main-content"]["about-h4"];

const mainContentP2 = document.querySelector('.main-content .top-content .text-content:nth-child(2) p')
mainContentP2.textContent = siteContent["main-content"]["about-content"];




const mainContentImg = document.querySelector('.main-content img')
mainContentImg.src = siteContent["main-content"]["middle-img-src"];


const bottomContentH41 = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) h4')
bottomContentH41.textContent = siteContent["main-content"]["services-h4"];

const bottomContentP1 = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) p')
bottomContentP1.textContent = siteContent["main-content"]["services-content"];


const bottomContentH42 = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) h4')
bottomContentH42.textContent = siteContent["main-content"]["product-h4"];

const bottomContentP2 = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) p')
bottomContentP2.textContent = siteContent["main-content"]["product-content"];

const bottomContentH43 = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) h4')
bottomContentH43.textContent = siteContent["main-content"]["vision-h4"];

const bottomContentP3 = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) p')
bottomContentP3.textContent = siteContent["main-content"]["vision-content"];


const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactP1 = document.querySelector('.contact p:nth-child(2)');
contactP1.textContent = siteContent["contact"]["address"];

const contactP2 = document.querySelector('.contact p:nth-child(3)');
contactP2.textContent = siteContent["contact"]["phone"];

const contactP3 = document.querySelector('.contact p:nth-child(4)');
contactP3.textContent = siteContent["contact"]["email"];

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];

document.querySelectorAll('header nav a').forEach(
  function (element){
    element.style.color = 'green';
  }
)

const newItem1 = document.createElement('a')
newItem1.textContent = 'item1';
const newItem2 = document.createElement('a')
newItem2.textContent = 'item2'

document.querySelector('header nav').prepend(newItem1);
document.querySelector('header nav').appendChild(newItem2);

header.style.border = 'thick  dotted red';


console.log(header.style)