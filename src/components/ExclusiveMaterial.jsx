import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const ExclusiveMaterial = () => {

    const img = 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fmaterial-request.png&w=1920&q=75'

    return (
        <div className='flex flex-col items-center py-6 px-4 md:px-28'>
            <h1 className='text-3xl font-semibold pb-8'>Exclusive Material Requests</h1>
            <div className="material flex flex-col-reverse sm:flex-row gap-12 justify-between bg-[#f5eddf] p-4 sm:p-12 w-full">
                <div className="left flex flex-col justify-between items-start min-h-[100%] md:max-w-[60%]">
                    <h2 className='text-xl font-semibold'>No more wasting time and energy visiting multiple stores.</h2>
                    <p>Just send us a WhatsApp message with your material list, and we'll give you the best quote possible. It's that easy!</p>
                    <button className='flex bg-[#20b038] p-2 px-4 rounded text-white flex items-center gap-2 text-lg'>
                        <BsWhatsapp />
                        Get Quote on Whatsapp
                    </button>
                </div>
                <div className="right">
                    <img src={img} alt="" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default ExclusiveMaterial