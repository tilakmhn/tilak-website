import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Avatar className="w-32 h-32 tablet:w-48 tablet:h-48 shadow-md">
        <AvatarImage src="/profile.png" />
        <AvatarFallback>TJ</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2.5 items-center font-semibold text-center">
        <h3 className="heading-3">Tilak Joshi</h3>
        <h4 className="heading-4">
          Generative AI & Enterprise Solutions Experts
        </h4>
      </div>
    </div>
  );
};

export default Profile;
