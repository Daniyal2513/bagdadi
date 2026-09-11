const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('const [theme, setTheme] = useState')) {
  code = code.replace("const [currentPage, setCurrentPage] = useState<Page>('home');", 
`const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };`);
  
  code = code.replace('<Header currentPage={currentPage} onNavigate={navigate} />', 
  '<Header currentPage={currentPage} onNavigate={navigate} theme={theme} toggleTheme={toggleTheme} />');
  
  fs.writeFileSync('src/App.tsx', code);
}
