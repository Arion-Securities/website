export function DashboardStats() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Your gateway to a new asset’s way
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Accelerate your growth with Arion OS for Fund, Suppliers and third parties and
            integrate your expertise with ours
            <sup className="ml-1 align-super text-xs">4</sup>.
          </p>
          <button className="mt-4 inline-flex items-center rounded-full bg-gray-200 px-4 py-1.5 text-xs font-medium text-foreground/80 hover:bg-gray-300 transition">
            Contact Sales
          </button>
        </div>

        {/* === TOP: SINGLE WRAPPING CARD (englobe les 2) === */}
        <div className="relative mt-10 rounded-2xl bg-[#EFEFF6] p-6 sm:p-8 min-h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Col gauche : texte */}
            <div className="text-sm leading-6 text-foreground/90 max-w-md">
              Arion OS for corporate and institutional improve your
              knowledge of assets you finance.<br />
              Long term, on demand, you choose with your own due
              diligence.
            </div>

            {/* Col droite : Current Portfolio */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h4 className="text-sm font-medium text-foreground">Current Portfolio</h4>

              <div className="mt-6 flex items-center gap-6">
                {/* Donut */}
                <div className="relative h-24 w-24">
                  <div
                    className="h-24 w-24 rounded-full"
                    style={{
                      background:
                        'conic-gradient(#004F71 0 75%, #E1ECF0 75% 100%)',
                    }}
                  />
                  <div className="absolute inset-3 rounded-full bg-white" />
                </div>

                {/* Légende */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: '#004F71' }} />
                    <span className="text-foreground/90">75% J.P. Morgan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: '#E1ECF0' }} />
                    <span className="text-foreground/80">25% Morgan Stanley</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton de la grande carte : en bas à gauche */}
          <div className="absolute left-6 bottom-6">
            <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-4 py-2 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
              Stop Blind with Arion OS
            </button>
          </div>
        </div>

        {/* === BOTTOM GRID (2 cards) === */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BOTTOM LEFT: $9.6M + BAR + caption + button bottom-left */}
          <div className="relative rounded-2xl bg-[#EFEFF6] p-6 sm:p-8">
            {/* Bloc blanc hauteur fixe */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 h-56 sm:h-64">
              <div className="text-5xl font-semibold text-foreground">$9.6M</div>

              {/* Barre */}
              <div className="mt-6">
                <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: '#004F71' }} />
                </div>
                <div className="mt-3 flex items-center gap-6 text-xs text-foreground/70">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#004F71' }} />
                    <span>Balance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#E1ECF0' }} />
                    <span>Draw Request</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption plus grande - maintenant au-dessus du bouton */}
            <p className="mt-4 text-base sm:text-lg font-medium text-foreground/90 mb-16">
              Fuel your growth with Venture Debt
            </p>

            {/* Bouton en bas à gauche */}
            <div className="absolute left-6 bottom-6">
              <div className="relative inline-block">
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm">
                  Coming Soon
                </span>
                <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-4 py-2 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                  Grow with Marketplace
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT: spacer même hauteur + caption + bouton bottom-left */}
          <div className="relative rounded-2xl bg-[#EFEFF6] p-6 sm:p-8">
            {/* Spacer égal au bloc blanc de gauche */}
            <div className="h-56 sm:h-64" />

            {/* Caption plus grande, maintenant au-dessus du bouton */}
            <p className="mt-4 text-base sm:text-lg font-medium text-foreground/90 mb-16">
              Speed up your cashflow with Auto Funding
            </p>

            {/* Bouton en bas à gauche */}
            <div className="absolute left-6 bottom-6">
              <div className="relative inline-block">
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm">
                  Coming Soon
                </span>
                <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-4 py-2 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                  Create SAGA
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
