import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden bg-white hover:scale-105 transition-all duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={job.imageUrl} alt={job.title} />
      <CardContent className="p-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">{job.title}</CardTitle>
          <CardDescription className="text-sm text-gray-500">{job.description}</CardDescription>
        </CardHeader>
      </CardContent>
    </Card>
  );
};

export default JobCard;
