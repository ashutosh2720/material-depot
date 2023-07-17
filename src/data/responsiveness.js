export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6,
        slidesToSlide: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 6,
        slidesToSlide: 5
    },
    tablet: {
        breakpoint: { max: 1323, min: 998 },
        items: 4,
        slidesToSlide: 2
    },
    tablet2: {
        breakpoint: { max: 998, min: 800 },
        items: 3,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 800, min: 600 },
        items: 3,
        slidesToSlide: 2
    },
    superSmallMobile: {
        breakpoint: { max: 600, min: 370 },
        items: 2,
        slidesToSlide: 2
    },
    superDuperSmallMobile: {
        breakpoint: { max: 370, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};