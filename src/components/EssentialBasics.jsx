import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../data/responsiveness'

const EssentialBasics = () => {
    const images = [
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/MR_grade_plywood.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/BWP_grade_plywood.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/BWR_Grade_plywood.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/fully_calibrated_plywood.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/okume_face_plywood.jpg?width=100',
        'https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/gurjan_face_plywood.jpg?width=100'
    ]

    return (
        <div className='py-6 px-4 md:px-28'>
            <h1 className='text-2xl font-semibold pb-8'>Essential Basics</h1>
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

export default EssentialBasics