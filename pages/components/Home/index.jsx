const Home = () => {
  return (
    <section
      id="home"
      className="h-[80vh] bg-home flex items-center justify-between text-center px-24"
    >
      <div className="flex flex-col flex-1 items-start ml-[10%]">
        <h1 className="text-4xl font-bold mb-4">hello, i'm Olha Pyshchyk</h1>
        <p className="text-xl mb-7 font-medium">senior software engineer</p>
        <div className="flex space-x-4">
          <button className="group relative px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
            <span className="absolute inset-0 rounded-lg bg-orange-500 -translate-y-2 translate-x-2 transition duration-300 group-hover:bg-yellow-400"></span>
            <span className="relative top-[-8px] right-[-7px] font-bold group-hover:text-orange-500">
              Download CV
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center ml-[10%]">
        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-[6px] border-yellow-400 shadow-lg">
          <img
            src="/avatar.JPG"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
