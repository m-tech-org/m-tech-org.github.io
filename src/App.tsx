import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/toaster/toaster.tsx';
import { ChatWidget } from './components/ai-chat/ChatWidget.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      {renderPage()}
      <Toaster />
      <ChatWidget />
    </>
  );
}

export default App;
