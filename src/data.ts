/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Doctor, Service, InsuranceProvider } from './types';

export const CLINIC_INFO = {
  address: "28029 US-27, Dundee, FL 33838",
  phonePrimary: "(863) 547-4983",
  phoneSecondary: "(863) 258-1093",
  email: "info@brausa.com",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61551685336151",
    instagram: "https://www.instagram.com/dentistbrausa/"
  },
  rating: {
    stars: 4.8,
    reviewsCount: 130
  },
  hours: [
    { day: "Monday", time: "9:30 AM – 5:30 PM", short: "Mon" },
    { day: "Tuesday", time: "9:30 AM – 5:30 PM", short: "Tues" },
    { day: "Wednesday", time: "9:30 AM – 5:30 PM", short: "Wed" },
    { day: "Thursday", time: "9:30 AM – 5:30 PM", short: "Thurs" },
    { day: "Friday", time: "9:30 AM – 5:30 PM", short: "Fri" },
    { day: "Saturday", time: "Closed", short: "Sat" },
    { day: "Sunday", time: "Closed", short: "Sun" }
  ]
};

export const CLINIC_QUOTE = {
  text: "Our commitment is to provide high-quality dental care with empathy and attention, understanding your individual needs and helping you achieve a healthy, confident smile."
};

export const DOCTORS: Doctor[] = [
  {
    id: "nelson-marques",
    name: "Dr. Nelson Marques",
    role: "Specialist",
    title: "Specialist in Orofacial Harmonization and Dental Implants",
    specialty: "Implantology & Aesthetic Harmonization",
    education: [
      "University of Florida (Postgraduate training)",
      "MARC Institute in Miami (Advanced Facial Anatomy & Aesthetic Dentistry)",
      "30+ Years of Private Practice & Clinical Leadership"
    ],
    accentColor: "teal",
    description: "With over 30 years of experience, Dr. Nelson Marques combines advanced clinical expertise with a personalized approach to patient care. Trained at leading institutions including the University of Florida and the MARC Institute in Miami, he is recognized for his precision in implant and aesthetic procedures that help patients achieve healthy, confident smiles.",
    avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400", // Elegant dentist photo
    stats: [
      { label: "Experience", value: "30+ Years" },
      { label: "Implants Placed", value: "4,500+" },
      { label: "Certifications", value: "Board Certified" }
    ]
  },
  {
    id: "andre-edwards",
    name: "Dr. André Edwards",
    role: "General Dentist",
    title: "General Dentist — Restorative and Implant Dentistry",
    specialty: "Cosmetic, Restorative & Same-Day CAD/CAM Tech",
    education: [
      "University of Florida College of Dentistry (Doctor of Dental Medicine)",
      "CEREC Chairside Mastery (CAD/CAM Integration)",
      "Comprehensive Smile Rehabilitation Training"
    ],
    accentColor: "sand",
    description: "Dr. André Edwards combines advanced clinical training with a passion for modern restorative dentistry. A graduate of the University of Florida College of Dentistry, he has extensive experience in implant placement, same-day crowns using CEREC Chairside technology, and comprehensive smile rehabilitation. Known for his precision and patient-centered care, Dr. Edwards focuses on delivering functional and aesthetic results that improve both oral health and confidence.",
    avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400", // Elegant black dentist photo
    stats: [
      { label: "Designation", value: "DMD" },
      { label: "Technology", value: "CEREC Certified" },
      { label: "Focus", value: "Restorative" }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "orthodontics",
    title: "Orthodontics Braces",
    category: "Structural Orthodontics",
    description: "We offer several options for alleviating dental anxiety and are here to make you comfortable and relaxed during your dental procedures.",
    icon: "AlignHorizontalCenter",
    benefits: [
      "State-of-the-art alignment options",
      "Anxiety-alleviating procedural approach",
      "Comfortable & customized custom brackets",
      "Regular tracking and customized adjustments"
    ]
  },
  {
    id: "cleaning",
    title: "Dental Cleaning",
    category: "Preventative Oral Hygiene",
    description: "It is part of oral hygiene and involves the removal of dental plaque from teeth in order to prevent cavities, gingivitis and periodontal diseases. Tartar or Gingival calculus.",
    icon: "Sparkles",
    benefits: [
      "Plaque & Tartar removal",
      "Gingivitis & Periodontal disease prevention",
      "Deep calculus scaling",
      "Polishing for a brilliant feeling"
    ]
  },
  {
    id: "whitening",
    title: "Tooth Whitening",
    category: "Cosmetic Aesthetics",
    description: "We have different ways to achieve the white smile you so desire, so pay a visit to one of our clinics for a quick consultation. So we can present you the best solutions for your whitening process.",
    icon: "Sun",
    benefits: [
      "Tailored shade consultation",
      "Quick chairside option packages",
      "At-home professional maintenance",
      "Safe, low-sensitivity chemical systems"
    ]
  }
];

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  { name: "Humana", status: "In-Network", logoPlaceholder: "Humana.", bgColor: "bg-green-50", textColor: "text-green-700" },
  { name: "Aetna", status: "In-Network", logoPlaceholder: "aetna", bgColor: "bg-purple-50", textColor: "text-purple-700" },
  { name: "Florida Blue", status: "In-Network", logoPlaceholder: "Florida Blue", bgColor: "bg-blue-50", textColor: "text-blue-700" },
  { name: "MetLife", status: "In-Network", logoPlaceholder: "MetLife", bgColor: "bg-cyan-50", textColor: "text-cyan-800" },
  { name: "Ameritas", status: "In-Network", logoPlaceholder: "Ameritas", bgColor: "bg-rose-50", textColor: "text-rose-700" },
  { name: "GEHA", status: "In-Network", logoPlaceholder: "GEHA.", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
  { name: "United Concordia Dental", status: "In-Network", logoPlaceholder: "UNITED CONCORDIA", bgColor: "bg-sky-50", textColor: "text-sky-800" },
  { name: "Delta Dental", status: "In-Network", logoPlaceholder: "DELTA DENTAL", bgColor: "bg-emerald-50", textColor: "text-emerald-700" },
  { name: "Cigna", status: "In-Network", logoPlaceholder: "Cigna", bgColor: "bg-teal-50", textColor: "text-teal-700" }
];

export const PAYMENT_TEXTS = {
  intro: "At Dentist by Brausa in Dundee, Florida, we provide a range of convenient payment options tailored to your preferences. You can choose from cash, personal checks, or debit/credit cards to settle your bills hassle-free.",
  careCredit: "Our office accepts CareCredit and Alphaeon Credi, a healthcare credit card that is used to pay for out-of-pocket expenses not covered by dental insurance. CareCredit is subject to credit approval, but once you are accepted, you can use it again and again. CareCredit is a great option if you're on a budget because you can pay for your dental expenses in installments. Ask us about CareCredit today! Applying is easy, and we are here to answer any questions.",
  insuranceGuideTitle: "Insurance Complexity & Relief",
  insuranceGuideIntro: "Dental insurance can be incredibly complex and it's common for patients to be unsure about their coverage. That's where Mirror Terrace Dental Care can help! Our team will verify your insurance AND file your claim for you!",
  insurancePpoDetail: "Our practice is in-network with a number of insurance providers, and we will file with any PPO insurance policy. Please bring a copy of your insurance card with you to your appointment we'll handle it from there.",
  workflowSteps: [
    "We submit your insurance claim for you at the time of your dental visit.",
    "We will follow up with your dental insurance company to ensure your claim is processed in a timely manner.",
    "This is a complimentary service we extend to all of our valued patients."
  ],
  warningNote: "*Please Note: Because there are so many insurance options available and a wide variety of factors can affect your coverage, we strongly recommend that you contact your insurance carrier prior to your visit. A consultation with your carrier about the amount and extent of your coverage will help prevent any confusion, misunderstandings, or frustration about your financial responsibility for certain services.",
  closingPromo: "If you're interested in learning more about what our dental practice has to offer, please contact us at +1 (863) 547 – 4983 today! We treat our patients like family, and we're happy to welcome new members."
};

export const FAQS = [
  {
    q: "How can you help me during my first visit?",
    a: "We perform a thorough evaluation of your teeth and gums, including custom low-radiation digital dental x-rays if necessary. We will review your goals and explain all clinical details so you feel completely secure and in control."
  },
  {
    q: "Do you treat patients with severe dental anxiety?",
    a: "Absolutely. We pride ourselves on custom pathways for anxious patients. We provide custom sedation options, gentle explanations, and clinical pacing matching your comfort levels."
  },
  {
    q: "How do I set up interest-free installments?",
    a: "We accept CareCredit and Alphaeon Credi. Our team can help you submit an easy online application during your consultation. Once approved, you can split your balance into affordable monthly payments, often with 0% interest."
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring a valid photo ID, your insurance card, and any records or x-rays from your previous dentist if available within the last six months."
  }
];
