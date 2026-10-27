import React, { useState } from 'react';

interface ConciergeContactProps {
  initialCategory?: string;
}

export const ConciergeContact: React.FC<ConciergeContactProps> = ({
  initialCategory = 'Best Luxury Hotels & Suites',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: initialCategory,
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [assignedBroker, setAssignedBroker] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    // Generate VIP reference
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `DXB-VIP-${randomNum}`;
    setTicketId(ref);

    const brokers = [
      'Tareq Al-Maktoum (Head of Private Acquisitions & Villas)',
      'Sophia Laurent (Senior Superyacht & Aviation Broker)',
      'Zaid Bin Rashid (Executive VIP Hotel & Penthouse Allocation)',
      'Marcus Vance (High-Net-Worth Fleet Logistics)',
    ];
    setAssignedBroker(brokers[Math.floor(Math.random() * brokers.length)]);
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello Dubai Booker Concierge Desk,\n\nI have registered VIP request [${ticketId}]:\n- Name: ${formData.fullName}\n- Category: ${formData.category}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Details: ${formData.specialRequests || 'VIP custom booking request'}\n\nPlease connect me with my assigned broker.`
    );
    window.open(`https://api.whatsapp.com/send?phone=971500000000&text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-12 md:py-20 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#12151f]/95 to-[#0a0c12]/98 border border-[#d4af37]/25 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-black/80 relative overflow-hidden">
          
          {/* Subtle top gold accent glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left Concierge Summary */}
            <div className="md:col-span-5 flex flex-col justify-between md:border-r border-neutral-800 md:pr-8">
              <div>
                <div className="vip-status-pill mb-4">
                  <span>PRIVATE CLIENT DESK</span>
                </div>

                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
                  Connect With a Broker
                </h3>

                <p className="text-xs sm:text-sm text-[#a7adb9] leading-relaxed mb-6">
                  Have custom requirements, high-profile security needs, or multi-week superyacht and villa buyout plans? Our senior brokers respond within 15 minutes.
                </p>

                {/* Headquarters and Direct Info */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/25 flex items-center justify-center text-[#fbe396] shrink-0">
                      <i className="fa-solid fa-location-dot text-base"></i>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Headquarters</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">DIFC Gate Towers, Dubai, UAE</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/25 flex items-center justify-center text-[#fbe396] shrink-0">
                      <i className="fa-solid fa-envelope text-base"></i>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">VIP Inquiries</div>
                      <a href="mailto:vip@dubaibooker.com" className="text-xs sm:text-sm font-semibold text-white hover:text-[#fbe396] transition-colors">
                        vip@dubaibooker.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 flex items-center justify-center text-[#25d366] shrink-0">
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Instant WhatsApp Hotline</div>
                      <a href="https://api.whatsapp.com/send?phone=971500000000" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-white hover:text-[#25d366] transition-colors">
                        +971 4 800 DUBAI (VIP)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Footer */}
              <div className="pt-6 mt-6 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center gap-2">
                <i className="fa-solid fa-lock text-[#e5be4a]"></i>
                <span>Strictly confidential &amp; NDA compliant client management.</span>
              </div>
            </div>

            {/* Right Interactive Form or Success State */}
            <div className="md:col-span-7">
              {!submitted ? (
                <div>
                  <h4 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-2">
                    Direct Concierge Request
                  </h4>
                  <p className="text-xs text-neutral-400 mb-6">
                    Directly routed to the on-duty partner desk for priority verification.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sheikh, Lord, Mr. James"
                          className="w-full bg-[#080a10]/80 border border-[#d4af37]/25 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full bg-[#080a10]/80 border border-[#d4af37]/25 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full bg-[#080a10]/80 border border-[#d4af37]/25 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Category of Interest
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        aria-label="Category of Interest"
                        className="w-full bg-[#080a10] border border-[#d4af37]/25 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40 cursor-pointer transition-all"
                      >
                        <option value="Best Luxury Hotels & Suites">Best Luxury Hotels & Suites</option>
                        <option value="Exclusive Palm Jumeirah Villas">Exclusive Palm Jumeirah Villas</option>
                        <option value="Private Supercar Fleet Rental">Private Supercar Fleet Rental</option>
                        <option value="VIP Yacht & Desert Expeditions">VIP Yacht & Desert Expeditions</option>
                        <option value="All-Inclusive Executive Package">All-Inclusive Executive Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Special Requests / Dates
                      </label>
                      <textarea
                        rows={3}
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        placeholder="Specify your desired dates, party size, and preferred amenities..."
                        className="w-full bg-[#080a10]/80 border border-[#d4af37]/25 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40 resize-none transition-all"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full btn-gold-luxury py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xl"
                      >
                        <span>SUBMIT REQUEST TO VIP BROKER</span>
                        <i className="fa-solid fa-paper-plane text-xs"></i>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* High-Ticket Allocation Confirmation State */
                <div className="bg-[#0a0d16] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] mx-auto flex items-center justify-center text-[#e5be4a] text-2xl mb-4">
                    <i className="fa-solid fa-check-double"></i>
                  </div>

                  <div className="vip-status-pill text-[10px] mb-2">
                    <span className="pulse-dot"></span>
                    <span>BROKER ALLOCATED · REFERENCE #{ticketId}</span>
                  </div>

                  <h4 className="font-playfair text-2xl font-bold text-white mb-2">
                    Request Confirmed
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 mb-6">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your request for <span className="text-[#fbe396]">{formData.category}</span> has been dispatched directly to our executive partner desk.
                  </p>

                  <div className="bg-[#121622] rounded-xl p-4 text-left border border-white/5 space-y-2.5 mb-6 text-xs">
                    <div className="flex justify-between items-center text-neutral-400">
                      <span>Broker Assigned:</span>
                      <span className="font-semibold text-white">{assignedBroker}</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-400">
                      <span>Guaranteed SLA Response:</span>
                      <span className="font-bold text-[#25d366]">Under 15 Minutes</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-400">
                      <span>Direct Dispatch Destination:</span>
                      <span className="font-mono text-[#fbe396]">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleWhatsAppForward}
                      className="flex-1 bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg"
                    >
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                      <span>Fast-Track On WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-gold text-xs py-3 px-4"
                    >
                      <span>New Request</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
