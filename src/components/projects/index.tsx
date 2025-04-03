import React from "react";
import ProjectCard from "./project-card";

const projectItems = [
  {
    title: "Healthcare Conversation Assistant",
    image: "projects/health-conversation-assistant.png",
    description:
      "Built a conversational AI system to create conversation summaries and a product support chatbot based on multiple data sources.",
    icons: ["Langchain"],
  },
  {
    title: "InvestLens M&A Platform",
    image: "projects/invest-lens.png",
    description:
      "MVP that generates investor committee decks from M&A documents. The application is useful for the multi-tenancy environment.",
    icons: ["Langchain"],
  },
  {
    title: "Spoiler Shield",
    image: "projects/spoiler-shield.png",
    description:
      "A model analyzing customer relationship networks to identify distinct user segments.",
    icons: ["Langchain"],
  },
  {
    title: "Social Graph Customer Segmentation",
    image: "projects/social-graph-customer-segmentation.png",
    description:
      "Built a conversational AI system to create conversation summaries and a product support chatbot based on multiple data sources.",
    icons: ["Langchain"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="heading-2 font-semibold">Recent AI Project Showcase</h2>
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
        {projectItems.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
