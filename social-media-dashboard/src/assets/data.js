import downIcon from './images/icon-down.svg'
import facebookIcon from './images/icon-facebook.svg'
import instagramIcon from './images/icon-instagram.svg'
import twitterIcon from './images/icon-twitter.svg'
import upIcon from './images/icon-up.svg'
import youtubeIcon from './images/icon-youtube.svg'


let dashboardCurrentInfo = [
  {
    id: 1,
    socialPlatform: "facebook",
    author: "@nathanf",
    count: "1987",
    countOfToday: "12",
    icon: facebookIcon,
    action: "+"
  },
  {
    id: 2,
    socialPlatform: "facebook",
    author: "@nathanf",
    count: "1044",
    countOfToday: "99",
    icon: twitterIcon,
    action: "+"
  },
  {
    id: 3,
    socialPlatform: "facebook",
    author: "@realnathanf",
    count: "11K",
    countOfToday: "1099",
    icon: instagramIcon,
    action: "+"
  },
  {
    id: 4,
    socialPlatform: "facebook",
    author: "Nathan F.",
    count: "8239",
    countOfToday: "144",
    icon: youtubeIcon,
    action: "-"
  },
]

export {
  dashboardCurrentInfo,
  upIcon,
  downIcon,
}