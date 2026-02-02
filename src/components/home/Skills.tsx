import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'primary',
    skills: ['React', 'Next.js', 'Three.js', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Tools & Libraries',
    color: 'accent',
    skills: ['MediaPipe', 'Git', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Figma'],
  },
  {
    title: 'Other Technologies',
    color: 'secondary',
    skills: ['Python', 'Arduino', '3D Printing', 'Robotics', 'Network Programming'],
  },
  {
    title: 'Currently Learning',
    color: 'glow',
    skills: ['Full Stack Development', 'Advanced React', 'Database Design', 'API Development'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-card/50">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Skills & Technologies</h2>
          <span className="hidden sm:block h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
              className="card-gradient p-6 hover:border-primary/30 transition-all"
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="tech-badge cursor-default flex items-center gap-1.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
