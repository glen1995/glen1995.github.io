import BioCard from "@/components/BioCard";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto lg:px-16 px-6 flex flex-col gap-24">
        <BioCard />
        <WorkExperience />
      </main>
    </>

  );
}
