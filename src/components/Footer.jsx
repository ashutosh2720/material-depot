import React from 'react'
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { BsInstagram, BsFacebook, BsPinterest } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <>
            <footer className='flex flex-col md:flex-row items-start justify-around gap-8 sm:gap-2 p-4'>
                <div className="logo w-full sm:w-auto flex flex-col items-center justify-center">
                    <img src="https://materialdepot.in/images/header/main_logo.svg" alt="" />
                    <p> ©️ 2023 Material Depot All Rights Reserved</p>
                </div>
                <div className="links">
                    <h3>MATERIAL DEPOT</h3>
                    <ul className='font-semibold'>
                        <li>FAQs</li>
                        <li>About us</li>
                        <li>Contect us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="social flex flex-col gap-2">
                    <h3>FOLLOW US</h3>
                    <div className="social-icons flex gap-2">
                        <div className="icon">
                            <AiFillLinkedin className='text-3xl cursor-pointer' />
                        </div>
                        <div className="icon">
                            <BsInstagram className='text-3xl cursor-pointer' />
                        </div>
                        <div className="icon">
                            <FiTwitter className='text-3xl cursor-pointer' />
                        </div>
                        <div className="icon">
                            <AiFillYoutube className='text-3xl cursor-pointer' />
                        </div>
                        <div className="icon">
                            <BsFacebook className='text-3xl cursor-pointer' />
                        </div>
                        <div className="icon">
                            <BsPinterest className='text-3xl cursor-pointer' />
                        </div>
                    </div>
                    <a href="https://materialdepot.in/blog">BLOG</a>
                </div>
                <div className="download-app">
                    <h3>Download the App Now</h3>
                    <img src="https://materialdepot.in/images/footer/googleplay.svg" alt="logo" className='py-4' />
                </div>
            </footer>
            <div className="docs flex flex-wrap gap-4 border-t border-black m-2 mx-6 md:mx-16 p-2">
                <a href="">Terms & Condition</a>
                <a href="">Privacy Policy</a>
                <a href="">Refund Policy</a>
                <a href="">Shipping Policy</a>
                <a href="/" className='font-bold'>Powered by All Building Materials Technologies Private Limited</a>
            </div>
        </>
    )
}

export default Footer