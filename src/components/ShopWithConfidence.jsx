import React from 'react'

const ShopWithConfidence = () => {

    const shopItems = [
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fextensive-selection.svg&w=96&q=75',
            title: 'Extensive Selection',
            description: 'Handpicked building materials from more than 600+ brands'
        },
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Funbeatable-prices.svg&w=96&q=75',
            title: 'Unbeatable Prices',
            description: 'Extensive network of suppliers and distributors,source at the most competitive prices'
        },
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Freliable-shipping.svg&w=256&q=75',
            title: 'Reliable Shipping',
            description: 'Get your products delivered within a 2-3 days of placing the order upon confirmation'
        },
        {
            img: 'https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fhassle-free-returns.svg&w=96&q=75',
            title: 'Hassle Free Returns',
            description: 'Simple to request replacements for any damaged or defective products.'
        }
    ]

    return (
        <div className='flex flex-col items-center py-6 px-4 md:px-28'>
            <h1 className='text-3xl font-semibold pb-8'>Shop With Confidence</h1>
            <div className="shopItems flex flex-wrap justify-center gap-12 py-4">
                {
                    shopItems.map(({ img, title, description }) => (
                        <div className="item w-[40%] md:w-60 flex flex-col items-center">
                            <img src={img} alt="" />
                            <h2 className='text-xl font-semibold'>{title}</h2>
                            <p>{description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShopWithConfidence