import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CardHoverEffectDemo from '@/components/card-hover-effect-demo';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 bg-primary/5 rounded-full blur-[100px]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Featured Projects</h2>
          <span className="hidden sm:block h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          A collection of projects I've built, from interactive 3D experiences to
          gesture-controlled interfaces and robotics integrations.
        </motion.p>

        <div className="mb-12">
          <CardHoverEffectDemo />
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
