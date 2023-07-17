import React from 'react'

const SideBar = ({ setIsSideBaropen }) => {
    return (
        <div className='sm:hidden inset-0 fixed flex z-3  text-black' onClick={() => setIsSideBaropen(false)}>
            <div className="left w-[70%] h-full flex flex-col justify-start bg-white items-start  gap-6 text-md" onClick={() => setIsSideBaropen(false)}>
                <div className="welcome bg-gray-300 w-[100%] text-xl p-5 cursor-pointer" onClick={() => setIsSideBaropen(false)}>
                    <h1> Welcome !</h1>
                </div>
                <div className="home pl-5 cursor-pointer" onClick={() => setIsSideBaropen(false)}>
                    <h1>Home</h1>
                </div>
                <hr className='w-[100%] text-black' />
                <div className="shop-by pl-5 cursor-pointer" onClick={() => setIsSideBaropen(false)}>
                    <h1>Category</h1>
                </div>
                <hr className='w-[100%] text-black' />
                <div className="all-brands pl-5 cursor-pointer" onClick={() => setIsSideBaropen(false)}>
                    <h1>All Brands</h1>
                </div>
                <div className="contact pl-5 cursor-pointer" onClick={() => setIsSideBaropen(false)}>
                    <h1>Cotact Us</h1>
                </div>
                <div className="refund pl-5 cursor-pointer" onClick={() => setIsSideBaropen(false)}>
                    <h1>Refond policy</h1>
                </div>
                <div className="terms pl-5 cursor-pointer" onClick={() => setIsSideBaropen(false)}>
                    <h1>
                        Terms and condition
                    </h1>
                </div>
            </div>

            <div className="right w-[30%] z-5 h-full bg-black/50" onClick={() => setIsSideBaropen(false)}>

            </div>

        </div>
    )
}

export default SideBar
