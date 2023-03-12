import logo from './images/logo.svg'
// main hero image 
import illustrationIntro from './images/illustration-intro.png'
// section hero image 
import illustrationProductive from './images/illustration-stay-productive.png'
// feature section articles icons 
import iconAccessAnywhere from './images/icon-access-anywhere.svg'
import iconAnyFile from './images/icon-any-file.svg'
import iconCollaboration from './images/icon-collaboration.svg'
import iconSecurity from './images/icon-security.svg'


const navbarLinks = [
  {
    id: 1,
    title: "Features",
    link: "",
  },
  {
    id: 2,
    title: "Team",
    link: "",
  },
  {
    id: 3,
    title: "Sign In",
    link: "",
  },
]

const featureSectionArticles = [
  {
    id: 1,
    title: "Access your files, anywhere",
    description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    image: iconAccessAnywhere,
  },
  {
    id: 2,
    title: "Security you can trust",
    description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    image: iconSecurity,
  },
  {
    id: 3,
    title: "Real-time collaboration",
    description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    image: iconCollaboration,
  },
  {
    id: 4,
    title: "Store any type of file",
    description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    image: iconAnyFile,
  },
]

export {
  logo,
  navbarLinks,
  illustrationIntro,
  illustrationProductive,
  featureSectionArticles,
}