import { Messages, User } from '../Chat/Chat'
import { Friend } from '../ListChat/ListChat'

interface ChatBoxProps {
  messages: Messages[]
  currentUser: User
  friends: Friend[]
  messageEndRef: React.RefObject<HTMLDivElement>
}

export default function ChatBox({
  messages,
  currentUser,
  friends,
  messageEndRef
}: ChatBoxProps) {
  return (
    <div className='message-list flex-1 max-h-[400px] h-full overflow-y-scroll max-w-full'>
      {messages.map((message) => {
        if (message.receiverId === currentUser.uid) {
          return (
            <div
              key={message.mId}
              ref={messageEndRef}
              className='flex items-start gap-2 justify-start mb-3'
            >
              <div className='group'>
                <div className='avatar bg-gray-200 w-9 h-9 rounded-full'>
                  <img
                    src={
                      friends.find((friend) => friend.uid === message.senderId)
                        ?.avatar
                    }
                    alt={
                      friends.find((friend) => friend.uid === message.senderId)
                        ?.avatar
                    }
                    className=' bg-gray-200 w-9 h-9 rounded-full'
                  />
                </div>
                <small>{message.timestamp} </small>
              </div>
              <div className='message bg-[#EAE8ED] text-gray-700 font-medium text-sm rounded-[18px] px-3 py-2 inline-block  break-all'>
                <span>{message.message}</span>
              </div>
            </div>
          )
        } else {
          return (
            <div
              key={message.mId}
              ref={messageEndRef}
              className='flex items-start gap-2 justify-end mb-3'
            >
              <div className='message bg-[#2C8BF2] text-white font-medium text-sm rounded-[18px] px-3 py-2 inline-block break-all'>
                <span>{message.message}</span>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
