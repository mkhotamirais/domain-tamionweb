import { Metadata } from "next";
import AboutProjects from "../about/(components)/about-projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <AboutProjects />
    </>
  );
}
