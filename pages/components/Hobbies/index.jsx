import React, { useState } from 'react';
import { useTheme } from '../../../context/themeContext';
import CanvasBackground from '../../../components/CanvasBackground';

const hobbiesData = [
  {
    id: 1,
    name: 'Running',
    icon: 'fa-solid fa-person-running',
    color: 'bg-orange-500',
    description:
      'I enjoy training for marathons and running in scenic nature trails.',
  },
  {
    id: 2,
    name: 'Photography',
    icon: 'fa-solid fa-camera-retro',
    color: 'bg-blue-500',
    description: 'Capturing landscapes and street photography in my free time.',
  },
  {
    id: 3,
    name: 'Traveling',
    icon: 'fa-solid fa-plane',
    color: 'bg-[#ABC337]',
    description: 'I love exploring different cultures and trying local food.',
  },
  {
    id: 4,
    name: 'Languages',
    icon: 'fa-solid fa-globe',
    color: 'bg-[#FCCF47]',
    description: 'I enjoy learning new languages.',
  },
  {
    id: 5,
    name: 'Books',
    icon: 'fa-solid fa-book',
    color: 'bg-purple-500',
    description:
      'Reading fiction, non-fiction, and tech books is my favorite pastime.',
  },
  {
    id: 6,
    name: 'Investments',
    icon: 'fa-solid fa-chart-line',
    color: 'bg-red-500',
    description: 'Exploring finance, stocks, and investment.',
  },
  {
    id: 7,
    name: 'Mountains',
    icon: 'fa-solid fa-mountain',
    color: 'bg-gray-600',
    description:
      'I love trail running in the mountains and enjoying the views.',
  },
  {
    id: 8,
    name: 'Hiking',
    icon: 'fa-solid fa-hiking',
    color: 'bg-green-500',
    description: '',
  },
];

const Hobbies = () => {
  const { isColorful } = useTheme();
  const [expandedBubble, setExpandedBubble] = useState(null);

  return (
    <section
      id="hobbies"
      className={`h-screen ${
        isColorful ? 'bg-hobbies' : 'bg-stone-800'
      } relative flex flex-col items-center text-center py-12 px-6`}
    >
      <CanvasBackground />
      <h2
        className={`text-4xl font-bold my-12 ${
          isColorful ? 'text-[#414016]' : 'text-[#DEDAAD]'
        }`}
      >
        hobbies
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-[900px] place-items-center pt-16">
        {hobbiesData.map((hobby) => {
          const isExpanded = expandedBubble === hobby.id;

          // Fixed base size and adaptive scaling
          const baseSize = 200; // Default size
          const expandedSize = 250; // Size when expanded
          const size = isExpanded ? expandedSize : baseSize;

          return (
            <div
              key={hobby.id}
              onClick={() =>
                setExpandedBubble((prev) =>
                  prev === hobby.id ? null : hobby.id
                )
              }
              className={`relative flex flex-col items-center justify-center text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out bg-stone-200 border-4 border-orange-500 hover:scale-105 hover:shadow-xl hover:bg-yellow-50`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                padding: '16px', // Padding to contain the text
                overflow: 'hidden', // Prevent text overflow
              }}
            >
              <i className={`${hobby.icon} text-4xl mb-2 text-orange-500`}></i>
              <p className="text-sm font-semibold text-[#414016]">
                {hobby.name}
              </p>

              {isExpanded && (
                <div
                  className={`text-xs mt-2 px-2 text-center transition-opacity duration-300 ease-in-out text-[#414016] font-semibold`}
                  style={{ maxHeight: '100px', overflow: 'auto' }}
                >
                  {hobby.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hobbies;
