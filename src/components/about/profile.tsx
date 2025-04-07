import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import HeroHeadline from "./hero-headline";
import CTAButtonsGroup from "./cta-buttons-group";

const certificates = [
  {
    title: "AWS ML Engineer",
    src: "/certificates/aws-ml.png",
  },
  {
    title: "AWS Solution Architect",
    src: "/certificates/aws-solution-architect.png",
  },
  {
    title: "Kubernetes App Developer",
    src: "/certificates/kubernetes-app-dev.png",
  },
];

const Profile = () => {
  return (
    <div className="flex gap-6 flex-col items-center tablet:flex-row">
      <div className="flex flex-col items-center gap-5 tablet:order-2">
        <Avatar className="w-32 h-32 tablet:w-48 tablet:h-48 shadow-md">
          <AvatarImage src="/profile.png" />
          <AvatarFallback>TJ</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2.5 items-center text-center">
          <h3 className="heading-3 font-semibold">Tilak Joshi</h3>
          <h4 className="heading-5 font-bold">
            Generative AI Practitioner & Full-Stack Implementation Consultant
          </h4>
        </div>
        <div id="certificates" className="flex gap-2">
          {certificates.map(({ src, title }, idx) => (
            <Image
              title={title}
              src={src}
              alt={title}
              key={idx}
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 tablet:order-1 tablet:max-w-2/3">
        <HeroHeadline />
        <CTAButtonsGroup />
      </div>
    </div>
  );
};

export default Profile;
