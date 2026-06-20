/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import TeamView from './components/TeamView';
import PaymentsView from './components/PaymentsView';
import BookView from './components/BookView';
import { PageId } from './types';
import { CLINIC_INFO } from './data';
import { PhoneCall, Calendar, Star, MapPin } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);
  const [showSpeedDial, setShowSpeedDial] = useState(false);

  // Scroll back to top on page switches to mimic complete router experiences
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-teal-500/10 selection:text-teal-800 bg-[#fbfaee] text-slate-900">
      
      {/* Shared Premium Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Responsive Canvas Stage */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto pt-4">
        
        {currentPage === 'home' && (
          <HomeView 
            setCurrentPage={setCurrentPage} 
            setSelectedDoctorId={(id) => {
              setSelectedDoctorId(id);
              setCurrentPage('team');
            }}
          />
        )}

        {currentPage === 'team' && (
          <TeamView 
            setCurrentPage={setCurrentPage} 
            selectedDoctorId={selectedDoctorId}
            setSelectedDoctorId={setSelectedDoctorId}
          />
        )}

        {currentPage === 'payments' && (
          <PaymentsView setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'book' && (
          <BookView 
            setCurrentPage={setCurrentPage} 
            selectedDoctorId={selectedDoctorId}
            setSelectedDoctorId={setSelectedDoctorId}
          />
        )}

      </main>

      {/* Speed Dial Floating Conversion Widget (Bottom Right corner) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 select-none font-heading">
        
        {showSpeedDial && (
          <div className="flex flex-col items-end gap-2 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-sand-100 animate-fadeIn mb-1 text-slate-800 max-w-xs shrink-0">
            <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
              Dundee Patient Care line
            </span>
            <div className="space-y-2 text-xs">
              <a 
                href={`tel:${CLINIC_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} 
                className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg font-bold text-slate-800"
              >
                <div className="p-1 bg-teal-50 text-teal-700 rounded-md">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>Call {CLINIC_INFO.phoneSecondary} (Primary)</span>
              </a>
              <button 
                onClick={() => {
                  setCurrentPage('book');
                  setShowSpeedDial(false);
                }}
                className="flex items-center gap-2 w-full text-left hover:bg-slate-50 p-2 rounded-lg font-bold text-slate-800"
              >
                <div className="p-1 bg-sand-50 text-sand-700 rounded-md">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>Request Appointment</span>
              </button>
              <div className="pt-1.5 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between items-center gap-2">
                <span>Google Rating</span>
                <span className="font-bold text-amber-600 bg-amber-50 px-1 py-0.5 rounded">★ 4.8 (130)</span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowSpeedDial(!showSpeedDial)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
            showSpeedDial 
              ? 'bg-slate-900 rotate-90 border-2 border-slate-700' 
              : 'bg-gradient-to-tr from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-teal-500/20'
          }`}
          aria-label="Direct support connections"
          title="Direct Patient Call & Map Help"
        >
          {showSpeedDial ? (
            <span className="text-xl font-black">✕</span>
          ) : (
            <PhoneCall className="w-6 h-6 animate-pulse" />
          )}
        </button>

      </div>

      {/* Shared Editorial Footer */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
