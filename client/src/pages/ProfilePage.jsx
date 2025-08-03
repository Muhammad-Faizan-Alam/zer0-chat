import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState('Muhammad Faizan Alam');
  const [bio, setBio] = useState('Hey everyone, I am a full stack developer with a passion for creating dynamic and responsive web applications. I love coding and exploring new technologies.');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-orange-500 border-2 border-gray-600 rounded-lg shadow-lg flex justify-between items-center max-sm:flex-col-reverse'>
        <form onSubmit={handleSubmit} className='flex flex-col p-10 gap-5 flex-1'>
          <h3 className='text-lg'>Profile Details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input onChange={(e) => setSelectedImg(e.target.files[0])}
            type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
            <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="profilePhoto"
            className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} required />
            upload profile photo
          </label>

          <input type="text" onChange={(e) => setName(e.target.value)} value={name}
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500' required />

          <textarea onChange={(e) => setBio(e.target.value)} value={bio}
          placeholder='Write profile bio...' required className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500' rows={4}></textarea>
          <button type='submit' className='bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition-colors duration-300'>
            Save Profile
          </button>
        </form>
        <img src={assets.logo_icon} alt="logo"
        className='max-h-32 rounded-full mx-10 max-sm:mt-10 invert sepia saturate-200 hue-rotate-[15deg]' />
      </div>
    </div>
  )
}

export default ProfilePage