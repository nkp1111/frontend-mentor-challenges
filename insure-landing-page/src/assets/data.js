import logo from './images/logo.svg'
import introDesktop from './images/image-intro-desktop.jpg'
import introMobile from './images/image-intro-mobile.jpg'
import affordablePriceIcon from './images/icon-affordable-prices.svg'
import snappyProcessIcon from './images/icon-snappy-process.svg'
import peopleFirstIcon from './images/icon-people-first.svg'

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

export {
  logo,
  navData,
  introDesktop,
  introMobile,
  featureSectionArticle,
}