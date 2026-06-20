/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail, ArrowUp, CalendarRange, Star, Award } from 'lucide-react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-100 font-sans border-t-8 border-teal-500">
      
      {/* Upper Interactive Promo Section */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-950 py-12 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-500/10 text-sand-300 text-xs font-bold uppercase tracking-wider border border-sand-500/20">
              <Award className="w-3.5 h-3.5" />
              Accepting New Patients
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Ready to meet our expert clinical team?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              We treat our patients like family. Schedule your first visit today and experience premium, compassionate dental care tailored to your specific goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href={`tel:${CLINIC_INFO.phonePrimary.replace(/[^0-9]/g, '')}`}
              className="px-5 py-3.5 bg-white/10 text-white rounded-lg hover:bg-white/15 border border-white/10 font-heading font-bold text-sm transition-all"
            >
              Call {CLINIC_INFO.phonePrimary}
            </a>
            <button
              onClick={() => {
                setCurrentPage('book');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sand-400 to-sand-500 text-slate-950 rounded-lg font-heading font-bold text-sm shadow-lg hover:from-sand-300 hover:to-sand-400 hover:scale-[1.02] transition-all"
            >
              <CalendarRange className="w-4 h-4" />
              Schedule with Us
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Footer Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 boder-b border-slate-800 pb-16">
          
          {/* Brand Presentation */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://dentistbrausa.com/wp-content/uploads/2025/10/logo-brausa-1536x381.png" 
                alt="Logo"
                className="h-10 w-auto bg-white/80 p-1.5 rounded-lg border border-white/15"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <h4 className="font-heading font-black text-white text-lg leading-none tracking-wide">
                  DENTIST
                </h4>
                <p className="font-sans text-[10px] font-bold text-sand-400 tracking-widest leading-none mt-1">
                  BY BRAUSA
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Complete, specialized dental care focused on your total wellness. Experienced practitioners delivering custom restorations and dental implants in Dundee, Florida.
            </p>

            {/* Social Channels */}
            <div className="space-y-2">
              <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider">Follow Us</span>
              <div className="flex items-center gap-3">
                <a 
                  href={CLINIC_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-teal-600 rounded-lg text-slate-300 hover:text-white border border-slate-700 hover:border-teal-500 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={CLINIC_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-teal-600 rounded-lg text-slate-300 hover:text-white border border-slate-700 hover:border-teal-500 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest border-l-4 border-sand-400 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'team', label: 'Meet the Doctors' },
                { id: 'payments', label: 'Payment Options' },
                { id: 'payments', label: 'Insurance Accepted' },
                { id: 'book', label: 'Request Appointment' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => {
                      setCurrentPage(link.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-teal-400 text-sm text-left transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address Cards */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest border-l-4 border-sand-400 pl-3">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold mb-0.5">Location</span>
                  <a 
                    href="https://maps.google.com/?q=28029+US-27,+Dundee,+FL+33838"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 underline transition-colors"
                  >
                    {CLINIC_INFO.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold mb-0.5">Call Centers</span>
                  <div className="space-y-1">
                    <a href={`tel:${CLINIC_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="block hover:text-teal-400 transition-colors font-semibold text-slate-300">
                      {CLINIC_INFO.phonePrimary} (Primary)
                    </a>
                    <a href={`tel:${CLINIC_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="block hover:text-teal-400 transition-colors text-slate-400">
                      {CLINIC_INFO.phoneSecondary} (Office Line)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold mb-0.5">Inquiries</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-teal-400 transition-colors underline">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Premium Dundee Map Frame */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest border-l-4 border-sand-400 pl-3">
              Office Map
            </h4>
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              {/* Fallback to custom vector map representation or standard OpenStreetMap frame */}
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.1408848773954!2d-81.61466332463406!3d28.02010467599951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd46bbee8b6ed5%3A0x6e9a0fcd56930ffd!2s28029%20US-27%2C%20Dundee%2C%20FL%2033838!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[0.85] contrast-[1.1]"
              ></iframe>
              <div className="absolute bottom-2 right-2">
                <a 
                  href="https://maps.google.com/?q=28029+US-27,+Dundee,+FL+33838" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-[#115961] text-xs text-white font-bold rounded shadow-md border border-teal-500 hover:bg-teal-600 transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Subfooter Row details */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Dentist by Brausa</span>. All Rights Reserved.
            </p>
            <p className="text-slate-600">
              {CLINIC_INFO.address} • Dual Lines: {CLINIC_INFO.phoneSecondary} / {CLINIC_INFO.phonePrimary} • {CLINIC_INFO.email}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button className="hover:text-teal-400 transition-colors">Privacy Policy</button>
            <span className="text-slate-800">|</span>
            <button className="hover:text-teal-400 transition-colors">Terms of Use</button>
            <span className="text-slate-800">|</span>
            <button 
              onClick={handleScrollTop}
              className="p-2 bg-slate-800 hover:bg-teal-600 rounded-lg text-slate-400 hover:text-white border border-slate-700 hover:border-teal-500 hover:scale-[1.05] transition-all"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
