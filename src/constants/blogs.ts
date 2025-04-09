export interface Blog {
  title: string;
  description: string;
  image: string;
}

const blogs: Blog[] = [
  {
    title:
      "The Evaluation-First Approach to Building Reliable RAG Applications",
    description: `In the rapidly evolving landscape of generative AI, building effective Retrieval Augmented Generation (RAG) applications requires a fundamental shift in our development approach. At DevDash, we've found that evaluation must come first to create truly reliable AI systems. The RAG Revolution RAG systems have emerged as a powerful solution for creating knowledge-grounded AI applications. By combining the reasoning capabilities of large language models with external knowledge sources, these systems can provide accurate, contextual, and up-to-date responses across domains from healthcare to legal services to customer support.
    But with this power comes a critical challenge: how do we ensure these systems are reliable, factual, and continuously improving?
    Traditional Software vs. GenAI Development
    Traditional software development has matured over decades, evolving robust methodologies, testing frameworks, and quality assurance processes. When a function returns an incorrect value, the bug is usually deterministic and reproducible.
    GenAI applications fundamentally differ:`,
    image: "/blogs/image-1.png",
  },
  {
    title:
      "Taming High-Dimensional Data: A Simple PCA FrameworkBuilding Enterprise RAG Pipelines with AWS Technologies",
    description: `Retrieval-Augmented Generation addresses one of the fundamental challenges in enterprise AI adoption: connecting powerful language models with organization-specific knowledge bases. We identified three key components in effective RAG pipelines:`,
    image: "/blogs/image-2.png",
  },
  {
    title:
      "Understanding Model Context Protocol (MCP): A New Era for AI Integrations",
    description:
      "In the rapidly evolving landscape of artificial intelligence, the Model Context Protocol (MCP) emerges as a groundbreaking standard that simplifies the integration of AI models with various tools and data sources. This document delves into the essence of MCP, its architecture, and how it revolutionizes the way AI systems interact with external services compared to traditional APIs. By providing a unified interface, MCP not only enhances the efficiency of AI integrations but also fosters a more dynamic and context-aware interaction model.",
    image: "/blogs/image-3.png",
  },
];

export default blogs;
