/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, Star, MapPin, CalendarDays, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  // Determine if clinic is currently open based on Dundee, FL time
  useEffect(() => {
    // Dundee, Florida is in Eastern Time (ET)
    // For estimation, let's look at the current time and determine status
    const updateClinicStatus = () => {
      const now = new Date();
      // Adjust to Florida local time (Eastern Standard/Daylight Time)
      const offset = -4; // approximate Florida Daylight savings offset in June (2026 is EDT)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const floridaTime = new Date(utc + (3600000 * offset));
      
      const day = floridaTime.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
      const hours = floridaTime.getHours();
      const minutes = floridaTime.getMinutes();
      const decimalTime = hours + minutes / 60;

      // Monday to Friday: 9:30 AM (9.5) to 5:30 PM (17.5)
      if (day >= 1 && day <= 5) {
        if (decimalTime >= 9.5 && decimalTime < 17.5) {
          setIsOpenNow(true);
          return;
        }
      }
      setIsOpenNow(false);
    };

    updateClinicStatus();
    const interval = setInterval(updateClinicStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Meet the Team' },
    { id: 'payments', label: 'Payment & Insurance' },
  ] as const;

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-sand-100 shadow-xs">
      {/* Top Banner Information Row - Trust & Essential Info */}
      <div className="bg-[#0f454c] text-white py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a 
              href="https://maps.google.com/?q=28029+US-27,+Dundee,+FL+33838"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 hover:text-sand-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-sand-500" />
              <span>{CLINIC_INFO.address}</span>
            </a>
            
            <a 
              href={`tel:${CLINIC_INFO.phonePrimary.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-sand-300 transition-colors font-medium text-white/94"
            >
              <Phone className="w-3.5 h-3.5 text-sand-500 animate-pulse" />
              <span>Call Us: {CLINIC_INFO.phonePrimary}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sand-500" />
              <div className="flex items-center gap-1.5">
                <span className="text-white/80">Clinic Status:</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider ${
                  isOpenNow 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {isOpenNow ? '● OPEN NOW' : '● CLOSED'}
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded border border-white/5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-amber-300">4.8</span>
              <span className="text-white/60">({CLINIC_INFO.rating.reviewsCount} Google Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand Frame */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="group flex items-center gap-3">
              <img 
                src="https://dentistbrausa.com/wp-content/uploads/2025/10/logo-brausa-1536x381.png" 
                alt="Dentist by Brausa" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-[#115961] text-base leading-none tracking-tight">
                  DENTIST
                </span>
                <span className="font-sans text-[10px] font-bold text-sand-600 tracking-widest leading-none mt-1">
                  BY BRAUSA
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-heading text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 ${
                  currentPage === item.id || (item.id === 'payments' && currentPage === 'payments')
                    ? 'text-teal-600'
                    : 'text-slate-600 hover:text-teal-500'
                }`}
              >
                {item.label}
                {(currentPage === item.id) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions Frame */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setCurrentPage('book')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-heading font-bold text-sm shadow-md shadow-teal-500/10 hover:shadow-lg hover:shadow-teal-500/20 hover:from-teal-600 hover:to-[#0f454c] hover:scale-[1.02] transition-all duration-300"
            >
              <CalendarDays className="w-4 h-4" />
              Schedule with Us
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setCurrentPage('book')}
              className="p-2.5 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors"
              title="Schedule"
            >
              <CalendarDays className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-sand-100 py-4 px-4 shadow-xl divide-y divide-sand-50">
          <div className="space-y-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl font-heading font-semibold text-base transition-colors ${
                  currentPage === item.id
                    ? 'bg-teal-50 text-teal-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setCurrentPage('book');
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-teal-500 text-white font-heading font-bold rounded-xl text-center shadow-md hover:bg-teal-600 transition-all duration-300"
            >
              <CalendarDays className="w-5 h-5" />
              Schedule with Us
            </button>

            <div className="bg-sand-50 rounded-xl p-3 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <a href={`tel:${CLINIC_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="font-semibold underline">
                  {CLINIC_INFO.phonePrimary}
                </a>
              </div>
              <div className="pt-1.5 flex justify-between items-center">
                <span className="text-slate-500">Google Status</span>
                <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                  ★ 4.8 (130 Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
