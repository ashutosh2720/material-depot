import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../data/responsiveness'

const TileGallery = () => {

    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Classic_Wood_Cladding_Spaces.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Elegant_Quartz_Surfaces_Spaces.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Marble_TV%20Unit_Spaces.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Sleek_kitchen_cabinets_spaces.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/solids_on_wardrobe_Spaces.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/timber_tone_kitchen_Spaces.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 md:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>Tile Gallery</h1>
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
                                <img src={img} alt="" className='w-full' />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default TileGallery