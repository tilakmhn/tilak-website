import Image from "next/image";
import React from "react";

const technologies = [
  {
    title: "Amazon SageMaker",
    src: "/technologies/amazon-sagemaker.png",
  },
  {
    title: "AWS",
    src: "/technologies/aws.png",
  },
  {
    title: "Dialog Flow",
    src: "/technologies/dialog-flow.png",
  },
  {
    title: "Google Cloud Platform",
    src: "/technologies/google-cloud-platform.png",
  },
  {
    title: "Hugging Face",
    src: "/technologies/hugging-face.png",
  },
  {
    title: "Kubernetes",
    src: "/technologies/kubernetes.png",
  },
  {
    title: "LangChain",
    src: "/technologies/langchain.png",
  },
  {
    title: "Llama Index",
    src: "/technologies/llama-index.png",
  },
  {
    title: "OpenAI",
    src: "/technologies/open-ai.png",
  },
  {
    title: "Pinecone",
    src: "/technologies/pinecone.png",
  },
  {
    title: "Python",
    src: "/technologies/python.png",
  },
  {
    title: "PyTorch",
    src: "/technologies/pytorch.png",
  },
];
const TechStack = () => {
  return (
    <div className="w-full tablet:flex-1">
      <h3 className="heading-3 font-semibold mb-4">My Tech Stack</h3>
      <div className="grid grid-cols-4 tablet:grid-cols-6 gap-2 mobile:gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.title}
            className="flex h-16 mobile:h-20 items-center justify-center p-2"
            title={tech.title}
          >
            <Image
              src={tech.src}
              alt={tech.title}
              className="h-6 mobile:h-8 tablet:h-10 w-auto object-contain"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
