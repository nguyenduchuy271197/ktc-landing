import { InfiniteMovingCards } from "./shared/infinite-moving-cards";

export default function ImageGallery() {
  const imageGroups = [
    [
      "/gallery/Bootcamp 2.jpg",
      "/gallery/Bootcamp 3.jpg",
      "/gallery/Bootcamp 4.jpg",
      "/gallery/IUH MOU.jpg",
      "/gallery/IUH.jpg",
    ],
    [
      "/gallery/Shinhan 1.jpg",
      "/gallery/Shinhan 2.jpg",
      "/gallery/Shinhan MOU.jpg",
      "/gallery/UIT 2.jpg",
      "/gallery/USSH MOU.jpg",
    ],
  ];
  return (
    <div className="pb-14 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {imageGroups.map((images, idx) => (
        <InfiniteMovingCards
          key={idx}
          images={images}
          direction={idx % 2 === 0 ? "right" : "left"}
          speed="slow"
          pauseOnHover={false}
        />
      ))}
    </div>
  );
}
