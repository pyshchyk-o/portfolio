import { useTheme } from '../../../context/themeContext';
import React, { useState } from 'react';
import Technologies from '../Technologies/index';
import SocialLinks from '../../../components/SocialLinks';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';

const About = () => {
  const { isColorful } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

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
            <Button
              text="Download CV"
              onClick={() => console.log('Download clicked')}
            />
            <Button text="Tech Stack" onClick={toggleModal} className="ml-6" />
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
          <SocialLinks circleStyle={circleStyle} showEmail />
        </div>
      </div>

      <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
        <Technologies />
      </Modal>
    </section>
  );
};

export default About;
