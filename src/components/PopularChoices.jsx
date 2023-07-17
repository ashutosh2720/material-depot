import React from 'react';
import { allChoices } from '../data/popularChoices';


const PopularChoices = () => {

    return (
        <div className='flex flex-col items-center py-6 px-4 md:px-28'>
            <h1 className='text-5xl'>Popular Choices</h1>
            <p className='py-2'>Stunning Range For Your Dream Space</p>
            <div className="all-choices flex md:flex-wrap justify-start md:justify-center gap-12 py-4 overflow-auto w-full">
                {
                    allChoices.map(choice => (
                        <div className="min-w-fit choice flex flex-col items-center justify-center cursor-pointer">
                            <img src={choice.img} alt="choice-image" className='w-36 aspect-square rounded-full' />
                            <h3>{choice.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PopularChoices