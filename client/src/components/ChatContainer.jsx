import React, { useEffect, useRef } from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/utils'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef()
  useEffect(() => {
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoView({ behavior: "smooth" })
    }
  })
  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      {/* header */}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="Profile Image" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text- flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick={() => { setSelectedUser(null) }} src={assets.arrow_icon} alt="Go Back" className='md:hidden max-w-7' />
        <div className='cursor-help'>
          <img src={assets.help_icon} alt="Info" className='max-md:hidden max-w-5 invert sepia-100 saturate-500 hue-rotate-180' />
        </div>
      </div>
      {/* chat */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {messagesDummyData.map((msg, index) => (
          <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>
            {msg.image ? (
              <img src={msg.image} alt="Image" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8' />
            ) : (
              <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-orange-500/30 ${msg.senderId !== '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
            )}
            <div className='text-center text-xs'>
              <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt="Avatar" className='w-7 rounded-full' />
              <p className='text-gray-500'>{formatMessageTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={scrollEnd}></div>

      {/* bottom area */}
      <div className='absolute bottom-0 left-0 right-0 p-3 flex items-center gap-3 rounded-t-lg'>
        <div className='flex-1 flex items-center gap-3 bg-orange-500/20 backdrop-blur-lg rounded-full px-3'>
          <input type="text" placeholder='Type a message...' className='flex-1 text-sm p-3 border-none rounded-lg outline-none placeholder-gray-800 text-orange-700' />
          <input type="file" id='image' accept='image/png, image/jpeg' hidden />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="Attach" className='w-5 mr-2 cursor-pointer invert sepia-100 saturate-500 hue-rotate-180' />
          </label>
        </div>
        <img src={assets.send_button} alt="send" className='w-9 cursor-pointer invert sepia-100 saturate-500 hue-rotate-180' />
      </div>
    </div>
  ) : (
    <div className='flex flex-col justify-center items-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img src={assets.logo} alt="Logo" className='max-w-48' />
      <p className='text-lg font-medium text-orange-500'>Chat anytime, anywhere</p>
    </div>
  )
}

export default ChatContainer