import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Technologies } from './pages/Technologies';
import { TechnologyDetails } from './pages/TechnologyDetails';
import { Training } from './pages/Training';
// import { Roadmaps } from './pages/Roadmaps';
import { Projects } from './pages/Projects';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  // Read initial hash or default to '/'
  const getPathFromHash = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getPathFromHash);
  const [selectedTechId, setSelectedTechId] = useState<string>('java');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('fs-java-microservices');

  // Synchronize hash with currentPath
  useEffect(() => {
    const handleHashChange = () => {
      const path = getPathFromHash();
      setCurrentPath(path);

      // Handle sub-routes like #/technologies/java
      if (path.startsWith('/technologies/')) {
        const techId = path.split('/')[2];
        if (techId) setSelectedTechId(techId);
      } else if (path.startsWith('/training/')) {
        const courseId = path.split('/')[2];
        if (courseId) setSelectedCourseId(courseId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTech = (techId: string) => {
    setSelectedTechId(techId);
    navigateTo(`/technologies/${techId}`);
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    navigateTo(`/training/${courseId}`);
  };

  // Render current view
  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <Home
          onNavigate={navigateTo}
          onSelectTech={handleSelectTech}
          onSelectCourse={handleSelectCourse}
        />
      );
    }

    if (currentPath === '/about') {
      return <About />;
    }

    if (currentPath === '/technologies') {
      return <Technologies onSelectTech={handleSelectTech} />;
    }

    if (currentPath.startsWith('/technologies/')) {
      const techId = currentPath.split('/')[2] || selectedTechId;
      return (
        <TechnologyDetails
          techId={techId}
          onBack={() => navigateTo('/technologies')}
          onNavigate={navigateTo}
        />
      );
    }

    if (currentPath.startsWith('/training')) {
      const courseId = currentPath.split('/')[2] || selectedCourseId;
      return <Training initialCourseId={courseId} />;
    }

    // if (currentPath === '/roadmaps') {
    //   return <Roadmaps />;
    // }

    if (currentPath === '/projects') {
      return <Projects />;
    }

    if (currentPath === '/resources') {
      return <Resources />;
    }

    if (currentPath === '/contact') {
      return <Contact />;
    }

    // Default fallback to Home
    return (
      <Home
        onNavigate={navigateTo}
        onSelectTech={handleSelectTech}
        onSelectCourse={handleSelectCourse}
      />
    );
  };

  return (
    <ThemeProvider>
      <div className="app-root">
        <Navbar currentPath={currentPath} onNavigate={navigateTo} />
        <main className="main-content">{renderPage()}</main>
        <Footer onNavigate={navigateTo} />
      </div>
    </ThemeProvider>
  );
};

export default App;
