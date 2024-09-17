import { Metadata } from "next";
import AboutProjects from "../about/(components)/about-projects";

export const metadata: Metadata = {
  title: "Projects | Tamionweb",
  description: "Tamionweb is reliable Website Development Services, Customized to Meet Your Specific Needs and Goals.",
  keywords: [
    "projects tamionweb",
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

export default function ProjectsPage() {
  return (
    <div>
      <AboutProjects />
    </div>
  );
}
