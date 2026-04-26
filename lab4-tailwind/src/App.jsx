import './App.css';
import React from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import Alert from './components/Alert';

function App() {
  return (
  <>
  <a href="#main-content"
    className="sr-only focus:not-sr-only
          focus:absolute focus:top-0 focus:left-0
          bg-blue-800 text-white p-2 z-50">
    Ana icerige atla
  </a>

  <header className="sticky top-0 z-40 bg-white  
                dark:bg-gray-900 border-b
                border-gray-200 dark:border-gray-700">
    <div className="max-w-6xl mx-auto px-4 py-3
                flex flex-col sm:flex-row
                justify-between items-center gap-3">
      <h1 className="text-xl font-bold text-blue-800
                dark:text-blue-300">
        Gürkan Mustafa Buğdaycıoğlu
      </h1>
      <nav aria-label="Ana navigasyon">
        <ul className="flex flex-wrap gap-2">
          <li><a href="#hakkimda"
            className="px-3 py-1 rounded-md text-gray-700
                  dark:text-gray-300
                  hover:bg-blue-100
                  dark:hover:bg-gray-800
                  transition-colors">
            Hakkimda</a></li>
          <li><a href="#projeler"
            className="px-3 py-1 rounded-md text-gray-700
                  dark:text-gray-300
                  hover:bg-blue-100
                  dark:hover:bg-gray-800
                  transition-colors">
            Projeler</a></li>
          <li><a href="#iletisim"
            className="px-3 py-1 rounded-md text-gray-700
                  dark:text-gray-300
                  hover:bg-blue-100
                  dark:hover:bg-gray-800
                  transition-colors">
            Iletisim</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <section id="projeler" class="py-16 px-4
                                bg-gray-50
                                dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center
                text-gray-900 dark:text-white mb-10">
        Projelerim
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2
                  lg:grid-cols-3 gap-6">
        <Card variant="elevated" title="E-Ticaret"
              image="proje1.jpg"
              imageAlt="E-Ticaret ana sayfa gorunumu">
          React ve Node.js ile tam kapsamli uygulama
        </Card>
      </div>
    </div>
  </section>

  <section id="iletisim" class="py-16 px-4">
    <div class="max-w-lg mx-auto">
      <h2 class="text-3xl font-bold text-center
                text-gray-900 dark:text-white mb-8">
        Iletisim
      </h2>
      <form class="space-y-4">
        <Input id="name" label="Ad Soyad"
              required />
        <Input id="email" label="E-posta"
              type="email" required />
        <div class="space-y-1">
          <label htmlFor="message"
            class="block text-sm font-medium
                  text-gray-700
                  dark:text-gray-300">
            Mesajiniz
          </label>
          <textarea id="message" rows="5" required
            class="w-full px-3 py-2 rounded-lg
                  border border-gray-300
                  focus:ring-2 focus:ring-blue-500
                  focus:outline-none
                  dark:bg-gray-800
                  dark:text-gray-100
                  dark:border-gray-600">
          </textarea>
        </div>
        <Button variant="primary" size="lg"
                type="submit">
          Gonder
        </Button>
      </form>
    </div>
  </section>

  <footer class="bg-gray-100 dark:bg-gray-900
                border-t border-gray-200
                dark:border-gray-700
                text-center py-6 px-4
                text-gray-500 dark:text-gray-400
                text-sm">
    <p>&copy; 2025 Gürkan Mustafa Buğdaycıoğlu.
      Tum haklari saklidir.</p>
  </footer>

  <button
    onClick={() => document.documentElement.classList.toggle('dark')}
    className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
    aria-label="Tema degistir"
  >
    <span className="dark:hidden">&#9790;</span>
    <span className="hidden dark:inline">&#9728;</span>
  </button>
  </>
  );
}

export default App;