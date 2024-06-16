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
                    <ul className='flex gap-12'>
                        <li className=''>
                            <a className='navBar-Link text-base font-Sora-medium ' href="">Work</a>
                        </li>
                        <li>
                            <a className='navBar-Link text-base font-Sora-medium' href="">About</a>
                        </li>
                        <li>
                            <a className='navBar-Link text-base font-Sora-medium' href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Header