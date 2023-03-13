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
// testimonial section users avatar
import avatar1 from './images/profile-1.jpg'
import avatar2 from './images/profile-2.jpg'
import avatar3 from './images/profile-3.jpg'
// footer contacts icons 
import iconLocation from './images/icon-location.svg'
import iconPhone from './images/icon-phone.svg'
import iconEmail from './images/icon-email.svg'

const navbarLinks = [
  {
    id: 1,
    title: "Features",
    link: "#",
  },
  {
    id: 2,
    title: "Team",
    link: "#",
  },
  {
    id: 3,
    title: "Sign In",
    link: "#",
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

const testimonialSectionArticles = [
  {
    id: 1,
    user: "Satish Patel",
    position: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well- oiled collaboration machine.",
    image: avatar1,
  },
  {
    id: 2,
    user: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well- oiled collaboration machine.",
    image: avatar2,
  },
  {
    id: 3,
    user: "Iva Boyd",
    position: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well- oiled collaboration machine.",
    image: avatar3,
  },
]

const footerContacts = [
  {
    id: 1,
    type: "location",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: iconLocation,
  },
  {
    id: 2,
    type: "phone",
    info: "+1-543-123-4567",
    icon: iconPhone,
  },
  {
    id: 3,
    type: "email",
    info: "example@fylo.com",
    icon: iconEmail,
  },
]

const footerLinks = [
  {
    id: 1,
    title: "About Us",
    link: "",
  },
  {
    id: 2,
    title: "Contact Us",
    link: "",
  },
  {
    id: 3,
    title: "Jobs",
    link: "",
  },
  {
    id: 4,
    title: "Terms",
    link: "",
  },
  {
    id: 5,
    title: "Press",
    link: "",
  },
  {
    id: 6,
    title: "Privacy",
    link: "",
  },
  {
    id: 7,
    title: "Blog",
    link: "",
  },
]

export {
  logo,
  navbarLinks,
  illustrationIntro,
  illustrationProductive,
  featureSectionArticles,
  testimonialSectionArticles,
  footerContacts,
  footerLinks,
}