import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate()
  return (
    <div className={`bg-orange-300/30 h-full p-5 rounded-r-xl overflow-y-scroll text-white
    ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <img src={assets.logo} alt="Logo" className='max-w-40' />
          <div className='relative py-2 group bg-orange-300 border border-orange-600 rounded-2xl'>
            <img src={assets.menu_icon} alt="Menu" className='max-h-5 cursor-pointer' />
            <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-orange-300 border border-orange-400 text-gray-100 hidden group-hover:block'>
              <p onClick={() => navigate('/profile')} className='cursor-pointer text-sm'>Edit Profile</p>
              <hr className='my-2 border-t border-orange-500' />
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar