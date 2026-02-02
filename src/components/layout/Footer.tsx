import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:marshalliisraelokoth@gmail.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-semibold">
                <span className="text-primary">&lt;</span>
                Marshall
                <span className="text-primary">/&gt;</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building interactive web experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Marshall Israel Okoth. Built with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
