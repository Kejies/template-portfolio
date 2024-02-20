'use client';
import React, { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Loading from './components/LoadingScreen';
import AboutMe from './components/AboutMe'
import Skills from './components/skills';
import Project from './components/Project';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <main>
      {loading ? <Loading /> : (
        <>
        <Navbar/>
        <Hero />
        <AboutMe />
        <Skills />
        <Project />
        </>
      )}
    </main>
  );
}
