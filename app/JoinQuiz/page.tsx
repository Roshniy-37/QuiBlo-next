'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const JoinQuizPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Generate a unique quizId
    const quizId = uuidv4();

    // Redirect to the dynamic quiz page with the quizId
    router.push(`/JoinQuiz/${quizId}`);
  }, [router]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-neutral-100">
      <h1 className="text-4xl font-bold">Preparing your quiz...</h1>
    </div>
  );
};

export default JoinQuizPage;