import _ from 'lodash'

function getSequentialTimestamp(startTime: Date, stepInMinutes: number) {
  const nextTime = new Date(startTime.getTime() + stepInMinutes * 60 * 1000)
  return nextTime
}

//Create time 1 week ago
let baseTime = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
let baseId = 1

export const getRandomAvatar = () =>
  `https://picsum.photos/seed/${_.random(1, 1000)}/200/300`

export const dataMessages = [
  {
    mId: baseId++,
    message: 'Hello',
    timestamp: baseTime.toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 1,
    receiverId: 2
  },

  {
    mId: baseId++,
    message: 'How are you?',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      2
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 2,
    receiverId: 1
  },

  {
    mId: baseId++,
    message: 'Good!',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      3
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 1,
    receiverId: 2
  },

  {
    mId: baseId++,
    message: 'Hey Victor, long time no see!',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      5
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 1,
    receiverId: 3
  },

  {
    mId: baseId++,
    message: 'Hey Hurin! What’s up?',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      4
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 3,
    receiverId: 1
  },

  {
    mId: baseId++,
    message: 'Just working on a new project.',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      6
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 1,
    receiverId: 3
  },

  {
    mId: baseId++,
    message: 'Need any help?',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      2
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 3,
    receiverId: 1
  },

  {
    mId: baseId++,
    message: 'Yes, that’d be great!',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      3
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 1,
    receiverId: 3
  },

  {
    mId: baseId++,
    message: 'Hey Jony, can you check the new designs?',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      5
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 5,
    receiverId: 4
  },

  {
    mId: baseId++,
    message: 'Sure! Send them over.',
    timestamp: (baseTime = getSequentialTimestamp(
      baseTime,
      4
    )).toLocaleTimeString([], { timeStyle: 'short' }),
    senderId: 4,
    receiverId: 5
  }
]

export const users = [
  {
    uid: 1,
    name: 'Hurin omar',
    avatar: getRandomAvatar(),
    friends: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    uid: 2,
    name: 'Iftikhar Shaikh',
    avatar: getRandomAvatar(),
    friends: [1, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    uid: 3,
    name: 'Victor Erixon',
    avatar: getRandomAvatar(),
    friends: [1, 2, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    uid: 4,
    name: 'Hali',
    avatar: getRandomAvatar(),
    friends: [1, 2, 3, 5, 6, 7, 8, 9, 10]
  },
  {
    uid: 5,
    name: 'Jony Ive',
    avatar: getRandomAvatar(),
    friends: [1, 2, 3, 4, 6, 7, 8, 9, 10]
  },
  {
    uid: 6,
    name: 'Aratu Zakia',
    avatar: getRandomAvatar(),
    friends: [1, 2, 3, 4, 5, 7, 8, 9, 10]
  },
  {
    uid: 7,
    name: 'Sufiya',
    avatar: getRandomAvatar(),
    friends: [1, 2, 3, 4, 5, 6, 8, 9, 10]
  },
  {
    uid: 8,
    name: 'Pablo Stanley',
    avatar: getRandomAvatar(),
    friends: [1, 2, 3, 4, 5, 6, 7, 9, 10]
  },
  {
    uid: 9,
    name: 'Farhan Makrani',
    avatar: getRandomAvatar(),
    friends: [1, 2, 3, 4, 5, 6, 7, 8, 10]
  },
  {
    uid: 10,
    name: 'Abrar',
    avatar: getRandomAvatar(),
    friends: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
]
