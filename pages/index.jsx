import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">My Portfolio & Job Listings</h1>
      <p className="text-gray-400 mt-2">仕事募集 & 実績紹介サイト</p>
      <Link href="/jobs">
        <Button className="mt-4">仕事募集一覧を見る</Button>
      </Link>
    </div>
  );
}
