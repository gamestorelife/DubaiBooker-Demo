import React from 'react';

interface HeroProps {
  onExploreBookings: () => void;
  onScrollToCategories: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreBookings,
  onScrollToCategories,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      
      {/* Background Skyline Visual & Luxury Overlays */}
      <div className="absolute top-0 left-0 w-full h-[980px] pointer-events-none z-0 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ4EHt77XVInSYZRNQyXMviLB6xhg1Ek4wFcsOfEuiA6XT4BLXghXLYWgm8X-u1s2n_2Rqn1Ux-76eGwSR42dMJXPV9zvIfb1lomichkmUWbL5BH98SBZJjiwnKXyOFiJB9vm2Q73I6Q73HwUPkRBRp0Y7MHtx0rJtQ45rUyZH7pOmLe40qA_jDoMAr4G9zzrU18S6YSX2Cyvc-94KOnuRL2Ix5Zi_sHMG4xm51LH1-FapMoKj5ILHaA"
          alt="Dubai Night Skyline"
          className="w-full h-full object-cover object-top brightness-[0.40] contrast-[1.18] scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Radial Darkening and Gold Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.12)_0%,rgba(7,8,12,0.65)_50%,rgba(7,8,12,0.98)_95%)]" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#07080c]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        
        {/* Urgent Live Banner */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#d4af37]/15 via-[#d4af37]/5 to-[#d4af37]/15 border border-[#d4af37]/30 rounded-xl px-3 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 backdrop-blur-md shadow-lg shadow-black/40">
          <i className="fa-solid fa-crown text-[#e5be4a] text-xs sm:text-sm"></i>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-100 uppercase">
            Exclusive Dubai Portal &bull; Direct Broker Rates With Zero Surcharges
          </span>
          <span className="bg-[#e5be4a] text-neutral-950 text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded tracking-wide uppercase">
            2025 Access
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase">
          Welcome To <span className="gold-gradient-text">Dubai</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#cbd3e1] font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          Your elite gateway to prime penthouses, ultra-luxury hotels, waterfront villas, supercar rentals, and VIP desert expeditions. Instant access to certified broker rates.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <button
            onClick={onExploreBookings}
            className="w-full sm:w-auto btn-gold-luxury px-8 py-4 sm:px-10 sm:py-4 text-sm sm:text-base font-bold shadow-2xl flex items-center justify-center gap-3 group"
          >
            <i className="fa-solid fa-gem text-[#7a590e] group-hover:scale-110 transition-transform"></i>
            <span>EXPLORE BEST BOOKINGS NOW</span>
            <i className="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>

          <button
            onClick={onScrollToCategories}
            className="w-full sm:w-auto btn-outline-gold px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide"
          >
            <span>View All Broker Categories</span>
          </button>
        </div>

        {/* Broker Trust Proof Metrics Bar */}
        <div className="max-w-4xl mx-auto bg-[#0e111a]/80 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            
            <div className="pt-2 md:pt-0">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold gold-gradient-text mb-1 tabular-nums">
                500+
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#8f95a8] font-semibold">
                Luxury Hotels & Suites
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold gold-gradient-text mb-1 tabular-nums">
                100%
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#8f95a8] font-semibold">
                Direct Broker Rates
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold gold-gradient-text mb-1 tabular-nums">
                24/7
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#8f95a8] font-semibold">
                Dedicated VIP Desk
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold gold-gradient-text mb-1 flex items-center justify-center gap-1 tabular-nums">
                <span>4.98</span>
                <span className="text-xl text-[#fbe396]">★</span>
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#8f95a8] font-semibold">
                Client Satisfaction
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
