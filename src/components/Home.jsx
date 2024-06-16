import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import Hero from "../img/hero.png"





export const Home = () => {
    return (
        <div className='container-home  bg-cover bg-center h-screen'>
            <div className='hero-content grid grid-cols-2 text-white pt-24 pl-28  ' >

                <div className='content-box '>


                    <span className='font-Sora-bold text-4xl leading-[54px]  text-[#dddddd]'>Eu sou Arthur Telles</span>

                    <h1 className='font-Sora-bold text-[65px] text-gradient w-3/4 leading-[78px] '>Desenvolvedor de Software</h1>

                    <p className='font-Sora-light text-xl w-3/4 mt-3 leading-[30px]'>Lo consectett. Quasi explicabo qui magni labore velit autem, iusto asperiores nobis nemo </p>

                    <div className='hero-img'>
                        <img src="/hero.png" alt="" />
                    </div>

                    <div className='button-links pt-20 '>
                        <div className='links flex gap-6'>

                            <a className='btn-CV flex gap-2 border-2 py-[17px] px-[35px] rounded-full border-[#8750f7] text-[#8750f7] hover:bg-[#8750f7] hover:text-white  font-Sora-medium text-[15px] leading-[15px]' href="">Download CV
                                <ArrowDownTrayIcon className='w-4 h-4 text-center' />
                            </a>

                            <ul className='flex gap-6 items-center text-[#8750f7]'>
                                <li>

                                    <div className='w-9 h-9 border-2 border-[#8750f7] hover:bg-[#8750f7] hover:text-white rounded-full grid justify-items-center items-center'>
                                        <TfiLinkedin className='w-4 h-4 ' />
                                    </div>

                                </li>
                                <li>
                                    <div className='w-9 h-9 border-2 border-[#8750f7] hover:bg-[#8750f7] hover:text-white rounded-full grid justify-items-center items-center'>
                                        <FaGithub className='w-4 h-4 ' />
                                    </div>
                                </li>
                                
                                <li>
                                    <div className='w-9 h-9 border-2 border-[#8750f7] hover:bg-[#8750f7] hover:text-white rounded-full grid justify-items-center items-center'>
                                        <FaGitlab className='w-4 h-4 ' />
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                <div className='box-img  pl-8'>
                    <div className='img w-[437px] h-[474px] pt-3 rounded-[30px] absolute bottom-24 transform rotate-6 transition-transform duration-300 hover:rotate-0'>
                        <img src={Hero} className=' w-[474px] h-[509px] rounded-[30px] border-2 border-[#2a1454]   hover:border-[#8750f7]' alt="" />
                    </div>


                </div>
            </div>
        </div>
    )
}
