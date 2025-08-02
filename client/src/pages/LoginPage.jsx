import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
  const [currentState, setCurrentState] = useState('Sign up')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (currentState === 'Sign up'  && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return
    } else {
      // Handle login logic here
      console.log('Logging in with:', { email, password })
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col'>
      {/* left */}
      <img src={assets.logo} alt="logo" className='w-[min(30vw, 250px)]' />
      {/* right */}
      <form onSubmit={onSubmitHandler} className='border-2 bg-orange-500/8 text-black border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currentState}
          {isDataSubmitted &&
          <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="<" className='w-5 cursor-pointer' />}
        </h2>

        {currentState === 'Sign up' && !isDataSubmitted && (
          <input type="text"
            placeholder='Full Name'
            className='p-2 border border-gray-500 rounded-md focus:outline-none'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input type="email"
              placeholder='Email Address'
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="password"
              placeholder='Password'
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        {currentState === 'Sign up' && isDataSubmitted && (
          <textarea
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
            rows="4"
            placeholder='Write a short bio...'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        )}

        <button type="submit"
          className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200'>
          {currentState === 'Sign up' ? 'Create Account' : 'Login Now'}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div>
          {currentState === 'Sign up' ? (
            <p className='text-sm text-gray-600' >
              Already have an account?
              <span className='text-orange-500 cursor-pointer'
              onClick={() => {
              setCurrentState('Login')
              setIsDataSubmitted(false)
            }}> Login</span>
            </p>
          ) : (
            <p className='text-sm text-gray-600' >
              Create an account?
              <span className='text-orange-500 cursor-pointer'
              onClick={() => {
              setCurrentState('Sign up')
            }}> Sign up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPage