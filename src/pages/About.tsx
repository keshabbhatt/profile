import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Zap } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    icon: <Code className="w-6 h-6" />,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'],
    icon: <Palette className="w-6 h-6" />,
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Vercel'],
    icon: <Zap className="w-6 h-6" />,
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-500 via-red-400 to-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for design and a
            love for creating seamless user experiences. With years of experience
            in web development, I bring ideas to life through clean code and
            creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white"
          >
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="leading-relaxed">
              I started my journey in web development during college, where I
              discovered my passion for creating digital experiences. Since then,
              I've worked on various projects, from small business websites to
              large-scale applications, constantly learning and improving my
              skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white"
          >
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <p className="leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive
              user interfaces. My approach combines technical expertise with
              creative problem-solving to deliver solutions that not only work
              well but also provide an excellent user experience.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white"
              >
                <div className="flex items-center mb-4 text-orange-300">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;