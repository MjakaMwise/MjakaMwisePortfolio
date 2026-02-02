import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WebcamPixelGridDemo() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Webcam pixel grid background */}
      <div className="absolute inset-0">
        <WebcamPixelGrid
          gridCols={64}
          gridRows={48}
          colorMode="monochrome"
          monochromeColor="#14b8a6"
          backgroundColor="#0a0a0a"
          darken={0.3}
          maxElevation={20}
          motionSensitivity={0.3}
          onWebcamReady={() => console.log("Webcam ready!")}
          onWebcamError={(err) => console.error("Webcam error:", err)}
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
            Interactive Webcam Background →
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Motion-Reactive
            <span className="gradient-text block">Pixel Grid</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A stunning webcam-powered background effect that responds to your movements.
            Perfect for creating immersive, interactive hero sections.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10"
            >
              View Documentation
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-primary/30">
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
