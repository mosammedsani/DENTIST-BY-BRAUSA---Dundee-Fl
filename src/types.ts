/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'team' | 'payments' | 'book';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  title: string;
  specialty: string;
  education: string[];
  description: string;
  avatarUrl: string;
  accentColor: string;
  stats: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  benefits: string[];
}

export interface InsuranceProvider {
  name: string;
  status: 'In-Network' | 'Verification Required';
  logoPlaceholder: string;
  bgColor: string;
  textColor: string;
}

export interface Booking {
  id: string;
  doctorName: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  selectedDate: string;
  selectedTime: string;
  insuranceProvider: string;
  reason: string;
  createdAt: string;
}
