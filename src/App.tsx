/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialistAdvantage from './components/SpecialistAdvantage';
import ServicesGrid from './components/ServicesGrid';
import MeetDoctors from './components/MeetDoctors';
import LocalRelevance from './components/LocalRelevance';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-gold-500 selection:text-navy-900">
      <Header />
      <main>
        <Hero />
        <SpecialistAdvantage />
        <ServicesGrid />
        <MeetDoctors />
        <LocalRelevance />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
