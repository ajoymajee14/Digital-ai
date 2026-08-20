import React, { useState } from 'react';
import { User, Course, Certificate } from './types';
import { currentUser, courses } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { HomeView } from './components/HomeView';
import { CourseLibraryView } from './components/CourseLibraryView';
import { CourseDetailView } from './components/CourseDetailView';
import { PricingView } from './components/PricingView';
import { InstructorsView } from './components/InstructorsView';
import { AboutView } from './components/AboutView';
import { DashboardView } from './components/DashboardView';
import { CoursePlayerView } from './components/CoursePlayerView';
import { CertificateView } from './components/CertificateView';
import { VerifyCertificateView } from './components/VerifyCertificateView';
import { CheckoutView } from './components/CheckoutView';
import { AdminDashboardView } from './components/AdminDashboardView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [user, setUser] = useState<User | null>(currentUser);
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate>({
    id: 'crt_101',
    userId: currentUser.id,
    userName: currentUser.name,
    courseId: courses[0].id,
    courseName: courses[0].title,
    instructorName: courses[0].instructor.name,
    issuedAt: '2026-02-15',
    certificateId: 'DAC-8849-AI2026',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DAC-8849-AI2026',
  });
  const [checkoutItem, setCheckoutItem] = useState<{ title: string; price: number }>({ title: 'Pro Monthly Pass', price: 499 });
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleEnrollCourse = (course: Course) => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    setCheckoutItem({ title: course.title, price: course.price });
    setCurrentView('checkout');
  };

  const handleSelectPlan = (planName: string, price: number) => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    setCheckoutItem({ title: planName, price: price });
    setCurrentView('checkout');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Sticky Navbar (hidden inside immersive player view) */}
      {currentView !== 'player' && (
        <Navbar 
          currentView={currentView}
          setCurrentView={setCurrentView}
          user={user}
          onOpenAuth={() => setAuthModalOpen(true)}
          onLogout={() => setUser(null)}
        />
      )}

      {/* View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView setCurrentView={setCurrentView} setSelectedCourse={setSelectedCourse} />
        )}
        {currentView === 'courses' && (
          <CourseLibraryView setCurrentView={setCurrentView} setSelectedCourse={setSelectedCourse} />
        )}
        {currentView === 'course-detail' && (
          <CourseDetailView course={selectedCourse} setCurrentView={setCurrentView} onEnroll={handleEnrollCourse} />
        )}
        {currentView === 'pricing' && (
          <PricingView setCurrentView={setCurrentView} onSelectPlan={handleSelectPlan} />
        )}
        {currentView === 'instructors' && (
          <InstructorsView />
        )}
        {currentView === 'about' && (
          <AboutView setCurrentView={setCurrentView} />
        )}
        {currentView === 'dashboard' && user && (
          <DashboardView 
            user={user} 
            setCurrentView={setCurrentView} 
            setSelectedCourse={setSelectedCourse} 
            onOpenCertificate={(cert) => { setSelectedCertificate(cert); setCurrentView('certificate'); }} 
          />
        )}
        {currentView === 'player' && (
          <CoursePlayerView course={selectedCourse} setCurrentView={setCurrentView} onCompleteCourse={() => setCurrentView('certificate')} />
        )}
        {currentView === 'certificate' && (
          <CertificateView certificate={selectedCertificate} setCurrentView={setCurrentView} />
        )}
        {currentView === 'verify-cert' && (
          <VerifyCertificateView setCurrentView={setCurrentView} />
        )}
        {currentView === 'checkout' && (
          <CheckoutView 
            itemTitle={checkoutItem.title} 
            itemPrice={checkoutItem.price} 
            setCurrentView={setCurrentView} 
            onPaymentSuccess={() => {
              if (user) {
                setUser({ ...user, subscription: 'pro', subscriptionStatus: 'active' });
              }
            }} 
          />
        )}
        {currentView === 'admin' && (
          <AdminDashboardView setCurrentView={setCurrentView} />
        )}
      </main>

      {/* Footer */}
      {currentView !== 'player' && (
        <Footer setCurrentView={setCurrentView} />
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        onLogin={(loggedUser) => {
          setUser(loggedUser);
          setAuthModalOpen(false);
        }}
      />
    </div>
  );
}
