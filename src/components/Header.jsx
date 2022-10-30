import React from 'react'
import { useLocation } from 'react-router-dom'
import image1 from '../assets/images.png'
const Header = () => {

    const location = useLocation()
    console.log(location.pathname)
    function pathMathRoute(route){
        if(route === location.pathname){return true}
    }

  return (
    <div className='sticky top-0 w-full bg-white border-b shadow-sm '>
    <div className='flex justify-between items-center px-4 max-w-[1240px] mx-auto p-3 '>
      <div>
           <img  src={image1} alt="logo" className='h-5 cursor-pointer '
            onClick={()=>navigate('/')}/>
      </div>
      <div className=''>
       <ul className='flex space-x-10'>
          <li   onClick={()=>navigate('/')} className={` py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
          ${pathMathRoute("/") && " text-black border-b-red-500"}`}>Home</li>
          <li   onClick={()=>navigate('/offers')}className={` py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
          ${pathMathRoute("/offers") && " text-black border-b-red-500"}`}>offers</li>
          <li  onClick={()=>navigate('/sign-in')} className={` py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") &&" text-black border-b-red-500"}`}>Sign In</li>
    
       </ul>
      </div>
    </div>
    </div>
    
  )
}

export default Header