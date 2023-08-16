import React from 'react'

const Mainpage = () => {
  return (
    <div className='w-full'>
        <div className='w-full lg:flex xl:flex md:flex grid max-w-[1440px] items-center h-[50vh] mx-auto'>
            <div className='lg:w-[70%] xl:w-[70%] md:w-[70%] w-full h-full bg-pink-400 lg:rounded-bl-2xl lg:rounded-br-2xl xl:rounded-br-2xl xl:rounded-bl-2xl md:rounded-bl-2xl md:rounded-br-2xl'>
                <img className='w-full h-full object-cover lg:rounded-bl-2xl xl:rounded-bl-2xl md:rounded-bl-2xl'
                src="https://img.freepik.com/free-photo/close-up-body-butter-recipient_23-2148543001.jpg?w=1380&t=st=1692154459~exp=1692155059~hmac=53de02dc0f80989b53d7d8f3f5a00f48991c82f7596e1b60426b661db1f2ef6e" alt="" />
            </div>
            <div className='lg:w-[30%] xl:w-[30%] md:w-[30%] w-full h-full bg-pink-300 lg:rounded-br-2xl lg:rounded-bl-none xl:rounded-br-2xl xl:rounded-bl-none md:rounded-br-2xl md:rounded-bl-none rounded-br-2xl rounded-bl-2xl'>
                <h1 className='text-black text-2xl font-semibold text-center py-7 lg:mt-[20%] xl:mt-[20%] md:mt-[20%] mt-3'>
                    Let's Get Ready <br /> With Tynin
                </h1>
                <div className='w-full lg:flex xl:flex md:flex hidden'>
                    <button className='text-white text-lg font-semibold mx-auto py-2 px-7  bg-black rounded-full'>About Us</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Mainpage