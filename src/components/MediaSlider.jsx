import { useEffect, useRef, useState } from "react";
// Screenshot 2025-08-02 115205.png
const mediaItems = [
//   { type: "image", src: "/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png" },
 { type: "video", src: "/uploads/videio1.mp4" },
 { type: "video", src: "/uploads/video2.mp4" },
 { type: "video", src: "/uploads/video3.mp4" },
 { type: "video", src: "/uploads/video4.mp4" },
//   { type: "image", src: "/uploads/aaaa.jpg" },
//   { type: "image", src: "/uploads/image.png" },
//   { type: "image", src: "/uploads/Screenshot 2025-08-02 115205.png" },
];

const MediaSlider = () => {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % mediaItems.length);
  };

  useEffect(() => {
    const currentItem = mediaItems[index];
    if (currentItem.type === "image") {
      const timer = setTimeout(() => {
        handleNext();
      }, 4000);
      return () => clearTimeout(timer);
    } else if (currentItem.type === "video") {
      const video = videoRef.current;
      if (video) {
        video.play();
        const listener = () => handleNext();
        video.addEventListener("ended", listener);
        return () => video.removeEventListener("ended", listener);
      }
    }
  }, [index]);

  const currentItem = mediaItems[index];

  return (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 w-full max-w-[720px] h-[200px] sm:h-[250px] mx-auto flex items-center justify-center">


      {currentItem.type === "image" ? (
       <img
  src={currentItem.src}
  alt="slide"
  className="w-full h-full object-contain rounded-xl"
/>

      ) : (
       <video
  ref={videoRef}
  src={currentItem.src}
  className="w-full h-full object-contain rounded-xl"
  muted
  playsInline
/>

      )}
    </div>
  );
};

export default MediaSlider;
