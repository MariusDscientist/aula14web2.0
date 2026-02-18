import React from 'react';
import { Heart } from 'lucide-react';

const Donations = () => {
  return (
    <section id="donaciones" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-8 text-blue-600">
           <Heart className="w-10 h-10 animate-pulse" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Apoya nuestra causa</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Tu generosidad impulsa becas, laboratorios y mentorías para quienes más lo necesitan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[25, 50, 100].map(amount => (
            <button key={amount} className="bg-white p-6 rounded-2xl border-2 border-transparent hover:border-blue-600 transition-all font-bold text-2xl text-gray-900 shadow-sm hover:shadow-lg">
              ${amount} USD
            </button>
          ))}
        </div>
        <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all">
          Donar otra cantidad
        </button>
      </div>
    </section>
  );
};

export default Donations;
