import AboutDescription from "@/components/AboutDescription";
import ProfileDetails from "@/components/ProfileDetails";

export default function About() {
  return (
    <>
      <main className="flex sm:flex-col md:flex-row max-w-7xl mx-auto lg:px-16 px-6 gap-x-20">
        <AboutDescription />
        <ProfileDetails />
      </main>
    </>

  );
}