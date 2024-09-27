import { IoMdArrowDropdown, IoMdNotificationsOutline } from 'react-icons/io'
import ListChat from '../ListChat/ListChat'
import { useEffect, useRef, useState } from 'react'
import '../../assets/styles/chat.scss'
import ChatContainer from '../ChatContainer/ChatContainer'
export interface User {
  uid: number
  name: string
  avatar: string
  friends?: number[]
}

export interface Messages {
  mId: number
  message: string
  timestamp: string
  senderId: number
  receiverId: number
}

export default function Chat() {
  const [data, setData] = useState<Messages[]>([])

  const [users, setUsers] = useState<User[]>([])

  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState<Messages[]>([])

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [currentUser, setCurrentUser] = useState<User>({
    uid: 1,
    name: 'Tai',
    avatar: '',
    friends: []
  })
  const [friends, setFriends] = useState<User[]>([])

  const messageEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem('data') || '[]')
    setData(storeData)
  }, [])

  useEffect(() => {
    const storeUsers = JSON.parse(localStorage.getItem('users') || '[]')
    setUsers(storeUsers)
  }, [])

  useEffect(() => {
    if (selectedUserId === null) {
      return setMessages([])
    }

    const filteredMessage = data?.filter(
      (message: { senderId: number; receiverId: number }) => {
        return (
          (message.senderId === selectedUserId &&
            message.receiverId === currentUser.uid) ||
          (message.senderId === currentUser.uid &&
            message.receiverId === selectedUserId)
        )
      }
    )
    setMessages(filteredMessage)
  }, [currentUser, selectedUserId, data])

  useEffect(() => {
    const uid = localStorage.getItem('userId') || ''
    if (uid) {
      const user = users.find((user) => user.uid === Number(uid))
      if (user) {
        setCurrentUser(user)
      }
    }
  }, [users])

  useEffect(() => {
    if (currentUser.friends && currentUser.friends.length > 0) {
      const friendIds = currentUser.friends
      // console.log(friendIds)
      const friends = users.filter((user) => friendIds.includes(user.uid))
      setFriends(friends)
    }
  }, [currentUser, users])

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const getLatestMessage = (friendId: number) => {
    const latestMessage = data
      .filter((message: { senderId: number; receiverId: number }) => {
        return (
          (message.senderId === friendId &&
            message.receiverId === currentUser.uid) ||
          (message.senderId === currentUser.uid &&
            message.receiverId === friendId)
        )
      })
      .sort((a, b) => b.mId - a.mId)[0]
    // console.log(latestMessage)
    return latestMessage
  }

  const handleSentMessage = ({ message }: { message: string }) => {
    if (!message.trim()) return
    const baseId = data.length + 1

    if (selectedUserId === null) return

    const newMessage = {
      mId: baseId,
      message,
      timestamp: new Date().toLocaleTimeString([], { timeStyle: 'short' }),
      senderId: currentUser.uid,
      receiverId: selectedUserId
    }
    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
    const newData = [...data, newMessage]
    setData(newData)
    localStorage.setItem('data', JSON.stringify(newData))

    setMessage('')
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='flex items-center justify-end gap-8'>
        <div className='flex items-center text-gray-600 text-sm'>
          Status: Sale{' '}
          <span className='text-[#AEB5C6]'>
            <IoMdArrowDropdown />
          </span>
        </div>
        <div className='text-[#AEB5C6] font-semibold'>
          <IoMdNotificationsOutline className='stroke-[2px] w-5 h-5' />
        </div>
      </div>
      <div className='text-2xl font-medium text-title mb-[30px]'>Chat</div>
      <div className='flex flex-1 gap-x-6'>
        <ListChat
          friends={friends}
          currentUser={currentUser}
          getLatestMessage={getLatestMessage}
          selectedUserId={selectedUserId}
          setSelectedUserId={(id: number) => setSelectedUserId(id)}
        />
        <div className='flex-[70%]'>
          {selectedUserId !== null && (
            <ChatContainer
              currentUser={currentUser}
              friends={friends}
              handleSentMessage={handleSentMessage}
              message={message}
              messageEndRef={messageEndRef}
              messages={messages}
              selectedUserId={selectedUserId}
              setMessage={setMessage}
            />
          )}
        </div>
      </div>
    </div>
  )
}
