import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  const splineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!splineRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 0.2; // tilt horizontally
      const y = (e.clientY / innerHeight - 0.5) * 0.2; // tilt vertically

      try {
        splineRef.current.setVariable("rotationX", y);
        splineRef.current.setVariable("rotationY", -x);
      } catch (err) {
        // no error if variable not set — safe fail
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute  w-[200px] h-[300px] pointer-events-none">
      <Spline
        ref={splineRef}
        scene="https://prod.spline.design/iCI-VCVuqAtjhMs1/scene.splinecode" 
        // 👆 replace with your actual Spline scene link
      />
    </div>
  );
}
