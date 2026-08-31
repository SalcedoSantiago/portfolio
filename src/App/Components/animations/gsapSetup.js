import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typeof window !== "undefined" && prefersReducedMotion()) {
  gsap.globalTimeline.timeScale(100);
  ScrollTrigger.config({ limitCallbacks: true });
}

export { gsap, ScrollTrigger, prefersReducedMotion };
