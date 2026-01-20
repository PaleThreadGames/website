const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 hero-animated-bg pointer-events-none">
        {/* Rotating gradient rings */}
        <div className="absolute inset-0 opacity-30">
          <div className="hero-ring hero-ring-1"></div>
          <div className="hero-ring hero-ring-2"></div>
          <div className="hero-ring hero-ring-3"></div>
        </div>
        
        {/* Flowing energy streams */}
        <div className="absolute inset-0 opacity-25">
          <div className="hero-stream hero-stream-1"></div>
          <div className="hero-stream hero-stream-2"></div>
          <div className="hero-stream hero-stream-3"></div>
        </div>
        
        {/* Orbital particles/orbs */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`hero-orb hero-orb-${i + 1}`}
              style={{
                '--delay': `${i * 0.4}s`,
                '--duration': `${20 + (i % 4) * 3}s`,
                '--radius': `${100 + (i % 3) * 80}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        
        {/* Pulsing background gradient */}
        <div className="absolute inset-0 gradient-cool opacity-20 hero-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cool-blue-400 via-cool-purple-400 to-cool-teal-400 bg-clip-text text-transparent animate-fade-in">
          Pale Thread Games
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-4 font-light">
          Crafting immersive roguelike and metroidvania experiences
        </p>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Where every run is unique, every path is yours to discover
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById('games');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-cool-blue-600 to-cool-purple-600 hover:from-cool-blue-500 hover:to-cool-purple-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="Navigate to games section"
          >
            Our Games
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border-2 border-cool-teal-400 text-cool-teal-400 hover:bg-cool-teal-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            aria-label="Navigate to about section"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg
          className="w-6 h-6 text-cool-teal-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

