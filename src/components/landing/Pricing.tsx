import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="page-container">
        <div className="max-w-5xl mx-auto px-6 py-2">
          {/* Carte gris claire derrière les 3 plans */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Arion One - Background style */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Arion One</h3>
                  <span className="text-2xl font-bold text-foreground">$99</span>
                  <span className="text-sm text-muted-foreground">/ Month</span>
                  <p className="text-xs text-muted-foreground">
                    Powerful assets backed finance essentials.
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
                        <span>Manage one location site</span>
                        <sup className="text-xs">1</sup>
                      </div>
                      <div className="flex items-center">
                        <span>Manage one funding account</span>
                        <sup className="text-xs">2</sup>
                      </div>
                      <div className="flex items-center">
                        <span>Audit on request</span>
                        <sup className="text-xs">3</sup>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Assets pay</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">∞</span>
                        <span>Unlimited assets reassignment</span>
                      </div>
                      <div className="flex items-center">
                        <span>Manage one assets backed</span>
                        <sup className="text-xs">1</sup>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Funding</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">∞</span>
                        <span>Unlimited transactions history</span>
                      </div>
                      <div className="flex items-center">
                        <span>Collaterize one funding</span>
                        <sup className="text-xs">2</sup>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Team</h4>
                    <p className="text-xs">up to 3 users/month</p>
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
                      <h3 className="text-lg font-semibold text-foreground mb-2">Arion Plus</h3>
                      <span className="text-2xl font-bold text-foreground">$299</span>
                      <span className="text-sm text-muted-foreground">/ Month</span>
                      <p className="text-xs text-muted-foreground">Everything Arion One offers, with more assets and funding enhancement.</p>
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
                            <span>Manage up to 3 location sites</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span>Manage up to 3 funding account</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span>Up to 4 audit/year</span>
                            <sup className="text-xs">3</sup>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Assets pay</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>Unlimited assets reassignment</span>
                          </div>
                          <div className="flex items-center">
                            <span>Manage up to 5 assets backed</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🔄</span>
                            <span>Auto Supplier Reload</span>
                          </div>
                          <div className="text-xs text-muted-foreground ml-6">up to 10 payments / month</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Funding</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>Unlimited transaction history</span>
                          </div>
                          <div className="flex items-center">
                            <span>Collaterize up to 5 funding</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🎯</span>
                            <span>Auto Funding</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🏪</span>
                            <span>Funding Marketplace</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Team</h4>
                        <div className="space-y-1 text-xs">
                          <p>up to 5 users/month</p>
                          <p className="text-muted-foreground">+ $5/additional active user</p>
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
                      <h3 className="text-lg font-semibold text-foreground mb-2">Arion Enterprise</h3>
                      <span className="text-2xl font-bold text-foreground">Custom</span>
                      <p className="text-xs text-muted-foreground">Everything Arion Plus offers, with custom workflows and dedicated support.</p>
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
                            <span>Custom location sites</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span>Custom funding account</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span>Custom audit/year</span>
                            <sup className="text-xs">3</sup>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Assets pay</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>Unlimited assets reassignment</span>
                          </div>
                          <div className="flex items-center">
                            <span>Manage custom assets backed</span>
                            <sup className="text-xs">1</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🔄</span>
                            <span>Custom Auto Supplier Reload</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Funding</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">∞</span>
                            <span>Unlimited transaction history</span>
                          </div>
                          <div className="flex items-center">
                            <span>Custom Collaterize funding</span>
                            <sup className="text-xs">2</sup>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🎯</span>
                            <span>Fix Funding</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">👥</span>
                            <span>Funding dedicated partners</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Team</h4>
                        <p className="text-xs">Unlimited users/month</p>
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
