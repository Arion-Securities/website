export function ValueProposition() {
  return (
    <section className="h-[756px] bg-background flex items-center">
      <div className="page-container w-full">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Content - Left side */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Let your assets improve your financial operations
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Your assets should do more for your business. Now, it can.
              </p>
            </div>
            
            {/* Image container - Right side */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="w-[676px] h-[676px] bg-gray-200 rounded-xl overflow-hidden">
                {/* Placeholder pour l'image - remplacez par votre vraie image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Image placeholder 676x676</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
