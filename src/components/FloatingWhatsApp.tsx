"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  
  // Close the window when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Handle the toggle button click
  const handleToggleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Handle the chat window click to prevent it from closing
  const handleChatWindowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* WhatsApp Chat Window */}
      {isOpen && (
        <div 
          ref={chatRef}
          onClick={handleChatWindowClick}
          className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="bg-green-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-bold">Clinique Saada</p>
                <p className="text-xs opacity-90">Typically replies within an hour</p>
              </div>
            </div>
            <button 
              onClick={handleToggleClick}
              className="text-white hover:bg-green-600 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chat Content */}
          <div className="p-4 bg-gray-50 h-80">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-4 max-w-[80%]">
              <p className="text-sm text-gray-900">Hello! How can we help you with your dental care?</p>
              <p className="text-xs text-gray-500 mt-1 text-right">10:03 AM</p>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-green-100 p-3 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm text-gray-900">I'm interested in your services</p>
                <p className="text-xs text-gray-500 mt-1 text-right">10:04 AM</p>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 py-2 px-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <a 
                href="https://wa.me/212668418741" 
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={handleToggleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      </button>
    </div>
  );
}