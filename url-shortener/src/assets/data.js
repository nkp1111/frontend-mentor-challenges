import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import pinterestIcon from './images/icon-pinterest.svg'
import instagramIcon from './images/icon-instagram.svg'
import logo from './images/logo.svg'
import BrandIcon from './images/icon-brand-recognition.svg'
import RecordsIcon from './images/icon-detailed-records.svg'
import CustomIcon from './images/icon-fully-customizable.svg'

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

// article data
const articleData = [
  {
    id: 1,
    heading: "Brand Recognition",
    description: "Boost your brand recognition with each click. Generic links don’t mean a thing.Branded links help instil confidence in your content.",
    image: BrandIcon
  },
  {
    id: 2,
    heading: "Detailed Records",
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: RecordsIcon
  },
  {
    id: 3,
    heading: "Fully Customizable",
    description: "Improve brand awareness and content discoverability through customizable inks, supercharging audience engagement.",
    image: CustomIcon
  },
]

const articleIcons = [BrandIcon, RecordsIcon, CustomIcon]

export { navbarData, footerData, footerIconData, logoIcon, articleData }