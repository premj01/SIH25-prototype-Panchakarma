# Panchakarma Management Prototype (Frontend Only)

This is a React + Vite prototype implementing a frontend-only MVP for a Panchakarma Management platform using TailwindCSS and shadcn/ui.

- Light theme, responsive UI
- Static data + localStorage for dynamic interactions
- Pages: Home, Therapies, Schedule, Precautions, Progress, Admin (mock)

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Features

- Therapies catalog with pre/post precautions
- Schedule sessions (saved in localStorage)
- Notifications page showing precautions
- Progress chart (sample data)
- Admin mock initializes default therapies
- Reset Data button in header to clear localStorage

## Data Storage

- Local keys:
  - `pk_therapies`
  - `pk_sessions`
  - `pk_notifications` (reserved)
  - `pk_progress` (reserved)

## Tech

- React + Vite
- TailwindCSS + shadcn/ui components
- React Router
- Recharts for charts

Docs: shadcn/ui docs `https://ui.shadcn.com/docs/`
