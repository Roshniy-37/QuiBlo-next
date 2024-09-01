import React from 'react';

interface InputBoxProps {
  option: string;
  onSelect: (option: string) => void;
  className: string,
}

const InputBox: React.FC<InputBoxProps> = ({ option, onSelect, className }) => {
  return (
    <button 
      className={`${className} shadow-lg rounded-lg h-[10vh] w-[40vw] flex items-center border-2 hover:border-violet-500 transition-all`}
      onClick={() => onSelect(option)}
    >
      <p className='text-xl font-bold ml-10'>{option}</p>
    </button>
  );
};

export default InputBox;
