
import { Button } from "@/components/ui/button";
import HomePage from "@/pages/Home";
import Team from "@/pages/Team";
import Who from "@/pages/Who";
import Work from "@/pages/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#EAEAEA] to-[#009FD1] font-sans">
      <HomePage/>
      <Who/>
      <Team/>
      <Work />
    </main>
  );
}
