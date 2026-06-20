/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CalendarDays, UserCheck, Clock, ShieldCheck, 
  Sparkles, Check, AlertCircle, Trash2, Calendar, 
  CheckCircle, ArrowLeftRight, HeartHandshake, MapPin 
} from 'lucide-react';
import { DOCTORS, INSURANCE_PROVIDERS, CLINIC_INFO } from '../data';
import { Booking, PageId } from '../types';

interface BookViewProps {
  setCurrentPage: (page: PageId) => void;
  selectedDoctorId?: string;
  setSelectedDoctorId?: (id: string | undefined) => void;
}

export default function BookView({ setCurrentPage, selectedDoctorId, setSelectedDoctorId }: BookViewProps) {
  // Local state form variables
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [doctorChoice, setDoctorChoice] = useState(selectedDoctorId || DOCTORS[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [insuranceChoice, setInsuranceChoice] = useState('Self-Pay / Cash');
  const [notes, setNotes] = useState('');
  
  // App state
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Load bookings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('dentist_by_brausa_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (err) {
        console.error("Local bookings corrupted", err);
      }
    }
  }, []);

  // Set default first doctor choice if changed externally
  useEffect(() => {
    if (selectedDoctorId) {
      setDoctorChoice(selectedDoctorId);
    }
  }, [selectedDoctorId]);

  const timeSlots = [
    "09:30 AM", "10:15 AM", "11:00 AM", "11:45 AM",
    "01:30 PM", "02:15 PM", "03:00 PM", "03:45 PM", "04:30 PM"
  ];

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!patientName.trim()) return setErrorMessage('Patient full name is required');
    if (!patientEmail.trim()) return setErrorMessage('Valid email coordinates are required');
    if (!patientPhone.trim()) return setErrorMessage('Contact phone number is required');
    if (!selectedDate) return setErrorMessage('Please select a calendar date');
    if (!selectedTime) return setErrorMessage('Please select a specific time slot');

    const matchedDoc = DOCTORS.find(d => d.id === doctorChoice);

    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      doctorName: matchedDoc ? matchedDoc.name : 'Unassigned Clinician',
      patientName,
      patientEmail,
      patientPhone,
      selectedDate,
      selectedTime,
      insuranceProvider: insuranceChoice,
      reason: notes || 'General Dental Consultation',
      createdAt: new Date().toLocaleDateString()
    };

    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem('dentist_by_brausa_bookings', JSON.stringify(updated));

    // Success & local reset
    setShowSuccess(true);
    setPatientName('');
    setPatientEmail('');
    setPatientPhone('');
    setSelectedDate('');
    setSelectedTime('');
    setNotes('');
  };

  const handleDeleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('dentist_by_brausa_bookings', JSON.stringify(updated));
  };

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Dynamic Success Splash Overlay */}
      {showSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-[2rem] p-8 max-w-3xl mx-auto text-center space-y-6 shadow-sm animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase font-mono">Consultation Requested</span>
            <h2 className="font-heading font-black text-3xl text-slate-900">Appointment Provisionally Secured!</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Congratulations! Our lead clinical coordinator in Dundee will verify your chosen slot and contact you directly via <span className="font-bold text-slate-800">Phone & Email</span> shortly to finalize.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-sand-100 max-w-md mx-auto text-left text-xs divide-y divide-slate-50">
            <div className="py-2 flex justify-between">
              <span className="text-slate-400">Selected Doctor:</span>
              <span className="font-semibold text-slate-800">
                {bookings[0]?.doctorName}
              </span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-400 font-sans">Date Slot:</span>
              <span className="font-mono font-semibold text-slate-800">{bookings[0]?.selectedDate}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-400">Time Coordinates:</span>
              <span className="font-mono font-semibold text-slate-800">{bookings[0]?.selectedTime}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-400">Insurance Status:</span>
              <span className="font-semibold text-teal-700">{bookings[0]?.insuranceProvider}</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2.5 bg-[#115961] text-white hover:bg-teal-700 font-heading font-bold text-xs rounded-lg transition-colors"
            >
              Book Another Session
            </button>
            <button
              onClick={() => {
                setShowSuccess(false);
                setCurrentPage('home');
              }}
              className="px-6 py-2.5 bg-white text-slate-800 hover:bg-slate-50 border border-sand-200 font-heading font-bold text-xs rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Main Grid: Form Left, Historical Itinerary Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-10">
        
        {/* Scheduler Form Box */}
        <div className="lg:col-span-7 bg-white border border-sand-200/80 rounded-[2rem] p-6 sm:p-10 shadow-xs space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-800 text-[10px] uppercase font-bold tracking-widest rounded-full font-mono">
              <Calendar className="w-3.5 h-3.5" /> Interactive Scheduler
            </div>
            <h2 className="font-heading font-black text-3xl text-slate-900 leading-tight">
              Request Your Consultation
            </h2>
            <p className="text-slate-500 text-xs">
              Complete the quick fields below. Our clinic receptionist coordinates with doctors Nelson Marques & André Edwards to host your private visit cleanly.
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span className="font-semibold">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleCreateBooking} className="space-y-6">
            
            {/* Sec. 1: Basic credentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5 col-span-1">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Emily Watson"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 text-xs"
                />
              </div>

              <div className="space-y-1.5 col-span-1">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. emily@domain.com"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 text-xs"
                />
              </div>

              <div className="space-y-1.5 col-span-1">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. (863) 555-1234"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 text-xs"
                />
              </div>
            </div>

            {/* Sec. 2: Selecting doctor tab row */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Select Preferred Dentist *</label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCTORS.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => {
                      setDoctorChoice(doc.id);
                      if (setSelectedDoctorId) setSelectedDoctorId(doc.id);
                    }}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                      doctorChoice === doc.id
                        ? 'border-teal-600 bg-teal-500/5 ring-2 ring-teal-500/10'
                        : 'border-sand-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-100 shrink-0 bg-slate-100">
                      <img src={doc.avatarUrl} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="block font-heading font-bold text-xs text-slate-800">{doc.name}</span>
                      <span className="block text-[9px] text-slate-400 capitalize">{doc.role}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sec 3: Calendar date & Slot options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Select Calendar Date *</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]} // Require present or future days
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 font-mono text-xs focus:outline-none focus:border-teal-500"
                />
                <span className="block text-[9px] text-slate-400">
                  (Note: Clinic is closed Saturdays and Sundays cleanly.)
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Select Ideal Time Slot *</label>
                <select
                  required
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 text-xs cursor-pointer"
                >
                  <option value="">-- Choose specific slot --</option>
                  {timeSlots.map((ts, i) => (
                    <option key={i} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Sec 4: Insurance pre-validation selection */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Select Your Insurance Carrier (for filing claims instantly)
              </label>
              
              <select
                value={insuranceChoice}
                onChange={(e) => setInsuranceChoice(e.target.value)}
                className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 text-xs cursor-pointer"
              >
                <option value="Self-Pay / Cash">Self-Pay / No Active Dental Coverage</option>
                <option value="CareCredit Installment Card">Applying for CareCredit Installment Options</option>
                {INSURANCE_PROVIDERS.map((ins, i) => (
                  <option key={i} value={ins.name}>{ins.name} (PPO Network Plan)</option>
                ))}
              </select>
            </div>

            {/* Sec 5: Notes */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Reason/Notes for Clinicians (Optional)</label>
              <textarea
                rows={3}
                placeholder="Write specific symptoms, anxiety notes, dental crown inquiries, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 border border-sand-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 text-xs"
              />
            </div>

            {/* Booking Call-to-action */}
            <div className="pt-2 border-t border-slate-50">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#115961] hover:bg-[#073034] text-white rounded-xl font-heading font-extrabold text-sm shadow-md cursor-pointer transition-colors"
              >
                <CalendarDays className="w-5 h-5 text-sand-300" />
                Secure Appointment Provisional Request
              </button>
            </div>

          </form>

        </div>

        {/* Right Panel: Upcoming Bookings / Local History List & Dundee Map info page */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Calendar Information Block */}
          <div className="bg-[#faf8f5] border border-sand-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-heading font-bold text-[#145961] text-xs uppercase tracking-widest flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-sand-500" />
              Scheduling Instructions
            </h3>

            <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed font-sans font-normal">
              <p>
                To secure dates, we gather provisional slot details. Our lead clinic coordinator confirms actual scheduling alignment via phone shortly after submission.
              </p>
              <p>
                <strong>We Value Family & Comfort:</strong> Patients with severe dental anxiety are requested to indicate so in notes so specialists Nelson Marques or André Edwards plan a slower pacing threshold.
              </p>
              
              <div className="space-y-2 border-t border-sand-200/60 pt-3.5 text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#145961]" />
                  <span>{CLINIC_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct claims verification with Mirror Terrace Dental Care!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Local Active Bookings history frame */}
          <div className="bg-white border border-sand-200/80 rounded-3xl p-6 space-y-4 shadow-sm">
            <div className="flex justify-between items-center pb-2 border-b border-sand-50">
              <div>
                <h3 className="font-heading font-black text-sm text-slate-900">Your Scheduled Visits</h3>
                <p className="text-[10px] text-slate-400">Saved inside secure client cache</p>
              </div>
              <span className="inline-flex bg-teal-50 text-teal-700 font-bold text-[10px] px-2 py-0.5 rounded uppercase border border-teal-100">
                Active Itinerary ({bookings.length})
              </span>
            </div>

            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
              {bookings.length > 0 ? (
                bookings.map((b) => (
                  <div key={b.id} className="p-4 bg-sand-50/50 rounded-xl border border-sand-100 space-y-3 relative group">
                    <button
                      onClick={() => handleDeleteBooking(b.id)}
                      className="absolute top-3.5 right-3.5 p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all"
                      title="Cancel Booking Slot Request"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0" />
                        <span className="font-heading font-bold text-xs text-slate-800">{b.doctorName}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 font-mono text-[10px] text-slate-500">
                        <div>
                          <strong>Date:</strong> {b.selectedDate}
                        </div>
                        <div>
                          <strong>Time:</strong> {b.selectedTime}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-sans-100/50 flex justify-between items-center text-[10px]">
                      <span className="text-slate-400 font-sans">Coverage: {b.insuranceProvider}</span>
                      <span className="text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/30">
                        Provisionally Scheduled
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-400 text-xs space-y-2">
                  <p>You haven't requested any provisional dental tours yet.</p>
                  <p className="text-[10px] text-slate-400">Complete the scheduler form on the left to lock a slot!</p>
                </div>
              )}
            </div>

            {bookings.length > 0 && (
              <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
                Please bring an insurance card matching choice: "{bookings[0].insuranceProvider}"
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
