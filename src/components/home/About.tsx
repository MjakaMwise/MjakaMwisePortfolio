import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cpu, Lightbulb, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Interactive Web Apps',
    description: 'Building immersive web experiences with Three.js and React'
  },
  {
    icon: Cpu,
    title: 'Systems Integration',
    description: 'Bridging hardware and software for robotics and IoT'
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solver',
    description: 'Turning complex challenges into elegant solutions'
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Teaching digital literacy and collaborating with teams'
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About Me</h2>
          <span className="hidden sm:block h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Get to know me
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a <span className="text-primary font-medium">self-taught frontend developer</span> based 
                in Nairobi, Kenya, passionate about creating interactive web experiences that push the 
                boundaries of what's possible in the browser.
              </p>
              <p>
                My journey into development started with a curiosity for how things work, which led me 
                to explore everything from <span className="text-foreground">robotics</span> and <span className="text-foreground">3D printing</span> to 
                gesture-controlled interfaces. This unique background gives me a perspective that bridges 
                hardware and software.
              </p>
              <p>
                I've volunteered with organizations like <span className="text-primary">Hatua Network</span>, 
                <span className="text-primary"> IOMe Innovation Hub</span>, and <span className="text-primary">Swahilipot Hub Foundation</span>, 
                where I've both built solutions and taught digital literacy to others.
              </p>
              <p>
                Currently, I'm focused on expanding my skills in full-stack development while continuing 
                to build innovative projects that combine creativity with technical excellence.
              </p>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-surface p-5 hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
