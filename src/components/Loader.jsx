import React from 'react'
import loader from '../assets/img/loader.gif'

const Loader = () => {
  return (
    <div className='area-work'>
      <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
        <img src={loader} alt='Icon Pizza Loader for Views' width={256} height={256} />
        <h1 className='f-pizza'>Loading</h1>
      </div>
    </div>
  )
}

export default Loader
