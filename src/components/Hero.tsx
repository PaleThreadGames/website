import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" background="hero" fullHeight className="pt-16 md:pt-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-foreground mb-8">
          Pale Thread Games
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
          Crafting immersive roguelike and metroidvania experiences
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Where every run is unique, every path is yours to discover
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollTo('games')} aria-label="Navigate to games section">
            Our Games
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo('about')}
            aria-label="Navigate to about section"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
