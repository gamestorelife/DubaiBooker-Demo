import React from 'react';

interface FooterProps {
  onNavigate: (screen: 'home' | 'hotels' | 'villas' | 'activities' | 'supercars' | 'itinerary') => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConcierge }) => {
  return (
    <footer className="bg-[#040508] border-t border-[#d4af37]/15 pt-16 pb-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 text-center md:text-left">
            <button
              onClick={() => onNavigate('home')}
              className="inline-block mb-3 focus:outline-none"
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1XO5apwujkaYksdsvwT-SR1oxyTIbJRlmKyG7KxYbWFwi7lg9rmCU2aTGLi9rQJzxQgsFMdiXpt-kV0hBAScNwD3RqoNg5yA0EALWsrwLG8D0ldEzrWAFNIPoJWTLrZfJBMfeZQWE0PNNEJY_qquwFiAm2wMzBf1HWz_XQGnlgLlOIU2fBzDYBlDeCGH4Ho3wwf3tI_R_M5IizA3dpLyBGXJ3XJCOQpYQhXfyjCq6G7R9fB9m-w7Oa4xMjL"
                alt="Dubai Booker Logo"
                className="h-10 sm:h-11 w-auto object-contain mx-auto md:mx-0"
                referrerPolicy="no-referrer"
              />
            </button>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Dubai Booker is the premier direct booking shortcut and licensed high-ticket concierge brokerage in Dubai, United Arab Emirates.
            </p>
          </div>

          {/* Social Icons & Links */}
          <div className="md:col-span-7 flex flex-col items-center md:items-end gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: 'fa-brands fa-instagram', label: 'Instagram', url: 'https://instagram.com' },
                { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', url: 'https://linkedin.com' },
                { icon: 'fa-brands fa-facebook-f', label: 'Facebook', url: 'https://facebook.com' },
                { icon: 'fa-brands fa-x-twitter', label: 'X', url: 'https://x.com' },
                { icon: 'fa-brands fa-tiktok', label: 'TikTok', url: 'https://tiktok.com' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-[#d4af37]/25 text-[#fbe396] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#fff3c4] hover:to-[#ba9124] hover:text-black hover:border-transparent hover:-translate-y-1 transition-all"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-xs text-neutral-400">
              <button
                onClick={() => onNavigate('hotels')}
                className="hover:text-[#fbe396] transition-colors"
              >
                Best Hotels
              </button>
              <button
                onClick={() => onNavigate('villas')}
                className="hover:text-[#fbe396] transition-colors"
              >
                Luxury Villas
              </button>
              <button
                onClick={() => onNavigate('activities')}
                className="hover:text-[#fbe396] transition-colors"
              >
                Activities
              </button>
              <button
                onClick={() => onNavigate('supercars')}
                className="hover:text-[#fbe396] transition-colors"
              >
                Rent a Car
              </button>
              <button
                onClick={onOpenConcierge}
                className="hover:text-[#fbe396] transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => onNavigate('hotels')}
                className="text-[#e5be4a] font-bold hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Bookings Portal</span>
                <span>&rarr;</span>
              </button>
            </div>

          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 text-center sm:text-left">
          <div>
            &copy; 2025 Dubai Booker (dubaibooker.com). All rights reserved. Licensed Tourism Brokerage.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Brokerage</span>
            <span className="hover:text-neutral-400 cursor-pointer">Direct Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
