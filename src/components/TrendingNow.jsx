import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../data/responsiveness'

const TrendingNow = () => {

    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/wooden_texture_laminates.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/fabric_laminates.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/bathroom_Tile.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/bedroom_Tiles.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/elevation_Tiles_nonpriced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/highlighter_tiles.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 md:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>Trending Now</h1>
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

export default TrendingNow