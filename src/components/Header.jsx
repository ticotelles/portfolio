import React from 'react'
import Logo from '../img/logo.png'

const Header = () => {
    return (
        <div className='container  bg-transparent text-white'>
            <div className='navBar flex justify-between pt-8 pb-4 max-w-full px-28' >
                <div className='logo flex'>
                    <img src={Logo}  alt="" className='w-24 h-24 ' />

                    <div className='mt-6 pl-4'>
                        <a href="" className='font-Sora-medium hover:text-[#8750f7] '>arthur.telles@ufvjm.edu.br</a>
                    </div>

                </div>

                <div className='mt-4'>
                    <ul className='flex gap-12 mt-2'>
                        <li className=''>
                            <a className='navBar-Link  font-Sora-medium  relative   block after:block  after:absolute after:h-[2px] after:bg-[#8750f7] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ' href="" >Work</a>
                        </li>
                        <li>
                            <a className='navBar-Link text-base font-Sora-medium  relative   block after:block  after:absolute after:h-[2px] after:bg-[#8750f7] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left   ' href="">About</a>
                        </li>
                        <li>
                            <a className='navBar-Link text-base font-Sora-medium  relative   block after:block  after:absolute after:h-[2px] after:bg-[#8750f7] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left  ' href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Header