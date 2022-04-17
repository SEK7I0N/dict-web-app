import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaInfoCircle, FaSearch } from 'react-icons/fa'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'

export const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col justify-evenly bg-gray-900 text-white shadow-lg border-2 border-purple-500'>
        
        <SideBarIcon icon={<AiFillHome size={30}/>} text={'🏡 Home'} />
        <SideBarIcon icon={<GiPerspectiveDiceSixFacesRandom size={30}/>} text={'🎲 Shuffle Dictionary'} />
        <SideBarIcon icon={<FaSearch size={30}/>} text={'🔍 Search!'} />
        <SideBarIcon icon={<FaInfoCircle size={30}/>} text={'ℹ️ About!'}  />
    </div>
  )
}

 
const SideBarIcon = ({icon, text = 'Tooltip!!'}) => (
    <div className='sidebar-icon group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
        
    </div>
)
    