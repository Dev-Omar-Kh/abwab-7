"use client";

import React from "react";

type VideoCardProps = {
  title: string;
  src: string;
};

const VideoCard = ({ title, src }: VideoCardProps) => {
  return (
    <div className="bg-whiteColor rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-lightColor">
      <div className="relative w-full aspect-video">
        <iframe
          src={src}
          title={title}
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-blackColor">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <VideoCard
        title="مقدمة عن فكرة المشروع"
        src="https://www.youtube.com/embed/abcdefg"
      />
    </div>
  )
}
