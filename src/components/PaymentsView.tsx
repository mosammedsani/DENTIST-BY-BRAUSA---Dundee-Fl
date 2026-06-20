/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Banknote, CreditCard, MailCheck, ShieldCheck, 
  HelpCircle, ChevronRight, Calculator, FileSpreadsheet, 
  CheckCircle, Landmark, Sparkles, Smile, ArrowUpRight
} from 'lucide-react';
import { PAYMENT_TEXTS, INSURANCE_PROVIDERS, CLINIC_INFO } from '../data';
import { PageId } from '../types';

interface PaymentsViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function PaymentsView({ setCurrentPage }: PaymentsViewProps) {
  // Calculator Interactive States
  const [selectedProcedure, setSelectedProcedure] = useState<'custom' | 'cleaning' | 'whitening' | 'braces'>('cleaning');
  const [hasInsurance, setHasInsurance] = useState(true);
  const [useFinancing, setUseFinancing] = useState(false);
  const [insuranceRate, setInsuranceRate] = useState(80); // Default 80% coverage for cleaning
  const [customCost, setCustomCost] = useState('180');
  const [financingMonths, setFinancingMonths] = useState(12);

  // Constants
  const PROCEDURE_COSTS = {
    custom: 0,
    cleaning: 150,
    whitening: 350,
    braces: 2200
  };

  const getBaseCost = () => {
    if (selectedProcedure === 'custom') {
      return parseFloat(customCost) || 0;
    }
    return PROCEDURE_COSTS[selectedProcedure];
  };

  const calculateEstimates = () => {
    const base = getBaseCost();
    const insuranceContribution = hasInsurance ? (base * (insuranceRate / 100)) : 0;
    const patientResponsibility = Math.max(0, base - insuranceContribution);
    const monthlyInstallment = useFinancing ? (patientResponsibility / financingMonths) : 0;

    return {
      base: base.toFixed(2),
      insuranceContribution: insuranceContribution.toFixed(2),
      patientResponsibility: patientResponsibility.toFixed(2),
      monthlyInstallment: monthlyInstallment.toFixed(2)
    };
  };

  const est = calculateEstimates();

