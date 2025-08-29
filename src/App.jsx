import './App.css';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from './assets/profile.jpg'; // Make sure this file exists

const projects = [
  {
    title: 'Admin-dashboard App',
    description: 'A fully responsive Admin Dashboard built with React, Vite, and Tailwind CSS.',
    link: 'https://admin-dashboard-kudostech.vercel.app',
    image: 'https://i.imgur.com/8sqh6xS.png'
  },
  {
    title: 'Job-Finder App',
    description: 'A responsive Job Finder application built with React.js and Tailwind CSS to showcase frontend development skills.',
    link: 'https://job-finder-app-kudostech.vercel.app/',
    image: 'https://i.imgur.com/bAPwjvX.png'
  },
  {
    title: 'Multi-step-form App',
    description: 'A clean, responsive, and user-friendly multi-step onboarding form built with React and Tailwind CSS.',
    link: 'https://multi-step-form-app-kudostech.vercel.app/',
    image: 'https://i.imgur.com/rOHf7qK.png'
  }
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
        <p className="mt-2 text-blue-600 font-medium">
          Open to: Frontend Roles • Paid Internships opportunities.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-xl">
          <a href="https://github.com/kudostech" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:abolajiayobami2000@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/qudus-abolaji-046784214/" target="_blank" rel="noopener noreferrer">
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
          and React Native. Based in Westhoughton, Bolton, UK — looking for Frontend Roles • Paid Internships opportunities.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-white py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 p-4 rounded-2xl shadow-md block"
            >
              <img src={project.image} alt={project.title} className="rounded mb-2 w-full" />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-100 py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        <p>Email: <a href="mailto:abolajiayobami2000@gmail.com" className="text-blue-600">abolajiayobami2000@gmail.com</a></p>
        <p className="mt-2">Let’s work together or discuss a Frontend role and Paid internship opportunities in the UK.</p>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Qudus Abolaji. All rights reserved.
      </footer>
    </div>
  );
}
