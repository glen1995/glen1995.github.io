import BioCard from "@/components/BioCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto lg:px-16 px-6 flex flex-col gap-24">
        <BioCard />
        <WorkExperience />
      </main>
      <Footer />
    </>

  );
}
