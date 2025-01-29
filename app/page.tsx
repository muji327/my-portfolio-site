"use client"; // クライアントサイド専用

import { useEffect, useState } from "react";
import JobCard from "@/components/JobCard";

// Jobインターフェースを定義
interface Job {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // ダミーデータを使います
    const fetchJobs = async () => {
      const data: Job[] = [
        {
          id: "1",
          title: "Frontend Developer",
          description: "Build amazing UIs for the web.",
          imageUrl: "https://via.placeholder.com/400x200?text=Frontend+Developer"
        },
        {
          id: "2",
          title: "Backend Developer",
          description: "Create robust and scalable APIs.",
          imageUrl: "https://via.placeholder.com/400x200?text=Backend+Developer"
        },
        {
          id: "3",
          title: "UI/UX Designer",
          description: "Design user interfaces that are simple and beautiful.",
          imageUrl: "https://via.placeholder.com/400x200?text=UI/UX+Designer"
        },
      ];
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ヒーローセクション */}
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Job Portal</h1>
        <p className="mt-4 text-xl">Find your dream job today</p>
      </div>

      {/* ジョブリストセクション */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Job Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* サービスセクション */}
      <div className="bg-gray-200 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 mb-12">We provide the best job opportunities in tech</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Top Companies</h3>
            <p className="text-gray-600 mt-4">We collaborate with top tech companies to offer you the best opportunities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Easy Application</h3>
            <p className="text-gray-600 mt-4">Apply directly through our platform with a single click.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Supportive Community</h3>
            <p className="text-gray-600 mt-4">Join a supportive community of professionals to boost your career.</p>
          </div>
        </div>
      </div>

      {/* フッター */}
      <div className="bg-primary text-white py-6 mt-12">
        <div className="text-center">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
