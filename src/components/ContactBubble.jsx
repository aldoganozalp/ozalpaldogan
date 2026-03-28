"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle', 'translating', 'success'
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'translating' || status === 'success') return;

    setStatus('translating');

    // Simulate 2-second translation delay
    setTimeout(() => {
      // Form submission to Netlify
      const formData = new FormData(formRef.current);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
        .then(() => {
          setStatus('success');
        })
        .catch((error) => {
          console.error('Form submission error:', error);
          // Fallback to idle if error so user can try again
          setStatus('idle');
        });
    }, 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg z-50 hover:bg-purple-500 transition-colors focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0px 0px 0px 0px rgba(168, 85, 247, 0.4)",
            "0px 0px 20px 8px rgba(168, 85, 247, 0.4)",
            "0px 0px 0px 0px rgba(168, 85, 247, 0.4)"
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onClick={() => setIsOpen(true)}
        aria-label="Open contact form"
      >
        {/* Chat Bubble Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* Modal Overlay & Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end px-4 pb-24 sm:pb-6 sm:pr-6 pointer-events-none"
          >
            {/* Prevent clicks on the wrapper from closing immediately, handled cleanly by just clicking X */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden pointer-events-auto shadow-purple-900/20"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
                <h3 className="text-lg font-medium text-gray-100 tracking-wide">Get in Touch</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-6 text-center"
                  >
                    <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mb-5 border border-purple-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200 font-medium text-[15px] leading-snug">
                      Message successfully<br />translated and delivered!
                    </p>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    {/* Hidden input required for Netlify forms in React */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-0.5">Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        className="bg-gray-800/50 border border-gray-700/80 rounded-xl px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/80 focus:border-transparent transition-all sm:text-sm"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-0.5">Message</label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        rows={4}
                        className="bg-gray-800/50 border border-gray-700/80 rounded-xl px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/80 focus:border-transparent transition-all resize-none sm:text-sm"
                        placeholder="How can I help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'translating'}
                      className={`mt-2 w-full rounded-xl px-4 py-3 font-medium text-sm text-white transition-all flex items-center justify-center relative overflow-hidden ${status === 'translating'
                        ? 'bg-purple-600/70 cursor-wait'
                        : 'bg-purple-600 hover:bg-purple-500 active:scale-[0.98]'
                        }`}
                    >
                      {status === 'translating' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Translating...
                        </span>
                      ) : (
                        "Send"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
