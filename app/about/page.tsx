import { Metadata } from "next";
import AboutContact from "./(components)/about-contact";
import AboutExperience from "./(components)/about-experience";
import AboutHero from "./(components)/about-hero";
import AboutProjects from "./(components)/about-projects";

export const metadata: Metadata = {
  title: "About | Tamionweb",
  description: "Tamionweb is reliable Website Development Services, Customized to Meet Your Specific Needs and Goals.",
  keywords: [
    "about tamionweb",
    "mkhotami rais",
    "m khotami rais",
    "khotami",
    "tamionweb",
    "tamionweb services",
    "tamionweb development",
    "tamionweb website",
    "tamionweb website development",
    "tamionweb website development services",
    "tamionweb website development company",
  ],
  authors: [{ name: "MKhotami Rais" }],
  creator: "Mkhotami Rais",
  publisher: "Mkhotami Rais",
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
