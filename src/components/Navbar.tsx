import React, { useState } from 'react';
import { CURRENCIES } from '../data/brokerData.ts';

interface NavbarProps {
  currentScreen: 'home' | 'hotels' | 'villas' | 'activities' | 'supercars' | 'itinerary';
  onNavigate: (screen: 'home' | 'hotels' | 'villas' | 'activities' | 'supercars' | 'itinerary') => void;
  currency: keyof typeof CURRENCIES;
  onCurrencyChange: (curr: keyof typeof CURRENCIES) => void;
  onOpenConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenConcierge,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#08090e]/90 backdrop-blur-xl border-b border-[#d4af37]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left group transition-transform focus:outline-none"
        >
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1XO5apwujkaYksdsvwT-SR1oxyTIbJRlmKyG7KxYbWFwi7lg9rmCU2aTGLi9rQJzxQgsFMdiXpt-kV0hBAScNwD3RqoNg5yA0EALWsrwLG8D0ldEzrWAFNIPoJWTLrZfJBMfeZQWE0PNNEJY_qquwFiAm2wMzBf1HWz_XQGnlgLlOIU2fBzDYBlDeCGH4Ho3wwf3tI_R_M5IizA3dpLyBGXJ3XJCOQpYQhXfyjCq6G7R9fB9m-w7Oa4xMjL"
            alt="Dubai Booker"
            className="h-10 sm:h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Live Broker Desk Status Indicator (Center Desktop) */}
        <div className="hidden xl:flex items-center">
          <div className="vip-status-pill">
            <span className="pulse-dot"></span>
            <span>BROKER DESK ONLINE &middot; INSTANT CONFIRMATION</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              currentScreen === 'home'
                ? 'text-[#fbe396] bg-[#d4af37]/15 border border-[#d4af37]/30'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('hotels')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              currentScreen === 'hotels'
                ? 'text-[#fbe396] bg-[#d4af37]/15 border border-[#d4af37]/30'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Best Hotels
          </button>
          <button
            onClick={() => onNavigate('villas')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              currentScreen === 'villas'
                ? 'text-[#fbe396] bg-[#d4af37]/15 border border-[#d4af37]/30'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Luxury Villas
          </button>
          <button
            onClick={() => onNavigate('activities')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              currentScreen === 'activities'
                ? 'text-[#fbe396] bg-[#d4af37]/15 border border-[#d4af37]/30'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Activities
          </button>
          <button
            onClick={() => onNavigate('supercars')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              currentScreen === 'supercars'
                ? 'text-[#fbe396] bg-[#d4af37]/15 border border-[#d4af37]/30'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Rent a Car
          </button>
          <button
            onClick={() => onNavigate('itinerary')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              currentScreen === 'itinerary'
                ? 'text-[#fbe396] bg-[#d4af37]/15 border border-[#d4af37]/30'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            VIP Itinerary
          </button>
        </nav>

        {/* Right Actions: Currency Selector, VIP Concierge & Explore CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Currency Selector */}
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as keyof typeof CURRENCIES)}
              aria-label="Select Currency"
              className="bg-[#0f1118] border border-[#d4af37]/30 text-[#fbe396] text-xs font-bold rounded-lg px-2.5 py-1.5 cursor-pointer focus:outline-none focus:border-[#d4af37]"
            >
              {Object.keys(CURRENCIES).map((cur) => (
                <option key={cur} value={cur} className="bg-[#0f1118] text-white">
                  {cur}
                </option>
              ))}
            </select>
          </div>

          {/* VIP Concierge Button */}
          <button
            onClick={onOpenConcierge}
            className="btn-outline-gold hidden sm:inline-flex text-xs px-3.5 py-2 font-medium"
          >
            <i className="fa-solid fa-headset text-[#d4af37]"></i>
            <span>VIP Concierge</span>
          </button>

          {/* Explore Best CTA */}
          <button
            onClick={() => onNavigate('hotels')}
            className="btn-gold-luxury text-xs px-4 py-2 sm:px-5 sm:py-2.5 flex items-center gap-1.5"
          >
            <span>Explore Best</span>
            <i className="fa-solid fa-arrow-right text-[11px]"></i>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e15] border-b border-[#d4af37]/20 px-6 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pb-3 border-b border-neutral-800">
            <div className="vip-status-pill text-[10px]">
              <span className="pulse-dot"></span>
              <span>BROKER DESK ONLINE &middot; 2025 ACTIVE</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left text-xs font-semibold uppercase tracking-wider rounded-lg ${
                currentScreen === 'home' ? 'bg-[#d4af37]/20 text-[#fbe396]' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => { onNavigate('hotels'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left text-xs font-semibold uppercase tracking-wider rounded-lg ${
                currentScreen === 'hotels' ? 'bg-[#d4af37]/20 text-[#fbe396]' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              Best Hotels
            </button>
            <button
              onClick={() => { onNavigate('villas'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left text-xs font-semibold uppercase tracking-wider rounded-lg ${
                currentScreen === 'villas' ? 'bg-[#d4af37]/20 text-[#fbe396]' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              Luxury Villas
            </button>
            <button
              onClick={() => { onNavigate('activities'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left text-xs font-semibold uppercase tracking-wider rounded-lg ${
                currentScreen === 'activities' ? 'bg-[#d4af37]/20 text-[#fbe396]' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              Activities & Yachts
            </button>
            <button
              onClick={() => { onNavigate('supercars'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left text-xs font-semibold uppercase tracking-wider rounded-lg ${
                currentScreen === 'supercars' ? 'bg-[#d4af37]/20 text-[#fbe396]' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              Rent a Car
            </button>
            <button
              onClick={() => { onNavigate('itinerary'); setMobileMenuOpen(false); }}
              className={`p-2.5 text-left text-xs font-semibold uppercase tracking-wider rounded-lg ${
                currentScreen === 'itinerary' ? 'bg-[#d4af37]/20 text-[#fbe396]' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              VIP Itinerary
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => { onOpenConcierge(); setMobileMenuOpen(false); }}
              className="w-full btn-outline-gold text-xs py-2.5"
            >
              <i className="fa-solid fa-headset text-[#d4af37]"></i>
              <span>Connect With VIP Broker</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
