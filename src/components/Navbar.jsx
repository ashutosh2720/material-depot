import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiCamera } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
import NavModel from './NavModel'
import { menuData } from '../data/menuData'

const Navbar = () => {
    const [isSideBarOpen, setIsSideBaropen] = useState(false)
    const [isNavmodelOpen, setIsNavmodelopen] = useState(false)
    const [subMenu, setSubMenu] = useState([])
    const [selectedSubMenu, setSelectedSubMenu] = useState('')

    const navigate = useNavigate()

    return (
        <div className='sticky top-0 z-40'>
            <div className='navbar-main bg-black p-4 xl:px-12 text-white flex justify-between items-center gap-4 w-full'>
                <div className="logo-hamburger flex items-center gap-2">
                    <div className="hamburger text-2xl cursor-pointer sm:hidden" onClick={() => setIsSideBaropen(true)}>
                        <RxHamburgerMenu />
                    </div>
                    {
                        isSideBarOpen && <SideBar setIsSideBaropen={setIsSideBaropen} />
                    }
                    <div className="logo w-24 lg:w-28 cursor-pointer" onClick={() => navigate('/')}>
                        <img src="https://materialdepot.in/images/header/md_main_logo.png" alt="logo" className='w-full' />
                    </div>
                </div>
                <div className="search hidden sm:block relative w-[65%]">
                    <div className="icon absolute left-2 h-full flex items-center text-xl text-black/50 p-2 cursor-pointer">
                        <AiOutlineSearch />
                    </div>
                    <input type="search" name="" id="search" placeholder='Search for products...' className='w-full p-2 outline-none text-black text-sm rounded-lg pl-16' />
                    <div className="icon absolute right-2 top-0 cursor-pointer text-xl text-black/50 p-2">
                        <BiCamera />
                    </div>
                </div>
                <div className="category hidden sm:flex items-center cursor-pointer">
                    Categories
                    <RiArrowDropDownLine className="icon text-xl" />
                </div>
                <div className="brands hidden sm:flex items-center cursor-pointer">
                    Brands
                    <RiArrowDropDownLine className="icon text-xl" />
                </div>
                <button className='signin bg-[#ffdb15] px-4 py-2 text-black rounded min-w-[100px]'>
                    Sign in
                </button>
            </div>
            <nav className='hidden lg:flex justify-around  xl:px-28 shadow-md border-b border-black/30 font-semibold w-full bg-white z-10'>
                {
                    menuData.map(navItem => (
                        <div className={`item py-3 flex items-center cursor-pointer border-b-4 select-none ${selectedSubMenu === navItem.name && isNavmodelOpen ? 'border-blue-500' : 'border-white'}`} onClick={() => {
                            navItem.name === selectedSubMenu || selectedSubMenu === '' ? setIsNavmodelopen(prev => !prev) : null
                            setSubMenu(navItem.sub_menus)
                            setSelectedSubMenu(navItem.name)
                        }}>
                            {navItem.name}
                            <div className="icon text-xl">
                                <RiArrowDropDownLine />
                            </div>
                        </div>
                    ))
                }
            </nav>
            {isNavmodelOpen && <NavModel subMenu={subMenu} />}
        </div>
    )
}

export default Navbar