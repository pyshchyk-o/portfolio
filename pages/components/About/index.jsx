import { useTheme } from '../../../context/themeContext';
import React, { useState, useEffect } from 'react';
import Technologies from '../Technologies/index';

const About = () => {
  const { isColorful } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const circleStyle =
    'bg-orange-500 hover:bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center group transition duration-300';

  return (
    <section
      id="about"
      className={`${
        isColorful ? 'bg-home' : 'bg-stone-800'
      } h-screen flex flex-col items-center justify-center text-center px-24`}
    >
      <div className="mx-auto w-full flex flex-col lg:flex-row items-center justify-betweenlg:px-16">
        <div className="flex flex-1 flex-col text-white max-w-2xl items-start text-left">
          <h2 className="text-4xl font-bold mb-4 text-[#A7B987]">
            hello, i'm Olha Pyshchyk
          </h2>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            senior software engineer
          </h3>
          <p className="text-lg mb-8">
            with a strong product mindset, passionate about building intuitive,
            high-performing web and mobile apps. I specialize in React.js,
            Next.js, and React Native, creating scalable, elegant interfaces
            that enhance user experience. With experience in startups and
            product-driven teams, I thrive at the intersection of engineering,
            design, and UX. Beyond frontend, I enjoy working across the stack,
            solving complex challenges, and launching impactful side projects
            like Kvik App and Mockup Generator. I’m always exploring new
            technologies and product strategies, ensuring every product I build
            is functional, user-friendly, and delightful.
          </p>

          <div className="flex">
            <button className="group relative px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
              <span className="absolute inset-0 rounded-lg bg-orange-500 -translate-y-2 translate-x-2 transition duration-300 group-hover:bg-yellow-400"></span>
              <span className="relative top-[-8px] right-[-7px] font-bold group-hover:text-orange-500">
                download cv
              </span>
            </button>

            <button
              onClick={toggleModal}
              className="group relative px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ml-6"
            >
              <span className="absolute inset-0 rounded-lg bg-orange-500 -translate-y-2 translate-x-2 transition duration-300 group-hover:bg-yellow-400"></span>
              <span className="relative top-[-8px] right-[-7px] font-bold group-hover:text-orange-500">
                tech stack
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center ml-[20%]">
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[6px] border-yellow-400 shadow-lg mb-8">
            <img
              src="/avatar.JPG"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-4">
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
            <a
              href="mailto:contact@olhapyshchyk.com"
              aria-label="Email"
              className={circleStyle}
            >
              <i
                className="fa-solid fa-envelope text-white group-hover:text-orange-500 transition duration-300"
                style={{ fontSize: '20px' }}
              ></i>
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-[80%] max-w-[800px] min-h-[730px] relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 w-8 h-8 pt-2 pr-2"
            >
              <i className="fa-solid fa-xmark text-gray-950 text-2xl"></i>
            </button>
            <Technologies />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
