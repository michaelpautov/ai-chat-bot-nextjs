
import ChatWidget from '@/components/ChatWidget';
import InternalProcessPanel from '@/components/InternalProcessPanel';

interface InternalProcess {
  id: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

interface ExamplesSectionProps {
  activeExample: 'beauty' | 'restaurant' | 'delivery' | 'barbershop';
  setActiveExample: (example: 'beauty' | 'restaurant' | 'delivery' | 'barbershop') => void;
  internalProcesses: InternalProcess[];
  onProcessUpdate: (processes: InternalProcess[]) => void;
}

export default function ExamplesSection({ 
  activeExample, 
  setActiveExample, 
  internalProcesses, 
  onProcessUpdate 
}: ExamplesSectionProps) {
  const handleExampleChange = (example: 'beauty' | 'restaurant' | 'delivery' | 'barbershop') => {
    setActiveExample(example);
    onProcessUpdate([]);
  };

  return (
    <section id="examples" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Попробуйте AI бота прямо сейчас</h2>
          <p className="text-lg text-black">Выберите тип бизнеса и пообщайтесь с умным помощником</p>
        </div>
        
        {/* Example Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeExample === 'beauty'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('beauty')}
            >
              <i className="fas fa-cut mr-2"></i>Салон красоты
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeExample === 'restaurant'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('restaurant')}
            >
              <i className="fas fa-utensils mr-2"></i>Ресторан
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeExample === 'delivery'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('delivery')}
            >
              <i className="fas fa-motorcycle mr-2"></i>Доставка еды
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeExample === 'barbershop'
                  ? 'bg-white text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleExampleChange('barbershop')}
            >
              <i className="fas fa-user-tie mr-2"></i>Барбершоп
            </button>
          </div>
        </div>

        {/* Interactive Chat Example */}
        <div className="flex justify-center gap-6 max-w-6xl mx-auto">
          <div className="flex-shrink-0">
            <ChatWidget 
              businessType={activeExample} 
              onProcessUpdate={onProcessUpdate}
            />
          </div>
          <div className="flex-shrink-0">
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
