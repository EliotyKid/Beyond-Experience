import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const revealImages = () => {
  gsap.utils.toArray(".reveal-img").forEach((img: any) => {
    gsap.to(img, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
      },
    });
  });
};