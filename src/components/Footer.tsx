const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cool-blue-400 to-cool-teal-400 bg-clip-text text-transparent">
              Pale Thread Games
            </h3>
            <p className="text-slate-400 text-sm">
              Crafting immersive roguelike and metroidvania gaming experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-cool-teal-400 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('games')}
                  className="text-slate-400 hover:text-cool-teal-400 transition-colors text-sm"
                >
                  Games
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-cool-teal-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:kyle@palethread.games"
                  className="text-slate-400 hover:text-cool-teal-400 transition-colors text-sm"
                >
                  kyle@palethread.games
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Pale Thread Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