  // Search filter for insurance
  const [searchQuery, setSearchQuery] = useState('');
  const filteredInsurance = INSURANCE_PROVIDERS.filter(ins => 
    ins.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-24 pb-20">
      
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-[#0f454c]/10 to-transparent py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#145961] uppercase">Clear Financial Frameworks</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
            Tailored Payment Options & Insurance Guides
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Completing premium dental care shouldn't come with stress. Below, find our accepted payment channels, financing policies, and instant in-network insurance details.
          </p>
          <div className="w-16 h-1 bg-sand-400 mx-auto rounded mt-4" />
        </div>
      </section>

      {/* 1. Core Accepted Payment Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-sand-200/80 rounded-[2rem] p-8 sm:p-12 space-y-10 shadow-xs">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-sand-600 uppercase tracking-widest block mb-1">Standard Channels</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
              Payment Options & Preferred Methods
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
              {PAYMENT_TEXTS.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CASH CARD */}
            <div className="p-6 bg-sand-50 rounded-2xl border border-sand-200/50 flex flex-col gap-5 justify-between hover:scale-[1.01] transition-transform">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white text-sand-600 shadow-xs flex items-center justify-center">
                  <Banknote className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 uppercase">CASH / CHECK</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    We accept standard cash and personal checks. Ideal for direct payments and immediate clearing.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-sand-600 uppercase">Accepted Directly</span>
            </div>

            {/* CREDIT CARD CARD */}
            <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-100/50 flex flex-col gap-5 justify-between hover:scale-[1.01] transition-transform">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white text-teal-600 shadow-xs flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 uppercase">CREDIT CARD</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Quick swipe processing for Visa, Mastercard, Discover, and American Express. Secure encrypted transactions.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-teal-700 uppercase">Debit / Credit Accepted</span>
            </div>

            {/* PAYCHECK CARD */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50 flex flex-col gap-5 justify-between hover:scale-[1.01] transition-transform">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white text-slate-700 shadow-xs flex items-center justify-center">
                  <MailCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 uppercase">PAYCHECK</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Flexible options for corporate payroll programs, pre-tax HSA/FSA plans, or check-based payroll options.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">HSA/FSA Eligible</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive Co-Pay and Financing Calculator (Stunning Framer Agency Quality Widget) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 text-white rounded-[2rem] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Panel: Inputs */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1a6f78]/20 border border-teal-500/20 text-teal-300 text-[10px] uppercase font-bold tracking-widest font-mono">
                <Calculator className="w-3.5 h-3.5" /> Interactive Planner
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl">Co-Pay & Installment Simulator</h3>
              <p className="text-slate-400 text-xs">
                Estimate how accepted dental PPO coverage rates and CareCredit financing installment structures can combine to make treatment budgets perfect.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Step A: Select Procedure */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Select Target Dental Treatment:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'cleaning', label: 'Cleaning' },
                    { id: 'whitening', label: 'Whitening' },
                    { id: 'braces', label: 'Braces' },
                    { id: 'custom', label: 'Custom Cost' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProcedure(p.id as any)}
                      className={`py-3.5 px-3 rounded-xl font-heading font-black text-xs text-center border capitalize transition-all cursor-pointer ${
                        selectedProcedure === p.id 
                          ? 'bg-teal-500 text-white border-teal-400 shadow-md' 
                          : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step B: Custom Cost value input */}
              {selectedProcedure === 'custom' && (
                <div className="space-y-2 animate-fadeIn">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Input Estimated Treatment Cost ($):
                  </label>
                  <input
                    type="number"
                    value={customCost}
                    onChange={(e) => setCustomCost(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono font-bold focus:outline-none focus:border-teal-500 text-sm"
                    placeholder="Enter Custom Value (e.g. $500)"
                  />
                </div>
              )}

              {/* Step C: Insurance Configuration slider */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Will you utilize Dental PPO Insurance?
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setHasInsurance(false)}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase ${!hasInsurance ? 'bg-amber-600/50 text-white border border-amber-500' : 'bg-white/5 text-slate-400'}`}
                    >
                      No
                    </button>
                    <button
                      onClick={() => setHasInsurance(true)}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase ${hasInsurance ? 'bg-emerald-600/50 text-white border border-emerald-500' : 'bg-white/5 text-slate-400'}`}
                    >
                      Yes
                    </button>
                  </div>
                </div>

                {hasInsurance && (
                  <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/5 animate-fadeIn">
                    <div className="flex justify-between items-center text-xs text-slate-300">
                      <span>Assumed PPO Coverage Rate (%):</span>
                      <span className="font-mono font-bold text-teal-300">{insuranceRate}% Cover</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={insuranceRate}
                      onChange={(e) => setInsuranceRate(parseInt(e.target.value))}
                      className="w-full accent-teal-400 cursor-ew-resize bg-white/10 h-1.5 rounded-lg"
                    />
                    <span className="block text-[10px] text-slate-400">
                      (Standard preventative PPO cleaning covers 80% to 100%. Major ortho varies matchwise.)
                    </span>
                  </div>
                )}
              </div>

              {/* Step D: Installment Financing Structure toggle */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="flex justify-between items-center font-sans text-xs">
                  <span className="font-bold uppercase text-slate-300">Apply CareCredit Installments?</span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setUseFinancing(false)}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase ${!useFinancing ? 'bg-amber-600/50 text-white border border-amber-500' : 'bg-white/5 text-slate-400'}`}
                    >
                      No
                    </button>
                    <button
                      onClick={() => setUseFinancing(true)}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase ${useFinancing ? 'bg-[#115961]/75 text-white border border-teal-500' : 'bg-white/5 text-slate-400'}`}
                    >
                      Yes
                    </button>
                  </div>
                </div>

                {useFinancing && (
                  <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/5 animate-fadeIn">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase">Financing Installment Months:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[6, 12, 24].map((m) => (
                        <button
                          key={m}
                          onClick={() => setFinancingMonths(m)}
                          className={`py-2 rounded font-mono text-xs font-bold border transition-colors ${
                            financingMonths === m ? 'bg-sand-400 text-slate-950 border-sand-300' : 'bg-white/5 text-slate-300 border-white/5'
                          }`}
                        >
                          {m} Months
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Panel: Output breakdown screen (Glassmorphism look) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-800 to-teal-950 p-8 sm:p-12 relative flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 shrink-0">
            
            <div className="space-y-6">
              <span className="block text-[10px] uppercase font-bold text-sand-400 tracking-widest font-mono">
                Simulated Summary
              </span>

              <div className="space-y-4">
                
                {/* Total Treatment Bill */}
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-slate-300 text-xs">Total Procedure Cost:</span>
                  <span className="font-mono text-xl font-bold">${est.base}</span>
                </div>

                {/* Insurance contribution */}
                {hasInsurance && (
                  <div className="flex justify-between items-center text-xs text-slate-300 border-b border-white/5 pb-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      In-Network PPO Covered:
                    </span>
                    <span className="font-mono text-emerald-300 font-semibold">-${est.insuranceContribution}</span>
                  </div>
                )}

                {/* Patient OOP Responsbility */}
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-100 text-sm font-semibold">Estimated Out-Of-Pocket:</span>
                  <span className="font-mono text-2xl font-black text-sand-300">${est.patientResponsibility}</span>
                </div>

              </div>
            </div>

            {/* Installments specific card result */}
            <div className="pt-6 border-t border-white/15 space-y-4">
              {useFinancing ? (
                <div className="bg-white/10 p-4 rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-sand-300 font-bold uppercase">
                    <Landmark className="w-3.5 h-3.5 text-sand-400" />
                    CareCredit Financing Option
                  </div>
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="font-mono text-2xl font-black text-white">${est.monthlyInstallment}</span>
                    <span className="text-[10px] text-slate-300">/ per month</span>
                  </div>
                  <span className="block text-[9px] text-slate-400">
                    (Requires direct credit application approval. Term length: {financingMonths} months with 0% promo APR.)
                  </span>
                </div>
              ) : (
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center text-slate-400 text-xs leading-normal">
                  Toggle CareCredit input parameters to split out-of-pocket costs into affordable monthly installments seamlessly.
                </div>
              )}

              <button
                onClick={() => {
                  setCurrentPage('book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-slate-900 font-heading font-black text-xs uppercase tracking-wider rounded-xl hover:bg-sand-400 hover:text-slate-950 transition-colors"
              >
                Schedule Appointment Consultation
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* 3. CareCredit & Alphaeon Credi detailed financing explanation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf8f5] rounded-3xl border border-sand-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 shrink-0 flex justify-center">
            {/* Elegant credit icon simulation */}
            <div className="relative w-72 h-44 rounded-2xl bg-gradient-to-tr from-[#115961] to-[#0f454c] text-white p-6 shadow-xl border border-white/10 overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full bg-white/5 translate-x-10 translate-y-10" />
              <div className="flex justify-between items-start">
                <div>
                  <span className="block font-heading font-bold text-lg leading-none">CareCredit</span>
                  <span className="text-[9px] text-teal-300 font-mono tracking-widest uppercase">Healthcare Credit Card</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-sand-300">
                  CC
                </div>
              </div>
              
              <div className="space-y-1">
                <span className="block text-[8px] tracking-wider text-slate-400 uppercase font-mono">Patient Account</span>
                <span className="font-mono text-xs tracking-widest text-[#e8ded0]">•••• •••• •••• 2026</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sand-600 tracking-wider uppercase">Preferred Financing Program</span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                CareCredit & Alphaeon Credi Healthcare Cards
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-normal">
              {PAYMENT_TEXTS.careCredit}
            </p>

            <div className="flex gap-4 items-center flex-wrap pt-2">
              <a 
                href="https://www.carecredit.com/apply/"
                target="_blank" 
                rel="noreferrer noopener"
                className="px-5 py-3 bg-[#115961] text-white hover:bg-[#09353a] rounded-xl font-heading font-bold text-xs transition-colors"
              >
                Apply for CareCredit
              </a>
              <span className="text-slate-400 text-xs">or</span>
              <a 
                href="https://goalphaeon.com/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-slate-700 hover:text-teal-700 font-heading font-bold text-xs underline"
              >
                Inquire Alphaeon Credit
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Complete Detailed Insurance & Verification Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed content panel */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">Seamless Claim Filings</span>
              <h2 className="font-heading font-black text-3xl text-slate-900 leading-tight">
                {PAYMENT_TEXTS.insuranceGuideTitle}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {PAYMENT_TEXTS.insuranceGuideIntro}
              </p>
            </div>

            <div className="p-6 bg-teal-500/5 rounded-2xl border border-teal-500/10 space-y-2">
              <h4 className="font-heading font-bold text-sm text-[#145961]">PPO Network Status</h4>
              <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                {PAYMENT_TEXTS.insurancePpoDetail}
              </p>
            </div>

            {/* Step-by-step list from text (Here's how it works) */}
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#145961] text-lg uppercase tracking-wider">
                Here's how it works:
              </h3>
              
              <div className="space-y-3">
                {PAYMENT_TEXTS.workflowSteps.map((step, index) => (
                  <div key={index} className="flex gap-3.5 items-start p-4 bg-white border border-sand-100/85 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-sand-100 text-sand-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-normal">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning note verbatim block */}
            <div className="p-5 bg-[#faf8f5] rounded-xl border border-sand-200 text-xs text-slate-500 leading-relaxed italic">
              {PAYMENT_TEXTS.warningNote}
            </div>

          </div>

          {/* Right interactive insurance verified badges */}
          <div className="lg:col-span-5 bg-white border border-sand-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs sticky top-24">
            
            <div className="space-y-1">
              <h3 className="font-heading font-black text-lg text-slate-950">Carrier Search Tool</h3>
              <p className="text-xs text-slate-500">
                Confirm your dental carrier is accepted in-network at Dentist by Brausa.
              </p>
            </div>

            {/* Search Input Field */}
            <input
              type="text"
              placeholder="Search e.g. Humana, MetLife"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 text-xs"
            />

            {/* Real insurance carrier feedback list */}
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {filteredInsurance.length > 0 ? (
                filteredInsurance.map((ins, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-sand-50 bg-sand-50/40">
                    <div className="flex items-center gap-2.5">
                      <div className={`px-2 py-1 text-xs font-black rounded border border-slate-100/50 ${ins.bgColor} ${ins.textColor} shadow-2xs`}>
                        {ins.logoPlaceholder}
                      </div>
                      <span className="font-heading font-bold text-xs text-slate-800">{ins.name}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-100/30">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      In-Network
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-slate-400 text-xs">
                  No matching carrier found. We verify and accept any standard PPO policy.
                </div>
              )}
            </div>

            <div className="p-4 bg-teal-500/5 rounded-xl border border-teal-500/10 text-center text-xs text-[#145961] space-y-2">
              <p className="font-semibold text-slate-700">Need immediate verification assistance?</p>
              <a href={`tel:${CLINIC_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="block font-heading font-black text-sm text-[#145961] underline hover:text-teal-700">
                Call {CLINIC_INFO.phoneSecondary}
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* Promo banner closing block verbatim */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#115961] rounded-[2rem] p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0f454c]/30 z-0" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <Smile className="w-12 h-12 text-sand-300 mx-auto" />
            <p className="font-heading font-bold text-lg sm:text-xl leading-relaxed">
              {PAYMENT_TEXTS.closingPromo}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentPage('book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-sand-400 to-sand-500 text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:from-sand-300 hover:to-sand-400 transition-colors"
              >
                Book Dental Visit Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
