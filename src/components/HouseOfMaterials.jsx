import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../data/responsiveness'

const HouseOfMaterials = () => {

    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/PGVT_vitrified_Tiles.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/ceramic_Tiles_priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/gvt_vitrified_Tiles_priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/porcelain_tiles_priced.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/vitrified_Tiles_price.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/wall_tiles_priced.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 lg:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>House of Materials</h1>
            <div className="all-materials py-2">
                <Carousel
                    responsive={responsive}
                    ssr={true}
                    swipeable
                    className='z-0'
                >
                    {
                        images.map(img => (
                            <div className="img w-52 px-3">
                                <img src={img} alt="" className='w-52' />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div >
    )
}

export default HouseOfMaterials