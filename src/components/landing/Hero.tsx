import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="page-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading - pas en gras */}
          <h1 className="text-4xl font-normal tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Simplified assets backed.
            <br />
            <span className="text-primary">Powerful finance.</span>
          </h1>

          {/* Subtitle modifié */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Apply in 10 min for online assets backed finance OS that transforms how you operate
          </p>

          {/* Email field with waiting list button inside and contact sales button to the right */}
          <div className="mt-10 flex items-center justify-center gap-x-4 max-w-2xl mx-auto">
            <div className="relative flex-1 max-w-xs">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="pr-32 rounded-full border-gray-300 text-foreground placeholder:text-foreground/60 focus:bg-white focus:border-primary transition-all duration-200"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 rounded-full bg-[#004F71] hover:bg-[#004F71]/90 text-white h-8 px-6"
              >
                Waiting List
              </Button>
            </div>
            
            {/* Contact Sales button to the right */}
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-gray-300 bg-white text-foreground hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </Button>
          </div>

          {/* Espace de 825px sous l'input email pour séparation visuelle */}
          <div className="mt-[825px]"></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)] dark:from-primary/20 dark:to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary/20 dark:to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
