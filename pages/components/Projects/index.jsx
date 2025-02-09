import React, { useState } from 'react';
import { useTheme } from '../../../context/themeContext';
import CanvasBackground from '../../../components/CanvasBackground';
import Modal from '../../../components/Modal';

const personalProjects = [
  {
    title: 'Kvik App – Real-Time Training Progress Tracker',
    timeframe: '2023 – Present',
    status: 'in progress',
    description:
      'Kvik App is a training progress tracker built for runners and coaches, enabling real-time performance monitoring and personalized insights.',
    technologies: ['Next.js', 'React Native', 'Firebase', 'Expo'],
    link: 'https://kvikapp.com/',
    label: 'kvikapp.com',
    logo: 'kvik_logo.svg',
  },
  {
    title: 'Mockup Generator – Automating Product Mockups in Seconds',
    timeframe: 'May 2023 – Present',
    status: 'in progress',
    description:
      'Mockup Generator is an online tool that helps designers, marketers, and store owners create multiple mockups in seconds.',
    technologies: ['React', 'Next.js', 'Node.js', 'Stripe'],
    link: 'https://mockupgenerator.co/',
    label: 'mockupgenerator.co',
    logo: 'mockup_generator_logo.svg',
  },
  {
    title: 'Run Wild Peanut',
    timeframe: '2025',
    status: 'soon',
    description: 'Apparel store for outdoor and nature enthusiasts.',
    technologies: ['Amazon'],
    link: 'https://runwildpeanut.com',
    label: 'runwildpeanut.com',
    logo: 'run_wild_peanut.png',
  },
  {
    title: 'Noe Crafts',
    timeframe: '2022 – Present',
    status: 'in progress',
    description:
      "Part of the Noe Crafts community, where we're we are building indie projects and exploring new ideas.",
    technologies: ['Shopify'],
    link: 'https://noecrafts.com/',
    label: 'noecrafts.com',
    logo: 'noe-logo.svg',
    logoStyles: 'rounded-xl',
  },
];

const workProjects = [
  {
    title: 'AI Supplier Insights – Procurement Intelligence Tool',
    timeframe: 'Sep 2023 – Present',
    status: 'in progress',
    description:
      'A procurement AI-powered platform that helps businesses manage suppliers, analyze risk, and discover new opportunities.',
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Node.js',
      'AI Search',
      'Web Accessibility',
    ],
    link: 'https://scoutbee.com/',
    label: 'scoutbee.com',
    keyContributions: [
      'Developing new features and enhancing the Next.js & TypeScript codebase.',
      'Refactoring & optimizing existing code for better performance and maintainability.',
      'AI-powered search development, improving procurement intelligence.',
      'Web accessibility improvements, ensuring compliance and a better user experience.',
      'Full-stack development, contributing to both frontend and backend improvements.',
    ],
  },
  {
    title: 'Workforce Management Platform – Job Marketplace',
    timeframe: 'Nov 2020 – Jan 2023',
    status: 'completed',
    description:
      'A workforce management platform connecting businesses with job seekers across 25+ markets in the U.S.',
    technologies: ['React', 'React Native', 'Angular', 'GraphQL', 'TypeScript'],
    link: 'https://www.bluecrewjobs.com/',
    label: 'bluecrewjobs.com',
    keyContributions: [
      'Developed and maintained the web platform using React & Angular.',
      'Built new features and optimized the React Native mobile app for iOS & Android.',
      'Led frontend improvements, refactoring code for better performance & scalability.',
      'Reviewed pull requests, ensuring code quality and best practices.',
      'Collaborated with product & design teams, driving features from discussion to production.',
      'Optimized app performance, improving speed & user experience, helping it gain a top market position.',
    ],
  },
  {
    title: 'Smart Photo & NAS Manager – Cross-Platform Mobile Apps',
    timeframe: 'Jan 2017 – Nov 2020',
    status: 'completed',
    description:
      'Developed hybrid iOS & Android mobile applications for smart photo management and NAS devices, along with a React web application.',
    technologies: ['React Native', 'React', 'Redux', 'Saga'],
    link: 'https://www.luxoft.com/',
    label: 'luxoft.com',
    keyContributions: [
      'Reviewed UI/UX designs to ensure seamless user experience across platforms.',
      'Collaborated with clients to define implementation strategies and development goals.',
      'Led development of new features, ensuring high performance and maintainability.',
      'Conducted code reviews to improve code quality and enforce best practices.',
      'Monitored app performance, optimizing for better speed and efficiency.',
      'Mentored junior developers, providing guidance and fostering team growth.',
      'Successfully launched three mobile apps on the App Store & Google Play, helping thousands of users manage media files and documents.',
    ],
  },
  {
    title: 'Web & Booking Platforms – Frontend Development',
    timeframe: 'Feb 2016 – Jan 2017',
    status: 'completed',
    description:
      'Developed multiple web applications, including an internal company homepage, an airplane booking system, and an online course booking platform.',
    technologies: ['React', 'React Native', 'Angular', 'Meteor.js', 'Node.js'],
    link: 'https://www.kruschecompany.com/',
    label: 'kruschecompany.com',
    keyContributions: [
      'Implemented and maintained web applications for booking and internal company use.',
      'Reviewed and verified web application design specifications for consistency and usability.',
      'Developed key features while ensuring performance and accessibility.',
      'Wrote unit and end-to-end (E2E) tests to improve application stability.',
      'Conducted code reviews to maintain high-quality standards across the team.',
      'Participated in architectural decisions, contributing to scalable and maintainable solutions.',
      'Documented design decisions to ensure future development efficiency.',
    ],
  },
];

