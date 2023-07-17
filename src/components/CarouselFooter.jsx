import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselFooter = () => {

    const brandImgs = [
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/SOL.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Greenply.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Greenlam.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Jaquar.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/hafele.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Hettich.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/New%20Mika.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Viva%20Quartz.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Alimo.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Heritage.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/The%20rare.png?width=200",
        "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/hafele.png?width=200",
    ];

    return (
        <marquee behavior="slide" direction="left" loop='true' className='bg-black max-h-24'>
            <div className='flex gap-6 items-center'>
                {
                    brandImgs.map(img => (
                        <div className='min-h-[6rem] flex'>
                            <img src={img} alt="image-logo" className='w-24 object-fit' />
                        </div>
                    ))
                }
            </div>
        </marquee>
    )
}

export default CarouselFooter