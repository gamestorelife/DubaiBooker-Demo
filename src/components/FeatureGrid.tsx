import React from 'react';

interface FeatureGridProps {
  onSelectCategory: (category: 'hotels' | 'villas' | 'activities' | 'supercars') => void;
  onOpenPortal: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  onSelectCategory,
  onOpenPortal,
}) => {
  return (
    <section id="features" className="relative py-12 md:py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="vip-status-pill mb-3">
            <span>CURATED PRIVATE DIRECTORY</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Select Your VIP Experience
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#9da3b4] leading-relaxed">
            Click below for direct access to our verified real-time booking engine and guaranteed broker allocation.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Best Hotels */}
          <div
            onClick={() => onSelectCategory('hotels')}
            className="feature-card group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onSelectCategory('hotels'); }}
          >
            {/* Badge */}
            <div className="absolute top-5 right-5 bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fbe396] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
              <i className="fa-solid fa-star text-[9px] text-[#e5be4a]"></i>
              <span>5-STAR ELITE</span>
            </div>

            {/* Icon Box */}
            <div className="feature-icon-box">
              <i className="fa-solid fa-hotel text-2xl"></i>
            </div>

            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#fbe396] transition-colors">
              Best Hotels
            </h3>
            
            <p className="text-xs sm:text-sm text-[#9da3b4] leading-relaxed mb-6 flex-grow">
              Atlantis The Royal, Burj Al Arab, Armani Hotel & Bulgari Resort suites with complimentary upgrades & VIP check-in.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#d4af37] text-xs font-bold tracking-wider uppercase group-hover:text-[#fbe396]">
              <span>Book Best Hotels</span>
              <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1.5 transition-transform"></i>
            </div>
          </div>

          {/* Card 2: Luxury Villas */}
          <div
            onClick={() => onSelectCategory('villas')}
            className="feature-card group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onSelectCategory('villas'); }}
          >
            {/* Badge */}
            <div className="absolute top-5 right-5 bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fbe396] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
              <i className="fa-solid fa-shield text-[9px] text-[#e5be4a]"></i>
              <span>PRIVATE POOL</span>
            </div>

            {/* Icon Box */}
            <div className="feature-icon-box">
              <i className="fa-solid fa-landmark-dome text-2xl"></i>
            </div>

            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#fbe396] transition-colors">
              Luxury Villas
            </h3>
            
            <p className="text-xs sm:text-sm text-[#9da3b4] leading-relaxed mb-6 flex-grow">
              Palm Jumeirah beachfront mansions, Emirates Hills estates, and private serviced residences with full staff.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#d4af37] text-xs font-bold tracking-wider uppercase group-hover:text-[#fbe396]">
              <span>View Luxury Villas</span>
              <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1.5 transition-transform"></i>
            </div>
          </div>

          {/* Card 3: Activities */}
          <div
            onClick={() => onSelectCategory('activities')}
            className="feature-card group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onSelectCategory('activities'); }}
          >
            {/* Badge */}
            <div className="absolute top-5 right-5 bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fbe396] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
              <i className="fa-solid fa-compass text-[9px] text-[#e5be4a]"></i>
              <span>VIP ACCESS</span>
            </div>

            {/* Icon Box */}
            <div className="feature-icon-box">
              <i className="fa-solid fa-ship text-2xl"></i>
            </div>

            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#fbe396] transition-colors">
              Activities
            </h3>
            
            <p className="text-xs sm:text-sm text-[#9da3b4] leading-relaxed mb-6 flex-grow">
              Private megayacht charters, helicopter tours, dune buggy expeditions, desert safaris, and exclusive nightlife access.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#d4af37] text-xs font-bold tracking-wider uppercase group-hover:text-[#fbe396]">
              <span>Explore Activities</span>
              <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1.5 transition-transform"></i>
            </div>
          </div>

          {/* Card 4: Rent a Car */}
          <div
            onClick={() => onSelectCategory('supercars')}
            className="feature-card group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onSelectCategory('supercars'); }}
          >
            {/* Badge */}
            <div className="absolute top-5 right-5 bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fbe396] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
              <i className="fa-solid fa-bolt text-[9px] text-[#e5be4a]"></i>
              <span>SUPERCAR FLEET</span>
            </div>

            {/* Icon Box */}
            <div className="feature-icon-box">
              <i className="fa-solid fa-car-side text-2xl"></i>
            </div>

            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#fbe396] transition-colors">
              Rent a Car
            </h3>
            
            <p className="text-xs sm:text-sm text-[#9da3b4] leading-relaxed mb-6 flex-grow">
              Rolls-Royce Cullinan, Lamborghini Revuelto, Ferrari Purosangue, and chauffeur-driven Mercedes Maybach.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#d4af37] text-xs font-bold tracking-wider uppercase group-hover:text-[#fbe396]">
              <span>Reserve Supercars</span>
              <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1.5 transition-transform"></i>
            </div>
          </div>

        </div>

        {/* High-Impact Official Broker Shortcut Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl relative overflow-hidden bg-[radial-gradient(ellipse_at_15%_50%,rgba(212,175,55,0.22)_0%,rgba(15,18,28,0.96)_75%)] border border-[#d4af37]/35 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#e5be4a] text-xs font-semibold uppercase tracking-wider mb-2">
                <i className="fa-solid fa-shield-halved"></i>
                <span>Official Broker Shortcut</span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
                Looking for Immediate Reservation & Custom Itinerary?
              </h3>
              <p className="text-sm sm:text-base text-[#b5bccf] leading-relaxed">
                Skip the third-party markups. Connect directly with our live booking engine or contact our dedicated private desk.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenPortal}
                className="btn-gold-luxury px-8 py-4 text-xs sm:text-sm font-bold w-full sm:w-auto flex items-center justify-center gap-3 shadow-xl"
              >
                <span>Go To Bookings Portal</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
