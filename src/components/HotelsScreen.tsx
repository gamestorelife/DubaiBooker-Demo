import React, { useState } from 'react';
import { HOTELS_DATA, Hotel, CURRENCIES } from '../data/brokerData.ts';

interface HotelsScreenProps {
  currency: keyof typeof CURRENCIES;
  onSelectHotel: (hotel: Hotel) => void;
  onBackToOverview: () => void;
}

export const HotelsScreen: React.FC<HotelsScreenProps> = ({
  currency,
  onSelectHotel,
  onBackToOverview,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const curr = CURRENCIES[currency];

  const locations = [
    { id: 'all', label: 'All Prestigious Suites' },
    { id: 'palm', label: 'Palm Jumeirah' },
    { id: 'downtown', label: 'Downtown & Burj Khalifa' },
    { id: 'jumeira', label: 'Jumeirah Bay Island' },
  ];

  const filteredHotels = HOTELS_DATA.filter((hotel) => {
    if (filter === 'all') return true;
    if (filter === 'palm') return hotel.location.toLowerCase().includes('palm');
    if (filter === 'downtown') return hotel.location.toLowerCase().includes('downtown') || hotel.location.toLowerCase().includes('za’abeel');
    if (filter === 'jumeira') return hotel.location.toLowerCase().includes('jumeira');
    return true;
  });

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
          <span>500+ VERIFIED HOTELS ALLOCATED</span>
        </div>
      </div>

      {/* Screen Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="vip-status-pill mb-3">5-STAR ELITE SUITES</div>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-4">
          Best Luxury Hotels &amp; Penthouse Suites
        </h1>
        <p className="text-sm sm:text-base text-[#9da3b4] leading-relaxed">
          Unlock certified direct broker rates at Dubai’s most guarded hotel presidential suites, private sky mansions, and beachfront resorts. Zero online agency surcharges.
        </p>
      </div>

      {/* Location Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setFilter(loc.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filter === loc.id
                ? 'bg-[#d4af37] text-neutral-950 shadow-md font-bold'
                : 'bg-[#121520] border border-[#d4af37]/20 text-neutral-300 hover:text-white hover:border-[#d4af37]/50'
            }`}
          >
            {loc.label}
          </button>
        ))}
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredHotels.map((hotel) => {
          const brokerRate = Math.round(hotel.brokerRateAed * curr.rate);
          const retailRate = Math.round(hotel.retailRateAed * curr.rate);
          const savings = retailRate - brokerRate;

          return (
            <div
              key={hotel.id}
              className="bg-gradient-to-b from-[#141724]/90 to-[#0d0f17]/95 border border-[#d4af37]/25 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-[#d4af37]/60 hover:-translate-y-1 flex flex-col group"
            >
              {/* Hotel Imagery Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-black/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#fbe396] uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-crown text-[10px] text-[#e5be4a]"></i>
                  <span>{hotel.tag}</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-semibold text-white flex items-center gap-1">
                  <span className="text-[#fbe396]">★</span>
                  <span>{hotel.rating}</span>
                  <span className="text-neutral-400 text-[10px]">({hotel.reviewsCount})</span>
                </div>

                {/* Title Overlay at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                    {hotel.location}
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    {hotel.name}
                  </h3>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {hotel.suiteType}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {hotel.squareMeters} m² / {Math.round(hotel.squareMeters * 10.764)} sq ft
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {hotel.description}
                  </p>

                  {/* VIP Perks */}
                  <div className="mb-6">
                    <div className="text-[11px] uppercase tracking-wider text-[#fbe396] font-semibold mb-2 flex items-center gap-1.5">
                      <i className="fa-solid fa-gem text-[10px]"></i>
                      <span>Complimentary Direct Broker Perks</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {hotel.perks.map((perk, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <i className="fa-solid fa-circle-check text-[#d4af37] text-[11px] shrink-0"></i>
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA Action */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                      Direct Broker Rate
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text tabular-nums">
                        {curr.symbol} {brokerRate.toLocaleString()}
                      </span>
                      <span className="text-xs text-neutral-400">/ night</span>
                    </div>
                    <div className="text-[11px] text-neutral-500 line-through">
                      Retail Rack: {curr.symbol} {retailRate.toLocaleString()} (Save {curr.symbol} {savings.toLocaleString()})
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectHotel(hotel)}
                    className="btn-gold-luxury px-6 py-3 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <span>Reserve via Broker</span>
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
