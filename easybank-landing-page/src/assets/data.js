import logo from './images/logo.svg'
// background images
import backDekstop from './images/bg-intro-desktop.svg'
import backMobile from './images/bg-intro-mobile.svg'
// article images 
import onlineLogo from './images/icon-online.svg'
import budgetLogo from './images/icon-budgeting.svg'
import onboardLogo from './images/icon-onboarding.svg'
import apiLogo from './images/icon-api.svg'


const navData = [
  "Home",
  " About",
  "Contact",
  " Blog",
  "Careers",
]

const articleData = [
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

export { navData, logo, backDekstop, backMobile, articleData }