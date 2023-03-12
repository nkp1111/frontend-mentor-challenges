import logo from './images/logo.svg'
import illustrationMockups from './images/illustration-mockups.svg'
// feature section articles images 
import illustrationFlowConversation from './images/illustration-flowing-conversation.svg'
import illustrationGrowTogether from './images/illustration-grow-together.svg'
import illustrationYourUser from './images/illustration-your-users.svg'
// footer contacts icons 
import iconLocation from './images/icon-location.svg'
import iconPhone from './images/icon-phone.svg'
import iconEmail from './images/icon-email.svg'


// feature section articles data
const featureSectionArticles = [
  {
    id: 1,
    title: "Grow Together",
    description: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    image: illustrationGrowTogether,
  },
  {
    id: 2,
    title: "Flowing Conversations",
    description: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in -time loading for a more natural flow.",
    image: illustrationFlowConversation,
  },
  {
    id: 3,
    title: "Your Users",
    description: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image: illustrationYourUser,
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
    info: "example@huddle.com",
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
    title: "Career",
    link: "",
  },
  {
    id: 3,
    title: "What We Do",
    link: "",
  },
  {
    id: 4,
    title: "Blog",
    link: "",
  },
  {
    id: 5,
    title: "FAQ",
    link: "",
  },
  {
    id: 6,
    title: "Contact Us",
    link: "",
  },

]

export {
  logo,
  illustrationMockups,
  featureSectionArticles,
  footerContacts,
  footerLinks,
}