import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CalendarClock, VideoIcon } from "lucide-react";

const MeetingDetails = () => {
  return (
    <div className="px-4 py-5">
      <div
        id="account-info"
        className="flex flex-col gap-2 items-center mobile:items-start"
      >
        <Avatar className="w-16 h-16 tablet:w-24 tablet:h-24 shadow-md">
          <AvatarImage src="/profile.png" />
          <AvatarFallback>TJ</AvatarFallback>
        </Avatar>
        <span className="heading-4 text-muted font-semibold">Tilak Joshi</span>
        <span className="heading-3 font-bold">Build your Next AI Strategy</span>
      </div>
      <div
        id="meeting-info"
        className="flex flex-col gap-3 tablet:gap-5 text-muted font-bold heading-5 mt-3 tablet:mt-5"
      >
        <div id="time" className="inline-flex gap-2 items-center">
          <CalendarClock className="h-4 w-4 tablet:h-6 tablet:w-6" />
          <span>30 min</span>
        </div>
        <div id="meeting-type" className="inline-flex gap-2 items-center">
          <VideoIcon className="h-6 w-6 tablet:h-8 tablet:w-8" />
          <span>Web conferencing details provided upon confirmation.</span>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
