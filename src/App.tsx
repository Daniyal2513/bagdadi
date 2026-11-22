import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Umrah from './pages/Umrah';
import Iran from './pages/Iran';
import Iraq from './pages/Iraq';
import Visa from './pages/Visa';
import Contact from './pages/Contact';

export type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';
// type Page = 'home' | 'about' | 'umrah' |  'iraq'  | 'contact';
const pathMap: Record<Page, string> = {
  home: '/',
  about: '/about',
  umrah: '/umrah',
  iran: '/iran',
  iraq: '/iraq',
  visa: '/visa',
  contact: '/contact',
};

const titles: Record<string, string> = {
  '/': 'Baghdadi Travel & Tourism',
  '/about': 'About Us – Baghdadi Travel & Tourism',
  '/umrah': 'Umrah Packages – Baghdadi Travel & Tourism',
  '/iran': 'Iran Tours – Baghdadi Travel & Tourism',
  '/iraq': 'Iraq / Baghdad Tour – Baghdadi Travel & Tourism',
  '/visa': 'Visa & Dubai – Baghdadi Travel & Tourism',
  '/contact': 'Contact Us – Baghdadi Travel & Tourism',
};

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const routerNavigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  // };
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  // const navigate = (page: Page) => {
  //   setCurrentPage(page);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };
 // Purane code ke saath compatible: onNavigate abhi bhi Page leta hai
  const navigate = (page: Page) => {
    routerNavigate(pathMap[page]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // useEffect(() => {
  //   const titles: Record<Page, string> = {
  //     home: 'Baghdadi Travel & Tourism',
  //     about: 'About Us — Baghdadi Travel & Tourism',
  //     umrah: 'Umrah Packages — Baghdadi Travel & Tourism',
  //     iran: 'Iran Tours — Baghdadi Travel & Tourism',
  //     iraq: 'Iraq / Baghdad Tour — Baghdadi Travel & Tourism',
  //     visa: 'Visa & Dubai — Baghdadi Travel & Tourism',
  //     contact: 'Contact Us — Baghdadi Travel & Tourism',
  //   };
  //   document.title = titles[currentPage];
  // }, [currentPage]);
useEffect(() => {
    document.title = titles[pathname] ?? titles['/'];
  }, [pathname]);
  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'home': return <Home onNavigate={navigate} />;
  //     case 'about': return <About onNavigate={navigate} />;
  //     case 'umrah': return <Umrah onNavigate={navigate} />;
  //     case 'iran': return <Iran onNavigate={navigate} />;
  //     case 'iraq': return <Iraq onNavigate={navigate} />;
  //     case 'visa': return <Visa onNavigate={navigate} />;
  //     case 'contact': return <Contact onNavigate={navigate} />;
  //   }
  // };
// Header ko currentPage chahiye, to path se nikal lein
  const currentPage =
    (Object.keys(pathMap) as Page[]).find(p => pathMap[p] === pathname) ?? 'home';
  return (
    <>
      {/* Header ke props wahi rakhein jo pehle the */}
      <Header currentPage={currentPage} onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home onNavigate={navigate} />} />
        <Route path="/about" element={<About onNavigate={navigate} />} />
        <Route path="/umrah" element={<Umrah onNavigate={navigate} />} />
        <Route path="/iran" element={<Iran onNavigate={navigate} />} />
        <Route path="/iraq" element={<Iraq onNavigate={navigate} />} />
        <Route path="/visa" element={<Visa onNavigate={navigate} />} />
        <Route path="/contact" element={<Contact onNavigate={navigate} />} />
      </Routes>
      <Footer onNavigate={navigate} />
    </>
  );
}
