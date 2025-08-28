import { ArrowRight } from 'lucide-react';

export function ProcessSteps() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            All financial supply workflows.<br />Zero complexity.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            With a Arion account powering your assets you&apos;re already in the flow.
            <sup className="ml-1 align-super text-xs">1</sup>
          </p>
        </div>

        {/* Espace comme la maquette */}
        <div className="h-40 sm:h-56 lg:h-64" />

        {/* --- RANGÉE 1 : Texte (gauche) + Image (droite) --- */}
        <div className="mx-auto max-w-7xl space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Bloc 1 — texte gauche */}
            <div className="max-w-md">
              <h3 className="text-[18px] font-medium text-foreground">
                Handle all your supply bills frictionless
              </h3>

              <div className="relative mt-3 inline-block">
                <span className="absolute -top-3 left-20 whitespace-nowrap inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm">
                  Coming Soon
                </span>
                <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-3.5 py-1.5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                  Explore Assets Pay
                </button>
              </div>

              <div className="mt-4 h-px w-full bg-gray-300/60" />

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>Hold your money for longer by auto funding processing</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>Populate bill details for you using native AI Arion OS</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>Set multi-layered approvals and approve payments instantly via Slack</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>Retain suppliers with instant payment</span>
                </li>
              </ul>
            </div>

            {/* Image droite */}
            <div className="flex justify-center items-center">
              <div className="w-[676px] h-[845px] bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-lg text-center px-4">
                    Image 1<br />676x845
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- RANGÉE 2 : Image (gauche) + Texte (droite) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Image gauche (on inverse l’ordre sur desktop) */}
            <div className="flex justify-center items-center lg:order-1">
              <div className="w-[676px] h-[845px] bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-lg text-center px-4">
                    Image 2<br />676x845
                  </span>
                </div>
              </div>
            </div>

            {/* Bloc 2 — texte droite */}
            <div className="max-w-md lg:order-2">
              <h3 className="text-[18px] font-medium text-foreground">
                Seamless collateralization for you and your lenders
              </h3>

              <div className="mt-3">
                <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-3.5 py-1.5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                  Explore Collaterize
                </button>
              </div>

              <div className="mt-4 h-px w-full bg-gray-300/60" />

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>Generate automatic assets reassignment</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>Easily monitoring your coverage ratio or haircut</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>Simplify informations with third parties or lenders or both</span>
                </li>
              </ul>
            </div>
          </div>

          {/* --- (Optionnel) RANGÉE 3 si tu veux garder les blocs 3/4 --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Texte gauche */}
            <div className="max-w-md">
              <h3 className="text-[18px] font-medium text-foreground">
                Initiate assets backed financement effortlessly at any size
              </h3>

              <div className="relative mt-3 inline-block">
                <span className="absolute -top-3 left-20 whitespace-nowrap inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm">
                  Coming Soon
                </span>
                <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-3.5 py-1.5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                  Explore Funding
                </button>
              </div>

              <div className="mt-4 h-px w-full bg-gray-300/60" />

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>Issue corporate cards and reimburse expenses</span></li>
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>Tailor permissions to each team member</span></li>
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>Lock cards to specific merchants</span></li>
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>Easily spot duplicate subscriptions</span></li>
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>Set company-wide spend policies in minutes</span></li>
              </ul>
            </div>

            {/* Image droite */}
            <div className="flex justify-center items-center">
              <div className="w-[676px] h-[845px] bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-lg text-center px-4">
                    Image 3<br />676x845
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RANGÉE 4 : Image gauche + Texte droite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Image gauche */}
            <div className="flex justify-center items-center lg:order-1">
              <div className="w-[676px] h-[845px] bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-lg text-center px-4">
                    Image 4<br />676x845
                  </span>
                </div>
              </div>
            </div>

            {/* Texte droite */}
            <div className="max-w-md lg:order-2">
              <h3 className="text-[18px] font-medium text-foreground">
                Use data quickly and accurately
              </h3>

              <div className="mt-3">
                <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-3.5 py-1.5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                  Explore integrations
                </button>
              </div>

              <div className="mt-4 h-px w-full bg-gray-300/60" />

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>Sync inventory to Quickbooks, Sage, or others</span></li>
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>Sync all transactions and loans with your banks</span></li>
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>...</span></li>
                <li className="flex gap-2"><ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" /><span>...</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
