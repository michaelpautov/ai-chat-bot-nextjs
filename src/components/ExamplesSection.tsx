'use client';

import ChatWidget from '@/components/ChatWidget';
import InternalProcessPanel from '@/components/InternalProcessPanel';
import { useLanguage } from '@/contexts/LanguageContext';

interface InternalProcess {
  id: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

interface ExamplesSectionProps {
  activeExample: 'beauty' | 'restaurant' | 'delivery' | 'barbershop' | 'autorepair' | 'courses';
  setActiveExample: (example: 'beauty' | 'restaurant' | 'delivery' | 'barbershop' | 'autorepair' | 'courses') => void;
  internalProcesses: InternalProcess[];
  onProcessUpdate: (processes: InternalProcess[]) => void;
}

export default function ExamplesSection({ 
  activeExample, 
  setActiveExample, 
  internalProcesses, 
  onProcessUpdate 
}: ExamplesSectionProps) {
  const { t } = useLanguage();
  
  const handleExampleChange = (example: 'beauty' | 'restaurant' | 'delivery' | 'barbershop' | 'autorepair' | 'courses') => {
    setActiveExample(example);
    onProcessUpdate([]);
  };

  return (
    <section id="examples" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('examples.title')}</h2>
          <p className="text-base md:text-lg text-black">{t('examples.subtitle')}</p>
        </div>
        
        {/* Example Tabs */}
        <div className="flex justify-start sm:justify-center mb-6 md:mb-8 overflow-x-auto px-4">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex min-w-max ml-0 sm:ml-auto mr-auto">
            <button
              className={`pl-4 pr-2 sm:px-4 py-2 rounded-md font-medium transition-all text-sm sm:text-base whitespace-nowrap ${
                activeExample === 'beauty'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('beauty')}
            >
              <i className="fas fa-cut mr-1 sm:mr-2"></i><span className="hidden sm:inline">{t('examples.beauty')}</span><span className="sm:hidden">{t('examples.beautyShort')}</span>
            </button>
            <button
              className={`px-2 sm:px-4 py-2 rounded-md font-medium transition-all text-sm sm:text-base whitespace-nowrap ${
                activeExample === 'restaurant'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('restaurant')}
            >
              <i className="fas fa-utensils mr-1 sm:mr-2"></i>{t('examples.restaurant')}
            </button>
            <button
              className={`px-2 sm:px-4 py-2 rounded-md font-medium transition-all text-sm sm:text-base whitespace-nowrap ${
                activeExample === 'delivery'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('delivery')}
            >
              <i className="fas fa-motorcycle mr-1 sm:mr-2"></i><span className="hidden sm:inline">{t('examples.delivery')}</span><span className="sm:hidden">{t('examples.deliveryShort')}</span>
            </button>
            <button
              className={`px-2 sm:px-4 py-2 rounded-md font-medium transition-all text-sm sm:text-base whitespace-nowrap ${
                activeExample === 'barbershop'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('barbershop')}
            >
              <i className="fas fa-user-tie mr-1 sm:mr-2"></i>{t('examples.barbershop')}
            </button>
            <button
              className={`px-2 sm:px-4 py-2 rounded-md font-medium transition-all text-sm sm:text-base whitespace-nowrap ${
                activeExample === 'autorepair'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('autorepair')}
            >
              <i className="fas fa-wrench mr-1 sm:mr-2"></i>{t('examples.autorepair')}
            </button>
            <button
              className={`px-2 sm:px-4 py-2 rounded-md font-medium transition-all text-sm sm:text-base whitespace-nowrap ${
                activeExample === 'courses'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('courses')}
            >
              <i className="fas fa-graduation-cap mr-1 sm:mr-2"></i>{t('examples.courses')}
            </button>
          </div>
        </div>

        {/* Interactive Chat Example */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 max-w-6xl mx-auto">
          <div className="flex-shrink-0 w-full max-w-md mx-auto lg:w-auto lg:max-w-md">
            <ChatWidget 
              businessType={activeExample} 
              onProcessUpdate={onProcessUpdate}
            />
          </div>
          <div className="flex-shrink-0 w-full max-w-md mx-auto lg:w-auto lg:max-w-md">
            <InternalProcessPanel 
              processes={internalProcesses}
              businessType={activeExample}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
