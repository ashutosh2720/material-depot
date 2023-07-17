import React from 'react'
import Navbar from "./Navbar";
import heroVideo from '../assets/hero_Animation.mp4'

const Header = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="header flex flex-col lg:flex-row items-center lg:items-start justify-center gap-2 w-[80%] lg:w-full">
                <div className="video w-full lg:w-[56%]">
                    <video src={heroVideo} autoPlay loop className='w-full' />
                </div>
                <div className="adv flex flex-col gap-4">
                    <img src="https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/H02.2.jpg?width=300" alt="" className='w-full lg:w-72 xl:w-[400px]' />
                    <img src="https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/H03.1.jpg?width=300" alt="" className='w-full lg:w-72 xl:w-[400px]' />
                </div>
            </div>
        </div>
    )
}

export default Header