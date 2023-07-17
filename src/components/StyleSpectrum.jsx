import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../data/responsiveness'

const StyleSpectrum = () => {
    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Scandinavian_design_theme.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Minimalist_design_theme.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Modern_design_theme.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Bohemian_design_theme.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Coastal_design_theme.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Traditional_design_theme.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 md:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>The Style Spectrum</h1>
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

export default StyleSpectrum