import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PHONE_NUMBER = '(423) 482-1525';
export const PHONE_NUMBER_RAW = '+14234821525';
export const SMS_KEYWORD = 'BEAUTY';

export const triggerSmsAction = (onDesktopOpenModal: () => void) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIOS ? '&' : '?';
    window.location.href = `sms:${PHONE_NUMBER_RAW}${separator}body=${encodeURIComponent(SMS_KEYWORD)}`;
  } else {
    onDesktopOpenModal();
  }
};

interface SmsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SmsModal: React.FC<SmsModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PHONE_NUMBER_RAW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-cream overflow-hidden p-6 sm:p-8 text-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate hover:text-navy transition-colors p-1 rounded-full hover:bg-cream/50"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header badge */}
            <span className="inline-block px-3 py-1 bg-gold/15 text-gold-deep text-[11px] font-semibold tracking-widest uppercase rounded-full mb-3">
              Private SMS Information
            </span>

            <h3 className="font-serif text-2xl text-navy font-medium leading-tight">
              Text <span className="text-gold-deep font-semibold">BEAUTY</span> for Details
            </h3>

            <p className="font-body text-slate text-sm mt-2 mb-5">
              Point your phone camera at this QR code to open your SMS app with everything pre-filled.
            </p>

            {/* QR Code Container */}
            <div className="bg-cream-light border border-cream rounded-xl p-4 inline-block shadow-inner mb-5">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=SMSTO:${PHONE_NUMBER_RAW}:${SMS_KEYWORD}&margin=4`}
                alt={`Scan QR to SMS ${PHONE_NUMBER}`}
                className="w-44 h-44 mx-auto rounded-lg"
              />
            </div>

            {/* Instructions & Copy */}
            <div className="bg-white border border-cream rounded-lg p-3.5 mb-5 flex items-center justify-between gap-3 text-left">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate font-medium">Text "BEAUTY" to</p>
                <p className="font-serif text-lg font-semibold text-navy">{PHONE_NUMBER}</p>
              </div>
              <button
                onClick={copyToClipboard}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-navy text-white hover:bg-navy-light transition-all flex items-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct action button */}
            <div>
              <a
                href={`sms:${PHONE_NUMBER_RAW}?&body=${encodeURIComponent(SMS_KEYWORD)}`}
                className="w-full py-3 px-5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-deep transition-all shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Open in Messages / SMS</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SmsModal;
