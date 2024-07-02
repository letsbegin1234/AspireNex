import React from "react";
import logo from "../assets/logo.jpeg"
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 mb-10">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-20 px-4">
          <div className="bg-slate-400 rounded-xl ">
            <img className="temp rounded-xl" src={logo} />
          </div>
          <div className="flex flex-col justify-center">
            <p className=" text-lg">I'm in my final year studying Electrical Engineering at IIT Dhanbad, and I'm eager to expand my knowledge, apply it in practical situations, connect with like-minded individuals, and glean insights from their experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


// import React from 'react'
// import './about.css'
// //import Me from '../../assets/Main  (1).jpeg'
// import logo from "../assets/logo.jpeg"
// import { BiTime } from 'react-icons/bi'
// import { FiUsers } from 'react-icons/fi'
// import { AiFillFolderOpen } from 'react-icons/ai'

// const About = () => {
//   return (
//     <section className='bg-black w-full h-screen text-white' id='about'>


//       <div className=" ml-[140px] container about__container">
//         <div className="about__me">
//           <div className="about__me-image">
//             <img src={logo} alt="About-img" />
//           </div>
//         </div>

//         <div className="about__content">
//           <div className="about__cards">
//             <article className='about__card'>
//               <BiTime className='about__icon' />
//               <h5>Experience</h5>
//               <small>3+ years</small>
//             </article>
//             <article className='about__card'>
//               <AiFillFolderOpen className='about__icon' />
//               <h5>Github</h5>
//               <small>
//                 <a href="https://github.com/paulcode2" target='blank'>Click Me</a>
//               </small>
//             </article>
//             <article className='about__card'>
//               <FiUsers className='about__icon' />
//               <h5>Projects</h5>
//               <small>
//                 <a href="https://linktr.ee/paullevites" target='blank'>Click Me</a>
//               </small>
//             </article>
//           </div>

//           <p>
//             I am Dedicated and detail-oriented Frontend Engineer with over 3 years of experience in Web development and frontend technologies,
//             With a goal to solve tech related problems in various institutions of the world. <br />
//             My zeal to solve problems, has resulted in me working on various projects, as well as consulting for tech startups and Educational bodies.
//           </p>

//           <a href="#contact" className="btn btn-primary">Let's Talk</a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About
