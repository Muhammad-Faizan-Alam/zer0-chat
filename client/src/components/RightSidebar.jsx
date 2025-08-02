import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div className={`bg-orange-300/30 text-white w-full relative overflow-y-scroll ${selectedUser ? 'max-md:hidden' : ''}`}>
      {/* profile data */}
      <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto text-black'>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt="avatar" className='w-20 aspect-[1/1] rounded-full' />
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-green-500'></p>
          {selectedUser.fullName}
        </h1>
        <p className='px-10 mx-auto'>{selectedUser?.bio}</p>
      </div>

      <hr  className='border-gray-700 my-4 mx-5'/>
      {/* media */}
      <div className='px-5 text-xs text-black'>
        <p>Media</p>
        <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
          {
            imagesDummyData.map((image, index) => (
              <img
              key={index}
              src={image}
              alt="Media"
              onClick={() => window.open(image, '_blank')}
              className='w-full aspect-[1/1] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200' />
            ))
          }
        </div>
      </div>

      {/* logout */}
      <button className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-orange-400 to-orange-800 text-white px-20 py-2 rounded-full cursor-pointer hover:scale-90 hover:bg-red-600 transition-all duration-200'>
        Logout
      </button>
    </div>
  )
}

export default RightSidebar