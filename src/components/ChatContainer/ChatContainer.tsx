import { Messages, User } from '../Chat/Chat'
import { Friend } from '../ListChat/ListChat'
import InputChat from '../InputChat/InputChat'
import ChatBox from '../ChatBox/ChatBox'

interface ChatContainerProps {
  friends: Friend[]
  currentUser: User
  messages: Messages[]
  selectedUserId: number | null
  message: string
  setMessage: (message: string) => void
  handleSentMessage: (message: { message: string }) => void
  messageEndRef: React.RefObject<HTMLDivElement>
}

export default function ChatContainer({
  friends,
  currentUser,
  messages,
  selectedUserId,
  message,
  setMessage,
  handleSentMessage,
  messageEndRef
}: ChatContainerProps) {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='header-chat h-[49px] border-b border-[#DEDFEB] mb-8 '>
        <div className='font-semibold text-title'>Gold Coast</div>
        <div className='font-semibold text-gray-400 text-[12px]'>
          From :{' '}
          <span>
            {friends.find((friend) => friend.uid === selectedUserId)?.name}
          </span>
        </div>
      </div>
      <div className='chat-container flex flex-col flex-1 justify-between'>
        <ChatBox
          currentUser={currentUser}
          friends={friends}
          messageEndRef={messageEndRef}
          messages={messages}
        />
        <InputChat
          handleSentMessage={handleSentMessage}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  )
}
