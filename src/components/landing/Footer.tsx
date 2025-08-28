import Link from 'next/link';
import { Button } from '@/components/ui/button';

const footerLinks = {
  products: [
    { name: 'Product', href: '#features' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Integrations', href: '#integrations' }
  ],
  resources: [
    { name: 'About us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]
};

export function Footer() {
  return (
    <>
      {/* Premier Footer - 1099px de hauteur */}
      <footer className="bg-muted/50 border-t h-[1099px] flex items-center">
        <div className="page-container py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo & Company */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="Arion Logo" className="h-8 w-8" />
                <span className="font-bold text-xl text-foreground">Arion</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Simplifying asset-backed finance for modern businesses.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/signup">Get started</Link>
              </Button>
            </div>

            {/* Column 2: Products */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Produits</h3>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Ressources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Légal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Arion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Deuxième Footer (Footnotes) - 1300px de hauteur */}
      <footer className="bg-background border-t h-[1300px] flex items-center">
        <div className="page-container py-16 w-full">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Footnotes
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Section footnotes avec une hauteur de 1300px pour le contenu supplémentaire.
            </p>
            {/* Vous pouvez ajouter ici le contenu des footnotes */}
          </div>
        </div>
      </footer>
    </>
  );
}
