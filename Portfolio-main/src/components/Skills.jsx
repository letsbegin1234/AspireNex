import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
// import python from '../assets/python.png'
import github from '../assets/github.png'
import bootstrap from '../assets/bootstrap.png'
import Cpp from '../assets/Cpp.png'

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen bg-black text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-600 '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center'>
                    <div className='border-solid border border-sky-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-10' src={HTML} alt="html" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='border-solid border border-sky-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-10' src={CSS} alt="html" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='border-solid border border-sky-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-10' src={js} alt="html" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='border-solid border border-sky-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-10' src={react} alt="html" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='border-solid border border-sky-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-10' src={bootstrap} alt="html" />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='border-solid border border-sky-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-10' src={Cpp} alt="html" />
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='hidden md:block  border-solid border border-sky-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-10' src={github} alt="html" />
                        <p className='my-4'>Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills