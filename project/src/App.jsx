import './App.css'
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';
import profilePic from './assets/profile.jpg'; // Replace with your real image

const projects = [
  {
    title: 'BrainBoost Kids Quiz Game',
    description: 'An educational game app for kids built with React and Firebase.',
    link: 'https://brainboostgame.netlify.app',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'Virtual Tailwind Website',
    description: 'Responsive web design using HTML, TailwindCSS, and JS.',
    link: '#',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'HealthMate Mobile App',
    description: 'React Native mobile app for health tracking.',
    link: '#',
    image: 'https://via.placeholder.com/400x200',
  },
];

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-10 px-4 text-center">
        <img
          src={profilePic}
          alt="Qudus Abolaji"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
        />
        <h1 className="text-3xl font-bold">Qudus Abolaji</h1>
        <p className="text-gray-600">UI/UX Designer & Frontend Developer</p>
        <p className="mt-2 text-blue-600 font-medium">Actively seeking internship/CoS-based opportunity in UK</p>
        <div className="flex justify-center gap-6 mt-4 text-xl">
          <a href="https://github.com/kudostech" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:abolajiayobami2000@gmail.com">
            <FaEnvelope />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I’m a creative and results-driven UI/UX Designer and Frontend Developer with over 3 years of
          experience. I specialize in building responsive web and mobile apps using Figma, React, Tailwind CSS,
          and React Native. Based in Westhoughton, Bolton, UK — looking for sponsorship-based opportunities.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-white py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 p-4 rounded-2xl shadow-md"
            >
              <img src={project.image} alt={project.title} className="rounded mb-2" />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-100 py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        <p>Email: <a href="mailto:abolajiayobami2000@gmail.com" className="text-blue-600">abolajiayobami2000@gmail.com</a></p>
        <p className="mt-2">Let’s work together or discuss a CoS-based opportunity in the UK.</p>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Qudus Abolaji. All rights reserved.
      </footer>
    </div>
  );
}
