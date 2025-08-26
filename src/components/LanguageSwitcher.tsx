'use client';

import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (lng: string) => {
    setCurrentLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('fr')}
        className={`text-xs ${currentLanguage === 'fr' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
      >
        FR
      </Button>
      <span className="text-muted-foreground text-xs">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('en')}
        className={`text-xs ${currentLanguage === 'en' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
