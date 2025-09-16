export const ROLES = {
  guest: 'GUEST',
  client: 'CLIENT',
  doctor: 'DOCTOR',
  centerAdmin: 'CENTER_ADMIN',
  superAdmin: 'SUPER_ADMIN',
}

const ROLE_KEY = 'pk_role'

export function getCurrentRole() {
  const r = localStorage.getItem(ROLE_KEY)
  return r || ROLES.guest
}

export function setCurrentRole(role) {
  localStorage.setItem(ROLE_KEY, role)
}


