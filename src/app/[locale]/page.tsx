import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';

export default function Home() {
  const t = useTranslations('home');
  const contact = useTranslations('contact');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  {t('title')}
                </h1>
                <p className="text-xl text-blue-900">
                  {t('subtitle')}
                </p>
                <p className="text-lg text-blue-800 font-medium">
                  {t('major')}
                </p>
                <p className="text-md text-blue-700">
                  {t('year')}
                </p>
                <p className="text-lg text-gray-600">
                  {t('intro')}
                </p>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-700 text-base font-medium rounded-full text-blue-700 bg-transparent hover:bg-blue-700 hover:text-white transition-colors duration-200"
                  download
                >
                  {t('downloadCV')}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-700 text-base font-medium rounded-full text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200"
                >
                  {t('contactMe')}
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg">
                <span className="text-blue-400 text-lg">Profile Photo Coming Soon</span>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            id="contact"
          >
            <a 
              href="mailto:xingtonl@andrew.cmu.edu"
              className="group bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white/80"
            >
              <h3 className="text-lg font-medium text-blue-900">{contact('email')}</h3>
              <p className="mt-2 text-blue-700 group-hover:text-blue-900 transition-colors duration-200">
                xingtonl@andrew.cmu.edu
              </p>
            </a>
            <a 
              href="https://www.linkedin.com/in/lxt/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white/80"
            >
              <h3 className="text-lg font-medium text-blue-900">{contact('linkedin')}</h3>
              <p className="mt-2 text-blue-700 group-hover:text-blue-900 transition-colors duration-200">
                linkedin.com/in/lxt
              </p>
            </a>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-medium text-blue-900">{contact('github')}</h3>
              <p className="mt-2 text-blue-700">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 