import React, { useState } from 'react';
import { CURRENCIES } from '../data/brokerData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    category: string;
    brokerRateAed: number;
    retailRateAed: number;
    image: string;
    location?: string;
  } | null;
  currency: keyof typeof CURRENCIES;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  item,
  currency,
}) => {
  const [dates, setDates] = useState({ checkIn: '2025-11-15', checkOut: '2025-11-20' });
  const [guests, setGuests] = useState('2 Guests');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen || !item) return null;

  const curr = CURRENCIES[currency];
  const brokerRate = Math.round(item.brokerRateAed * curr.rate);
  const retailRate = Math.round(item.retailRateAed * curr.rate);
  const savings = retailRate - brokerRate;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `DXB-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0f1118] border border-[#d4af37]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {!confirmed ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="vip-status-pill text-[10px]">
                <span className="pulse-dot"></span>
                DIRECT BROKER ALLOCATION
              </span>
            </div>

            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-1">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              {item.location ? `${item.location} · ` : ''}{item.category}
            </p>

            {/* Price Guarantee Card */}
            <div className="bg-[#141722] border border-[#d4af37]/30 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  Guaranteed Certified Broker Rate
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text tabular-nums">
                    {curr.symbol} {brokerRate.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400">/ night</span>
                </div>
              </div>

              <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-neutral-700 pt-3 sm:pt-0 sm:pl-5">
                <div className="text-xs text-neutral-500 line-through tabular-nums">
                  Retail Rack Rate: {curr.symbol} {retailRate.toLocaleString()}
                </div>
                <div className="text-xs font-bold text-[#25d366] flex items-center gap-1">
                  <i className="fa-solid fa-arrow-down"></i>
                  <span>Save {curr.symbol} {savings.toLocaleString()} (Zero Markup)</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleConfirm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={dates.checkIn}
                    onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                    className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={dates.checkOut}
                    onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                    className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Sheikh / Lord / Mr. Jane Doe"
                    className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Guest Count &amp; Chauffeur Requirements
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="1 Guest">1 VIP Guest</option>
                  <option value="2 Guests">2 VIP Guests</option>
                  <option value="3-4 Guests">3 - 4 Guests (Family Suite)</option>
                  <option value="5-8 Guests">5 - 8 Guests (Private Floor / Villa)</option>
                  <option value="10+ Delegation">10+ Guests (Royal Delegation / Full Buyout)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Special Arrangements &amp; Requests
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Helipad transfer, specific champagne brand, personal security detail..."
                  className="w-full bg-[#080a10] border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold-luxury py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-lock text-xs"></i>
                  <span>Lock In Broker Allocation Now</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#25d366]/20 border border-[#25d366] mx-auto flex items-center justify-center text-[#25d366] text-3xl mb-4">
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="vip-status-pill text-[10px] mb-2">
              <span className="pulse-dot"></span>
              <span>BROKER RESERVATION LOCKED</span>
            </div>

            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
              VIP Reservation Reserved
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6 max-w-md mx-auto">
              Your direct broker rate for <strong className="text-[#fbe396]">{item.name}</strong> has been secured under reference code <strong className="font-mono text-white">{bookingRef}</strong>.
            </p>

            <div className="bg-[#121522] rounded-2xl p-4 text-left border border-white/5 space-y-2 text-xs mb-6 max-w-md mx-auto">
              <div className="flex justify-between text-neutral-400">
                <span>Client Name:</span>
                <span className="text-white font-semibold">{clientName}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Dates:</span>
                <span className="text-white font-semibold">{dates.checkIn} to {dates.checkOut}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Direct Broker Total:</span>
                <span className="font-cinzel text-[#fbe396] font-bold">
                  {curr.symbol} {brokerRate.toLocaleString()} / night
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Guaranteed Savings:</span>
                <span className="text-[#25d366] font-bold">
                  {curr.symbol} {savings.toLocaleString()} / night
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <a
                href={`https://api.whatsapp.com/send?phone=971500000000&text=${encodeURIComponent(`Hello Dubai Booker, my reservation ref is ${bookingRef} for ${item.name}. My name is ${clientName}. Please send the formal broker confirmation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="btn-outline-gold text-xs py-3 px-4"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
