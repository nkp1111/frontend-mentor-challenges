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
    socialPlatform: "twitter",
    author: "@nathanf",
    count: "1044",
    countOfToday: "99",
    icon: twitterIcon,
    action: "+"
  },
  {
    id: 3,
    socialPlatform: "instagram",
    author: "@realnathanf",
    count: "11K",
    countOfToday: "1099",
    icon: instagramIcon,
    action: "+"
  },
  {
    id: 4,
    socialPlatform: "youtube",
    author: "Nathan F.",
    count: "8239",
    countOfToday: "144",
    icon: youtubeIcon,
    action: "-"
  },
]


// today stats detailed view
let detailStat = [
  {
    id: 1,
    platform: "facebook",
    activity: "Page Views",
    icon: facebookIcon,
    count: "87",
    percent: "3",
    action: "+"
  },
  {
    id: 2,
    platform: "facebook",
    activity: "Likes",
    icon: facebookIcon,
    count: "52",
    percent: "2",
    action: "-"
  },
  {
    id: 3,
    platform: "instagram",
    activity: "Likes",
    icon: instagramIcon,
    count: "5462",
    percent: "2257",
    action: "+"
  },
  {
    id: 4,
    platform: "instagram",
    activity: "Profile Views",
    icon: instagramIcon,
    count: "52k",
    percent: "1375",
    action: "+"
  },
  {
    id: 5,
    platform: "twitter",
    activity: "Retweets",
    icon: twitterIcon,
    count: "117",
    percent: "303",
    action: "+"
  },
  {
    id: 6,
    platform: "twitter",
    activity: "Likes",
    icon: twitterIcon,
    count: "507",
    percent: "553",
    action: "+"
  },
  {
    id: 7,
    platform: "youtube",
    activity: "Likes",
    icon: youtubeIcon,
    count: "107",
    percent: "19",
    action: "-"
  },
  {
    id: 8,
    platform: "youtube",
    activity: "Total Views",
    icon: youtubeIcon,
    count: "1407",
    percent: "12",
    action: "-"
  },
]

export {
  dashboardCurrentInfo,
  upIcon,
  downIcon,
  detailStat,
}