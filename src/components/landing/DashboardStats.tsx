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
          {/* Bouton 240x40 */}
          <button className="mt-4 inline-flex h-10 w-[240px] items-center justify-center rounded-full bg-gray-200 px-4 text-xs font-medium text-foreground/80 hover:bg-gray-300 transition">
            Contact Sales
          </button>
        </div>

        {/* === TOP WRAPPER CARD === */}
        <div className="relative mt-10 rounded-2xl bg-[#EFEFF6] p-6 sm:p-8 min-h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Col gauche : texte */}
            <div className="text-sm leading-6 text-foreground/90 max-w-md">
              Arion OS for corporate and institutional improve your
              knowledge of assets you finance.<br />
              Long term, on demand, you choose with your own due
              diligence.
            </div>

            {/* Col droite : image à la place de "Current Portfolio" */}
            <div className="flex items-center justify-center">
              {/* Image responsive: 596x429 ≈ 1.39 -> aspect-[139/100] */}
              <div className="w-full max-w-[596px] aspect-[139/100] rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image 596×429</span>
              </div>
            </div>
          </div>

          {/* Bouton bas-gauche h-10 */}
          <div className="absolute left-6 bottom-6">
            <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#E7EBF9] px-5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
              Stop Blind with Arion OS
            </button>
          </div>
        </div>

        {/* === BOTTOM GRID (2 cards) === */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BOTTOM LEFT */}
          <div className="relative rounded-2xl bg-[#EFEFF6] p-6 sm:p-8 flex flex-col">
            {/* Image responsive: 612x408 = 3/2 */}
            <div className="w-full aspect-[3/2] rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 612×408</span>
            </div>

            {/* Titre sous l'image */}
            <p className="mt-4 text-base sm:text-lg font-medium text-foreground/90">
              Fuel your growth with Venture Debt
            </p>

            {/* Bouton en bas avec badge */}
            <div className="mt-auto pt-6">
              <div className="relative inline-block">
              <span className="absolute -top-3 right-0 translate-x-8 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm whitespace-nowrap">
  Coming Soon
</span>
                <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#E7EBF9] px-5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                  Grow with Marketplace
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="relative rounded-2xl bg-[#EFEFF6] p-6 sm:p-8 flex flex-col">
            {/* Image responsive: 612x408 = 3/2 */}
            <div className="w-full aspect-[3/2] rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 612×408</span>
            </div>

            {/* Titre sous l'image */}
            <p className="mt-4 text-base sm:text-lg font-medium text-foreground/90">
              Speed up your cashflow with Auto Funding
            </p>

            {/* Bouton en bas avec badge */}
            <div className="mt-auto pt-6">
              <div className="relative inline-block">
              <span className="absolute -top-3 right-0 translate-x-8 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm whitespace-nowrap">
                Coming Soon
              </span>
                <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#E7EBF9] px-5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
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
