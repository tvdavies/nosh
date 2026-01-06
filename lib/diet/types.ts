/**
 * Diet Plan Type Definitions
 */

export type DayType = 'low-carb' | 'carbs' | 'fast';

export type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface DayTypeConfig {
  type: DayType;
  label: string;
  description: string;
  color: string;
  bgColor: string;
  rules: string[];
  tips: string[]; // Quick actionable tips for the day
  carbLimit?: number; // grams, undefined for no specific limit
}

export interface DayScheduleEntry {
  dayOfWeek: DayOfWeek;
  dayType: DayType;
  notes?: string;
}
