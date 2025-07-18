import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(false)
  return (
    <div className='border w-screen h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`backdrop-blur-xs border-2 border-orange-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative
            ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
            <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
    </div>
  )
}

export default HomePage