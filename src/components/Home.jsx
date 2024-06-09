import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'



export const Home = () => {
    return (
        <div className='container-home  bg-cover bg-center h-screen'>
            <div className='hero-content grid grid-cols-2 text-white pt-40 pl-24 ' >

                <div className='content-box '>


                    <span className='font-Sora-bold text-4xl leading-[54px]'>Eu sou Arthur Telles</span>

                    <h1 className='font-Sora-bold text-[65px] text-gradient w-3/4 leading-[78px] '>Desenvolvedor de Software</h1>

                    <p className='font-Sora-light text-xl w-3/4 mt-3 leading-[30px]'>Lo consectett. Quasi explicabo qui magni labore velit autem, iusto asperiores nobis nemo beatae veniam quos mollitia doloribus? Libero cumque repellat doloremque adipisci consequuntur!</p>

                    <div className='hero-img'>
                        <img src="" alt="" />
                    </div>

                    <div className='button-links pt-4 '>
                        <div className='links flex'>
                            
                                <a className='btn-CV flex gap-2 border-2 py-[17px] px-[35px] rounded-full font-Sora-medium text-[15px] leading-[15px]' href="">Download CV  
                                    <ArrowDownTrayIcon className='w-4 h-4 text-center' />  
                                </a>

                            <ul className='flex'>
                                <li>
                                    <a href="L">L</a>
                                </li>
                                <li>
                                    <a href="L">G</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='box-img  pl-8'>
                    <div className='img w-[30%] h-[460px] bg-slate-700 rounded-[30px] absolute bottom-24 transform rotate-6 transition-transform duration-300 hover:rotate-0'>

                    </div>


                </div>
            </div>
        </div>
    )
}
