import { ArrowRight } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="py-20 bg-background">
      <div className="page-container">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Let your assets improve your financial operations
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Your assets should do more for your business. Now, it can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
