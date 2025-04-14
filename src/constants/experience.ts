export interface ExperienceItem {
  imageSrc: string;
  companyName: string;
  title: string;
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    imageSrc: "/companies/devdash.png",
    companyName: "Devdash",
    title: "ML/AI Solutions Architect",
    description:
      "Developed innovative Generative AI and conversational AI solutions for workflow automation and customer engagement",
  },
  {
    imageSrc: "/companies/jp-morgan.png",
    companyName: "JP Morgan",
    title: "Data Platform Modernization",
    description:
      "Leading enterprise data modernization across mainframe, on-premises, and AWS cloud ecosystems while maintaining strict financial compliance",
  },
  {
    imageSrc: "/companies/ocrolus.png",
    companyName: "Ocrolus",
    title: "Lead Software Engineer",
    description:
      "Led software architecture and product development from concept to successful launch",
  },
  {
    imageSrc: "/companies/hta.png",
    companyName: "HTA Digital Anesthesia Platform",
    title: "Tech Lead",
    description:
      "Drafted the framework for the whole system, guided developers, ensured security and authorization for the HTA app",
  },
  {
    imageSrc: "/companies/priceline.png",
    companyName: "Priceline",
    title: "Senior Software Engineer",
    description:
      "Optimized critical hotel search platform for performance, scalability and resilience",
  },
  {
    imageSrc: "/companies/bank-of-america.png",
    companyName: "Bank of America",
    title: "Software Engineer",
    description:
      "Developed authentication service using custom scoring models for risk assessment",
  },
];
