import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '../components/ui/card'; // カードUIをインポート
import { motion } from 'framer-motion'; // framer-motionをインポート

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // ここではダミーデータを使用します。実際はAPIでデータを取得します。
    setJobs([
      {
        id: '1',
        title: 'Web Developer',
        description: 'Building amazing web applications using React and Next.js.',
      },
      {
        id: '2',
        title: 'UI/UX Designer',
        description: 'Designing user-centric interfaces for web and mobile apps.',
      },
      {
        id: '3',
        title: 'Project Manager',
        description: 'Managing project timelines and client communication.',
      },
    ]);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Available Jobs</h1>
      </header>
      <div className="job-cards">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            className="job-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{job.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <button className="apply-button">Apply Now</button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
