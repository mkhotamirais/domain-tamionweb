"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { FaMicrosoft, FaReact } from "react-icons/fa6";

const experienceList = [
  {
    title: "Eduwork Bootcamp",
    location: "Yogyakarta (Online Bootcamp)",
    description:
      "I graduated after 5 months of studying in a React and Node.js class, covering topics from basic web programming to project development, including building an online store using various React libraries.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
  {
    title: "Ultimate Microsoft Office",
    location: "Bandung (Online Pre-Recorded Videos)",
    description:
      "I have completed the course material delivered in the form of pre-recorded videos from Udemy, covering Microsoft Office, particularly Microsoft Word and Excel, from basic to advanced levels.",
    icon: React.createElement(FaMicrosoft),
    date: "2021-2022",
  },
];

export default function AboutExperience() {
  return (
    <section id="experience" className="mx-3 py-12">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h1>
        <VerticalTimeline animate lineColor="hsl(var(--primary-foreground))">
          {experienceList.map((exp, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible
                className="text-gray-900 dark:text-white"
                contentStyle={{
                  background: "hsl(var(--primary-foreground))",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
                contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
                date={exp.date}
                //   intersectionObserverProps={useInView}
                iconStyle={{ background: "hsl(var(--primary))", fontSize: "1.5rem", color: "white" }}
                icon={exp.icon}
              >
                <h3 className="font-semibold capitalize">{exp.title}</h3>
                <p className="font-normal !mt-0">{exp.location}</p>
                <p className="!mt-1 !font-normal">{exp.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
