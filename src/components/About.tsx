const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-slate-800/50 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cool-blue-400 to-cool-teal-400 bg-clip-text text-transparent">
            About Us
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            <p>
              Welcome to <span className="text-cool-teal-400 font-semibold">Pale Thread Games</span>,
              an indie game development studio passionate about creating engaging and challenging
              gaming experiences.
            </p>

            <p>
              We specialize in two beloved genres that have captured the hearts of gamers worldwide:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-lg bg-gradient-to-br from-cool-blue-900/30 to-cool-purple-900/30 border border-cool-blue-500/20 hover:border-cool-blue-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-cool-blue-400">Roguelikes</h3>
                <p className="text-slate-300">
                  Procedurally generated worlds where every playthrough offers a fresh challenge.
                  Death is not the end—it's a new beginning with new possibilities.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-cool-purple-900/30 to-cool-teal-900/30 border border-cool-purple-500/20 hover:border-cool-purple-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-cool-purple-400">Metroidvanias</h3>
                <p className="text-slate-300">
                  Exploration-driven adventures in interconnected worlds. Unlock new abilities,
                  discover hidden paths, and piece together the mysteries of our carefully crafted environments.
                </p>
              </div>
            </div>

            <p className="mt-8">
              Our mission is to blend the best of both worlds—creating games that reward exploration
              and skill while offering the replayability and unpredictability that keep players coming back.
            </p>

            <p className="text-cool-teal-400 font-medium">
              Stay tuned for our upcoming releases. The adventure is just beginning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

