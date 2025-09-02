'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SkillItem from '@/components/SkillItem';

export default function Skills() {
  const skills = [
    { icon: '⚛️', title: 'Frontend Development', description: 'React, Next.js, HTML5, CSS3, JavaScript' },
    { icon: '🔧', title: 'Backend Development', description: 'Node.js, Express.js, API Development' },
    { icon: '🗄️', title: 'Database Management', description: 'MongoDB, MySQL, Database Design' },
    { icon: '🛠️', title: 'Tools & Technologies', description: 'Git, VS Code, Figma, Responsive Design' },
  ];

  const icons = [
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/JavaScript.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/React-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/NodeJS-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/NextJS-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/MongoDB.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Firebase-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/ExpressJS-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Arduino.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/C.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/CPP.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Java-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Python-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/PHP-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Kotlin-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/HTML.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/CSS.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/TailwindCSS-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/MaterialUI-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Spring-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/MySQL-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/VSCode-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/VisualStudio-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/AndroidStudio-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Electron.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Git.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Figma-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Idea-Dark.svg",
  "https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Eclipse-Dark.svg",
];

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: '#111' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        {/* Title */}
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
          Skills
        </Typography>

        {/* Skill Cards - same size */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(250px, 1fr))' },
            gap: 4,
            mb: 15,
          }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{ height: '220px' }} // fixed card height
            >
              <SkillItem {...skill} sx={{ height: '100%' }} /> 
            </motion.div>
          ))}
        </Box>

        {/* Infinite Marquee Row */}
        <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', py: 4 }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ display: "inline-flex", gap: "2rem" }}
          >
            {icons.concat(icons).map((icon, idx) => (
              <img key={idx} src={icon} alt="skill" width="60" height="60" />
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}