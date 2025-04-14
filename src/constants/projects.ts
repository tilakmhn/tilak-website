export interface ProjectIcon {
  title: string;
  path: string;
}

export interface ProjectItem {
  title: string;
  image: string;
  description: string;
  icons: ProjectIcon[];
}

export const projectItems: ProjectItem[] = [
  {
    title: "Healthcare Conversation Assistant",
    image: "/projects/health-conversation-assistant.png",
    description:
      "Built a conversational AI system to create conversation summaries and a product support chatbot based on multiple data sources.",
    icons: [
      {
        title: "AWS Bedrock",
        path: "/technologies/aws-bedrock.png",
      },
      {
        title: "Langchain",
        path: "/technologies/langchain.png",
      },
      {
        title: "Langsmith",
        path: "/technologies/langsmith.png",
      },
      {
        title: "Pinecone",
        path: "/technologies/pinecone.png",
      },
      {
        title: "AWS Lambda",
        path: "/technologies/aws-lambda.png",
      },
    ],
  },
  {
    title: "InvestLens M&A Platform",
    image: "/projects/invest-lens.png",
    description:
      "MVP that generates investor committee decks from M&A documents. The application is useful for the multi-tenancy environment.",
    icons: [
      {
        title: "AWS Bedrock",
        path: "/technologies/aws-bedrock.png",
      },
      {
        title: "Llamaindex",
        path: "/technologies/llama-index.png",
      },
      {
        title: "Amazon Kendra",
        path: "/technologies/amazon-kendra.png",
      },
      {
        title: "AWS Lambda",
        path: "/technologies/aws-lambda.png",
      },
    ],
  },
  {
    title: "Spoiler Shield",
    image: "/projects/spoiler-shield.png",
    description:
      "Built a conversational AI system to create conversation summaries and a product support chatbot based on multiple data sources.",

    icons: [
      {
        title: "Google Colab",
        path: "/technologies/google-colab.png",
      },
      {
        title: "Google Bert",
        path: "/technologies/google-bert.png",
      },
      {
        title: "Hugging Face",
        path: "/technologies/hugging-face.png",
      },
      {
        title: "Pytorch",
        path: "/technologies/pytorch.png",
      },
      {
        title: "Pandas",
        path: "/technologies/pandas.png",
      },
    ],
  },
  {
    title: "Social Graph Customer Segmentation",
    image: "/projects/social-graph-customer-segmentation.png",
    description:
      "A model that analyzes customer relationship networks to identify distinct segments based on interactions and shared behaviors",
    icons: [
      {
        title: "AWS Sagemaker",
        path: "/technologies/amazon-sagemaker.png",
      },
      {
        title: "Google Colab",
        path: "/technologies/google-colab.png",
      },
      {
        title: "Scikit Learn",
        path: "/technologies/scikit-learn.png",
      },
      {
        title: "Pandas",
        path: "/technologies/pandas.png",
      },
      {
        title: "Network X",
        path: "/technologies/networkx-python.png",
      },
    ],
  },
];
