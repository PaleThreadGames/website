import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  background?: 'hero' | 'about' | 'games' | 'contact' | 'default'
  children: React.ReactNode
  fullHeight?: boolean
}

const backgroundClasses = {
  hero: 'section-bg-hero',
  about: 'section-bg-about',
  games: 'section-bg-games',
  contact: 'section-bg-contact',
  default: '',
}

export function Section({
  id,
  className,
  background = 'default',
  children,
  fullHeight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-32 md:py-48',
        fullHeight && 'min-h-screen flex items-center',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  )
}
