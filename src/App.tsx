import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { FeatureGrid } from './components/FeatureGrid.tsx';
import { ConciergeContact } from './components/ConciergeContact.tsx';
import { HotelsScreen } from './components/HotelsScreen.tsx';
import { VillasScreen } from './components/VillasScreen.tsx';
import { ActivitiesScreen } from './components/ActivitiesScreen.tsx';
import { SupercarsScreen } from './components/SupercarsScreen.tsx';
import { ItineraryPlannerScreen } from './components/ItineraryPlannerScreen.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { WhatsAppFloating } from './components/WhatsAppFloating.tsx';
import { Footer } from './components/Footer.tsx';
import { CURRENCIES, Hotel, Villa, Activity, Supercar } from './data/brokerData.ts';

type ScreenType = 'home' | 'hotels' | 'villas' | 'activities' | 'supercars' | 'itinerary';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [currency, setCurrency] = useState<keyof typeof CURRENCIES>('AED');
  
  // Modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState<{
    name: string;
    category: string;
    brokerRateAed: number;
    retailRateAed: number;
    image: string;
    location?: string;
  } | null>(null);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConcierge = () => {
    if (currentScreen !== 'home') {
      setCurrentScreen('home');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCategories = () => {
    if (currentScreen !== 'home') {
      setCurrentScreen('home');
      setTimeout(() => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectHotel = (hotel: Hotel) => {
    setSelectedBookingItem({
      name: hotel.name,
      category: hotel.suiteType,
      brokerRateAed: hotel.brokerRateAed,
      retailRateAed: hotel.retailRateAed,
      image: hotel.image,
      location: hotel.location,
    });
    setIsBookingOpen(true);
  };

  const handleSelectVilla = (villa: Villa) => {
    setSelectedBookingItem({
      name: villa.name,
      category: `${villa.bedrooms} Bedroom Beachfront Villa`,
      brokerRateAed: villa.brokerRateAed,
      retailRateAed: villa.retailRateAed,
      image: villa.image,
      location: villa.location,
    });
    setIsBookingOpen(true);
  };

  const handleSelectActivity = (activity: Activity) => {
    setSelectedBookingItem({
      name: activity.title,
      category: activity.category,
      brokerRateAed: activity.brokerRateAed,
      retailRateAed: activity.retailRateAed,
      image: activity.image,
    });
    setIsBookingOpen(true);
  };

  const handleSelectCar = (car: Supercar) => {
    setSelectedBookingItem({
      name: `${car.make} ${car.model}`,
      category: `${car.category} (${car.horsepower} HP)`,
      brokerRateAed: car.brokerRateDayAed,
      retailRateAed: car.retailRateDayAed,
      image: car.image,
    });
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-[#f1f3f7] flex flex-col relative selection:bg-[#d4af37] selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenConcierge={handleOpenConcierge}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {currentScreen === 'home' && (
          <>
            <Hero
              onExploreBookings={() => handleNavigate('hotels')}
              onScrollToCategories={handleScrollToCategories}
            />
            <FeatureGrid
              onSelectCategory={(cat) => handleNavigate(cat)}
              onOpenPortal={() => handleNavigate('itinerary')}
            />
            <ConciergeContact />
          </>
        )}

        {currentScreen === 'hotels' && (
          <HotelsScreen
            currency={currency}
            onSelectHotel={handleSelectHotel}
            onBackToOverview={() => handleNavigate('home')}
          />
        )}

        {currentScreen === 'villas' && (
          <VillasScreen
            currency={currency}
            onSelectVilla={handleSelectVilla}
            onBackToOverview={() => handleNavigate('home')}
          />
        )}

        {currentScreen === 'activities' && (
          <ActivitiesScreen
            currency={currency}
            onSelectActivity={handleSelectActivity}
            onBackToOverview={() => handleNavigate('home')}
          />
        )}

        {currentScreen === 'supercars' && (
          <SupercarsScreen
            currency={currency}
            onSelectCar={handleSelectCar}
            onBackToOverview={() => handleNavigate('home')}
          />
        )}

        {currentScreen === 'itinerary' && (
          <ItineraryPlannerScreen
            currency={currency}
            onBackToOverview={() => handleNavigate('home')}
            onOpenConcierge={handleOpenConcierge}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConcierge={handleOpenConcierge}
      />

      {/* Persistent Floating WhatsApp Desk */}
      <WhatsAppFloating />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        item={selectedBookingItem}
        currency={currency}
      />

    </div>
  );
}
