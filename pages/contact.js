// components/Contact.js
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact" className="py-20 flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Get in Touch
      </h2>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl text-center">
        Interested in working together or just want to connect? Feel free to reach out to me via email or LinkedIn, or check out my GitHub for projects.
      </p>
      
      <div className="text-5xl flex justify-center gap-16 py-8 text-gray-600 dark:text-gray-400">
        <a href="mailto:zaranasolanki41014@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail className="hover:text-red-600 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/zarana-solanki" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="hover:text-blue-600 transition duration-300" />
        </a>
        <a href="https://github.com/CodeByZarana" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="hover:text-gray-900 dark:hover:text-gray-200 transition duration-300" />
        </a>
      </div>
    </section>
  );
}
