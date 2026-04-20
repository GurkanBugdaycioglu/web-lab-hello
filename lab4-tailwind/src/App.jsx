import './App.css';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Üst Kısım: Tanıtım Kartı */}
      <div className="flex items-center justify-center p-4 pt-16">
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-lg max-w-sm w-full p-6">
          <h1 className="text-2xl font-bold mb-2">
            Merhaba Tailwind!
          </h1>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            Bu benim ilk Tailwind CSS bileşenim.
            Her class tek bir iş yapar.
          </p>
          <button className="bg-zinc-300 dark:bg-zinc-700 px-4 py-2 rounded-lg font-medium hover:bg-zinc-400 dark:hover:bg-zinc-600">
            Devam Et
          </button>
        </div>
      </div>

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Projelerim
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <article className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg shadow-md overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-[380px] transition-transform hover:scale-[1.02]">
            <img src="proje1.jpg" alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">E-Ticaret Sitesi</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                React ve Node.js ile.
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className="bg-zinc-100 dark:bg-zinc-900/50 py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <h1 className="text-4xl font-bold mb-4">Başlık</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Bu metin karanlık temada açık gri olur.
        </p>
        <button className="bg-zinc-300 dark:bg-zinc-700 px-6 py-2 rounded hover:bg-zinc-400">
          Buton
        </button>
      </div>

      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-zinc-300 dark:bg-zinc-800 p-2 rounded-full shadow-lg hover:scale-110"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>
    </div>
  );
}
  
export default App;