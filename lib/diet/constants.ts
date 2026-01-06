import type { DayOfWeek, DayScheduleEntry, DayType, DayTypeConfig } from './types';

/**
 * Configuration for each day type
 */
export const DAY_TYPE_CONFIG: Record<DayType, DayTypeConfig> = {
  'low-carb': {
    type: 'low-carb',
    label: 'Low-Carb',
    description: 'High fat, under 50g carbs',
    color: 'text-emerald-700 dark:text-emerald-400',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    carbLimit: 50,
    rules: [
      'Keep carbs under 50g',
      'Focus on healthy fats for satiety',
      'Eat plenty of protein',
      'Watch for hidden carbs in sauces',
    ],
    tips: [
      'Add extra olive oil or butter to meals for satiety',
      'Cheese and nuts make great snacks',
      'Check labels - carbs hide in surprising places',
      'Avocado is your friend today',
    ],
  },
  carbs: {
    type: 'carbs',
    label: 'Carb Day',
    description: 'Flexible carb day',
    color: 'text-orange-700 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    rules: [
      'Enjoy carbs today',
      'Good day for high-intensity activity',
      'Balance with protein and veg',
      'Don\'t go overboard',
    ],
    tips: [
      'Great day for pasta, rice, or bread',
      'Perfect timing for a workout or football',
      'Refuel your glycogen stores',
      'Enjoy some fruit today',
    ],
  },
  fast: {
    type: 'fast',
    label: 'Fast Day',
    description: 'Water, coffee, tea only (or one small meal under 500kcal)',
    color: 'text-gray-700 dark:text-gray-400',
    bgColor: 'bg-gray-100 dark:bg-gray-800/50',
    rules: [
      'Water, black coffee, and tea are fine',
      'If eating, keep under 500kcal',
      'Stay hydrated',
      'One small meal if needed',
    ],
    tips: [
      'Hunger comes in waves - it will pass',
      'Keep busy to distract from hunger',
      'Black coffee can help suppress appetite',
      'If you must eat, choose eggs or chicken',
    ],
  },
};

/**
 * Weekly schedule mapping each day to its type
 * Monday = 0, Sunday = 6 (matches getDay() - 1, with Sunday wrapped)
 */
export const WEEKLY_SCHEDULE: DayScheduleEntry[] = [
  { dayOfWeek: 'monday', dayType: 'low-carb' },
  { dayOfWeek: 'tuesday', dayType: 'carbs', notes: 'Football evening' },
  { dayOfWeek: 'wednesday', dayType: 'low-carb' },
  { dayOfWeek: 'thursday', dayType: 'fast' },
  { dayOfWeek: 'friday', dayType: 'low-carb' },
  { dayOfWeek: 'saturday', dayType: 'carbs', notes: 'Flexible/social day' },
  { dayOfWeek: 'sunday', dayType: 'low-carb' },
];

/**
 * Map day of week string to index (0 = Monday, 6 = Sunday)
 */
export const DAY_INDEX: Record<DayOfWeek, number> = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6,
};

/**
 * Ordered array of day names for iteration
 */
export const DAYS_OF_WEEK: DayOfWeek[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];
