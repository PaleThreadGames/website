import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <Section id="about" background="about">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="About Us" />

        <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Welcome to{' '}
            <span className="text-primary font-medium">Pale Thread Games</span>,
            an indie game development studio passionate about creating engaging and challenging
            gaming experiences.
          </p>

          <p>
            We specialize in two beloved genres that have captured the hearts of gamers worldwide:
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <Card className="p-8 md:p-10 border-border bg-card transition-colors duration-200 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-foreground">Roguelikes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Procedurally generated worlds where every playthrough offers a fresh challenge.
                  Death is not the end—it's a new beginning with new possibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 md:p-10 border-border bg-card transition-colors duration-200 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-foreground">Metroidvanias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Exploration-driven adventures in interconnected worlds. Unlock new abilities,
                  discover hidden paths, and piece together the mysteries of our carefully crafted environments.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-12">
            Our mission is to blend the best of both worlds—creating games that reward exploration
            and skill while offering the replayability and unpredictability that keep players coming back.
          </p>

          <p className="text-primary font-medium">
            Stay tuned for our upcoming releases. The adventure is just beginning.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
