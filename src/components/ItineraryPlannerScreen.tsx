import React, { useState } from 'react';
import { HOTELS_DATA, VILLAS_DATA, SUPERCARS_DATA, ACTIVITIES_DATA, CURRENCIES } from '../data/brokerData.ts';

interface ItineraryPlannerScreenProps {
  currency: keyof typeof CURRENCIES;
  onBackToOverview: () => void;
  onOpenConcierge: () => void;
}

export const ItineraryPlannerScreen: React.FC<ItineraryPlannerScreenProps> = ({
  currency,
  onBackToOverview,
}) => {
  const curr = CURRENCIES[currency];

  // Accommodation selection
  const [selectedAccommType, setSelectedAccommType] = useState<'hotel' | 'villa'>('hotel');
  const [selectedAccommId, setSelectedAccommId] = useState<string>(HOTELS_DATA[0].id);
  const [nights, setNights] = useState<number>(4);

  // Supercar selection
  const [selectedCarId, setSelectedCarId] = useState<string>(SUPERCARS_DATA[0].id);
  const [carDays, setCarDays] = useState<number>(3);
  const [includeCar, setIncludeCar] = useState<boolean>(true);

  // Activities selection
  const [selectedActivities, setSelectedActivities] = useState<string[]>([ACTIVITIES_DATA[0].id]);

  // Submission state
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [itineraryCode, setItineraryCode] = useState('');

  // Find selected items
  const currentAccomm = selectedAccommType === 'hotel'
    ? HOTELS_DATA.find((h) => h.id === selectedAccommId) || HOTELS_DATA[0]
    : VILLAS_DATA.find((v) => v.id === selectedAccommId) || VILLAS_DATA[0];

  const currentCar = SUPERCARS_DATA.find((c) => c.id === selectedCarId) || SUPERCARS_DATA[0];

  const currentActivities = ACTIVITIES_DATA.filter((a) => selectedActivities.includes(a.id));

  // Calculations
  const accommBrokerTotalAed = currentAccomm.brokerRateAed * nights;
  const accommRetailTotalAed = currentAccomm.retailRateAed * nights;

  const carBrokerTotalAed = includeCar ? currentCar.brokerRateDayAed * carDays : 0;
  const carRetailTotalAed = includeCar ? currentCar.retailRateDayAed * carDays : 0;

  const activitiesBrokerTotalAed = currentActivities.reduce((acc, act) => acc + act.brokerRateAed, 0);
  const activitiesRetailTotalAed = currentActivities.reduce((acc, act) => acc + act.retailRateAed, 0);

  const totalBrokerAed = accommBrokerTotalAed + carBrokerTotalAed + activitiesBrokerTotalAed;
  const totalRetailAed = accommRetailTotalAed + carRetailTotalAed + activitiesRetailTotalAed;
  const totalSavingsAed = totalRetailAed - totalBrokerAed;

  const totalBrokerConverted = Math.round(totalBrokerAed * curr.rate);
  const totalRetailConverted = Math.round(totalRetailAed * curr.rate);
  const totalSavingsConverted = Math.round(totalSavingsAed * curr.rate);

  const toggleActivity = (id: string) => {
    if (selectedActivities.includes(id)) {
      setSelectedActivities(selectedActivities.filter((a) => a !== id));
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  const handleLockQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `DXB-ITIN-${Math.floor(1000 + Math.random() * 9000)}`;
    setItineraryCode(code);
    setIsLocked(true);
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Breadcrumbs */}
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
          <span>LIVE ITINERARY CALCULATOR</span>
        </div>
      </div>

      {/* Screen Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="vip-status-pill mb-3">CUSTOM LUXURY ITINERARY</div>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-4">
          VIP Itinerary &amp; Broker Rate Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#9da3b4] leading-relaxed">
          Bundle your presidential suite, private waterfront villa, exotic supercars, and megayacht charters to calculate direct broker savings versus retail rack rates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Itinerary Builder Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Accommodation */}
          <div className="bg-[#121520] border border-[#d4af37]/25 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#d4af37]/20 text-[#fbe396] font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="font-playfair text-xl font-bold text-white">Select Accommodation</h3>
              </div>
              <div className="flex bg-neutral-900 rounded-lg p-1 border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => { setSelectedAccommType('hotel'); setSelectedAccommId(HOTELS_DATA[0].id); }}
                  className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                    selectedAccommType === 'hotel' ? 'bg-[#d4af37] text-black' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Hotels &amp; Suites
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedAccommType('villa'); setSelectedAccommId(VILLAS_DATA[0].id); }}
                  className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                    selectedAccommType === 'villa' ? 'bg-[#d4af37] text-black' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Waterfront Villas
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-neutral-300">Choose Property</label>
              <select
                value={selectedAccommId}
                onChange={(e) => setSelectedAccommId(e.target.value)}
                className="w-full bg-[#090b12] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              >
                {selectedAccommType === 'hotel'
                  ? HOTELS_DATA.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.name} — {h.suiteType} ({curr.symbol} {Math.round(h.brokerRateAed * curr.rate).toLocaleString()}/nt)
                      </option>
                    ))
                  : VILLAS_DATA.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} — {v.bedrooms} Bed ({curr.symbol} {Math.round(v.brokerRateAed * curr.rate).toLocaleString()}/nt)
                      </option>
                    ))}
              </select>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-neutral-400">Length of Stay:</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setNights(Math.max(1, nights - 1))}
                    className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold hover:bg-neutral-700"
                  >
                    -
                  </button>
                  <span className="font-cinzel text-lg font-bold text-[#fbe396]">{nights} Nights</span>
                  <button
                    type="button"
                    onClick={() => setNights(nights + 1)}
                    className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold hover:bg-neutral-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Supercar Fleet */}
          <div className="bg-[#121520] border border-[#d4af37]/25 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#d4af37]/20 text-[#fbe396] font-bold text-xs flex items-center justify-center">2</span>
                <h3 className="font-playfair text-xl font-bold text-white">Supercar or Chauffeur</h3>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-neutral-300">
                <input
                  type="checkbox"
                  checked={includeCar}
                  onChange={(e) => setIncludeCar(e.target.checked)}
                  className="rounded text-[#d4af37] focus:ring-0 w-4 h-4"
                />
                <span>Include Vehicle</span>
              </label>
            </div>

            {includeCar && (
              <div className="space-y-3">
                <select
                  value={selectedCarId}
                  onChange={(e) => setSelectedCarId(e.target.value)}
                  className="w-full bg-[#090b12] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {SUPERCARS_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.make} {c.model} ({c.horsepower} HP) — {curr.symbol} {Math.round(c.brokerRateDayAed * curr.rate).toLocaleString()}/day
                    </option>
                  ))}
                </select>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-neutral-400">Duration:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCarDays(Math.max(1, carDays - 1))}
                      className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold hover:bg-neutral-700"
                    >
                      -
                    </button>
                    <span className="font-cinzel text-lg font-bold text-[#fbe396]">{carDays} Days</span>
                    <button
                      type="button"
                      onClick={() => setCarDays(carDays + 1)}
                      className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold hover:bg-neutral-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 3: Activities & Charters */}
          <div className="bg-[#121520] border border-[#d4af37]/25 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#d4af37]/20 text-[#fbe396] font-bold text-xs flex items-center justify-center">3</span>
              <h3 className="font-playfair text-xl font-bold text-white">VIP Activities &amp; Charters</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACTIVITIES_DATA.map((act) => {
                const isSelected = selectedActivities.includes(act.id);
                return (
                  <div
                    key={act.id}
                    onClick={() => toggleActivity(act.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#d4af37]/15 border-[#d4af37] text-white shadow-md'
                        : 'bg-[#090b12] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#fbe396]">{act.category}</span>
                      <i className={`fa-solid ${isSelected ? 'fa-circle-check text-[#e5be4a]' : 'fa-circle text-neutral-700'} text-sm`}></i>
                    </div>
                    <div className="text-xs font-semibold text-white mb-1 line-clamp-1">
                      {act.title}
                    </div>
                    <div className="text-xs font-mono text-neutral-300">
                      {curr.symbol} {Math.round(act.brokerRateAed * curr.rate).toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Live Cost Breakdown & Quote Lock */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-[#10131c] border border-[#d4af37]/35 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">Itinerary Summary</div>
                <h3 className="font-playfair text-2xl font-bold text-white">Direct Broker Docket</h3>
              </div>
              <span className="vip-status-pill text-[10px]">
                <span className="pulse-dot"></span>
                LIVE QUOTE
              </span>
            </div>

            {!isLocked ? (
              <div>
                {/* Cost Items */}
                <div className="space-y-3 text-xs mb-6 pb-6 border-b border-neutral-800">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">
                      {currentAccomm.name} ({nights} nights)
                    </span>
                    <span className="font-mono text-white">
                      {curr.symbol} {Math.round(accommBrokerTotalAed * curr.rate).toLocaleString()}
                    </span>
                  </div>

                  {includeCar && (
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-300">
                        {currentCar.make} {currentCar.model} ({carDays} days)
                      </span>
                      <span className="font-mono text-white">
                        {curr.symbol} {Math.round(carBrokerTotalAed * curr.rate).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {currentActivities.map((act) => (
                    <div key={act.id} className="flex justify-between items-center">
                      <span className="text-neutral-300 line-clamp-1 mr-2">{act.title}</span>
                      <span className="font-mono text-white shrink-0">
                        {curr.symbol} {Math.round(act.brokerRateAed * curr.rate).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center text-xs text-neutral-400">
                    <span>Retail OTA Rack Rate:</span>
                    <span className="line-through font-mono">
                      {curr.symbol} {totalRetailConverted.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-white">Direct Broker Total:</span>
                    <span className="font-cinzel text-2xl font-bold gold-gradient-text tabular-nums">
                      {curr.symbol} {totalBrokerConverted.toLocaleString()}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-bold text-[#25d366]">
                    <span>Total Direct Savings:</span>
                    <span>Save {curr.symbol} {totalSavingsConverted.toLocaleString()}</span>
                  </div>
                </div>

                {/* Lock Form */}
                <form onSubmit={handleLockQuote} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Lead Guest Full Name"
                      className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="WhatsApp Hotline Number (+...)"
                      className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-gold-luxury py-3.5 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-lock text-xs"></i>
                    <span>Lock In Guaranteed Quote</span>
                  </button>
                </form>
              </div>
            ) : (
              /* Success Locked State */
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-[#25d366]/20 border border-[#25d366] mx-auto flex items-center justify-center text-[#25d366] text-2xl mb-3">
                  <i className="fa-solid fa-check"></i>
                </div>

                <div className="vip-status-pill text-[10px] mb-2">
                  <span>DOCKET #{itineraryCode}</span>
                </div>

                <h4 className="font-playfair text-xl font-bold text-white mb-2">
                  Broker Rate Guaranteed
                </h4>

                <p className="text-xs text-neutral-300 mb-5">
                  Your customized Dubai VIP itinerary has been reserved for <strong className="text-white">{clientName}</strong>. Total broker rate: <strong className="text-[#fbe396]">{curr.symbol} {totalBrokerConverted.toLocaleString()}</strong>.
                </p>

                <div className="space-y-2">
                  <a
                    href={`https://api.whatsapp.com/send?phone=971500000000&text=${encodeURIComponent(
                      `Hello Dubai Booker Concierge, I have locked customized Itinerary [${itineraryCode}] for ${clientName}.\nTotal Broker Price: ${curr.symbol} ${totalBrokerConverted.toLocaleString()}\nAccomm: ${currentAccomm.name} (${nights} nights)\nVehicle: ${includeCar ? currentCar.make + ' ' + currentCar.model : 'None'}\n\nPlease dispatch senior broker.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>Forward Docket To WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setIsLocked(false)}
                    className="w-full btn-outline-gold text-xs py-2.5"
                  >
                    <span>Edit Itinerary Details</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
