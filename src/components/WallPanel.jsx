import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../data/responsiveness'

const WallPanel = () => {
    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Charcoal_Panels_priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/MDF%20Panels_priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/WPC_Panels_priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Wooden_look-375.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Plain_Colour_Panels_priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Marble%20Texture%20Panels_priced.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 md:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>Wall Panel Artistry</h1>
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

export default WallPanel