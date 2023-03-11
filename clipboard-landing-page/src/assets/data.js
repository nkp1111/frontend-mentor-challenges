// header background image 
import headerLogoDesktop from './images/bg-header-desktop.png'
import headerLogoMobile from './images/bg-header-mobile.png'
// main logo 
import logo from './images/logo.svg'
// section hero images 
import imageComputer from './images/image-computer.png'
import imageDevices from './images/image-devices.png'
// additional info article icons 
import iconBlacklist from './images/icon-blacklist.svg'
import iconPreview from './images/icon-preview.svg'
import iconText from './images/icon-text.svg'
// client icons 
import logoGoogle from './images/logo-google.png'
import logoIBM from './images/logo-ibm.png'
import logoMicrosoft from './images/logo-microsoft.png'
import logoHP from './images/logo-hp.png'
import logoVectorGraphics from './images/logo-vector-graphics.png'
// footer icons 
import iconFacebook from './images/icon-facebook.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconInstagram from './images/icon-instagram.svg'

const featureSectionArticles = [
  {
    id: 1,
    title: "Quick Search",
    description: "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    id: 2,
    title: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    id: 3,
    title: "Complete History",
    description: "Retrieve any snippets from the first moment you started using the app.",
  },
]


const additionalInfoArticlesData = [
  {
    id: 1,
    title: "Create blacklists",
    description: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    icon: iconBlacklist,
  },
  {
    id: 2,
    title: "Plain text snippets",
    description: "Remove unwanted formatting from copied text for a consistent look.",
    icon: iconText,
  },
  {
    id: 3,
    title: "Sneak preview",
    description: "Quick preview of all snippets on your Clipboard for easy access.",
    icon: iconPreview,
  },
]

const additionalInfoIcons = [
  {
    id: 1,
    icon: logoGoogle,
    title: "google",
  },
  {
    id: 2,
    icon: logoIBM,
    title: "ibm",
  },
  {
    id: 3,
    icon: logoMicrosoft,
    title: "microsoft",
  },
  {
    id: 4,
    icon: logoHP,
    title: "hp",
  },
  {
    id: 5,
    icon: logoVectorGraphics,
    title: "vector graphics",
  },
]


const footerLinks = [
  {
    id: 1,
    title: "FAQs",
    link: "",
  },
  {
    id: 2,
    title: "Contact Us",
    link: "",
  },
  {
    id: 3,
    title: "Privacy Policy",
    link: "",
  },
  {
    id: 4,
    title: "Press Kit",
    link: "",
  },
  {
    id: 5,
    title: "Install Guide",
    link: "",
  },

]

const footerIcons = [
  {
    id: 1,
    title: "facebook",
    link: "",
    icon: iconFacebook
  },
  {
    id: 2,
    title: "twitter",
    link: "",
    icon: iconTwitter
  },
  {
    id: 3,
    title: "instagram",
    link: "",
    icon: iconInstagram
  },
]

export {
  headerLogoDesktop,
  headerLogoMobile,
  logo,
  imageComputer,
  featureSectionArticles,
  imageDevices,
  additionalInfoArticlesData,
  additionalInfoIcons,
  footerLinks,
  footerIcons,
}