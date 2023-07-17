import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../data/responsiveness'

const MaterialDepotExclusives = () => {
    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/apple_exclusive_brand.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/vivre_exclusive_brand.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/therare_exclusive_brand.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/viva_exclusive_brand.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/sol_exclusive_brand.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/alimo_exclusive_brand.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 md:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>Material Depot Exclusive</h1>
            <div className="all-materials py-2">
                <Carousel
                    responsive={responsive}
                    ssr={true}
                    swipeable
                    className='z-0'
                >
                    {
                        images.map(img => (
                            <div className="img w-48">
                                <img src={img} alt="" />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default MaterialDepotExclusives