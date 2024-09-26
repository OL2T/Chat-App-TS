import { useState } from 'react'
import { dataMessages, getRandomAvatar, users } from '../../data'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [userId, setUserId] = useState<number | null>(null)
  const negative = useNavigate()
  const handleUserLogin = () => {
    if (!userId) return
    if (userId < 1) {
      alert('User ID must be greater than 0')
      return
    }
    if (
      localStorage.getItem('data') === null &&
      localStorage.getItem('users') === null
    ) {
      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('data', JSON.stringify(dataMessages))
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    if (
      userId > 10 &&
      !existingUsers.find(
        (user: { uid: number }) => user.uid === Number(userId)
      )
    ) {
      const newUser = {
        uid: Number(userId),
        name: `User ${userId}`,
        avatar: getRandomAvatar(),
        friends: existingUsers
          .map((user: { uid: number }) => user.uid)
          .filter((newUid: number) => newUid !== userId)
      }

      existingUsers.push(newUser)

      existingUsers.forEach((user: { uid: number; friends: number[] }) => {
        if (user.uid !== userId) {
          user.friends.push(Number(userId))
        }
      })

      localStorage.setItem('users', JSON.stringify(existingUsers))
    }

    localStorage.setItem('userId', JSON.stringify(userId))
    localStorage.setItem('isLoggedIn', 'true')
    negative('/chat')
  }

  return (
    <div className='bg-white absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[480px] m-auto p-4 rounded-md shadow-md'>
      <h1 className='text-3xl font-bold text-center mb-8 text-title'>Login</h1>
      <form className='' onSubmit={handleUserLogin}>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='mb-4'>
            <label
              htmlFor='userId'
              className='block text-gray-700 font-bold mb-2'
            >
              User ID:
            </label>
            <input
              type='number'
              id='userId'
              onChange={(e) => setUserId(parseInt(e.target.value))}
              required
              placeholder='Enter user ID from 1...'
              className='bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}
