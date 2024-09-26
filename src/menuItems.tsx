import { GoHome } from 'react-icons/go'

import { HiOutlineTag } from 'react-icons/hi'

import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5'

import { RxChatBubble } from 'react-icons/rx'

import { TbCalendarEvent } from 'react-icons/tb'

export const menuItems = [
  {
    path: '/',

    label: 'Home',

    icon: <GoHome className='stroke-1 w-[18px] h-[18px]' />
  },

  {
    path: '/properties',

    label: 'Properties',

    icon: <GoHome className='stroke-1 w-[18px] h-[18px]' />
  },

  {
    path: '/chat',

    label: 'Chat',

    icon: <RxChatBubble className='stroke w-[18px] h-[18px]' />
  },

  {
    path: '/calendar',

    label: 'Calendar',

    icon: <TbCalendarEvent className='stroke-[2px] w-[18px] h-[18px]' />
  },

  {
    path: '/offers',

    label: 'Offers',

    icon: <HiOutlineTag className='stroke-[2px] w-[18px] h-[18px]' />
  },

  {
    path: '/documents',

    label: 'Documents',

    icon: <IoDocumentTextOutline className='stroke-[3px] w-[18px] h-[18px]' />
  },

  {
    path: '/settings',

    label: 'Settings',

    icon: <IoSettingsOutline className='stroke-1 w-[18px] h-[18px]' />
  }
]
