import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Umrah from './pages/Umrah';
import Iran from './pages/Iran';
import Iraq from './pages/Iraq';
import Visa from './pages/Visa';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'Baghdadi Travel & Tourism',
      about: 'About Us — Baghdadi Travel & Tourism',
      umrah: 'Umrah Packages — Baghdadi Travel & Tourism',
      iran: 'Iran Tours — Baghdadi Travel & Tourism',
      iraq: 'Iraq / Baghdad Tour — Baghdadi Travel & Tourism',
      visa: 'Visa & Dubai — Baghdadi Travel & Tourism',
      contact: 'Contact Us — Baghdadi Travel & Tourism',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'about': return <About onNavigate={navigate} />;
      case 'umrah': return <Umrah onNavigate={navigate} />;
      case 'iran': return <Iran onNavigate={navigate} />;
      case 'iraq': return <Iraq onNavigate={navigate} />;
      case 'visa': return <Visa onNavigate={navigate} />;
      case 'contact': return <Contact onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-deep)' }}>
      <Header currentPage={currentPage} onNavigate={navigate} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
