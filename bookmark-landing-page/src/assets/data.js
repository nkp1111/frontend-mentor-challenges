import bgDotsImage from './images/bg-dots.svg'

import iconArrow from './images/icon-arrow.svg'
import iconArrowDown from './images/icon-arrow-down.svg'
import iconClose from './images/icon-close.svg'
import iconError from './images/icon-error.svg'
import iconFacebook from './images/icon-facebook.svg'
import iconHamburger from './images/icon-hamburger.svg'
import iconTwitter from './images/icon-twitter.svg'

import illustration1Image from './images/illustration-features-tab-1.svg'
import illustration2Image from './images/illustration-features-tab-2.svg'
import illustration3Image from './images/illustration-features-tab-3.svg'
import illustrationHeroImage from './images/illustration-hero.svg'

import logoBookmark from './images/logo-bookmark.svg'
import logoChrome from './images/logo-chrome.svg'
import logoFirefox from './images/logo-firefox.svg'
import logoOpera from './images/logo-opera.svg'

import logoBookmarkWhite from './images/logo-bookmark-white.svg'

const navData = [
  "feature", "pricing", "contact",
]


// feature section articles 
const articleData = [
  {
    id: 1,
    tagline: "Simple Bookmarking",
    heading: "Bookmark in one click",
    overview: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: illustration1Image
  },
  {
    id: 2,
    tagline: "Speedy Searching",
    heading: "Intelligent search",
    overview: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: illustration2Image
  },
  {
    id: 3,
    tagline: "Easy Sharing",
    heading: "Share your bookmarks",
    overview: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: illustration3Image
  },
]


// download section article 
const downloadSectionArticle = [
  { id: 1, title: "Chrome", logo: logoChrome, version: "62" },
  { id: 2, title: "Firefox", logo: logoFirefox, version: "55" },
  { id: 3, title: "Opera", logo: logoOpera, version: "46" },
]


// FAQ section data 
const faqSectionData = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa,ultricies non ligula.Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.Cras in ligula quis est pharetra mattis sit amet pharetra purus.Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
]

export {
  logoBookmark,
  iconHamburger,
  iconClose,
  navData,
  illustrationHeroImage,
  bgDotsImage,
  articleData,
  downloadSectionArticle,
  faqSectionData,
  iconArrow,
  iconArrowDown,
  iconFacebook,
  iconTwitter,
  iconError,
  logoBookmarkWhite,
}