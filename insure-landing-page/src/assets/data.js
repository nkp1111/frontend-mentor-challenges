import logo from './images/logo.svg'
import introDesktop from './images/image-intro-desktop.jpg'
import introMobile from './images/image-intro-mobile.jpg'
import affordablePriceIcon from './images/icon-affordable-prices.svg'
import snappyProcessIcon from './images/icon-snappy-process.svg'
import peopleFirstIcon from './images/icon-people-first.svg'
import iconFacebook from './images/icon-facebook.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconPinterest from './images/icon-pinterest.svg'
import iconInstagram from './images/icon-instagram.svg'

const navData = [
  { id: 1, title: "How we work", link: "" },
  { id: 2, title: "Blog", link: "" },
  { id: 3, title: "Account", link: "" },
]

const featureSectionArticle = [
  {
    id: 1,
    title: "Snappy Process",
    description: " Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    image: snappyProcessIcon,
  },
  {
    id: 2,
    title: "Affordable Prices",
    description: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    image: affordablePriceIcon,
  },
  {
    id: 3,
    title: "People First",
    description: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    image: peopleFirstIcon,
  },
]

const footerContactIcons = [
  { id: 1, icon: iconFacebook, title: "facebook", link: "" },
  { id: 2, icon: iconTwitter, title: "twitter", link: "" },
  { id: 3, icon: iconPinterest, title: "pinterest", link: "" },
  { id: 4, icon: iconInstagram, title: "instagram", link: "" },
]

const footerNavLink = [
  {
    id: 1,
    title: "Our company",
    sublink: [
      { id: 1, title: "How we work", link: "" },
      { id: 2, title: "Why Insure?", link: "" },
      { id: 3, title: "View plans", link: "" },
      { id: 4, title: "Reviews", link: "" },
    ]
  },
  {
    id: 2,
    title: "Help me",
    sublink: [
      { id: 1, title: "FAQ", link: "" },
      { id: 2, title: "Terms of use", link: "" },
      { id: 3, title: "Privacy policy", link: "" },
      { id: 4, title: "Cookies", link: "" },
    ]
  },
  {
    id: 3,
    title: "Contact",
    sublink: [
      { id: 1, title: "Sales", link: "" },
      { id: 2, title: "Support", link: "" },
      { id: 3, title: "Live chat", link: "" },
    ]
  },
  {
    id: 4,
    title: "Others",
    sublink: [
      { id: 1, title: "Careers", link: "" },
      { id: 2, title: "Press", link: "" },
      { id: 3, title: "Licenses", link: "" },
    ]
  },
]

export {
  logo,
  navData,
  introDesktop,
  introMobile,
  featureSectionArticle,
  footerContactIcons,
  footerNavLink,
}