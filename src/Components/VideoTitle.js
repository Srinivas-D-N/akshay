import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
     <h1 className='text-6xl font-bold'>{title}</h1>
    <h1 className='py-6 text-lg w-1/4'>{overview}</h1>

    <button className='bg-white text-black p-1 px-4 text-xl  rounded-lg hover: bg-opacity-80'>play</button>
    <button className=' mx-2 bg-gray-500 text-black p-1 px-4 text-xl bg-opacity-50 rounded-lg'>more info</button>
    </div>
  )
}

export default VideoTitle
