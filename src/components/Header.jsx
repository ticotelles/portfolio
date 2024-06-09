import React from 'react'

const Header = () => {
    return (
        <div className='container  bg-transparent text-white'>
            <div className='navBar flex justify-between pt-8 pb-4 max-w-full px-28' >
                <div className='logo'>
                    <h1>LOGO</h1>
                </div>

                <div className=''>
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