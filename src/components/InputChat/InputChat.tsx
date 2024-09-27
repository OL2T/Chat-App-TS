import { LiaSmileBeamSolid } from 'react-icons/lia'
import { LuSend } from 'react-icons/lu'
import { RiAttachment2 } from 'react-icons/ri'

interface InputChatProps {
  message: string
  setMessage: (message: string) => void
  handleSentMessage: (message: { message: string }) => void
}

export default function InputChat({
  message,
  setMessage,
  handleSentMessage
}: InputChatProps) {
  return (
    <div className='input-area relative flex bg-white px-4 py-2 items-center rounded-b-[4px] shadow-md'>
      <div className=' text-[#AEB5C6]'>
        <LiaSmileBeamSolid className='w-7 h-7' />
      </div>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSentMessage({ message })
          }
        }}
        placeholder='Type a message...'
        className='bg-transparent w-full flex-1 border-none outline-none p-2 placeholder:text-gray-300 placeholder:font-normal placeholder:text-sm text-gray-700 font-normal'
      />
      <div className='text-[#AEB5C6] mr-3'>
        <RiAttachment2 className='w-4 h-4' />
      </div>
      <button
        className='w-10 h-10 bg-gradient-to-b from-blue-300 to-[#2C8BF2] text-white rounded-full flex items-center justify-center hover:bg-[#2C8BF2] hover:text-white shadow-blue-400 shadow-xl'
        onClick={() => handleSentMessage({ message })}
      >
        <LuSend />
      </button>
    </div>
  )
}
