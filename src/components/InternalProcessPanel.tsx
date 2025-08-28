'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface InternalProcess {
  id: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

interface InternalProcessPanelProps {
  processes: InternalProcess[];
  businessType: 'beauty' | 'restaurant' | 'delivery' | 'barbershop' | 'autorepair' | 'courses';
}

export default function InternalProcessPanel({ processes, businessType }: InternalProcessPanelProps) {
  const { t } = useLanguage();
  const getStatusIcon = (status: InternalProcess['status']) => {
    switch (status) {
      case 'pending':
        return <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>;
      case 'processing':
        return <div className="w-3 h-3 bg-yellow-500 rounded-full animate-spin border-2 border-yellow-200 border-t-yellow-500"></div>;
      case 'completed':
        return <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
          <i className="fas fa-check text-white text-xs"></i>
        </div>;
      default:
        return null;
    }
  };

  const getBusinessTitle = (businessType: string): string => {
    const titleKeys = {
      beauty: 'examples.beauty',
      restaurant: 'examples.restaurant',
      delivery: 'examples.delivery',
      barbershop: 'examples.barbershop',
      autorepair: 'examples.autorepair',
      courses: 'examples.courses'
    };
    const key = titleKeys[businessType as keyof typeof titleKeys];
    return key ? t(key) : businessType;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full h-[480px] flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-4 flex-shrink-0">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
        <span className="ml-2 text-sm text-gray-500">
          {t('internalProcess.title')} - {getBusinessTitle(businessType)}
        </span>
      </div>

      {/* Processes - Scrollable area */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {processes.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              <i className="fas fa-cogs text-3xl"></i>
            </div>
            <p className="text-gray-500 text-sm">
              {t('internalProcess.noProcesses')}
            </p>
          </div>
        ) : (
          processes.map((process, index) => (
            <div 
              key={process.id} 
              className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
                process.status === 'completed' 
                  ? process.description.includes('🎉')
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-green-50 border border-green-200'
                  : process.status === 'processing'
                  ? 'bg-yellow-50 border border-yellow-200'
                  : 'bg-gray-50 border border-gray-200'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex-shrink-0 mt-1">
                {process.description.includes('🎉') ? (
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <i className="fas fa-star text-white text-xs"></i>
                  </div>
                ) : (
                  getStatusIcon(process.status)
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${
                  process.description.includes('🎉')
                    ? 'text-blue-800 font-bold'
                    : process.status === 'completed' 
                    ? 'text-green-800' 
                    : process.status === 'processing'
                    ? 'text-yellow-800'
                    : 'text-gray-700'
                }`}>
                  {process.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {process.timestamp.toLocaleTimeString('ru-RU', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer info */}
      {processes.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 flex-shrink-0">
          <div className="flex justify-between text-xs text-gray-500">
            <span>{t('internalProcess.totalProcesses')}: {processes.length}</span>
            <span>
              {t('internalProcess.completed')}: {processes.filter(p => p.status === 'completed').length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
