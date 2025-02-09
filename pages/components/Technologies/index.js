import { useState, useEffect } from 'react';
import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';

const width = 100;
export const data = [
  {
    src: 'https://cdn.svgporn.com/logos/github-actions.svg',
    title: 'GitHub Actions',
  },
  { src: 'https://cdn.svgporn.com/logos/git-icon.svg', title: 'Git' },
  { src: 'https://cdn.svgporn.com/logos/android-icon.svg', title: 'Android' },
  { src: 'https://cdn.svgporn.com/logos/nextjs-icon.svg', title: 'Next.js' },
  { src: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', title: 'Node.js' },
  { src: 'https://cdn.svgporn.com/logos/html-5.svg', title: 'HTML5' },
  { src: 'https://cdn.svgporn.com/logos/javascript.svg', title: 'JavaScript' },
  { src: 'https://cdn.svgporn.com/logos/css-3.svg', title: 'CSS3' },
  { src: 'https://cdn.svgporn.com/logos/jest.svg', title: 'Jest' },
  { src: 'https://cdn.svgporn.com/logos/react.svg', title: 'React' },
  { src: 'https://cdn.svgporn.com/logos/docker-icon.svg', title: 'Docker' },
  { src: 'https://cdn.svgporn.com/logos/firebase.svg', title: 'Firebase' },
  { src: 'https://cdn.svgporn.com/logos/figma.svg', title: 'Figma' },
  { src: 'https://cdn.svgporn.com/logos/notion-icon.svg', title: 'Notion' },
  {
    src: 'https://cdn.svgporn.com/logos/react-query-icon.svg',
    title: 'React Query',
  },
  { src: 'https://cdn.svgporn.com/logos/mongodb-icon.svg', title: 'MongoDB' },
  {
    src: 'https://cdn.svgporn.com/logos/apple-app-store.svg',
    title: 'Apple App Store',
  },
  { src: 'https://cdn.svgporn.com/logos/xcode.svg', title: 'Xcode' },
  {
    src: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
    title: 'TypeScript',
  },
];

const ChildComponent = ({ data, setClick }) => {
  return (
    <div
      className="w-full h-full rounded-full flex items-center justify-center select-none"
      onClick={() => setClick(data)}
    >
      {data}
    </div>
  );
};

export default function Technologies() {
  const [bubble, setBubble] = useState('');
  const [viewMode, setViewMode] = useState('bubble'); // "bubble" or "list"

  const options = {
    size: 150,
    minSize: 80,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 45,
    yRadius: 100,
    xRadius: 100,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const handleClick = (img) => {
    const src = img.props.src;
    const foundBubble = data.find((item) => item.src === src);
    setBubble(
      foundBubble ? { title: foundBubble.title, src: foundBubble.src } : null
    );
  };

  const children = data.map((item, i) => {
    const img = <img src={item.src} width={width} alt={item.title} />;
    return (
      <ChildComponent
        className="w-full h-full rounded-full"
        data={img}
        key={i}
        setClick={handleClick}
      />
    );
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-4 h-[65px] ">
        <div
          className={`text-xl font-semibold text-gray-800 flex items-center space-x-4 ${!bubble && 'opacity-0'}`}
        >
          <span className="text-gray-900">
            Selected Technology: {bubble.title}
          </span>
          <img src={bubble.src} alt={bubble.title} width={30} />
        </div>
        <button
          onClick={() => {
            setViewMode(viewMode === 'bubble' ? 'list' : 'bubble');
            setBubble('');
          }}
          className="px-4 py-2 mb-[63px]"
        >
          <i
            className={`fa-solid text-gray-950 ${
              viewMode === 'bubble' ? 'fa-list' : 'fa-grip'
            } text-2xl`}
          ></i>
        </button>
      </div>

      {viewMode === 'bubble' ? (
        <BubbleUI
          key={1}
          options={options}
          className="w-full min-h-[600px] h-[600px]"
        >
          {children}
        </BubbleUI>
      ) : (
        <div className="flex flex-col space-y-4 p-4 max-h-[600px] overflow-y-auto rounded-lg">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 p-2 hover:bg-yellow-50 rounded-md transition"
            >
              <img
                src={item.src}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain max-w-10 max-h-10"
              />
              <span className="text-gray-800 font-medium text-lg">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
