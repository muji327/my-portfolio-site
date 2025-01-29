import { Card, CardContent } from "@/components/ui/card";

export default function JobCard({ job }) {
  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-gray-500">{job.description}</p>
      </CardContent>
    </Card>
  );
}
