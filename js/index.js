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

//set up the Nav
const nav = document.querySelectorAll("a");
nav.forEach((link, index) => {
  index += 1;
  link.href = siteContent.nav[`nav-item-${index}`];
  link.textContent = siteContent.nav[`nav-item-${index}`];
});

//add CTA
const cta = document.querySelector(".cta");

const ctaImage = cta.querySelector("img");
ctaImage.src = "img/header-img.png";

const banner = cta.querySelector("h1");
banner.innerHTML = "DOM<br> Is<br> Awesome";

const btn = cta.querySelector("button");
btn.textContent = "Get Started";

//Main Content
const mainContent = document.querySelector(".main-content");

const middleImage = mainContent.querySelector("img");
middleImage.src = "img/mid-page-accent.jpg";

//Main Content Text
const topContent = document.querySelector(".top-content");

const topH4s = topContent.querySelectorAll("h4");
topH4s[0].textContent = "Features";
topH4s[1].textContent = "About";

const topPs = topContent.querySelectorAll("p");
topPs[0].textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

topPs[1].textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

//Bottom Content

const bottomContent = document.querySelector(".bottom-content");

const bottomH4s = bottomContent.querySelectorAll("h4");
bottomH4s[0].textContent = "Services";
bottomH4s[1].textContent = "Product";
bottomH4s[2].textContent = "Vision";

const bottomPs = bottomContent.querySelectorAll("p");

bottomPs[0].textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

bottomPs[1].textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

bottomPs[2].textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
