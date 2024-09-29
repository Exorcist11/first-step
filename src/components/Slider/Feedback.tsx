import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface IFeedback {
  name: string;
  job: string;
  cmt: string;
}

interface FeedbackProps {
  feedBacks: IFeedback[];
}

export default function Feedback({ feedBacks }: FeedbackProps) {
  return (
    <Carousel className="w-full mb-5 laptop:mx-6 ">
      <CarouselContent>
        {feedBacks.map((item: IFeedback, index: number) => (
          <CarouselItem key={index}>
            <div className="p-1 border h-fit rounded-lg bg-[#a2754a] text-white">
              <div className="max-h-fit">
                <div className="flex items-center justify-center p-2 laptop:p-6">
                  <div className="flex flex-col justify-center items-center gap-3">
                    <div className="text-justify laptop:text-center p-4 text-lg">{item.cmt}</div>
                    <div className="flex gap-5">
                      <Avatar className="h-20 w-20 border-red-700">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="text-center flex flex-col gap-2">
                        <div className="flex gap-3 items-center justify-center">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star color="gold" fill="gold" key={index} />
                          ))}
                        </div>
                        <p className="">{item.name}</p>
                        <p className="italic font-light">{item.job}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
