import { Game } from '../types';

const Games = () => {
  // Placeholder games data
  const upcomingGames: Game[] = [
    {
      id: '1',
      title: 'Untitled Roguelike',
      genre: ['Roguelike', 'Action'],
      status: 'in-development',
      description: 'An exciting roguelike adventure with procedurally generated dungeons and unique combat mechanics.',
    },
    {
      id: '2',
      title: 'Untitled Metroidvania',
      genre: ['Metroidvania', 'Platformer'],
      status: 'in-development',
      description: 'Explore a vast interconnected world filled with secrets, upgrades, and challenging boss battles.',
    },
  ];

  return (
    <section
      id="games"
      className="py-20 md:py-32 bg-slate-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cool-purple-400 to-cool-teal-400 bg-clip-text text-transparent">
          Our Games
        </h2>
        <p className="text-xl text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          We're hard at work crafting unforgettable gaming experiences. Check back soon for updates!
        </p>

        {upcomingGames.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-8 rounded-lg bg-gradient-to-br from-cool-blue-900/30 to-cool-purple-900/30 border border-cool-blue-500/20">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-cool-teal-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-2xl font-semibold text-slate-300 mb-2">Coming Soon</p>
              <p className="text-slate-400">We're working on something amazing!</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingGames.map((game) => (
              <div
                key={game.id}
                className="group relative p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cool-blue-500/20 hover:border-cool-teal-400/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      game.status === 'in-development'
                        ? 'bg-cool-blue-500/20 text-cool-blue-300 border border-cool-blue-500/30'
                        : 'bg-cool-purple-500/20 text-cool-purple-300 border border-cool-purple-500/30'
                    }`}
                  >
                    {game.status === 'in-development' ? 'In Development' : 'Coming Soon'}
                  </span>
                </div>

                {/* Game Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-cool-teal-400 group-hover:text-cool-teal-300 transition-colors">
                  {game.title}
                </h3>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.genre.map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-cool-purple-500/10 text-cool-purple-300 border border-cool-purple-500/20"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6">{game.description}</p>

                {/* Placeholder Image Area */}
                <div className="aspect-video rounded-lg bg-gradient-to-br from-cool-blue-900/40 via-cool-purple-900/40 to-cool-teal-900/40 border border-cool-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-cool-teal-400/50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-slate-500">Game Art Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Games;

