import React from 'react';
import { useTheme } from '../../../context/themeContext';

const Index = () => {
  const { isColorful, toggleTheme } = useTheme();
  return (
    <nav
      className={`fixed top-[20px] left-1/2 transform -translate-x-1/2 shadow-lg z-50 ${
        isColorful ? 'bg-navbar text-white' : 'bg-stone-700'
      }`}
      style={{
        borderRadius: '34px',
        width: '80%',
      }}
    >
      <div>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                about
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400">
                projects
              </a>
            </li>
            <li>
              <a href="#hobbies" className="hover:text-yellow-400">
                hobbies
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute top-2 right-2">
          <div className="switch-container">
            <input
              className="switch-input"
              type="checkbox"
              onChange={toggleTheme}
              checked={isColorful}
            />
            <div className="switch-button">
              <div className="switch-button-inside">
                <svg
                  className="switch-icon off"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                  />
                </svg>
                <svg
                  className="switch-icon on"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="7" width="12" height="2" rx="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
