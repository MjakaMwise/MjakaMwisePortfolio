import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Interactive Smart House 3D Model",
    description:
      "Fully functional 3D house visualization with real-time control interface. Control windows, lights, and fans through an intuitive web interface.",
    link: "#project-interactive-smart-house-3d-model",
  },
  {
    title: "Gesture-Controlled Website",
    description:
      "Website for a wood company featuring gesture-based navigation. Users can scroll and interact hands-free using real-time hand tracking.",
    link: "#project-gesture-controlled-website",
  },
  {
    title: "Being President for a Day",
    description:
      "Blue economy awareness game with gesture controls. Make presidential decisions and see environmental impact visualizations.",
    link: "#project-being-president-for-a-day",
  },
  {
    title: "Sambaza - Screen Sharing",
    description:
      "Wireless screen sharing tool for local network devices. Stream your screen without cables with multi-device support.",
    link: "#project-sambaza-screen-sharing",
  },
  {
    title: "Robotic Arm (Plastic Sorting)",
    description:
      "Automated plastic sorting system with computer vision integration and hardware-software communication.",
    link: "#project-robotic-arm-plastic-sorting",
  },
  {
    title: "Chemistry Virtual Lab",
    description:
      "Interactive chemistry experiments in a 3D environment with virtual lab equipment and reaction simulations.",
    link: "#project-chemistry-virtual-lab",
  },
];
