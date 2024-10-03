import { Metadata } from "next";
import AboutContact from "./(components)/about-contact";
import AboutExperience from "./(components)/about-experience";
import AboutHero from "./(components)/about-hero";
import AboutProjects from "./(components)/about-projects";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="">
      <AboutHero />
      <AboutProjects />
      <AboutExperience />
      <AboutContact />
    </div>
  );
}
