"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export function Pricing() {
  const [pricingType, setPricingType] = useState<'business' | 'corporate'>('business');

  // Données des plans pour Business
  const businessPlans = {
    arionOne: {
      name: "Arion One",
      price: "$99",
      description: "Powerful assets backed finance essentials.",
      business: {
        locations: "Manage one location site",
        funding: "Manage one funding account",
        audit: "Audit on request"
      },
      assets: {
        reassignment: "Unlimited assets reassignment",
        backed: "Manage one assets backed"
      },
      funding: {
        history: "Unlimited transactions history",
        collaterize: "Collaterize one funding"
      },
      team: "up to 3 users/month"
    },
    arionPlus: {
      name: "Arion Plus",
      price: "$299",
      description: "Everything Arion One offers, with more assets and funding enhancement.",
      business: {
        locations: "Manage up to 3 location sites",
        funding: "Manage up to 3 funding account",
        audit: "Up to 4 audit/year",
        additional: undefined
      },
      assets: {
        reassignment: "Unlimited assets reassignment",
        backed: "Manage up to 5 assets backed",
        reload: "Auto Supplier Reload",
        reloadLimit: "up to 10 payments / month"
      },
      funding: {
        history: "Unlimited transaction history",
        collaterize: "Collaterize up to 5 funding",
        auto: "Auto Funding",
        marketplace: "Funding Marketplace"
      },
      team: "up to 5 users/month",
      teamAdditional: "+ $5/additional active user"
    },
    arionEnterprise: {
      name: "Arion Enterprise",
      price: "Custom",
      description: "Everything Arion Plus offers, with custom workflows and dedicated support.",
      business: {
        locations: "Custom location sites",
        funding: "Custom funding account",
        audit: "Custom audit/year",
        additional: undefined
      },
      assets: {
        reassignment: "Unlimited assets reassignment",
        backed: "Manage custom assets backed",
        reload: "Custom Auto Supplier Reload"
      },
      funding: {
        history: "Unlimited transaction history",
        collaterize: "Custom Collaterize funding",
        fix: "Fix Funding",
        partners: "Funding dedicated partners"
      },
      team: "Unlimited users/month"
    }
  };

  // Données des plans pour Corporate
  const corporatePlans = {
    arionOne: {
      name: "Arion Pro",
      price: "$49",
      description: "Powerful assets backed finance essentials.",
      business: {
        locations: "Price for each company managed",
        funding: "All documents on Vaulty",
        audit: "Delegated audit on request"
      },
      assets: {
        reassignment: " Unlimited assets access",
        backed: "Manage one contract/company"
      },
      funding: {
        history: " Unlimited transactions history",
        collaterize: "Access funding informations a day"
      },
      team: "up to 3 users/month"
    },
    arionPlus: {
      name: "Arion Corporate",
      price: "$699",
      description: "A complete OS platform for loan/debt fund, suppliers and third party holders.",
      business: {
        locations: "Manage up to 20 companies",
        funding: "All documents on Vaulty",
        audit: "AI risk and audit assistant DueBot",
        additional: "Delegated audit on request"
      },
      assets: {
        reassignment: "Unlimited assets access",
        backed: "Manage up to 5 contracts/company",
        reload: " Supplier Guard",
        reloadLimit: "Enhanced dashboard monitoring"
      },
      funding: {
        history: "Unlimited transaction history",
        collaterize: "Real time funding informations",
        auto: "Auto Funding settings",
        marketplace: "Companies Marketplace"
      },
      team: "up to 5 users/month",
      teamAdditional: "+ $5/additional active user"
    },
    arionEnterprise: {
      name: "Arion Executive",
      price: "Custom",
      description: "Everything Arion Corporate offers, with custom workflows and dedicated support for large business.",
      business: {
        locations: "Custom companies managed",
        funding: "Custom Arion OS workflow",
        audit: "Dedicated risk and audit manager",
        additional: "Complete legal upstream"
      },
      assets: {
        reassignment: "Unlimited assets reassignment",
        backed: "Unlimited contracts",
        reload: "🛡️ Custom Supplier Guard",
        reloadLimit: "📈 SmartCycle Dashboard"
      },
      funding: {
        history: "Unlimited transaction history",
        collaterize: "Custom Collaterize funding",
        fix: "Fix Funding settings",
        partners: "Off Marketplace"
      },
      team: "Unlimited users/month"
    }
  };

  const currentPlans = pricingType === 'business' ? businessPlans : corporatePlans;

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="page-container">
        <div className="max-w-5xl mx-auto px-6 py-2">
          {/* Titre principal */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#1c1c1c] mb-4">
              Pricing that scales with you
            </h2>
            <p className="text-lg text-muted-foreground">
              {pricingType === 'business' 
                ? "Access powerful platform for $99/mo, and advanced workflows starting at $299/mo."
                : "Access powerful platform for $49/mo, and advanced workflows starting at $699/mo."
              }
            </p>
          </div>

          {/* Switch Business / Corporate */}
          <div className="flex justify-center mb-8">
            <div className="relative bg-white rounded-full shadow-sm w-96 h-7 border border-gray-300">
              {/* Bouton glissant animé */}
              <div 
                className={`absolute top-0.4 left-0 w-48 h-6.5 bg-gray-200 rounded-full transition-all duration-300 ease-in-out ${
                  pricingType === 'business' ? 'translate-x-0' : 'translate-x-48'
                }`}
              />
              
              {/* Grille pour forcer 50/50 */}
              <div className="grid grid-cols-2 h-full relative z-10 items-center">
                <Button
                  variant="ghost"
                  className={`rounded-full font-medium transition-all duration-300 h-full text-base -mt-2 ${
                    pricingType === 'business' 
                      ? 'text-[#004F71]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setPricingType('business')}
                >
                  Business
                </Button>
                <Button
                  variant="ghost"
                  className={`rounded-full font-medium transition-all duration-300 h-full text-base -mt-2 ${
                    pricingType === 'corporate' 
                      ? 'text-[#004F71]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setPricingType('corporate')}
                >
                  Corporate
                </Button>
              </div>
            </div>
          </div>

          {/* Carte gris claire derrière les 3 plans */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Arion One - Background style */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{currentPlans.arionOne.name}</h3>
                  <span className="text-2xl font-bold text-foreground">{currentPlans.arionOne.price}</span>
                  <span className="text-sm text-muted-foreground">/ Month</span>
                  <p className="text-xs text-muted-foreground">
                    {currentPlans.arionOne.description}
                    <br />&nbsp;
                  </p>
                </div>

                <Button
                  className="mb-6 rounded-full bg-[#004F71] hover:bg-[#004F71]/90 text-white px-14"
                  asChild
                >
                  <Link href="/signup">Open Account</Link>
                </Button>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Business</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <span>{currentPlans.arionOne.business.locations}</span>
                        <sup className="text-xs">1</sup>
                      </div>
                      <div className="flex items-center">
                        <span>{currentPlans.arionOne.business.funding}</span>
                        <sup className="text-xs">2</sup>
                      </div>
                      <div className="flex items-center">
                        <span>{currentPlans.arionOne.business.audit}</span>
                        <sup className="text-xs">3</sup>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Assets pay</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">∞</span>
                        <span>{currentPlans.arionOne.assets.reassignment}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{currentPlans.arionOne.assets.backed}</span>
                        <sup className="text-xs">1</sup>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Funding</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">∞</span>
                        <span>{currentPlans.arionOne.funding.history}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{currentPlans.arionOne.funding.collaterize}</span>
                        <sup className="text-xs">2</sup>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Team</h4>
                    <p className="text-xs">{currentPlans.arionOne.team}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Integrations</h4>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#004F71] mr-2"></div>
                        <span className="text-sm">Tink</span>
                      </div>
                      <div className="flex items-center">
                        <img 
                          src="/quickbooks-logo.png" 
                          alt="QuickBooks" 
                          className="w-4 h-4 mr-2"
                        />
                        <span className="text-sm">QuickBooks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Combined Card for Arion Plus and Enterprise */}
              <div className="col-span-2 bg-white rounded-lg relative">
                <div className="grid grid-cols-2">
                  {/* Arion Plus */}
                  <div className="p-6 relative">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{currentPlans.arionPlus.name}</h3>
                      <span className="text-2xl font-bold text-foreground">{currentPlans.arionPlus.price}</span>
                      <span className="text-sm text-muted-foreground">/ Month</span>
                      <p className="text-xs text-muted-foreground">{currentPlans.arionPlus.description}</p>
                    </div>
                    
                    <Button 
                      className="mb-6 rounded-full bg-[#EFEFF6] hover:bg-[#EFEFF6]/90 text-secondary-foreground px-14"
                      asChild
                    >
                      <Link href="/signup">Open Account</Link>
                    </Button>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Business</h4>
                        <div className="space-y-1 text-xs ">
                          <div className="flex items-center">
                            <span>{currentPlans.arionPlus.business.locations}</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionPlus.business.funding}</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionPlus.business.audit}</span>
                            <sup className="text-xs">3</sup>
                          </div>
                          {currentPlans.arionPlus.business.additional && (
                            <div className="flex items-center">
                              <span>{currentPlans.arionPlus.business.additional}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Assets pay</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>{currentPlans.arionPlus.assets.reassignment}</span>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionPlus.assets.backed}</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🔄</span>
                            <span>{currentPlans.arionPlus.assets.reload}</span>
                          </div>
                          <div className="text-xs text-muted-foreground ml-6">{currentPlans.arionPlus.assets.reloadLimit}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Funding</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>{currentPlans.arionPlus.funding.history}</span>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionPlus.funding.collaterize}</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🎯</span>
                            <span>{currentPlans.arionPlus.funding.auto}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🏪</span>
                            <span>{currentPlans.arionPlus.funding.marketplace}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Team</h4>
                        <div className="space-y-1 text-xs">
                          <p>{currentPlans.arionPlus.team}</p>
                          {currentPlans.arionPlus.teamAdditional && (
                            <p className="text-muted-foreground">{currentPlans.arionPlus.teamAdditional}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Integrations</h4>
                        <p className="text-xs">more +20 integrations</p>
                      </div>
                    </div>
                  </div>

                  {/* Arion Enterprise */}
                  <div className="p-6 border-l border-gray-200">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{currentPlans.arionEnterprise.name}</h3>
                      <span className="text-2xl font-bold text-foreground">{currentPlans.arionEnterprise.price}</span>
                      <p className="text-xs text-muted-foreground">{currentPlans.arionEnterprise.description}</p>
                    </div>
                    
                    <Button 
                      className="mb-6 rounded-full bg-[#EFEFF6] hover:bg-[#EFEFF6]/90 text-secondary-foreground px-14"
                      asChild
                    >
                      <Link href="#contact">Get a quote</Link>
                    </Button>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Business</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span>{currentPlans.arionEnterprise.business.locations}</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionEnterprise.business.funding}</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionEnterprise.business.audit}</span>
                            <sup className="text-xs">3</sup>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Assets pay</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>{currentPlans.arionEnterprise.assets.reassignment}</span>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionEnterprise.assets.backed}</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🔄</span>
                            <span>{currentPlans.arionEnterprise.assets.reload}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Funding</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>{currentPlans.arionEnterprise.funding.history}</span>
                          </div>
                          <div className="flex items-center">
                            <span>{currentPlans.arionEnterprise.funding.collaterize}</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🎯</span>
                            <span>{currentPlans.arionEnterprise.funding.fix}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">👥</span>
                            <span>{currentPlans.arionEnterprise.funding.partners}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Team</h4>
                        <p className="text-xs">{currentPlans.arionEnterprise.team}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Closing the books</h4>
                        <div className="flex items-center">
                          <img 
                            src="/API-logo.png" 
                            alt="Arion API Access" 
                            className="w-4 h-4 mr-2"
                          />
                          <span className="text-sm">Arion API Access</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Tap into expertise</h4>
                        <div className="flex items-center">
                          <span className="mr-2 text-xs">👤</span>
                          <span className="text-xs">Dedicated Relationship manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="mt-7 rounded-full bg-[#004F71] hover:bg-[#004F71]/90 text-white px-6"
                asChild
              >
                <Link href="#compare">Compare All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
