// pages/subject/[id].js
import React from 'react';
import { useRouter } from 'next/router';

const SubjectDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the subject details using the id
  const subject = subjects.find((s) => s.id === parseInt(id));

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">{subject.title}</h1>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-2">{subject.rating}</span>
        <span className="text-gray-400">/ 5</span>
      </div>
      <p className="mb-8">Subject description goes here...</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Take Test
      </button>
    </div>
  );
};

export default SubjectDetailsPage;