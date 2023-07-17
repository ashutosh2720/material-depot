import React from 'react'
import { BsTelephone } from 'react-icons/bs'

const BuyOnPhone = () => {
    return (
        <div className='fixed bottom-10 shadow-lg rounded border border-black/5 flex items-center gap-2 p-1 px-4 bg-white'>
            <div className="icon text-2xl">
                <BsTelephone />
            </div>
            <div className="content">
                <p>Buy on Phone</p>
                <p className='text-blue-500 text-xl'>8121523945</p>
            </div>
        </div>
    )
}

export default BuyOnPhone