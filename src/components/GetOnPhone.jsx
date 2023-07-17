import React from 'react'

const GetOnPhone = () => {

    const img = 'https://materialdepot.in/images/home/get_app_banner.png'

    return (
        <div className='flex flex-col items-center py-6 md:px-24'>
            <div className="material flex flex-col md:flex-row gap-12 justify-center p-12">
                <div className="left">
                    <img src={img} alt="" />
                </div>
                <div className="right flex flex-col justify-center gap-4 items-start min-h-[100%] w-full md:max-w-[60%]">
                    <h2 className='text-xl font-semibold'>Get your materials needs on your phone.</h2>
                    <p>Download the Material Depot app curates materials from top lining brands for ready to be deployed for your 3D renderings.</p>
                    <div className="play-store">
                        <img src="https://materialdepot.in/images/footer/googleplay.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetOnPhone