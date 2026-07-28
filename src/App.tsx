import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/toaster/toaster.tsx';
import { ChatWidgetMount } from './components/ai-chat/ChatWidgetMount.tsx';
import { aiChatConfig } from './config/aiChat.ts';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Projects from './pages/Projects.tsx';
import Products from './pages/Products.tsx';
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
      case 'products':
        return <Products />;
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
      <ChatWidgetMount
        workerUrl={aiChatConfig.workerUrl}
        title={aiChatConfig.title}
        placeholder={aiChatConfig.placeholder}
        unconfiguredMessage={aiChatConfig.unconfiguredMessage}
        greetingMessage={aiChatConfig.greetingMessage}
        greetingDelayMs={aiChatConfig.greetingDelayMs}
        greetingCooldownMs={aiChatConfig.greetingCooldownMs}
        theme="auto"
      />
    </>
  );
}

export default App;
