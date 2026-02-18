import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Loader2, CheckCircle2, Send } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 text-white flex flex-col justify-between bg-blue-700">
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Tienes una propuesta cultural?</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Estamos abiertos a nuevas alianzas, proyectos artísticos y colaboraciones que fortalezcan nuestra comunidad.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-inner"><Mail size={24}/></div>
                  <span className="text-lg font-medium">contacto@fundacionaula14.org</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-inner"><Phone size={24}/></div>
                  <span className="text-lg font-medium">+57 300 000 0000</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-inner"><MapPin size={24}/></div>
                  <span className="text-lg font-medium">Carrera 1b #17-24, Risaralda, Colombia</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              {['Facebook', 'LinkedIn', 'Instagram'].map(social => (
                <div key={social} className="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-blue-700 transition-all cursor-pointer shadow-sm">
                  <Globe size={20} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nombre Completo</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Correo Electrónico</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Asunto</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Consulta sobre alianza" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Mensaje</label>
                <textarea required rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Cuéntanos más..."></textarea>
              </div>
              
              <button 
                disabled={status === 'loading'}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg ${
                  status === 'success' ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 
                 status === 'success' ? <><CheckCircle2 /> Mensaje Enviado</> : 
                 <><Send size={20} /> Enviar Mensaje</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
