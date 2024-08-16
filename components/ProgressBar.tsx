import React from 'react';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className='flex justify-center pt-[6vh]'>
      <ul className="steps">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <li
            key={index}
            className={`step text-violet-500 ${index < currentQuestion ? 'step-primary' : ''}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;