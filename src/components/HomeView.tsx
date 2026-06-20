/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Phone, Clock, CalendarDays, ArrowRight, Sparkles, 
  ChevronRight, Quote, Heart, Shield, Award, CheckCircle2,
  Stethoscope, HelpCircle, UserCheck, Star
} from 'lucide-react';
import { PageId, Service } from '../types';
import { CLINIC_INFO, CLINIC_QUOTE, DOCTORS, SERVICES, INSURANCE_PROVIDERS, FAQS } from '../data';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  setSelectedDoctorId?: (id: string) => void;
}

export default function HomeView({ setCurrentPage, setSelectedDoctorId }: HomeViewProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showFirstVisitModal, setShowFirstVisitModal] = useState(false);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const quickLinksData = [
    {
      title: "How We Can Help You?",
      content: `At Dentist by Brausa, we specialize in high-end restorative, aesthetic, and implant procedures. Whether you need a simple cleaning, professional whitening, or complex implantology and orofacial harmonization, our clinicians unite advanced technology (like CEREC CAD/CAM same-day crowns) with absolute gentleness.`
    },
    {
      title: "Appointment FAQs",
      content: `Appointments can be made easily by clicking our 'Schedule with Us' banner. We match you with the correct dentist suited for your goals. We request you arrive 15 minutes early on your first visit. If you hold dental coverage, our coordinators file claims on your behalf instantly.`
    },
    {
      title: "Payment Options & CareCredit",
      content: `Settling payments is painless. We accept Cash, Debit/Credit Cards, and Personal Checks. Additionally, we integrate with CareCredit and Alphaeon Credi so you can pay for clinical care in interest-free monthly installments. Click to navigate directly to our detailed guide.`
    }
  ];

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH ELITE DIGITAL AGENCY STYLING */}
      <section className="relative bg-gradient-to-b from-teal-50/70 via-sand-50/50 to-white pt-10 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#bf997a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-500/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-spin" />
              <span>Dundee's Elite Dental Practice</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight">
              Complete dental care focused on your <span className="text-[#145961] underline decoration-sand-400 decoration-wavy decoration-3">total well-being</span>.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal opacity-90">
              Achieve a confident, healthy smile. At Dentist by Brausa, our team delivers personalized dental care designed to help you reach your ideal smile.
            </p>

            {/* Quick Hero Actions Frame */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('book')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-heading font-extrabold text-sm shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35 hover:from-teal-600 hover:to-teal-700 hover:scale-[1.02] transition-all duration-300"
              >
                <CalendarDays className="w-5 h-5" />
                Schedule with Us
              </button>
              
              <button
                onClick={() => {
                  const target = document.getElementById('visit-sections');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 rounded-xl font-heading font-bold text-sm border border-sand-200 shadow-sm hover:bg-sand-50 hover:border-sand-300 transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-sand-500" />
                Find Our Clinic
              </button>
            </div>

            {/* Social Proof Badges Row */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-sand-100 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block font-heading font-black text-2xl text-teal-700">4.8</span>
                <span className="text-[11px] font-sans font-medium text-slate-500">Google Rating</span>
              </div>
              <div className="text-center lg:text-left border-x border-sand-100 px-2">
                <span className="block font-heading font-black text-2xl text-teal-700">130+</span>
                <span className="text-[11px] font-sans font-medium text-slate-500">Patient Reviews</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-heading font-black text-2xl text-teal-700">30+ Yrs</span>
                <span className="text-[11px] font-sans font-medium text-slate-500">Experience</span>
              </div>
            </div>

          </div>

          {/* Hero Right Media Column - Premium dentist visual mockups */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-teal-100 to-sand-100 opacity-60 blur-2xl -z-10 animate-pulse" />
            
            {/* Main Interactive Visual Frame */}
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative group bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600&h=450" 
                alt="Dentist by Brausa Premium Office Experience" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Info Accent Card Inside Hero Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-sand-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-700 font-bold text-sm">
                    FL
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs text-slate-800">Dundee Office Space</span>
                    <span className="block text-[10px] text-slate-500">Family Comfort Built-In</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 px-2 py-1 rounded text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.8</span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-lg border border-sand-100 animate-float">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="block font-bold text-slate-800">In-Network</span>
                <span className="text-[10px] text-slate-500">Most PPO Insurance</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. VISIT US, HOURS & MAP CARDS SECTION */}
      <section id="visit-sections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest text-[#145961] uppercase">Clinic Access Points</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">Visit Us & Clinic Schedule</h2>
          <div className="w-20 h-1 bg-sand-400 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Visit Us */}
          <div className="bg-white rounded-2xl border border-sand-200/80 p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-sand-100/50 group-hover:scale-125 transition-transform" />
            <div className="space-y-6 z-10 relative">
              <div className="w-12 h-12 bg-sand-100 text-sand-700 rounded-xl flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6 text-sand-600" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-heading font-black text-xl text-slate-900">Visit Us</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  28029 US-27<br />Dundee, FL 33838
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-50">
                <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Lines</h4>
                <div className="space-y-1">
                  <a href={`tel:${CLINIC_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="block hover:text-teal-600 font-bold text-[#145961] transition-colors">
                    {CLINIC_INFO.phoneSecondary} (Office)
                  </a>
                  <a href={`tel:${CLINIC_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="block text-slate-500 hover:underline text-xs">
                    {CLINIC_INFO.phonePrimary} (Alt Call)
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-sand-100">
              <a 
                href="https://maps.google.com/?q=28029+US-27,+Dundee,+FL+33838"
                target="_blank" 
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 w-full justify-center bg-slate-900 text-white font-heading font-bold text-xs rounded-xl hover:bg-teal-700 transition-colors"
              >
                Get to Direction
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="bg-[#115961] rounded-2xl p-8 text-white shadow-lg relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-teal-500/20 group-hover:scale-125 transition-transform" />
            <div className="space-y-6 z-10 relative">
              <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center font-bold">
                <Clock className="w-6 h-6 text-sand-300" />
              </div>
              
              <div>
                <h3 className="font-heading font-black text-xl text-white">Our Hours</h3>
                <p className="text-teal-100 text-xs mt-1">Accepting bookings Monday to Friday</p>
              </div>

              <div className="space-y-2 pt-1">
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm py-1 border-b border-white/5 last:border-0">
                    <span className="font-medium text-teal-100">{h.day}</span>
                    <span className={`font-mono text-xs font-semibold ${h.time === 'Closed' ? 'text-sand-400' : 'text-white'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Google Map Frame */}
          <div className="bg-white rounded-2xl border border-sand-200/80 p-3 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
            <div className="w-full h-full min-h-[280px] rounded-xl overflow-hidden relative shadow-inner flex-1 border border-sand-100">
              <iframe 
                title="Dundee Location Map Details"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.1408848773954!2d-81.61466332463406!3d28.02010467599951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd46bbee8b6ed5%3A0x6e9a0fcd56930ffd!2s28029%20US-27%2C%20Dundee%2C%20FL%2033838!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="p-3 pt-4 text-center">
              <p className="text-slate-500 text-xs">
                Located conveniently directly on US-27 in Dundee with abundant complimentary parking.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. NEW PATIENT & QUICK LINKS ACCORDIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-teal-900 to-slate-900 text-white rounded-[2rem] px-6 sm:px-12 py-12 sm:py-16 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-sand-500/5 rounded-full blur-3xl" />
          <div className="absolute left-10 bottom-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* New Patient Content Panel */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-1 px-3 py-1 bg-teal-500/20 text-teal-300 font-heading font-extrabold text-xs uppercase tracking-widest rounded-full border border-teal-500/30">
                New Patient
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                Your First Visit
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                Feeling nervous before your first visit can be a challenge. Knowing what to expect can help decrease some of your nerves before your first visit to our dental office.
              </p>
              
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowFirstVisitModal(true)}
                  className="px-6 py-3.5 bg-gradient-to-r from-sand-400 to-sand-500 hover:from-sand-300 hover:to-sand-400 text-slate-950 font-heading font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  What to Expect
                </button>
                
                <button
                  onClick={() => {
                    setCurrentPage('payments');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 group text-sm text-sand-300 hover:text-white font-bold transition-colors py-2"
                >
                  <span>Browse Payment Guides</span>
                  <ChevronRight className="w-4 h-4 text-sand-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Quick Links Accordion Panel */}
            <div className="lg:col-span-6 space-y-4">
              <div className="pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-sand-400">Quick Links</span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-1">How Can We Direct You?</h3>
              </div>

              <div className="space-y-3">
                {quickLinksData.map((link, idx) => {
                  const isSelected = activeAccordion === idx;
                  return (
                    <div 
                      key={idx}
                      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                        isSelected 
                          ? 'bg-white/10 border-teal-500/40' 
                          : 'bg-white/5 border-white/5 hover:bg-white/8'
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex justify-between items-center p-4 text-left font-heading font-black select-none text-white text-sm focus:outline-none"
                      >
                        <span>{link.title}</span>
                        <ChevronRight className={`w-4 h-4 text-sand-400 transform transition-transform duration-300 ${
                          isSelected ? 'rotate-90' : 'rotate-0'
                        }`} />
                      </button>
                      
                      {isSelected && (
                        <div className="px-4 pb-4 font-sans text-xs text-slate-300 leading-relaxed pt-1 border-t border-white/5">
                          <p>{link.content}</p>
                          {idx === 2 && (
                            <button
                              onClick={() => {
                                setCurrentPage('payments');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="mt-2.5 inline-flex items-center gap-1 text-teal-300 hover:text-white underline font-bold"
                            >
                              Explore options & insure details
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-xs text-slate-400 text-center">
                Have additional questions? Call us at <a href={`tel:${CLINIC_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="text-white font-bold underline hover:text-sand-400">{CLINIC_INFO.phonePrimary}</a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. WE ACCEPT - HIGH-END BRAND TRUST COMPONENT */}
      <section className="bg-white border-y border-sand-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-heading font-bold text-xs uppercase tracking-widest text-slate-400 mb-8">
            WE ACCEPT MOST MAJOR DENTAL PPO INSURANCE IN-NETWORK
          </p>

          <div className="relative">
            {/* Smooth side fading overlays for luxurious look */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-85 hover:opacity-100 transition-opacity duration-300">
              {INSURANCE_PROVIDERS.map((ins, idx) => (
                <div 
                  key={idx} 
                  className={`px-4 py-2.5 rounded-lg border border-slate-100 font-heading font-black tracking-tighter text-sm ${ins.bgColor} ${ins.textColor} shadow-xs`}
                >
                  {ins.logoPlaceholder}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM PREVIEW HERO MODULE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-14">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold tracking-widest text-[#145961] uppercase">Experienced Practitioners</span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">Meet the Doctors</h2>
            <div className="w-16 h-1 bg-sand-400 rounded" />
          </div>

          <button 
            onClick={() => {
              setCurrentPage('team');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 font-heading font-extrabold pb-1.5 border-b-2 border-teal-500/30 hover:border-teal-700 transition-all"
          >
            <span>Learn More About Credentials & Technology</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Doctors Grid Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DOCTORS.map((doc, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[2rem] border border-sand-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
            >
              
              <div className="p-8 pb-4 space-y-6">
                
                {/* Doctor Avatar Header with high-end clinical styling */}
                <div className="flex items-center gap-5">
                  <div className={`w-20 h-20 rounded-2xl overflow-hidden shadow-inner ring-4 ${
                    idx === 0 ? 'ring-teal-500/10' : 'ring-sand-500/10'
                  }`}>
                    {/* Portrait Frame representing standard photo beautifully */}
                    <img 
                      src={doc.avatarUrl} 
                      alt={doc.name} 
                      className="w-full h-full object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sand-600">{doc.role}</span>
                    <h3 className="font-heading font-black text-2xl text-slate-900 mb-0.5">{doc.name}</h3>
                    <p className="text-slate-500 text-xs font-semibold">{doc.specialty}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-sand-50">
                  <span className="text-[10px] font-bold text-[#145961] uppercase tracking-widest block">Clinical Focus</span>
                  <p className="font-heading font-bold text-slate-800 text-sm leading-snug">{doc.title}</p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">{doc.description}</p>
                </div>

              </div>

              {/* Action and stats subrow inside card */}
              <div className="bg-sand-50/50 px-8 py-5 border-t border-sand-100 flex items-center justify-between gap-4">
                <div className="flex gap-4">
                  {doc.stats.slice(0, 2).map((st, i) => (
                    <div key={i}>
                      <span className="block text-[10px] uppercase font-bold text-slate-400 leading-none">{st.label}</span>
                      <span className="font-heading font-bold text-slate-800 text-sm">{st.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (setSelectedDoctorId) setSelectedDoctorId(doc.id);
                    setCurrentPage('team');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 bg-white text-slate-800 hover:bg-slate-900 hover:text-white rounded-lg font-heading font-bold text-xs border border-sand-200 transition-all"
                >
                  View Full Profile
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 6. OUR COMMITMENT - HIGH-CONTRAST EDITORIAL PORTRAIT QUOTE */}
      <section className="bg-[#fcfbf9] border-y border-sand-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 relative">
          
          <div className="absolute left-1/2 -top-10 -translate-x-1/2 text-sand-200 pointer-events-none select-none">
            <Quote className="w-16 h-16 transform rotate-180 opacity-50 block" />
          </div>

          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-normal z-10 relative">
            "{CLINIC_QUOTE.text}"
          </p>

          <div className="inline-flex items-center gap-2 pt-4">
            <span className="w-8 h-0.5 bg-sand-400" />
            <div className="flex items-center gap-1">
              <span className="font-heading font-black text-xs uppercase tracking-wider text-slate-800">Dentist by Brausa</span>
              <span className="text-xs text-slate-400">• Dundee, FL</span>
            </div>
            <span className="w-8 h-0.5 bg-sand-400" />
          </div>

        </div>
      </section>

      {/* 7. SERVICES LIST & EXPANSIONS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#145961] uppercase">Dedicated Clinical Excellence</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">Featured Dental Dental Services</h2>
          <div className="w-16 h-1 bg-sand-400 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-sand-200/80 p-8 shadow-xs hover:shadow-xl transition-all duration-350 relative group flex flex-col justify-between"
            >
              
              <div className="space-y-6">
                
                {/* Visual Icon and Header indicator */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-700 rounded-xl flex items-center justify-center">
                    {idx === 0 && <Stethoscope className="w-6 h-6" />}
                    {idx === 1 && <Sparkles className="w-6 h-6" />}
                    {idx === 2 && <Star className="w-6 h-6 text-amber-500 fill-amber-500/25" />}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase font-mono">
                    Service {idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-sand-600 tracking-wider uppercase block">{srv.category}</span>
                  <h3 className="font-heading font-black text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                    {srv.description}
                  </p>
                </div>

                {/* Benefits Bullet Points */}
                <div className="space-y-2 pt-4 border-t border-slate-50">
                  {srv.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-8 mt-6 border-t border-slate-50">
                <button
                  onClick={() => {
                    setCurrentPage('book');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-teal-50 hover:text-teal-800 text-slate-800 text-xs font-heading font-bold rounded-lg transition-all"
                >
                  <span>Inquire or Book Session</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setCurrentPage('payments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-white hover:bg-slate-900 border border-sand-300 hover:border-slate-900 hover:text-white rounded-xl font-heading font-bold text-sm tracking-wide transition-all shadow-xs"
          >
            See All Services & Insurance Rates
          </button>
        </div>

      </section>

      {/* Modal describing "What to Expect" for first visit */}
      {showFirstVisitModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-sand-100 shadow-2xl relative space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] tracking-wider uppercase font-bold text-teal-600">Onboarding Guide</span>
                <h3 className="font-heading font-black text-2xl text-slate-900">Your First Visit Guide</h3>
              </div>
              <button 
                onClick={() => setShowFirstVisitModal(false)}
                className="p-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Feeling nervous is natural. Here is a clear breakdown of the comfortable experience we prepare for you at Dentist by Brausa:
            </p>

            <div className="space-y-3.5">
              {[
                { step: "01", name: "Warm Reception", desc: "Enjoy cozy seating in our welcoming lobby. We verify your forms and answer initial concerns." },
                { step: "02", name: "Comprehensive Diagnostics", desc: "We utilize low-radiation x-rays to map anatomical realities without quick stress." },
                { step: "03", name: "Specialized Review", desc: "Dr. Nelson Marques or Dr. André Edwards walk through images to build your ideal treatment trajectory." }
              ].map((s, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="font-heading font-black text-teal-500 text-lg leading-none pt-0.5">{s.step}</div>
                  <div className="space-y-0.5">
                    <h4 className="font-heading font-bold text-slate-800 text-sm leading-tight">{s.name}</h4>
                    <p className="text-slate-500 text-xs">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-sans-100 flex gap-3">
              <button
                onClick={() => {
                  setShowFirstVisitModal(false);
                  setCurrentPage('book');
                }}
                className="flex-1 py-3 text-center bg-teal-500 hover:bg-teal-600 text-white font-heading font-bold text-sm rounded-xl"
              >
                Schedule First Visit Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
