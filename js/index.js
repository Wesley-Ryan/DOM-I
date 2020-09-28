const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navBar = document.querySelector("nav");

//Add new links with color
navBar.append("New Link 2");
navBar.prepend("New Link 1");
navBar.style.color = "green";

//set up the Nav
const nav = document.querySelectorAll("a");

console.log(nav);

nav.forEach((link, index) => {
  link.style.color = "green";
  index += 1;
  link.href = siteContent.nav[`nav-item-${index}`];
  link.textContent = siteContent.nav[`nav-item-${index}`];
});

//add CTA
const cta = document.querySelector(".cta");

const ctaImage = cta.querySelector("img");
ctaImage.src = "img/header-img.png";

const banner = cta.querySelector("h1");
banner.innerHTML = siteContent.cta.h1;

const btn = cta.querySelector("button");
btn.textContent = siteContent.cta.button;

//Main Content
const mainContent = document.querySelector(".main-content");

const middleImage = mainContent.querySelector("img");
middleImage.src = "img/mid-page-accent.jpg";

//Main Content Text
const topContent = document.querySelector(".top-content");

const topH4s = topContent.querySelectorAll("h4");
topH4s[0].textContent = siteContent["main-content"]["features-h4"];
topH4s[1].textContent = siteContent["main-content"]["about-h4"];

const topPs = topContent.querySelectorAll("p");
topPs[0].textContent = siteContent["main-content"]["features-content"];

topPs[1].textContent = siteContent["main-content"]["about-content"];

//Bottom Content

const bottomContent = document.querySelector(".bottom-content");

const bottomH4s = bottomContent.querySelectorAll("h4");
bottomH4s[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4s[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4s[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomPs = bottomContent.querySelectorAll("p");

bottomPs[0].textContent = siteContent["main-content"]["services-content"];

bottomPs[1].textContent = siteContent["main-content"]["product-content"];

bottomPs[2].textContent = siteContent["main-content"]["vision-content"];
//Contact

const contactSection = document.querySelector(".contact");

const contactH4 = contactSection.querySelector("h4");
contactH4.textContent = `Contact`;

const contactPs = contactSection.querySelectorAll("p");

contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

const footer = document.querySelector("footer");
const copyright = footer.querySelector("p");
copyright.textContent = siteContent.footer.copyright;
