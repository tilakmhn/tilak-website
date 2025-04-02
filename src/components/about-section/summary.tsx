import React from "react";
const metrics = [
  "75% Reduction in System Response Times",
  "Automated Support Ticket Management",
  "Processed Terabytes of Sensitive Financial Data",
];
const Summary = () => {
  return (
    <div
      id="professional-summary"
      className="flex flex-col gap-10 text-2xl leading-8 tracking-[-0.6%]"
    >
      <h3 className="font-normal">
        I design cutting-edge AI systems that solve complex business challenges,
        from healthcare conversational AI to financial data processing, with
        proven results in reducing operational costs and enhancing efficiency
      </h3>
      <div id="metrics" className="flex gap-10 overflow-hidden">
        {metrics.map((metric, idx) => (
          <h3 className="font-semibold break-all" key={idx}>
            {metric}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Summary;
