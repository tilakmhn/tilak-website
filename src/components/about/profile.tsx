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
    <div className="flex gap-6 mobile:gap-8 tablet:gap-10 flex-col items-center tablet:flex-row">
      <div className="flex flex-col justify-center items-center gap-5 tablet:order-2">
        <div className="max-h-50 max-w-50 tablet:max-h-75 tablet:max-w-75">
          <Image
            src="/profile.png"
            alt="Tilak Joshi"
            width={300}
            height={300}
            className="rounded-full object-contain h-full w-full"
        /></div>
        <div className="flex flex-col gap-2.5 items-center text-center">
          <h3 className="text-2xl mobile:text-[28px] tablet:text-3xl leading-9 tracking-[-0.0075em] font-semibold text-pretty">Tilak Joshi</h3>
          <h4 className="text-lg mobile:text-xl leading-7 tracking-[-0.005em] font-semibold">
            Generative AI Practitioner & Full-Stack Implementation Consultant
          </h4>
        </div>
        <div id="certificates" className="flex gap-2.5 items-center">
          {certificates.map(({ src, title }, idx) => (
            <div key={idx} className="h-25 w-25 relative">
              <Image
              title={title}
              src={src}
              alt={title}
              key={idx}
              width={100}
              height={100}
              className="h-full w-full object-contain"
            />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 tablet:order-1 tablet:max-w-[64%]">
        <HeroHeadline />
        <CTAButtonsGroup />
      </div>
    </div>
  );
};

export default Profile;
