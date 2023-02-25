import avatarImg from './images/avatar.jpg'
import dogImg1 from './images/dog-image-1.jpg'
import dogImg2 from './images/dog-image-2.jpg'
import dogImg3 from './images/dog-image-3.jpg'
import { BsChevronLeft } from 'react-icons/bs'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaChevronRight } from 'react-icons/fa'


const chatData = [
  {
    id: 1,
    action: "send",
    type: "text",
    message: "That sounds great. I’d be happy with that."
  },
  {
    id: 2,
    action: "send",
    type: "text",
    message: "Could you send over some pictures of your dog, please?"
  },
  {
    id: 3,
    action: "receive",
    type: "img",
    message:
      [dogImg1, dogImg2, dogImg3]
  },
  {
    id: 4,
    action: "receive",
    type: "text",
    message: "Here are a few pictures. She’s a happy girl!"
  },
  {
    id: 5,
    action: "receive",
    type: "text",
    message: "Can you make it?"
  },
  {
    id: 6,
    action: "send",
    type: "text",
    message: "She looks so happy! The time we discussed works. How long shall I take her out for?"
  },
  {
    id: 7,
    action: "send",
    type: "business",
    message: "30 minute walk",
    price: 29,
  },
  {
    id: 8,
    action: "send",
    type: "business",
    message: "1 hour walk",
    price: 49,
  },
]

export {
  avatarImg,
  chatData,
  BsChevronLeft,
  SlOptionsVertical,
  FaChevronRight,
}