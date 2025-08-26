import { ArrowRight } from 'lucide-react';

export function ProcessSteps() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container">

        {/* Header centré */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            All financial supply workflows.<br />Zero complexity.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            With a Arion account powering your assets you&apos;re already in the flow.
            <sup className="ml-1 align-super text-xs">1</sup>
          </p>
        </div>

        {/* Grand espace comme la maquette */}
        <div className="h-40 sm:h-56 lg:h-64" />

        {/* Grille alternée gauche/droite avec grands espacements verticaux */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">

          {/* Bloc 1 — gauche */}
          <div className="max-w-md">
            <h3 className="text-[18px] font-medium text-foreground">
              Handle all your supply bills frictionless
            </h3>

            <div className="relative mt-3 inline-block">
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm">
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

          {/* Placeholder pour décaler le bloc droit vers le bas (comme sur l'image) */}
          <div className="hidden lg:block" />

          {/* Bloc 2 — droite */}
          <div className="max-w-md lg:col-start-2">
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

          {/* Placeholder pour recréer le grand espace avant le dernier bloc gauche */}
          <div className="hidden lg:block" />

          {/* Bloc 3 — gauche (en bas) */}
          <div className="max-w-md lg:col-start-1">
            <h3 className="text-[18px] font-medium text-foreground">
              Initiate assets backed financement effortlessly at any size
            </h3>

            <div className="relative mt-3 inline-block">
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm">
                Coming Soon
              </span>
              <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-3.5 py-1.5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                Explore Funding
              </button>
            </div>

            <div className="mt-4 h-px w-full bg-gray-300/60" />

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>Issue corporate cards and reimburse expenses</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>Tailor permissions to each team member</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>Lock cards to specific merchants</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>Easily spot duplicate subscriptions</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>Set company-wide spend policies in minutes</span>
              </li>
            </ul>
          </div>

          {/* Placeholder pour décaler le bloc droit vers le bas (comme sur l'image) */}
          <div className="hidden lg:block" />

          {/* Bloc 4   — droite */}
          <div className="max-w-md lg:col-start-2">
            <h3 className="text-[18px] font-medium text-foreground">
              Use data quickly and accuratel
            </h3>

            <div className="mt-3">
              <button className="inline-flex items-center rounded-full bg-[#E7EBF9] px-3.5 py-1.5 text-xs font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition">
                Explore integrations
              </button>
            </div>

            <div className="mt-4 h-px w-full bg-gray-300/60" />

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>Sync inventory to Quickbooks, Sage, or some other</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>Sync all transactions and loan with your banks</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>...</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>...</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
