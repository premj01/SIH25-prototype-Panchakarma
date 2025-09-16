// Basic constraint helpers for scheduling prototype
import { listSessions, listRooms, listStaff, listTherapies } from '@/lib/storage'

export function hasRoomConflict(roomId, startIso, durationMins, bufferMins = 10) {
  const sessions = listSessions().filter(s => s.roomId === roomId)
  const start = new Date(startIso).getTime()
  const end = start + (durationMins + bufferMins) * 60000
  return sessions.some(s => {
    const sStart = new Date(s.datetime).getTime()
    const t = listTherapies().find(t => t.key === s.therapyKey)
    const sEnd = sStart + ((t?.durationMins || 60) + bufferMins) * 60000
    return (start < sEnd && end > sStart)
  })
}

export function isStaffAvailable(staffId, timeIso) {
  const staff = listStaff().find(s => s.id === staffId)
  if (!staff?.shifts?.length) return false
  // Extract local HH:MM robustly from the input without Date timezone pitfalls
  const hhmm = (timeIso.split('T')[1] || '').slice(0, 5)
  if (!/^\d{2}:\d{2}$/.test(hhmm)) return false
  return staff.shifts.some(range => {
    const [from, to] = range.split('-').map(s => s.trim())
    return from <= hhmm && hhmm <= to
  })
}

export function enforceStageDependency(currentStage, therapyKey) {
  // Simplified: allow Pradhana only if not Purvakarma when therapy is core
  const core = ['virechana', 'vamana', 'basti', 'nasya', 'raktamokshana']
  if (core.includes(therapyKey.toLowerCase()) && currentStage === 'Purvakarma') {
    return false
  }
  return true
}


