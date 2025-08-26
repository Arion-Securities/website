'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Arion Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-foreground">Arion</span>
      </div>
      
      {/* Centered Pricing Button - au centre de l'écran */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="#pricing">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors rounded-full">
            Pricing
          </Button>
        </Link>
      </div>
      
      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <Button variant="ghost" asChild className="rounded-full">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild className="rounded-full bg-[#004F71] hover:bg-[#004F71]/90 text-white">
          <Link href="#contact">Contact Sales</Link>
        </Button>
      </div>
    </header>
  );
}
