import React, { useEffect } from 'react';
import { X, Copy, Check, MessageCircle, ExternalLink } from 'lucide-react';

const DonationModal = ({ isOpen, onClose, data, selectedLevel }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const { bancario, digital, whatsapp } = data?.metodos || {};

  const copyToClipboard = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola Fundación Aula 14! Deseo realizar un aporte ${
        selectedLevel ? `de nivel ${selectedLevel.nombre} (${selectedLevel.monto})` : ''
      }. ¿Me podrían confirmar los pasos a seguir?`
    );
    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-midnight/80 backdrop-blur-md transition-opacity animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Content Container */}
      <div className="relative w-full max-w-4xl bg-brand-paper shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Close Button - Fixed relative to modal */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-brand-midnight hover:text-brand-accent transition-colors z-50 bg-brand-paper/50 backdrop-blur-sm md:bg-transparent p-1 rounded-full"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto">
          <div className="grid md:grid-cols-2">
            
            {/* Left Side: Info & Account */}
            <div className="p-8 md:p-12 space-y-8 border-b md:border-b-0 md:border-r border-brand-midnight/10">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand-accent">
                  {selectedLevel ? `Impacto: ${selectedLevel.nombre}` : 'Sembrar Esperanza'}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight">
                  Instrucciones de Aporte
                </h2>
                <p className="text-brand-midnight/60 font-serif italic text-lg leading-relaxed">
                  "Cada semilla cuenta para fortalecer el tejido cultural de nuestro territorio."
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="p-6 bg-brand-midnight text-brand-paper space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase opacity-50">Transferencia Bancaria</span>
                      <h3 className="text-xl font-serif mt-1">{bancario?.banco}</h3>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(bancario?.numero)}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-brand-accent transition-colors"
                    >
                      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                      {copied ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase opacity-40 block">Número</span>
                      <span className="font-mono text-lg">{bancario?.numero}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase opacity-40 block">Tipo</span>
                      <span>{bancario?.tipo}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[9px] font-mono tracking-widest uppercase opacity-40 block">Titular / NIT</span>
                      <span className="text-sm">{bancario?.titular} — {bancario?.nit}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                   <button 
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-brand-accent text-brand-paper hover:bg-brand-midnight transition-all font-bold uppercase text-xs tracking-widest"
                   >
                    <MessageCircle size={18} />
                    Confirmar aporte por WhatsApp
                   </button>
                </div>
              </div>
            </div>

            {/* Right Side: Digital Payments & QR */}
            <div className="p-8 md:p-12 bg-brand-midnight/5 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-midnight/40 block">Pagos Digitales</span>
                  <div className="flex gap-6">
                     <div className="space-y-1">
                        <span className="text-[11px] font-bold text-brand-midnight">NEQUI</span>
                        <p className="font-mono text-sm">{digital?.nequi}</p>
                     </div>
                     <div className="space-y-1">
                        <span className="text-[11px] font-bold text-brand-midnight">DAVIPLATA</span>
                        <p className="font-mono text-sm">{digital?.daviplata}</p>
                     </div>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-xl relative group">
                  <img 
                    src={digital?.qrCode} 
                    alt="QR Donación" 
                    className="w-full aspect-square object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-midnight/5">
                     <div className="bg-brand-paper px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                        <ExternalLink size={12} />
                        Escanear QR
                     </div>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-brand-midnight/40 uppercase tracking-[0.2em] leading-relaxed mt-12">
                Al finalizar, envía tu comprobante por WhatsApp para incluir tu aporte en nuestra bitácora de impacto anual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
