// avatars 
import avatarAli from './images/avatar-ali.png'
import avatarAnisha from './images/avatar-anisha.png'
import avatarRichard from './images/avatar-richard.png'
import avatarShanai from './images/avatar-shanai.png'
// icons 
import iconClose from './images/icon-close.svg'
import iconFacebook from './images/icon-facebook.svg'
import iconHamburger from './images/icon-hamburger.svg'
import iconInstagram from './images/icon-instagram.svg'
import iconPinterest from './images/icon-pinterest.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconYoutube from './images/icon-youtube.svg'
// background image 
import bgDesktop from './images/bg-simplify-section-desktop.svg'
import bgMobile from './images/bg-simplify-section-mobile.svg'
import bgTablet from './images/bg-tablet-pattern.svg'
import illustrationImage from './images/illustration-intro.svg'
// logo
import logo from './images/logo.svg'
import logoFooter from './images/logo-footer.svg'


// navbar items 
const navItem = [
  { id: 1, item: "Pricing", link: "", },
  { id: 2, item: "Product", link: "", },
  { id: 3, item: "About Us", link: "", },
  { id: 4, item: "Careers", link: "", },
  { id: 5, item: "Community", link: "", },
]

// feature section : features
const featureSectionItems = [
  {
    id: 1,
    title: "Track company-wide progress",
    description: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again."
  },
  {
    id: 2,
    title: "Advanced built-in reports",
    description: "Set internal delivery estimates and track progress toward company goals.Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
  },
  {
    id: 3,
    title: "Everything you need in one place",
    description: "Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all-in -one team productivity solution."
  },
]


// Testimonial section: testimonial
const testimonialSectionItems = [
  {
    id: 1,
    user: "Anisha Li",
    review: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    avatar: avatarAnisha,
  },
  {
    id: 2,
    user: "Ali Bravo",
    review: "“We have been able to cancel so many other subscriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused.”",
    avatar: avatarAli,
  },
  {
    id: 3,
    user: "Richard Watts",
    review: "“Manage allows us to provide structure and process. It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”",
    avatar: avatarRichard,
  },
  {
    id: 4,
    user: "Shanai Gough",
    review: "“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in -sync without being intrusive.”",
    avatar: avatarShanai,
  },
]


// footer icons 
const footerIcons = [
  iconFacebook,
  iconYoutube,
  iconTwitter,
  iconPinterest,
  iconInstagram,
]

const footerItems = [
  { id: 0, item: "Home", link: "", },
  ...navItem,
  { id: navItem.length + 1, item: "Privacy policy", link: "", },
]

export {
  logo,
  iconHamburger,
  iconClose,
  navItem,
  illustrationImage,
  featureSectionItems,
  testimonialSectionItems,
  footerIcons,
  footerItems,
  logoFooter,
}