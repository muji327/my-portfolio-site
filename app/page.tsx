import { supabase } from "@/lib/supabase";
import JobCard from "@/components/JobCard";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      let { data, error } = await supabase.from("jobs").select("*");
      if (!error) setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">仕事募集一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
