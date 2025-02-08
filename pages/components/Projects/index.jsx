import React, { useState } from 'react';
import { useTheme } from '../../../context/themeContext';

const Projects = () => {
  const { isColorful } = useTheme();
  const [showPersonal, setShowPersonal] = useState(true); // Toggle state

  const personalProjects = [
    {
      title: 'Kvik App – Real-Time Training Progress Tracker',
      timeframe: 'Website | Dec 2023 – Present',
      description:
        'Kvik App is a training progress tracker built for runners and coaches, enabling real-time performance monitoring and personalized insights. It helps athletes track workouts, communicate with coaches, and optimize training plans.',
      technologies: ['Next.js', 'React Native', 'Firebase', 'Expo'],
      link: 'https://kvikapp.com/',
      label: 'kvikapp.com',
      logo: 'kvik_logo.svg',
    },
    {
      title: 'Mockup Generator – Automating Product Mockups in Seconds',
      timeframe: 'May 2023 – Present',
      description:
        'Mockup Generator is an online tool that helps designers, marketers, and store owners create multiple mockups in seconds, eliminating tedious manual work.',
      technologies: ['React', 'Next.js', 'Node.js', 'Stripe'],
      link: 'https://mockupgenerator.co/',
      label: 'mockupgenerator.co',
      logo: 'mockup_generator_logo.svg',
    },
    {
      title: 'Run Wild Peanut',
      timeframe: '2023 – Present',
      description:
        'A community and apparel store for outdoor and nature enthusiasts. Stay cozy and adventure on.',
      technologies: ['Amazon'],
      link: 'https://runwildpeanut.com',
      label: 'runwildpeanut.com',
      logo: 'run_wild_peanut.png',
    },
    {
      title: 'Noe Crafts',
      timeframe: '2022 – Present',
      description:
        "At Noe Crafts, we're passionate indie makers, software developers and creatives. We build cool stuff together and share our learnings.",
      technologies: ['Shopify'],
      link: 'https://noecrafts.com/',
      label: 'noecrafts.com',
    },
  ];

  const workProjects = [
    {
      title: 'AI Supplier Insights – Procurement Intelligence Tool',
      timeframe: 'Scoutbee | Sep 2023 – Present',
      description:
        'A procurement AI-powered platform that helps businesses manage supplier relationships, analyze risk, and discover new opportunities.',
      technologies: [
        'Frontend Architecture',
        'Data Visualization',
        'AI-Driven Insights',
      ],
      link: 'https://scoutbee.com/',
      label: 'scoutbee.com',
    },
    {
      title: 'B2B Logistics Dashboard',
      timeframe: '2022 – Present',
      description:
        'An enterprise dashboard for managing logistics and tracking shipments across different regions.',
      technologies: ['React', 'Redux', 'GraphQL', 'TypeScript'],
      link: '#',
      label: 'Private Project',
    },
  ];

  const projects = showPersonal ? personalProjects : workProjects; // Show relevant projects

  return (
    <section
      id="projects"
      className={`${
        isColorful ? 'bg-projects' : 'bg-stone-800'
      } h-screen flex flex-col items-center text-center py-12 px-24`}
    >
      <div className="mb-8 mt-11 flex space-x-4">
        <button
          onClick={() => setShowPersonal(true)}
          className={`px-6 py-2 font-bold rounded-lg transition duration-300 ${
            showPersonal
              ? 'bg-orange-500 text-white'
              : `${isColorful ? 'bg-navbar' : 'bg-stone-700'} text-white hover:bg-stone-500`
          }`}
        >
          personal projects
        </button>
        <button
          onClick={() => setShowPersonal(false)}
          className={`px-6 py-2 font-bold rounded-lg transition duration-300 ${
            !showPersonal
              ? 'bg-orange-500 text-white'
              : `${isColorful ? 'bg-navbar' : 'bg-stone-700'} text-white hover:bg-stone-500`
          }`}
        >
          work projects
        </button>
      </div>

      <div className="flex overflow-x-scroll space-x-6 w-full scrollbar-hide py-9">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[450px] w-[450px] min-h-[500px] bg-stone-200 rounded-lg shadow-lg p-6 flex-shrink-0 transform hover:scale-105 transition duration-300 flex flex-col justify-between"
          >
            <div className="flex flex-col">
              {project.logo && (
                <div className="flex w-full justify-center my-5">
                  <img
                    src={project.logo}
                    width={100}
                    height={100}
                    alt="progect logo"
                  />
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="flex">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.label}
                className="font-bold rounded-lg bg-orange-500 hover:bg-yellow-400 hover:text-orange-500 p-3 min-w-[90px] mr-4"
              >
                {project.label}
              </a>
              <button className="font-bold rounded-lg text-orange-500 bg-yellow-400 hover:text-white hover:bg-orange-500 p-3 min-w-[90px]">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
