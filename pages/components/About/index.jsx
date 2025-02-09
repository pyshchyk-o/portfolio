import { useTheme } from '../../../context/themeContext';
import React, { useState } from 'react';
import Technologies from '../Technologies/index';
import SocialLinks from '../../../components/SocialLinks';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import CanvasBackground from '../../../components/CanvasBackground';

const About = () => {
  const { isColorful } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'cv/Olha_Pyshchyk_Software_Engineer_CV.pdf';
    link.download = 'Olha_Pyshchyk_Software_Engineer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      } relative sm:h-screen pb-9 pt-28 sm:pb-0 sm:pt-0 flex flex-col items-center justify-center text-center`}
    >
      <CanvasBackground />

      <div className="mx-auto w-full flex flex-col lg:flex-row items-center max-w-[80%]">
        <div className="flex flex-1 flex-col text-white max-w-2xl items-start text-left">
          <h2
            className={`text-4xl font-bold mb-4 ${isColorful ? 'text-[#414016]' : 'text-[#A7B987]'}`}
          >
            hello, i'm Olha Pyshchyk
          </h2>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            senior software engineer
          </h3>
          <p className="text-lg mb-8">
            with a strong product mindset, passionate about building intuitive,
            high-performing web and mobile apps. I specialize in React.js,
            Next.js, and React Native, creating scalable, elegant user
            interfaces. With experience in startups and product-driven teams, I
            enjoy working across engineering, design, and UX to build great
            products. Beyond frontend, I enjoy working across the stack, solving
            complex challenges, and launching side projects like Kvik App and
            Mockup Generator. I’m always exploring new technologies and product
            strategies, making sure every product I build works well, is easy to
            use, and enjoyable.
          </p>

          <div className="flex justify-center w-full lg:justify-start lg:w-auto">
            <Button text="Download CV" onClick={downloadCV} />
            <Button text="Tech Stack" onClick={toggleModal} className="ml-6" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center mt-9 lg:mt-0">
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[6px] border-yellow-400 shadow-lg mb-8">
            <img
              src="/avatar.JPG"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <SocialLinks circleStyle={circleStyle} showEmail />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        className="items-center h-[70%] max-h-[70%] min-h-[70%] md:max-h-[730px] md:min-h-[730px]"
      >
        <Technologies />
      </Modal>
    </section>
  );
};

export default About;
