import logo from './images/logo.svg'
import logoWhite from './images/logo-white.svg'
// background main image
import mockupsImage from './images/image-mockups.png'
//feature section article logos 
import onlineLogo from './images/icon-online.svg'
import budgetLogo from './images/icon-budgeting.svg'
import onboardLogo from './images/icon-onboarding.svg'
import apiLogo from './images/icon-api.svg'
// blog section article image 
import confettiImage from './images/image-confetti.jpg'
import currencyImage from './images/image-currency.jpg'
import planeImage from './images/image-plane.jpg'
import restaurantImage from './images/image-restaurant.jpg'
// footer icons 
import facebookIcon from './images/icon-facebook.svg'
import youtubeIcon from './images/icon-youtube.svg'
import twitterIcon from './images/icon-twitter.svg'
import pinterestIcon from './images/icon-pinterest.svg'
import instagramIcon from './images/icon-instagram.svg'
// hamburger menu
import hamburgerLogo from './images/icon-hamburger.svg'
import closeIcon from './images/icon-close.svg'

const navData = [
  "Home",
  " About",
  "Contact",
  " Blog",
  "Careers",
]

const featureArticleData = [
  // feature section articles 
  {
    id: 1,
    heading: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    image: onlineLogo,
  },
  {
    id: 2,
    heading: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    image: budgetLogo,
  },
  {
    id: 3,
    heading: "Fast Onboarding",
    description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    image: onboardLogo
  },
  {
    id: 4,
    heading: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    image: apiLogo,
  },
]

const blogArticleData = [
  // blog section articles 
  {
    id: 1,
    heading: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    author: "Claire Robinson",
    image: currencyImage,
  },
  {
    id: 2,
    heading: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you …",
    author: "Wilson Hutton",
    image: restaurantImage,
  },
  {
    id: 3,
    heading: "Take your Easybank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.We’ll even show you …",
    author: "Wilson Hutton",
    image: planeImage,
  },
  {
    id: 4,
    heading: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    author: "Claire Robinson",
    image: confettiImage,
  },
]

const footerLogos = [
  facebookIcon,
  youtubeIcon,
  twitterIcon,
  pinterestIcon,
  instagramIcon,
]

const footerItems = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
]

export {
  navData,
  logo, logoWhite,
  mockupsImage,
  featureArticleData,
  blogArticleData,
  footerItems, footerLogos,
  hamburgerLogo, closeIcon
}