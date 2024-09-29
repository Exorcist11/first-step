import Image from "next/image";
import React from "react";

interface Props {
  title: string;
}

export default function Break(props: Props) {
  return (
    <div className="pt-16 pb-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center uppercase font-bold text-3xl text-[#a2754a] mb-4">
          {props.title}
        </h3>
        <Image src="/images/title.png" width={400} height={400} alt="title" />
      </div>
    </div>
  );
}
