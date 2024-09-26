import { useEffect, useState } from 'react'
import Login from '../Login'
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import { useNavigate } from 'react-router-dom'

export default function Layout() {
  const [userId, setUserId] = useState(localStorage.getItem('userId'))
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (userId) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find((user: { uid: number }) => {
        return user.uid === Number(userId)
      })

      setUserName(user.name)
      setAvatar(user.avatar)
    }
  }, [userId])

  const handleLogout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('isLoggedIn')
    setUserId(null)
    navigate('/')
  }
  return (
    <div className='relative bg-gradient-to-tr from-[#A07BF4] to-[#F9B6BD] h-dvh w-full'>
      {userId ? (
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[1200px] h-full max-w-[1200px] max-h-[700px] shadow-lg'>
          <div className='flex w-full h-full shadow-md '>
            <NavBar
              userName={userName}
              avatar={avatar}
              handleLogout={handleLogout}
            />
            <Content />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}
