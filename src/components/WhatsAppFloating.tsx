import React, { useState } from 'react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-50 flex items-center group">
      
      {/* Tooltip Label */}
      <div className="hidden md:block mr-3 bg-[#0f1118] text-white px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border border-[#d4af37]/30 shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none">
        Direct VIP WhatsApp Desk
      </div>

      {/* Floating Button */}
      <a
        href="https://api.whatsapp.com/send?phone=971500000000&text=Hello%20Dubai%20Booker%20Concierge,%20I%20would%20like%20to%20request%20a%20VIP%20booking"
        target="_blank"
        rel="noopener noreferrer"
        title="Direct VIP WhatsApp Concierge Desk"
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(18,140,126,0.5),0_0_0_4px_rgba(37,211,102,0.25)] hover:scale-110 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(18,140,126,0.7),0_0_0_6px_rgba(37,211,102,0.35)] transition-all duration-300"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
};
