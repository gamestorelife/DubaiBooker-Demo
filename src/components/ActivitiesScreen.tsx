import React from 'react';
import { ACTIVITIES_DATA, Activity, CURRENCIES } from '../data/brokerData.ts';

interface ActivitiesScreenProps {
  currency: keyof typeof CURRENCIES;
  onSelectActivity: (activity: Activity) => void;
  onBackToOverview: () => void;
}

export const ActivitiesScreen: React.FC<ActivitiesScreenProps> = ({
  currency,
  onSelectActivity,
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
          <span>EXCLUSIVE EXPEDITIONS ONLY</span>
        </div>
      </div>

      {/* Screen Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="vip-status-pill mb-3">MARINE, AVIATION &amp; DESERT</div>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-4">
          VIP Activities &amp; Private Megayachts
        </h1>
        <p className="text-sm sm:text-base text-[#9da3b4] leading-relaxed">
          From multi-deck Italian superyacht charters around the Palm to private VIP helicopter skyline transfers and royal desert conservation camps with master falconers.
        </p>
      </div>

      {/* Grid of Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACTIVITIES_DATA.map((activity) => {
          const brokerRate = Math.round(activity.brokerRateAed * curr.rate);
          const retailRate = Math.round(activity.retailRateAed * curr.rate);
          const savings = retailRate - brokerRate;

          return (
            <div
              key={activity.id}
              className="bg-gradient-to-b from-[#141724]/90 to-[#0d0f17]/95 border border-[#d4af37]/25 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-[#d4af37]/60 hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#fbe396] uppercase">
                  {activity.tag}
                </div>

                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-semibold text-white">
                  <i className="fa-solid fa-clock text-[#fbe396] me-1"></i>
                  <span>{activity.duration}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                    {activity.category}
                  </div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                    {activity.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs font-semibold text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 mb-4">
                    <i className="fa-solid fa-users text-[#d4af37] me-1.5"></i>
                    <span>Capacity: {activity.capacity}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {activity.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] uppercase tracking-wider text-[#fbe396] font-semibold mb-2">
                      Experience Inclusions
                    </div>
                    {activity.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <i className="fa-solid fa-check text-[#d4af37] text-[11px]"></i>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                      Direct Broker Experience Rate
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-cinzel text-2xl font-bold gold-gradient-text tabular-nums">
                        {curr.symbol} {brokerRate.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-500 line-through">
                      Standard: {curr.symbol} {retailRate.toLocaleString()} (Save {curr.symbol} {savings.toLocaleString()})
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectActivity(activity)}
                    className="btn-gold-luxury px-6 py-3 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <span>Reserve Charter</span>
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
