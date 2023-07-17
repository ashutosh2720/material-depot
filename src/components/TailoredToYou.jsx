import React from 'react'

const TailoredToYou = () => {
    const shopItems = [
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fquality-products.svg&w=48&q=75',
            title: 'Quality Products',
        },
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Frare-collection.svg&w=64&q=75',
            title: 'Rare and exquisite designs',
        },
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fsimplified-discovery.svg&w=48&q=75',
            title: 'Simplified Material Discovery',
        },
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fexpert-advice.svg&w=48&q=75',
            title: 'Expert Advice',
        },
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fcustomer-service.svg&w=48&q=75',
            title: 'Excellent Customer Service',
        }
    ]

    return (
        <div className='flex flex-col items-center py-6 px-4 md:px-28'>
            <h1 className='text-3xl font-semibold py-4 pb-8'>Tailored To You</h1>
            <div className="shopItems flex flex-wrap justify-center items-center gap-2 py-4">
                {
                    shopItems.map(({ img, title, description }) => (
                        <div className="item w-[45%] min-h-[100px] sm:w-44 lg:w-60 flex flex-col justify-start items-center gap-2 pb-2">
                            <img src={img} alt="" className='w-8 aspect-square' />
                            <h2 className='font-semibold text-center'>{title}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TailoredToYou