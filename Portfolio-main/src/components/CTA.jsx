import React from 'react'
import CV from '../assets/project/Resume.pdf'
import { Link } from "react-scroll";

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className="border-2 border-solid px-3 py-3 hover:bg-white hover:text-black hover:border-white  text-[#7FC7D9] border-[#40A2D8] rounded-md"> Download CV </a>
            <Link to="contact" className='border-2 border-solid px-3 py-3 hover:bg-white hover:text-black hover:border-white  text-[#7FC7D9] border-[#40A2D8] rounded-md cursor-pointer'>Let's Talk</Link>
        </div >
    )
}

export default CTA