// desktop sized images
import curiosityDesktop from './images/desktop/image-curiosity.jpg'
import deepEarthDesktop from './images/desktop/image-deep-earth.jpg'
import fisheyeDesktop from './images/desktop/image-fisheye.jpg'
import fromAboveDesktop from './images/desktop/image-from-above.jpg'
import gridDesktop from './images/desktop/image-grid.jpg'
import heroDesktop from './images/desktop/image-hero.jpg'
import interactiveDesktop from './images/desktop/image-interactive.jpg'
import nightArcadeDesktop from './images/desktop/image-night-arcade.jpg'
import pocketBorealisDesktop from './images/desktop/image-pocket-borealis.jpg'
import soccerTeamDesktop from './images/desktop/image-soccer-team.jpg'

// mobile sized images
import curiosityMobile from './images/mobile/image-curiosity.jpg'
import deepEarthMobile from './images/mobile/image-deep-earth.jpg'
import fisheyeMobile from './images/mobile/image-fisheye.jpg'
import fromAboveMobile from './images/mobile/image-from-above.jpg'
import gridMobile from './images/mobile/image-grid.jpg'
import heroMobile from './images/mobile/image-hero.jpg'
import interactiveMobile from './images/mobile/image-interactive.jpg'
import nightArcadeMobile from './images/mobile/image-night-arcade.jpg'
import pocketBorealisMobile from './images/mobile/image-pocket-borealis.jpg'
import soccerTeamMobile from './images/mobile/image-soccer-team.jpg'

// icons
import closeIcon from './images/icon-close.svg'
import facebookIcon from './images/icon-facebook.svg'
import hamburgerIcon from './images/icon-hamburger.svg'
import instagramIcon from './images/icon-instagram.svg'
import pinterestIcon from './images/icon-pinterest.svg'
import twitterIcon from './images/icon-twitter.svg'
import logo from './images/logo.svg'


// navbar nav items 
const navItems = [
  { id: 1, title: "About", link: "", },
  { id: 2, title: "Careers", link: "", },
  { id: 3, title: "Events", link: "", },
  { id: 4, title: "Products", link: "", },
  { id: 5, title: "Support", link: "", },
]

// feature images
const featureArticles = [
  {
    id: 1,
    title: "Deep earth",
    description: "",
    image: {
      desktop: deepEarthDesktop,
      mobile: deepEarthMobile,
    },
  },
  {
    id: 2,
    title: "Night arcade",
    description: "",
    image: {
      desktop: nightArcadeDesktop,
      mobile: nightArcadeMobile,
    },
  },
  {
    id: 3,
    title: "Soccer team VR",
    description: "",
    image: {
      desktop: soccerTeamDesktop,
      mobile: soccerTeamMobile,
    },
  },
  {
    id: 4,
    title: "The grid",
    description: "",
    image: {
      desktop: gridDesktop,
      mobile: gridMobile,
    },
  },
  {
    id: 5,
    title: "From up above VR",
    description: "",
    image: {
      desktop: fromAboveDesktop,
      mobile: fromAboveMobile,
    },
  },
  {
    id: 6,
    title: "Pocket borealis",
    description: "",
    image: {
      desktop: pocketBorealisDesktop,
      mobile: pocketBorealisMobile,
    },
  },
  {
    id: 7,
    title: "The curiosity",
    description: "",
    image: {
      desktop: curiosityDesktop,
      mobile: curiosityMobile,
    },
  },
  {
    id: 8,
    title: "Make it fisheye",
    description: "",
    image: {
      desktop: fisheyeDesktop,
      mobile: fisheyeMobile,
    },
  },
]


export {
  logo,
  hamburgerIcon,
  closeIcon,
  navItems,
  heroMobile,
  heroDesktop,
  interactiveMobile,
  interactiveDesktop,
  featureArticles,
}