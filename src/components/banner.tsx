"use client";

import Countdown, { zeroPad } from "react-countdown";
import trophy from "/public/trophy-icon.svg";
import Image from "next/image";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return <div>Thời gian tuyển sinh đã kết thúc</div>;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center justify-center gap-4">
        <p className="font-medium text-xs sm:text-sm md:text-base text-balance">
          Thời gian tuyển sinh dự kiến sẽ kết thúc sau
        </p>
        <div className="flex items-center gap-1 font-bold">
          <span className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-indigo-600 flex flex-col items-center leading-none">
            {zeroPad(days)}
            <span className="text-[8px] font-medium">ngày</span>
          </span>
          <span>:</span>
          <span className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-indigo-600 flex flex-col items-center leading-none">
            {zeroPad(hours)}
            <span className="text-[8px] font-medium">giờ</span>
          </span>
          <span>:</span>
          <span className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-indigo-600 flex flex-col items-center leading-none">
            {zeroPad(minutes)}
            <span className="text-[8px] font-medium">phút</span>
          </span>
          <span>:</span>
          <span className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-indigo-600 flex flex-col items-center leading-none">
            {zeroPad(seconds)}
            <span className="text-[8px] font-medium">giây</span>
          </span>
        </div>
      </div>
    );
  }
};

export default function Banner() {
  return (
    <div className="bg-indigo-600 fixed left-0 right-0 bottom-0 z-50 sm:static">
      <div className="max-w-screen-xl mx-auto px-4 py-2 sm:py-3 text-white sm:text-center md:px-8">
        <Countdown date={new Date(2024, 4, 3)} renderer={renderer} />
      </div>
    </div>
  );
}
