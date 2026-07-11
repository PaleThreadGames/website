const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'games', label: 'Games' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Pale <span className="text-primary">Thread</span> Games
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting immersive roguelike and metroidvania gaming experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kyle@palethread.games"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  kyle@palethread.games
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Pale Thread Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
