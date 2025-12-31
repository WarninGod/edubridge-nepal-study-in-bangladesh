import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { WhyBangladesh } from './components/WhyBangladesh';
import { Packages } from './components/Packages';
import { Contact } from './components/Contact';
import { LiveChatCounselor } from './components/AICounselor';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageProvider, usePageContext } from './contexts/PageContext';
import { CoursesSection } from './components/Pages/CoursesSection';
import { UniversitiesPage } from './components/Pages/UniversitiesPage';
import { StoriesSection } from './components/Pages/StoriesSection';

const AppContent: React.FC = () => {
  const { currentPage, setPage } = usePageContext();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <TrustBar />
            <WhyBangladesh />
            <CoursesSection />
            <div className="bg-[#0A2647] py-16 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to start your medical journey?</h2>
              <p className="mb-8 opacity-90">Book a free counseling session today.</p>
              <button 
                onClick={() => setPage('contact')} 
                className="bg-[#F2672E] hover:bg-[#d9551e] text-white px-8 py-3 rounded-lg font-bold transition-all"
              >
                Contact Us Now
              </button>
            </div>
          </>
        )}
        
        {currentPage === 'packages' && <Packages />}
        {currentPage === 'universities' && <UniversitiesPage />}
        {currentPage === 'stories' && <StoriesSection />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer />
      
      {/* Live Chat Support */}
      <LiveChatCounselor />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <PageProvider>
        <AppContent />
      </PageProvider>
    </ErrorBoundary>
  );
};

export default App;