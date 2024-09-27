import { IoIosSearch } from 'react-icons/io'

interface ListChatProps {
  friends: Friend[]
  currentUser: User
  setSelectedUserId: (id: number) => void
  selectedUserId: number | null
  getLatestMessage: (id: number) => LatestMessage | null
}

interface User {
  uid: number
  name: string
  avatar: string
}

export interface Friend {
  uid: number
  name: string
  avatar: string
}

interface LatestMessage {
  message: string
  timestamp: string
}

export default function ListChat({
  friends,
  currentUser,
  setSelectedUserId,
  selectedUserId,
  getLatestMessage
}: ListChatProps) {
  return (
    <div className='flex-[30%]'>
      <div>
        <div className='flex relative items-center border-b px-4 py-3 border-[#DEDFEB] mb-8 '>
          <label
            htmlFor='search'
            className='absolute left-0 top-[15px]  text-gray-400 hover:cursor-pointer'
          >
            <IoIosSearch className='stroke-[5px] w-[20px] h-[20px]' />
          </label>
          <input
            type='text'
            id='search'
            placeholder='Search'
            className='border-none outline-none bg-transparent w-full placeholder:text-[12px] placeholder:text-gray-400 font-medium pl-3'
          />
        </div>
        <div className='friend-list max-h-[450px] overflow-y-scroll overflow-x-hidden'>
          {friends.map((friend) => {
            const latestMessage = getLatestMessage(friend.uid)
            if (friend.uid === currentUser.uid) return null
            return (
              <div
                onClick={() => setSelectedUserId(friend.uid)}
                key={friend.uid}
                className={`flex gap-2 p-3 mb-4 rounded-md hover:cursor-pointer last:mb-0 ${selectedUserId === friend.uid ? 'bg-gray-50 shadow-lg' : 'bg-white shadow-sm'}`}
              >
                <div className='avatar'>
                  <img
                    src={friend.avatar}
                    alt={friend.avatar}
                    className='rounded-full w-11 h-11'
                  />
                </div>
                <div>
                  <div className='text-sm font-medium'>{friend.name}</div>
                  <div className='limit-text text-[12px] text-gray-400'>
                    {latestMessage?.message || 'No messages yet'}{' '}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
