import React from 'react';

const SocialLinks = ({ showEmail }) => {
  const circleStyle =
    'bg-orange-500 hover:bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center group transition duration-300';
  const links = [
    {
      href: 'https://github.com/pyshchyk-o',
      label: 'GitHub',
      iconClass: 'fa-brands fa-github',
    },
    {
      href: 'https://www.linkedin.com/in/opyshchyk',
      label: 'LinkedIn',
      iconClass: 'fa-brands fa-linkedin-in',
    },
    {
      href: 'https://twitter.com/OlhaPyshchyk',
      label: 'Twitter',
      iconClass: 'fa-brands fa-twitter',
    },
  ];

  if (showEmail) {
    links.push({
      href: 'mailto:contact@olhapyshchyk.com',
      label: 'Email',
      iconClass: 'fa-solid fa-envelope',
    });
  }

  return (
    <div className="flex space-x-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={
            link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
          }
          aria-label={link.label}
          className={circleStyle}
        >
          <i
            className={`${link.iconClass} text-white group-hover:text-orange-500 transition duration-300`}
            style={{ fontSize: '20px' }}
          ></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
