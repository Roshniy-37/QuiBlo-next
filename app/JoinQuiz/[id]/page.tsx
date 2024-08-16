'use client';

import InputBox from '@/components/InputBox';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import quizData from '@/quizData.json'; // Adjust the path as necessary
import Link from 'next/link';

const Page: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleSelectOption = (option: string) => {
    // Store the selected answer
    setAnswers([...answers, option]);

    // Move to the next question or finish the quiz
    if (currentQuestionIndex + 1 < quizData.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Redirect to the results page with the answers as a query parameter
      const queryString = encodeURIComponent(JSON.stringify([...answers, option]));
      router.push(`/results?answers`);
    }
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div className='w-full h-screen bg-[#E57494]/30'>
      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={quizData.questions.length} 
      />
      <div className='flex justify-center items-center flex-col pt-[10vh]'>
        <h1 className='text-4xl font-bold'>{currentQuestion.question}</h1>
        
        <div className='flex flex-col justify-center pt-[6vh] gap-6 '>
          {currentQuestion.options.map((option) => (
            <InputBox 
              key={option} 
              option={option} 
              onSelect={handleSelectOption} className = 'bg-neutral-100'
            />
          ))}
        </div>

        <div className='flex items-center gap-2 pt-10'>
          <Button 
            className='bg-neutral-100 hover:bg-neutral-100/50'
            onClick={handleGoBack}
            disabled={currentQuestionIndex === 0}
          >
            <ChevronLeft className='text-violet-500' />
          </Button>
          <Button 
            className='bg-violet-500 hover:bg-violet-500/90 px-14' 
            onClick={() => handleSelectOption('Submit')}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;