import { useState } from 'react'
import { SlLogout } from 'react-icons/sl'
import '../../assets/styles/navbar.scss'
import { Link } from 'react-router-dom'
import { menuItems } from '../../menuItems'

interface NavBarProps {
  avatar: string
  userName: string
  handleLogout: () => void
}

export default function NavBar({
  avatar,
  userName,
  handleLogout
}: NavBarProps) {
  const [active, setActive] = useState('/chat')

  return (
    <div className='bg-[#D6D7F1] flex flex-[20%] flex-col h-full text-[#9EA8BB]'>
      <div className='user my-10 text-center'>
        <img
          src={avatar}
          alt={avatar}
          className='w-[80px] h-[80px] rounded-full block mx-auto border-4 border-white mb-4'
        />
        <div className='user-info'>
          <h3 className='text-md font-semibold capitalize text-title'>
            {userName}
          </h3>
        </div>
      </div>
      <ul className='menu-items flex flex-col flex-1 gap-4'>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`menu-item ${active === item.path ? 'is-active' : ''}`}
          >
            <Link to={item.path} onClick={() => setActive(item.path)}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className='bg-transparent flex items-center gap-4 pl-[30px] py-4 mb-3 text-red-500 text-left text-[12px] font-semibold uppercase'
        onClick={handleLogout}
      >
        <SlLogout className='stroke-[2px] w-[18px] h-[18px]' />
        <span>Logout</span>
      </button>
    </div>
  )
}
