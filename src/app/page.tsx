'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExamplesSection from '@/components/ExamplesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrialSection from '@/components/TrialSection';
import HowItWorksSection from '@/components/HowItWorksSection';

import Footer from '@/components/Footer';

interface InternalProcess {
  id: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

export default function Home() {
  const [activeExample, setActiveExample] = useState<'beauty' | 'restaurant' | 'delivery' | 'barbershop'>('beauty');
  const [internalProcesses, setInternalProcesses] = useState<InternalProcess[]>([]);

  const handleProcessUpdate = (processes: InternalProcess[]) => {
    setInternalProcesses(processes);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <Navigation />
      <HeroSection />
            <ExamplesSection 
        activeExample={activeExample}
        setActiveExample={setActiveExample}
        internalProcesses={internalProcesses}
                onProcessUpdate={handleProcessUpdate}
              />
      <IntegrationsSection />
      <TestimonialsSection />
      <TrialSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}