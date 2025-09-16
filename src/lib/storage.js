const STORAGE_KEYS = {
  therapies: 'pk_therapies',
  sessions: 'pk_sessions',
  notifications: 'pk_notifications',
  progress: 'pk_progress',
  patients: 'pk_patients',
  staff: 'pk_staff',
  rooms: 'pk_rooms',
  packages: 'pk_packages',
  prefs: 'pk_prefs',
}

export function getLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function ensureDefaultTherapies(defaults) {
  const existing = getLocal(STORAGE_KEYS.therapies, null)
  if (!existing || !Array.isArray(existing) || existing.length === 0) {
    setLocal(STORAGE_KEYS.therapies, defaults)
  }
}

export function ensureDefaultDataset({ patients = [], staff = [], rooms = [], packages = [] }) {
  if (!getLocal(STORAGE_KEYS.patients, null)) setLocal(STORAGE_KEYS.patients, patients)
  if (!getLocal(STORAGE_KEYS.staff, null)) setLocal(STORAGE_KEYS.staff, staff)
  if (!getLocal(STORAGE_KEYS.rooms, null)) setLocal(STORAGE_KEYS.rooms, rooms)
  if (!getLocal(STORAGE_KEYS.packages, null)) setLocal(STORAGE_KEYS.packages, packages)
}

export function upsertSession(session) {
  const sessions = getLocal(STORAGE_KEYS.sessions, [])
  const updated = [...sessions, { id: crypto.randomUUID(), ...session }]
  setLocal(STORAGE_KEYS.sessions, updated)
  return updated
}

export function listSessions() {
  return getLocal(STORAGE_KEYS.sessions, [])
}

export function listTherapies() {
  return getLocal(STORAGE_KEYS.therapies, [])
}

export function listPatients() {
  return getLocal(STORAGE_KEYS.patients, [])
}

export function listStaff() {
  return getLocal(STORAGE_KEYS.staff, [])
}

export function listRooms() {
  return getLocal(STORAGE_KEYS.rooms, [])
}

export function listPackages() {
  return getLocal(STORAGE_KEYS.packages, [])
}

// CRUD helpers
export function addTherapy(t) {
  const list = listTherapies()
  list.push(t)
  setLocal(STORAGE_KEYS.therapies, list)
  return list
}

export function addPatient(p) {
  const list = listPatients()
  list.push({ id: crypto.randomUUID(), ...p })
  setLocal(STORAGE_KEYS.patients, list)
  return list
}

export function addStaff(s) {
  const list = listStaff()
  list.push({ id: crypto.randomUUID(), ...s })
  setLocal(STORAGE_KEYS.staff, list)
  return list
}

export function updateStaff(staffId, partial) {
  const list = listStaff()
  const updated = list.map(s => s.id === staffId ? { ...s, ...partial } : s)
  setLocal(STORAGE_KEYS.staff, updated)
  return updated
}

export function addRoom(r) {
  const list = listRooms()
  list.push({ id: crypto.randomUUID(), ...r })
  setLocal(STORAGE_KEYS.rooms, list)
  return list
}

export function addPackage(pkg) {
  const list = listPackages()
  list.push({ id: crypto.randomUUID(), ...pkg })
  setLocal(STORAGE_KEYS.packages, list)
  return list
}

export function addProgressEntry(entry) {
  const list = getLocal(STORAGE_KEYS.progress, [])
  list.push({ id: crypto.randomUUID(), ...entry })
  setLocal(STORAGE_KEYS.progress, list)
  return list
}

export function listProgress() {
  return getLocal(STORAGE_KEYS.progress, [])
}

export function getPrefs() {
  return getLocal(STORAGE_KEYS.prefs, { channels: { inapp: true, sms: false, email: true } })
}

export function setPrefs(prefs) {
  setLocal(STORAGE_KEYS.prefs, prefs)
}

export function resetAll() {
  Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k))
}

export { STORAGE_KEYS }


