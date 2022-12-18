import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import pinterestIcon from './images/icon-pinterest.svg'
import instagramIcon from './images/icon-instagram.svg'
import logo from './images/logo.svg'

// logo
const logoIcon = logo

// navbar data (links)
const navbarData = [
  "Features",
  "Pricing",
  "Resources",
]

// footer data
const footerData = [
  {
    id: 1,
    title: "Features",
    subitems: [
      "Link Shortening",
      "Branded Links",
      " Analytics",
    ],
  },
  {
    id: 2,
    title: "Resources",
    subitems: [
      "Blog",
      "Developers",
      "Support",
    ],
  },
  {
    id: 3,
    title: "Company",
    subitems: [
      "About",
      "Our Team",
      "Careers",
      "Contact",
    ],
  },
]

// footer icons
const footerIconData = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon]


export { navbarData, footerData, footerIconData, logoIcon }