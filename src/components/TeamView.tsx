/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Award, GraduationCap, CheckCircle, ShieldCheck, 
  Calendar, Phone, Cpu, UserCheck, Heart, Star, Sparkles
} from 'lucide-react';
import { DOCTORS, CLINIC_INFO } from '../data';
import { PageId } from '../types';

interface TeamViewProps {
  setCurrentPage: (page: PageId) => void;
  selectedDoctorId?: string;
  setSelectedDoctorId?: (id: string | undefined) => void;
}

export default function TeamView({ setCurrentPage, selectedDoctorId, setSelectedDoctorId }: TeamViewProps) {
  // If no doctor is selected, default to the first doctor
  const [activeTab, setActiveTab] = useState(selectedDoctorId || DOCTORS[0].id);

  useEffect(() => {
    if (selectedDoctorId) {
      setActiveTab(selectedDoctorId);
    }
  }, [selectedDoctorId]);

  const activeDoc = DOCTORS.find(d => d.id === activeTab) || DOCTORS[0];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-[#0f454c]/10 to-transparent py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#145961] uppercase">Elite Clinical Practitioners</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
            Meet the Medical Pioneers
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Uniting over 30 years of clinical mastery with state-of-the-art restorative technology and personal empathy. Our doctors are certified leaders in Florida dentistry.
          </p>
          <div className="w-16 h-1 bg-sand-400 mx-auto rounded mt-4" />
        </div>
      </section>

      {/* Interactive Profile Deck & Bio Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Frame Selector */}
          <div className="lg:col-span-4 space-y-4">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Clinician</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-3 w-full">
              {DOCTORS.map((doc) => {
                const isActive = doc.id === activeTab;
                return (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setActiveTab(doc.id);
                      if (setSelectedDoctorId) setSelectedDoctorId(doc.id);
                    }}
                    className={`flex items-center gap-4 p-4 rounded-xl text-left border cursor-pointer w-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#115961] text-white border-teal-600 shadow-lg scale-[1.01]' 
                        : 'bg-white text-slate-800 border-sand-200/80 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 ${
                      isActive ? 'border-white/20' : 'border-slate-100'
                    }`}>
                      <img src={doc.avatarUrl} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm leading-tight">{doc.name}</h3>
                      <p className={`text-[11px] font-semibold ${isActive ? 'text-teal-200' : 'text-slate-500'}`}>
                        {doc.role}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* General Clinic Standards & Contact Badge inside Sidebar */}
            <div className="bg-[#faf8f5] rounded-2xl border border-sand-200 p-6 space-y-4">
              <h4 className="font-heading font-bold text-slate-800 text-xs uppercase tracking-widest">Our Clinical Vow</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                As registered members of the Florida Dental Association, our core mission revolves around modern sterilization, safety standard integration, and maximum anxiety relief.
              </p>
              
              <div className="space-y-3.5 border-t border-sand-200/60 pt-3">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#115961]" />
                  <span>Licensed Florida Clinicians</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500/25" />
                  <span>4.8 Rating Across 130 Reviews</span>
                </div>
                
                {/* Designated contact support area with info@brausa.com email */}
                <div className="pt-3 border-t border-sand-200/60 space-y-1">
                  <span className="block font-bold text-slate-700 uppercase tracking-widest text-[9px] font-mono">Support & Questions</span>
                  <p className="text-slate-500 text-[10px] leading-relaxed">
                    Questions about clinical approaches, treatment paths, or booking slots? Contact us immediately:
                  </p>
                  <a 
                    href="mailto:info@brausa.com" 
                    className="inline-block font-sans font-bold text-sm text-[#115961] underline hover:text-teal-700 transition-colors"
                  >
                    info@brausa.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Detailed focused profile display */}
          <div className="lg:col-span-8 bg-white border border-sand-200/80 rounded-[2rem] overflow-hidden shadow-sm p-5 sm:p-10 space-y-10 relative">
            
            <div className="absolute right-6 top-6 opacity-[0.03] select-none pointer-events-none">
              <Sparkles className="w-44 h-44 text-slate-900" />
            </div>

            {/* Profile Intro Header */}
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center justify-between pb-8 border-b border-sand-100">
              
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md shrink-0 border border-slate-100">
                  <img src={activeDoc.avatarUrl} alt={activeDoc.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sand-600 bg-sand-100/60 px-2.5 py-0.5 rounded-full uppercase">
                    {activeDoc.role}
                  </span>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mt-1.5">{activeDoc.name}</h2>
                  <p className="text-slate-500 text-sm font-semibold mt-0.5">{activeDoc.specialty}</p>
                </div>
              </div>

              {/* Dynamic stats row inside detail */}
              <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-6 pt-4 sm:pt-0 w-full sm:w-auto">
                {activeDoc.stats.map((st, i) => (
                  <div key={i} className="text-left bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">
                    <span className="block text-[9px] uppercase font-bold text-slate-400 leading-none mb-1">{st.label}</span>
                    <span className="font-heading font-black text-slate-800 text-base">{st.value}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Clinical bio details */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#145961]">Clinical Biography</h3>
              <p className="font-sans text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
                {activeDoc.title}
              </p>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeDoc.description}
              </p>
            </div>

            {/* Education lists */}
            <div className="space-y-4 pt-6 border-t border-sand-100">
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#145961] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-sand-500" />
                Specialized Training & Education credentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeDoc.education.map((edu, idx) => (
                  <div key={idx} className="p-4 bg-sand-50/50 rounded-xl border border-sand-100 flex gap-3 items-start">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-slate-700 font-semibold leading-relaxed">
                      {edu}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Spotlights based on text */}
            {activeDoc.id === 'andre-edwards' && (
              <div className="p-5 bg-teal-500/5 border border-teal-500/10 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm text-[#145961]">Advanced Technology Spotlight: CEREC Chairside</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dr. Edwards specializes heavily in CAD/CAM technology, allowing the creation and placement of realistic, high-grade dental crowns in a single clinical visit, preventing multiple appointments.
                  </p>
                </div>
              </div>
            )}

            {activeDoc.id === 'nelson-marques' && (
              <div className="p-5 bg-sand-500/5 border border-sand-500/10 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
                <div className="p-3 bg-sand-100 text-sand-700 rounded-xl">
                  <Heart className="w-6 h-6 text-sand-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm text-sand-800">Advanced Specialty Spotlight: Implantology</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    With over 30 years of experience, Dr. Marques matches surgical implant placement with beautiful facial aesthetic harmonization to restore complete smiles, ensuring long-term oral structural integrity.
                  </p>
                </div>
              </div>
            )}

            {/* Quick action scheduling link */}
            <div className="pt-6 border-t border-sand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Wish to secure a session with <span className="text-slate-900 font-bold">{activeDoc.name}</span>?
              </div>
              
              <button
                onClick={() => {
                  setCurrentPage('book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#115961] text-white font-heading font-bold text-xs rounded-xl hover:bg-teal-700 transition-colors"
              >
                <Calendar className="w-4 h-4 text-sand-400" />
                Schedule directly with {activeDoc.name.split(' ')[1]}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Clinical Values Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e8ded0]">Our Guiding Standard</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl">Comprehensive Patient-First Ethics</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              We operate above standard criteria of Dundee Florida clinical regulations. We ensure your comfort, from digital scans to customized healing schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Rigorous Safety", text: "Regular validation of high-end sterilization mechanisms matching hospital thresholds." },
              { title: "Specialized Precision", text: "Our techniques leverage 3D diagnostic systems to minimize patient post-operative pain." },
              { title: "Empathetic Pacing", text: "We pause procedures at your signal, ensuring absolute clinical relaxation and peace." }
            ].map((v, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl text-center space-y-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-300 font-bold flex items-center justify-center mx-auto text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-sm text-white">{v.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
