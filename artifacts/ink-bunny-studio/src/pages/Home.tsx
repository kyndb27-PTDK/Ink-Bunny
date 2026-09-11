import { useState } from 'react';
import { BookingDialog } from '@/components/booking/BookingDialog';
import { Hero } from '@/components/hero/Hero';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter, StudioSections } from '@/components/sections/StudioSections';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="ink-app">
      <SiteHeader onBook={() => setBookingOpen(true)} />
      <main>
        <Hero onBook={() => setBookingOpen(true)} />
        <StudioSections onBook={() => setBookingOpen(true)} />
      </main>
      <SiteFooter onBook={() => setBookingOpen(true)} />
      <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}