import React from 'react';
import { VILLAS_DATA, Villa, CURRENCIES } from '../data/brokerData.ts';

interface VillasScreenProps {
  currency: keyof typeof CURRENCIES;
  onSelectVilla: (villa: Villa) => void;
  onBackToOverview: () => void;
}

export const VillasScreen: React.FC<VillasScreenProps> = ({
  currency,
  onSelectVilla,
  onBackToOverview,
}) => {
  const curr = CURRENCIES[currency];

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Breadcrumb & Return Button */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBackToOverview}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#fbe396] hover:text-white transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Return to Gateway</span>
        </button>

        <div className="vip-status-pill text-[10px]">
          <span className="pulse-dot"></span>
          <span>100% PRIVATE WATERFRONT ALLOCATION</span>
        </div>
      </div>

      {/* Screen Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="vip-status-pill mb-3">PRIVATE POOL &amp; BEACH MANSIONS</div>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-4">
          Luxury Waterfront Villas &amp; Estates
        </h1>
        <p className="text-sm sm:text-base text-[#9da3b4] leading-relaxed">
          Palm Jumeirah beachfront mansions, Emirates Hills royal compounds, and private serviced residences staffed with personal executive chefs, chauffeurs, and butlers.
        </p>
      </div>

      {/* Villas Grid */}
      <div className="space-y-10">
        {VILLAS_DATA.map((villa) => {
          const brokerRate = Math.round(villa.brokerRateAed * curr.rate);
          const retailRate = Math.round(villa.retailRateAed * curr.rate);
          const savings = retailRate - brokerRate;

          return (
            <div
              key={villa.id}
              className="bg-gradient-to-r from-[#141724]/90 to-[#0e1019]/95 border border-[#d4af37]/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 group hover:border-[#d4af37]/60 transition-all"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#fbe396] uppercase">
                  {villa.tag}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                    {villa.location}
                  </div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                    {villa.name}
                  </h3>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Property Specs Pill Bar */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-[11px] uppercase text-neutral-400 font-semibold">Bedrooms</div>
                      <div className="font-cinzel text-lg sm:text-xl font-bold text-[#fbe396]">
                        {villa.bedrooms} Master Suites
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-[11px] uppercase text-neutral-400 font-semibold">Capacity</div>
                      <div className="font-cinzel text-lg sm:text-xl font-bold text-[#fbe396]">
                        {villa.guests} VIP Guests
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-[11px] uppercase text-neutral-400 font-semibold">Baths</div>
                      <div className="font-cinzel text-lg sm:text-xl font-bold text-[#fbe396]">
                        {villa.bathrooms} Marble Baths
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {villa.description}
                  </p>

                  <div className="space-y-2 text-xs text-neutral-300 mb-6 bg-black/30 p-4 rounded-xl border border-white/5">
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-water text-[#d4af37] mt-0.5"></i>
                      <span><strong>Waterfront / Beach:</strong> {villa.beachFront}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-users-line text-[#d4af37] mt-0.5"></i>
                      <span><strong>Included Staff:</strong> {villa.staff}</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 mb-6">
                    {villa.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <i className="fa-solid fa-circle-check text-[#d4af37] text-[11px]"></i>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                      Direct Broker Villa Rate
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text tabular-nums">
                        {curr.symbol} {brokerRate.toLocaleString()}
                      </span>
                      <span className="text-xs text-neutral-400">/ night</span>
                    </div>
                    <div className="text-[11px] text-neutral-500 line-through">
                      Standard Agency: {curr.symbol} {retailRate.toLocaleString()} (Save {curr.symbol} {savings.toLocaleString()})
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectVilla(villa)}
                    className="btn-gold-luxury px-6 py-3 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <span>Reserve Private Villa</span>
                    <i className="fa-solid fa-arrow-right text-[11px]"></i>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
