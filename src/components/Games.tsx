import { Game } from '../types';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Games = () => {
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
      title: 'Isotope',
      genre: ['Metroidvania', 'Platformer'],
      status: 'in-development',
      description: 'Explore a vast interconnected world filled with secrets, upgrades, and challenging boss battles.',
    },
  ];

  return (
    <Section id="games" background="games">
      <SectionHeading
        title="Our Games"
        subtitle="We're hard at work crafting unforgettable gaming experiences. Check back soon for updates!"
      />

      {upcomingGames.length === 0 ? (
        <div className="text-center py-16">
          <Card className="inline-block p-10 border-border bg-card">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-muted-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-2xl font-semibold text-foreground mb-2">Coming Soon</p>
            <p className="text-muted-foreground">We're working on something amazing!</p>
          </Card>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {upcomingGames.map((game) => (
            <Card
              key={game.id}
              className="relative p-8 md:p-10 border-border bg-card transition-colors duration-200 hover:border-primary/30"
            >
              <div className="absolute top-6 right-6">
                <Badge>
                  {game.status === 'in-development' ? 'In Development' : 'Coming Soon'}
                </Badge>
              </div>

              <CardHeader className="pt-8">
                <CardTitle className="text-foreground">{game.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {game.genre.map((genre, index) => (
                    <Badge key={index} variant="outline">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">{game.description}</p>

                <div className="aspect-video rounded-lg bg-surface-raised border border-border flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-muted-foreground">
                      {game.title === 'Isotope'
                        ? 'Isotope art and screenshots coming soon'
                        : `${game.title} art and screenshots coming soon`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Games;
