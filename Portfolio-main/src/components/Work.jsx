import React from 'react'
import resumemaker from '../assets/project/resumemaker.png'
import weather from '../assets/project/weather.png'
import todolist from '../assets/project/todolist.png'
import chatapp from '../assets/project/chatapp.png'
import farmconnects from '../assets/project/farmconnects.png'
import notesapp from '../assets/project/notesapp.png'

const Work = () => {
    return (
        <div name="work" className='w-full md:h-screen text-gray-300 bg-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-600'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4'>


                    <div style={{ backgroundImage: `url(${farmconnects})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                FarmConnects
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://farmconnects.onrender.com/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/letsbegin1234/farmconnects/tree/main" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div style={{ backgroundImage: `url(${resumemaker})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                Resume Maker
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://subhash-resume-maker.netlify.app/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/letsbegin1234/resume-maker" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${chatapp})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                Chat App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://chat-application-g4dx.onrender.com/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/letsbegin1234/chat-application" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div style={{ backgroundImage: `url(${weather})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                Weather
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://weatherapp-dx8n.onrender.com/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/letsbegin1234/weather-app/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div style={{ backgroundImage: `url(${notesapp})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                Notes App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://subhashnotesapp.netlify.app/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                {/* <a href="https://github.com/nikhil3113/pixato" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${todolist})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                To Do Task List
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://subhashtodolist.netlify.app/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                {/* <a href="https://github.com/nikhil3113/weather-app-react" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work