const Projects = () => {
  const { isColorful } = useTheme();
  const [showPersonal, setShowPersonal] = useState(true);
  const [modalContent, setModalContent] = useState(null);

  const projects = showPersonal ? personalProjects : workProjects;

  const toggleModal = (content = null) => {
    setModalContent(content);
  };

  return (
    <section
      id="projects"
      className={`relative min-h-screen flex flex-col items-center text-center py-12 px-6 ${
        isColorful ? 'bg-projects' : 'bg-stone-800'
      }`}
    >
      <CanvasBackground />
      <div className="mb-8 mt-11 flex space-x-4 z-10">
        <button
          onClick={() => setShowPersonal(true)}
          className={`px-6 py-2 font-bold rounded-lg transition duration-300 ${
            showPersonal
              ? 'bg-orange-500 text-white'
              : `${
                  isColorful ? 'bg-navbar' : 'bg-stone-700'
                } text-white hover:bg-stone-500`
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => setShowPersonal(false)}
          className={`px-6 py-2 font-bold rounded-lg transition duration-300 ${
            !showPersonal
              ? 'bg-orange-500 text-white'
              : `${
                  isColorful ? 'bg-navbar' : 'bg-stone-700'
                } text-white hover:bg-stone-500`
          }`}
        >
          Work
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full py-9">
        {projects.map((project, index) => {
          const status = project.status;
          const shouldShowReadMore = project.keyContributions?.length > 3;
          return (
            <div
              key={index}
              className="w-full max-w-sm sm:w-[450px] min-h-[430px] bg-stone-200 rounded-lg shadow-lg p-4 sm:p-6 flex-shrink-0 transform hover:scale-105 transition duration-300 flex flex-col justify-between relative"
            >
              <div className="flex flex-col">
                {project.logo && (
                  <div className="flex w-full justify-center mt-5">
                    <img
                      src={project.logo}
                      width={80}
                      height={80}
                      alt="Project logo"
                      className={project.logoStyles}
                    />
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 mt-8">
                  {project.title}
                </h3>

                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full text-white ${
                    status === 'in progress'
                      ? 'bg-lime-900'
                      : status === 'soon'
                        ? 'bg-yellow-900'
                        : 'bg-green-500'
                  }`}
                >
                  {status}
                </span>

                <p className="text-gray-600 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.label}
                  className="font-bold rounded-lg bg-orange-500 hover:bg-yellow-400 hover:text-orange-500 p-3 min-w-[90px] mr-4"
                >
                  {project.label}
                </a>
                {shouldShowReadMore && (
                  <button
                    onClick={() => toggleModal(project)}
                    className="font-bold rounded-lg bg-yellow-400 hover:bg-orange-500 hover:text-white p-3 min-w-[90px]"
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {modalContent && (
        <Modal
          isOpen={!!modalContent}
          toggleModal={() => toggleModal(null)}
          className="items-center max-h-[70%] h-[70%] min-h-[70%] md:h-auto md:max-h-[730px] md:min-h-[730px]"
        >
          <div className="overflow-y-auto h-full">
            <div className="text-left p-5 sm:p-10">
              <h2 className="text-xl sm:text-3xl font-bold mb-4 text-gray-800">
                {modalContent.title}
              </h2>
              <p className="text-gray-600 mb-4">{modalContent.description}</p>
              {modalContent.keyContributions && (
                <ul className="mt-4 list-disc list-inside space-y-2 text-left mb-7">
                  {modalContent.keyContributions.map((contribution, i) => (
                    <li
                      key={i}
                      className="ml-2 text-gray-600 text-sm sm:text-base"
                    >
                      {contribution}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap gap-2 mt-4">
                {modalContent.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-2 text-sm font-semibold text-yellow-400 bg-orange-500 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
