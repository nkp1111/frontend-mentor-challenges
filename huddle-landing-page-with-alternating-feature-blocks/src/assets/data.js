import logo from './images/logo.svg'
import illustrationMockups from './images/illustration-mockups.svg'
// feature section articles images 
import illustrationFlowConversation from './images/illustration-flowing-conversation.svg'
import illustrationGrowTogether from './images/illustration-grow-together.svg'
import illustrationYourUser from './images/illustration-your-users.svg'


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

export {
  logo,
  illustrationMockups,
  featureSectionArticles,
}