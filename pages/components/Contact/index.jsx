import React from 'react';
import { useTheme } from '../../../context/themeContext';

const Contact = () => {
  const { isColorful } = useTheme();
  const circleStyle =
    'bg-orange-500 hover:bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center group transition duration-300';
  return (
    <section
      id="contact"
      className={`${
        isColorful ? 'bg-contact text-white' : 'bg-stone-800 text-gray-300'
      } h-[50vh] flex flex-col items-center justify-center text-center px-24`}
    >
      <h2 className="text-4xl font-bold mb-4 text-[#DEDAAD]">contact me</h2>
      <p className="text-lg mb-6">
        email:{' '}
        <a
          href="mailto:contact@olhapyshchyk.com"
          className="text-yellow-400 hover:underline"
        >
          contact@olhapyshchyk.com
        </a>
      </p>

      <div className="flex space-x-6">
        <a
          href="https://github.com/pyshchyk-o"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={circleStyle}
        >
          <i
            className="fa-brands fa-github text-white group-hover:text-orange-500 transition duration-300"
            style={{ fontSize: '20px' }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/opyshchyk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={circleStyle}
        >
          <i
            className="fa-brands fa-linkedin-in text-white group-hover:text-orange-500 transition duration-300"
            style={{ fontSize: '20px' }}
          ></i>
        </a>
        <a
          href="https://twitter.com/OlhaPyshchyk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className={circleStyle}
        >
          <i
            className="fa-brands fa-twitter text-white group-hover:text-orange-500 transition duration-300"
            style={{ fontSize: '20px' }}
          ></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
