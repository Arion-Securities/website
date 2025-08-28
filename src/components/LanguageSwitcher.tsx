'use client';

import { Button } from '@/components/ui/button';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    setCurrentLanguage(lng);
    setIsOpen(false);
  };

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors p-2"
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-medium">{currentLanguage.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[80px] z-50">
          <button
            onClick={() => changeLanguage('fr')}
            className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
              currentLanguage === 'fr' ? 'text-primary font-medium bg-blue-50' : 'text-gray-700'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
              currentLanguage === 'en' ? 'text-primary font-medium bg-blue-50' : 'text-gray-700'
            }`}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
