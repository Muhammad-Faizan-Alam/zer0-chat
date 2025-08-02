import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate()
  return (
    <div className={`bg-orange-300/30 h-full p-5 rounded-r-xl overflow-y-scroll text-white
    ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className='pb-5'>
        {/* logo  and menu btn */}
        <div className='flex justify-between items-center'>
          <img src={assets.logo} alt="Logo" className='max-w-40' />
          <div className='relative py-2 group'>
            <img src={assets.menu_icon} alt="Menu" className='max-h-5 cursor-pointer invert sepia-100 saturate-500 hue-rotate-180' />
            <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-orange-100 border border-orange-200 text-gray-700 hidden group-hover:block'>
              <p onClick={() => navigate('/profile')} className='cursor-pointer text-sm'>Edit Profile</p>
              <hr className='my-2 border-t border-orange-500' />
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>

        {/* search */}
        <div className='bg-orange-200 rounded-full flex items-center gap-2 px-4 py-3 mt-5'>
          <img src={assets.search_icon} alt="Search" className='w-3 invert sepia-100 saturate-500 hue-rotate-180' />
          <input type="text" className='bg-transparent border-none outline-none text-orange-800 text-xs placeholder-gray-700 flex-1' placeholder='Search User...' />
        </div>
      </div>

      {/* users */}
      <div className='flex flex-col'>
        {
          userDummyData.map((user, index) => (
            <div key={index} onClick={() => {setSelectedUser(user)}}  className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm
            ${selectedUser?._id === user._id && 'bg-amber-700/50'}`}>
              <img src={user.profilePic || assets.avatar_icon} alt="user" className='w-[35px] aspect-[1/1] rounded-full' />
              <div className='flex flex-col leading-5'>
                <p className='text-orange-500'>{user.fullName}</p>
                {
                  index < 3
                    ? <p className='text-green-500 text-xs'>Online</p>
                    : <p className='text-neutral-500 text-xs'>Offline</p>
                }
              </div>
              {
                index > 2 &&
                <div className='absolute top-4 right-4 text-xs w-5 h-5 flex justify-center items-center rounded-full bg-orange-500/50'>
                  {index}
                </div>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar