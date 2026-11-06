import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Instagram, } from "lucide-react";
import { Link } from "react-router-dom";

const LeetCodeIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const socialLinks = [
  { icon: Github, href: "https://github.com/Sudharsan-336", label: "GitHub", }, 
  { icon: Linkedin, href: "https://www.linkedin.com/in/sudharsan336", label: "LinkedIn", }, 
  { icon: LeetCodeIcon, href: "https://leetcode.com/u/Sudharsan-336/", label: "LeetCode", },
  { icon: Instagram, href: "https://www.instagram.com/classy_sudhan/", label: "Instagram", }, 
];

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <Scene3D />

      {/* Gradient Blur Effects */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 pt-8 pb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary font-semibold">Sudharsan R</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-foreground mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Turning ideas into functional and efficient solutions using programming skills.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/contact">
                <Button size="lg" className="glow-border hover:scale-105 transition-transform w-full sm:w-auto">
                  Hire Me <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="outline" size="lg" className="glass-card hover:scale-105 transition-transform w-full sm:w-auto">
                  Download Resume <Download className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* About Section */}
            <motion.div
              className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                I’m a final-year Computer Science and Business Systems (CSBS) student passionate about Java Full-Stack Development. I have hands-on experience with {" "}
                <span className="text-primary font-semibold">Java</span>,{" "}
                <span className="text-primary font-semibold">Spring Boot</span>,{" "}
                <span className="text-primary font-semibold">React</span>,{" "}
                <span className="text-primary font-semibold">JavaScript</span>,{" "}
                <span className="text-primary font-semibold">HTML</span>,{" "}
                <span className="text-primary font-semibold">CSS</span>,
                <span className="text-primary font-semibold">MySQL</span>, and{" "}
                <span className="text-primary font-semibold">REST APIs</span>, {" "} along with experience building web-based projects. I enjoy solving problems, learning new technologies, and turning ideas into practical applications. I’ve also strengthened my problem-solving skills by solving 200+ coding problems on LeetCode.
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass-card p-3 rounded-full text-primary"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
