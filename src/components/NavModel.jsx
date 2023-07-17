import React from 'react'

const NavModel = ({ subMenu }) => {
    return (
        <div className='hidden absolute top-full border-b border-black/30 left-0 bg-white w-full min-h-96 lg:flex gap-4 mx-10 px-2 shadow-xl overflow-auto max-w-[95%] z-40'>
            {
                subMenu.map(menuItem => (
                    <div className='p-4 min-w-[220px] border-r border-black/20'>
                        <h3 className='text-md text-blue-500 font-bold py-2'>{menuItem.name}</h3>
                        <ul className='flex flex-col gap-2'>
                            {
                                menuItem.sub_menus?.map(listItem => (
                                    <li className='hover:underline hover:text-blue-500 cursor-pointer'>{listItem.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }

        </div>
    )
}

export default NavModel