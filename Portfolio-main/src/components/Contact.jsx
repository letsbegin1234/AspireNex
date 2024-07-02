import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  // const email = "chavann717@gmail.com";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  function handleSubmit(e) {

    e.preventDefault();

    console.log("Clicked");
    const body = {
      name, email, message
    }
    axios.post("https://portfolio-backend-yxxk.onrender.com/api", body).then((result) => {
      if (result.status) {
        result.status === 200 ? navigate("/success") : navigate("/failure");
      }

    }).catch((err) => console.log(err));


    console.log("submitted");
  }
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[1000px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Feel Free to Contact</p>
        </div>
        <input
          className="bg-white p-2 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          className="my-4 p-2 bg-white rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          className="rounded bg-white p-2"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="text-white border-2 hover:bg-cyan-600 hover:border-cyan-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>

      {/* <div className="lg:hidden">
        <ul>
          <li className="w-[60px] h-[60px] flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/nikhil-chavan-8b83ab184"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nikhil3113"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/17Yrd0p9z4De_YdciluMg0K0q5LFh66s_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Contact;
