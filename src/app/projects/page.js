import { Box, Typography } from '@mui/material';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Aspiro – Smart Learning & Career Guidance Platform',
      description: 'A full-stack AI-powered web app guiding users to optimal educational and career paths based on skills, goals, and interests. Features personalized course recommendations and a location-based institute finder using external APIs.',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'Firebase'],
      github: 'https://github.com/sadeepaatigala/Aspiro',
      status: 'Completed',
    },
    {
      title: 'Skill Share App - Community-Driven Learning',
      description: 'A full-stack platform for sharing and learning skills via media posts. Includes user authentication (manual and Google), post creation, liking, commenting, and direct messaging for a seamless community experience.',
      technologies: ['React.js', 'Spring Boot', 'Maven', 'Firebase'],
      github: ['https://github.com/sadeepaatigala/SkillShareApp-client', 'https://github.com/sadeepaatigala/SkillShareApp-server'],
      status: 'Completed',
    },
    {
      title: 'Master Guide Book Factory Web App',
      description: 'A MERN stack application transforming operations at Master Guide Publications, Sri Lanka. Manages book orders, printing, employee coordination, logistics, materials, partner relations, and finances.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/sadeepaatigala/Book-Factory-Management-System',
      status: 'Completed',
    },
    {
      title: 'Online Job Portal',
      description: 'A group project enabling job seekers to search and apply for jobs, and employers to post vacancies. Focused on group collaboration, CRUD operations, and scripting with XAMPP.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: 'https://github.com/sadeepaatigala/Online-Job-Portal',
      status: 'Completed',
    },
    {
      title: 'MeasureMate - Tailoring Shop App',
      description: 'A mobile app for a tailoring shop to manage customer details, cloth types, measurements, and order/delivery dates. Built with Kotlin and Room Database for efficient data handling.',
      technologies: ['Kotlin', 'Android Studio'],
      github: 'https://github.com/sadeepaatigala/MeasureMate',
      status: 'Completed',
    },
    {
      title: 'Airport Digital Ad Display System',
      description: 'A web-based system for managing airport screen advertisements. Features a React dashboard, real-time media sharing with Socket.IO, and an Electron desktop app for secure playback.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Electron.js', 'Selenium', 'Figma'],
      status: 'Completed',
    },
    {
      title: 'RTSP Video Recording Application',
      description: 'A C++ application for recording real-time CCTV video from multiple RTSP sources, ensuring efficient capture, storage, and playback for reliable video archiving.',
      technologies: ['C++'],
      status: 'Completed',
    },
    {
      title: 'FindMyFix - A Service Marketplace Web App',
      description: 'A web application that connects users with local service providers (tailors, computer repair, bridal services, car services, etc.). Users can search by service and location, view profiles, check reviews (including Google Reviews), and rate providers',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Firebase'],
      status: 'Ongoing',
    }, 
   
  ];

  return (
    <Box id="projects" sx={{ py: { xs: 5, sm: 7 }, bgcolor: 'background.default' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 3, sm: 5 },
            fontWeight: 'bold',
            color: 'text.primary',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
            letterSpacing: '0.3px',
          }}
        >
          My Projects
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(300px, 1fr))' },
            gap: { xs: 2, sm: 3 },
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}