// "use client" を追加
"use client";

import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
import JobCard from "@/components/ui/JobCard";


// Job型を定義
interface Job {
  id: string;
  title: string;
  description: string;
  // その他のプロパティを追加する場合はここに記述
}

export default function Jobs() {
  // jobsの状態をJob型の配列として管理
  const [jobs, setJobs] = useState<Job[]>([]);

  // jobsを取得する非同期関数
  const fetchJobs = async () => {
    try {
      // ここでは仮のAPIを使っています。実際にはSupabaseなどのAPIからデータを取得します
      const response = await fetch("your-api-endpoint"); // APIのURLを指定
      const data: Job[] = await response.json(); // Job型でデータを受け取る
      setJobs(data); // データを状態にセット
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs(); // コンポーネントがマウントされた時にデータを取得
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      <div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} /> // JobCardを使用
        ))}
      </div>
    </div>
  );
}