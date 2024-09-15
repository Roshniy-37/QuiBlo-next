'use client'
import { useState } from "react"
import React from 'react'

function page() {

  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNumberOfQuestionsChange = (e) => {
    setNumberOfQuestions(e.target.value);
  };

  const handleQuestionsSubmit = (e) => {
    e.preventDefault();
    const initialQuestions = Array.from({ length: Number(numberOfQuestions) }, () => ({
      question: '',
      correctAnswer: '',
      options: ['', '', '', ''], // Assuming 4 options per question
    }));
    setQuestions(initialQuestions);
    setFormSubmitted(true);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === 'question') {
      newQuestions[index].question = value;
    } else if (field === 'correctAnswer') {
      newQuestions[index].correctAnswer = value;
    } else {
      newQuestions[index].options[field] = value;
    }
    setQuestions(newQuestions);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ quizTitle, quizDescription, questions }); // You can handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#020427] flex flex-col items-center py-10">
      {/* Main Header */}
      <h1 className="text-4xl text-slate-200 font-bold text-center mb-10">Create Your Quiz</h1>

      {/* Quiz Title and Description Section */}
      <div className="bg-[#E57494] shadow-lg rounded-lg p-6 w-11/12 md:w-1/2 mb-10">
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Quiz Title:</label>
          <input
            className="w-full bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter the title of your quiz"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Quiz Description:</label>
          <textarea
            className="w-full bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a brief description (optional)"
            value={quizDescription}
            onChange={(e) => setQuizDescription(e.target.value)}
          />
        </div>

        {/* Number of Questions Section */}
        {!formSubmitted ? (
          <form onSubmit={handleQuestionsSubmit} className="text-center">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Enter the number of questions:</label>
              <input
                className="bg-gray-200 w-20 text-center p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                min="1"
                value={numberOfQuestions}
                onChange={handleNumberOfQuestionsChange}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Create Questions
            </button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-6">
              {questions.map((q, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <label className="block mb-2 font-medium">Question {index + 1}:</label>
                  <input
                    className="w-full bg-gray-200 p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={q.question}
                    onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                  />
                  
                  <label className="block mb-2 font-medium">Correct Answer:</label>
                  <input
                    className="w-full bg-gray-200 p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={q.correctAnswer}
                    onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                  />

                  <label className="block mb-2 font-medium">Options:</label>
                  {q.options.map((option, optionIndex) => (
                    <input
                      key={optionIndex}
                      className="w-full bg-gray-200 p-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(e) => handleQuestionChange(index, optionIndex, e.target.value)}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                Submit Quiz
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default page;
