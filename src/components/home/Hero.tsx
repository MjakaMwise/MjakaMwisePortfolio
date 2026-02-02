import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WebcamPixelGrid } from '@/components/ui/webcam-pixel-grid';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Webcam pixel grid background */}
      <div className="absolute inset-0">
        <WebcamPixelGrid
          gridCols={64}
          gridRows={48}
          colorMode="monochrome"
          monochromeColor="#14b8a6"
          backgroundColor="#0a0a0a"
          darken={0.35}
          maxElevation={20}
          motionSensitivity={0.32}
        />
      </div>

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] -translate-y-1/2 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="section-container relative z-10 py-20 md:py-0">
        <div className="grid gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-primary mb-4"
            >
              <span className="text-sm font-medium uppercase tracking-wider">Frontend Developer</span>
              <span className="w-12 h-px bg-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Marshall Israel</span>{' '}
              Okoth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl"
            >
              I build interactive web experiences that bridge hardware and software, 
              specializing in <span className="text-primary font-medium">Three.js</span>, 
              <span className="text-primary font-medium"> React</span>, and 
              <span className="text-primary font-medium"> systems integration</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Nairobi, Kenya</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group btn-glow"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
