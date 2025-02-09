import React from 'react';
import { useTheme } from '../../../context/themeContext';
import SocialLinks from '../../../components/SocialLinks';

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

      <SocialLinks circleStyle={circleStyle} />
    </section>
  );
};

export default Contact;
