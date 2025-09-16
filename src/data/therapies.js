export const DEFAULT_THERAPIES = [
  {
    key: 'abhyanga',
    name: 'Abhyanga (Oil Massage)',
    durationMins: 60,
    resources: ['Massage table', 'Medicated oil'],
    phase: 'Purvakarma',
    precautionsPre: ['Light meal', 'Hydrate'],
    precautionsPost: ['Rest 30 mins', 'Warm water bath'],
  },
  {
    key: 'swedana',
    name: 'Swedana (Fomentation)',
    durationMins: 45,
    resources: ['Steam room'],
    phase: 'Purvakarma',
    precautionsPre: ['Avoid heavy meal'],
    precautionsPost: ['Cool down 20 mins'],
  },
  {
    key: 'virechana',
    name: 'Virechana (Purgation)',
    durationMins: 180,
    resources: ['Therapy room', 'Medicines'],
    phase: 'Pradhana Karma',
    precautionsPre: ['Doctor review', 'No solid food 6h before'],
    precautionsPost: ['Pathya diet', 'Hydration monitoring'],
  },
  {
    key: 'basti',
    name: 'Basti (Medicated Enema)',
    durationMins: 60,
    resources: ['Panchakarma theatre', 'Basti kit'],
    phase: 'Pradhana Karma',
    precautionsPre: ['Light diet'],
    precautionsPost: ['Observe symptoms', 'Follow diet plan'],
  },
  {
    key: 'nasya',
    name: 'Nasya (Nasal Therapy)',
    durationMins: 30,
    resources: ['Nasya chair'],
    phase: 'Pradhana Karma',
    precautionsPre: ['No heavy meal 2h before'],
    precautionsPost: ['Avoid dust/cold air for 2h'],
  },
]


