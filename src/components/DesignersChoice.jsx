import React from 'react'
import { responsive } from '../data/responsiveness'
import Carousel from 'react-multi-carousel';

const DesignersChoice = () => {

    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Acrylic_Laminates_non-priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Solid_color_laminates.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/hexagonal_Tiles.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/moroccan_tiles.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/subway_Tiles.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/mosaic_tiles.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 md:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>Designer's Choice</h1>
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

export default DesignersChoice