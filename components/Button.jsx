const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ${className}`}
    >
      <span className="absolute inset-0 rounded-lg bg-orange-500 -translate-y-2 translate-x-2 transition duration-300 group-hover:bg-yellow-400"></span>
      <span className="relative top-[-8px] right-[-7px] font-bold group-hover:text-orange-500">
        {text}
      </span>
    </button>
  );
};

export default Button;
