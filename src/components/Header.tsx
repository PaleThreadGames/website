import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${isScrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
        }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 header-animated-bg pointer-events-none">
        {/* Animated gradient waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="header-wave header-wave-1"></div>
          <div className="header-wave header-wave-2"></div>
          <div className="header-wave header-wave-3"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 16 }, (_, i) => (
            <div
              key={i}
              className={`header-particle header-particle-${i + 1}`}
              style={{
                '--delay': `${i * 0.3}s`,
                '--duration': `${15 + (i % 5) * 2}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        
        {/* Animated mesh pattern */}
        <div className="absolute inset-0 opacity-20 header-mesh"></div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cool-blue-400 via-cool-purple-400 to-cool-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Pale Thread Games
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-200 hover:text-cool-teal-400 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('games')}
              className="text-slate-200 hover:text-cool-teal-400 transition-colors font-medium"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-200 hover:text-cool-teal-400 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-cool-teal-400 transition-colors p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-200 hover:text-cool-teal-400 transition-colors text-left font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('games')}
                className="text-slate-200 hover:text-cool-teal-400 transition-colors text-left font-medium"
              >
                Games
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-200 hover:text-cool-teal-400 transition-colors text-left font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

