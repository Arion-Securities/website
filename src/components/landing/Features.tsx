import { ArrowRight } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container mx-auto max-w-6xl px-6">

        {/* Titre + sous-titre centrés */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Speed without compromise
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Efficiently manage your assets and collaterized debt from a single dashboard
            <sup className="ml-1 align-super text-xs">1</sup>
          </p>
        </div>

        {/* Grand espace vide comme sur la maquette */}
        <div className="h-64 sm:h-72 lg:h-80"></div>

        {/* ★ Wrapper commun pour aligner à gauche témoignage + cartes */}
        <div className="mx-auto w-full max-w-5xl">
          {/* Témoignage (aligné à gauche du wrapper) */}
          <div className="max-w-3xl">
            <p className="text-2xl sm:text-[28px] leading-snug text-foreground">
              Complete any assets backed finance<br className="hidden sm:block" />
              operations in just few clicks
            </p>


            <div className="max-w-md">
              <div className="mt-8 h-px w-full bg-gray-300/60"></div>
              <p className="mt-4 text-[15px] leading-5 text-muted-foreground">
                An operator’s dream. Mercury combines the speed, simplicity, and
                smarts that I need to get back to running my business. Search for
                data or actions, all at your fingertips.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-foreground">Lindsay Liu</p>
              <p className="text-xs text-muted-foreground">CEO &amp; co-founder, Super</p>
            </div>
          </div>

          {/* Cartes du bas (même wrapper => même bord gauche) */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Carte 1 */}
            <div className="relative rounded-2xl bg-[#EFEFF6] p-6 sm:p-8 w-full">
              <div className="h-56 sm:h-64"></div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Send assets backed effortlessly
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Set auto-sync feature to manage and monitor the coverage ratio.
                </p>
                <button
                  className="mt-5 inline-flex items-center rounded-full bg-[#E7EBF9] px-4 py-2 text-sm font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition"
                >
                  Explore Auto-Reload
                </button>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="relative rounded-2xl bg-[#EFEFF6] p-6 sm:p-8 w-full">
              <div className="h-56 sm:h-64"></div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Unlock on demand assets financing with A grade partners
                  <sup className="ml-0.5 align-super text-xs">2</sup>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose between segragated and global fundig
                  <sup className="ml-0.5 align-super text-xs">3</sup>
                </p>

                <div className="relative mt-5 inline-block">
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 shadow-sm">
                    Coming Soon
                  </span>
                  <button
                    className="inline-flex items-center rounded-full bg-[#E7EBF9] px-4 py-2 text-sm font-medium text-[#1F2A44] hover:bg-[#dfe5f9] transition"
                  >
                    Explore Funding
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
