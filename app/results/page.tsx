'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import quizData from '@/quizData.json'; // Adjust the path as necessary
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Results: React.FC = () => {
  const searchParams = useSearchParams();
  const userAnswers = JSON.parse(decodeURIComponent(searchParams.get('answers') || '[]'));

  const [currentIndex, setCurrentIndex] = useState(0);
  const questionsPerPage = 5;

  const score = userAnswers.reduce((total: number, answer: string, index: number) => {
    if (answer === quizData.questions[index].answer) {
      return total + 1;
    }
    return total;
  }, 0);

  const totalPages = Math.ceil(quizData.questions.length / questionsPerPage);

  const handlePrevPage = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  };

  const startIndex = currentIndex * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;

  return (
    <div className='w-full h-screen bg-[#E57494]/30 flex flex-col justify-center items-center relative'>
      <img src='doodles/d1.svg' alt='' className='absolute top-[10vh] w-[40vw]' />
    
    <img src='doodles/d2.svg' alt='' className='absolute w-52 -rotate-12 left-20 top-[45vh]' />
    <img src='doodles/d3.svg' alt='' className='absolute w-20 rotate-12 left-64 top-[42vh]' />
    <img src='doodles/d4.svg' alt='' className='absolute w-60 right-20 top-[20vh]' />
    <img src='doodles/d5.svg' alt='' className='absolute w-44 right-72 top-[58vh]' />

      <h1 className='text-5xl font-bold -translate-y-1'>Quiz <span className='text-[#8fa9f3]'>Results</span></h1>
      <div className='w-[32vw] h-[64vh] overflow-y-auto p-6 bg-[#8fa9f3]/60 rounded-2xl shadow-md z-30 mt-8'>
        <ul>
          {quizData.questions.slice(startIndex, endIndex).map((question, index) => {
            const userAnswer = userAnswers[startIndex + index];
            const isCorrect = userAnswer === question.answer;
            return (
              <li key={startIndex + index} className='text-lg text-white'>
                <p className='font-medium'>
                  <strong className='text-black'>Question {startIndex + index + 1}:</strong> {question.question}
                </p>
                <p className='font-medium'>
                  <strong className='text-black'>Your Answer:</strong> {userAnswer}{' '}
                </p>
                <p className='font-medium'>
                  <strong className='text-black'>Correct Answer:</strong> {question.answer}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex justify-center items-center translate-y-1'>
        <button
          className={` flex items-center justify-center py-4 rounded-full mr-4 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePrevPage}
          disabled={currentIndex === 0}
        >
          <span className='text-2xl font-bold text-white'><ChevronLeft className='text-green-700' strokeWidth={3} size={25} /></span>
        </button>
        <button
          className={` flex items-center justify-center py-4 rounded-full ml-4 ${
            currentIndex === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleNextPage}
          disabled={currentIndex === totalPages - 1}
        >
          <span className='text-2xl font-bold text-white'><ChevronRight className='text-green-700' strokeWidth={3} size={25} /></span>
        </button>
      </div>
      <div className='translate-y-2 flex items-center'>
        {/* <button
          className={` flex items-center justify-center py-4 px-6 rounded-full mr-4 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePrevPage}
          disabled={currentIndex === 0}
        >
          <span className='text-2xl font-bold text-white'><ChevronLeft className='text-green-700' strokeWidth={3} size={25} /></span>
        </button> */}
        <div className='bg-black flex items-center justify-center py-4 px-6 rounded-full'>
          <h2 className='text-2xl font-bold text-white'><span className='text-[#8fa9f3]'>Your Score:</span> {score} / {quizData.questions.length}</h2>
        </div>
        {/* <button
          className={` flex items-center justify-center py-4 px-6 rounded-full ml-4 ${
            currentIndex === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleNextPage}
          disabled={currentIndex === totalPages - 1}
        >
          <span className='text-2xl font-bold text-white'><ChevronRight className='text-green-700' strokeWidth={3} size={25} /></span>
        </button> */}
      </div>
    </div>
  );
};

export default Results;