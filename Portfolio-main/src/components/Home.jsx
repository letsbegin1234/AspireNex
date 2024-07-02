// import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div name="home" className=" w-full h-screen bg-black">
//       <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
//         <p className="text-cyan-600">Hi, my name is</p>
//         <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
//           Nukabathini Subhash
//         </h1>
//         <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
//           I'm a Web Developer
//         </h2>
//         <p className="text-[#8892b0] max-w-[700px]">
//           I'm a Web Developer who loves to try new things.
//         </p>
//         <div>
//           <Link to="work" smooth={true} duration={500}>
//             <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600">
//               Works
//               <span className="group-hover:rotate-90 duration-300">
//                 <HiArrowNarrowRight className="ml-3" />
//               </span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react'
import './header.css'
import CTA from './CTA'
import profileImg from '../assets/logo7.jpeg'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'

const Header = () => {
  return (
    <header>
      <div id='home' className="header__container">

        <div className="firstContainer">
          <h3>Hello👋  I'm</h3>
          <h1 className='font-bold'>Nukabathini Subhash</h1>
          <h5 className="text-light type">
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Fullstack Developer", "Web Designer", "Freelancer", "Artist", "Competitive Programmer"]}
            /></h5>
          <CTA />
          {/* <HeaderSocials /> */}
        </div>

        <div className="secondContainer">
          <div className="imgCon">
            <img src={profileImg} alt="me" className='profile' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header