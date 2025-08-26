export function Partners() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container">

        {/* Header centré */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Tap our industry expertise
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Rely on the expertise of team and network that operate since over 20 years
          </p>
        </div>

        {/* Grand espace comme la maquette */}
        <div className="h-40 sm:h-56 lg:h-64" />

        {/* Grille avec une seule carte à droite */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-x-24">

          {/* Placeholder pour décaler la carte vers la droite */}
          <div className="hidden lg:block" />

          {/* Carte à droite */}
          <div className="max-w-md lg:col-start-2">
            <h3 className="text-[18px] font-medium text-foreground">
              Ask an expert to work in your interets
            </h3>

            <div className="mt-3">
              <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-3.5 py-1.5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                Explore Delegated Audit
              </button>
            </div>

            <div className="mt-4 h-px w-full bg-gray-300/60" />

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Whether you are a client company, a supplier, a fund or a third party, our expert auditors continually work in the interest of the contractors and their goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
