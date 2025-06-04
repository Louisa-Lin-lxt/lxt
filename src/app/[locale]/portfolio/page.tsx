import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';

export default function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
            {/* Only show upload button if authenticated */}
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              {t('uploadWork')}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Portfolio items will be mapped here */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Portfolio item image */}
                <div className="flex items-center justify-center h-48">
                  <span className="text-gray-400">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Project Title</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Project description goes here. This is a brief overview of what the project is about.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 