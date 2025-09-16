export const DEFAULT_PATIENTS = [
  { id: 'p1', name: 'Asha Verma', program: '7-day detox', stage: 'Purvakarma' },
  { id: 'p2', name: 'Rahul Mehta', program: '14-day purification', stage: 'Pradhana' },
]

export const DEFAULT_STAFF = [
  { id: 's1', name: 'Dr. Kapoor', role: 'Doctor', shifts: ['09:00-13:00', '15:00-18:00'] },
  { id: 's2', name: 'Therapist Neha', role: 'Therapist', gender: 'F', shifts: ['10:00-14:00'] },
  { id: 's3', name: 'Therapist Arjun', role: 'Therapist', gender: 'M', shifts: ['12:00-16:00'] },
]

export const DEFAULT_ROOMS = [
  { id: 'r1', name: 'Theatre A (Male)', type: 'Theatre', gender: 'M' },
  { id: 'r2', name: 'Theatre B (Female)', type: 'Theatre', gender: 'F' },
  { id: 'r3', name: 'Steam Room 1', type: 'Steam' },
]

export const DEFAULT_PACKAGES = [
  { id: 'pkg1', name: '7-day detox', includes: ['abhyanga', 'swedana', 'basti'] },
  { id: 'pkg2', name: '14-day purification', includes: ['abhyanga', 'swedana', 'virechana', 'nasya'] },
]


