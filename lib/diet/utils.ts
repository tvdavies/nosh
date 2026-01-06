import { DAY_TYPE_CONFIG, DAYS_OF_WEEK, WEEKLY_SCHEDULE } from './constants';
import type { DayOfWeek, DayScheduleEntry, DayType, DayTypeConfig } from './types';

/**
 * Get the day of week (0 = Monday, 6 = Sunday) from a Date object
 * JavaScript's getDay() returns 0 = Sunday, so we need to adjust
 */
export function getDayIndex(date: Date = new Date()): number {
  const jsDay = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
  // Convert to 0 = Monday, 6 = Sunday
  return jsDay === 0 ? 6 : jsDay - 1;
}

/**
 * Get the day of week name from a Date object
 */
export function getDayOfWeek(date: Date = new Date()): DayOfWeek {
  const index = getDayIndex(date);
  return DAYS_OF_WEEK[index];
}

/**
 * Get the schedule entry for a specific date
 */
export function getScheduleForDate(date: Date = new Date()): DayScheduleEntry {
  const index = getDayIndex(date);
  return WEEKLY_SCHEDULE[index];
}

/**
 * Get the day type for a specific date
 */
export function getDayType(date: Date = new Date()): DayType {
  return getScheduleForDate(date).dayType;
}

/**
 * Get the full configuration for today's day type
 */
export function getTodayConfig(): DayTypeConfig {
  const dayType = getDayType();
  return DAY_TYPE_CONFIG[dayType];
}

/**
 * Get the full configuration for a specific date's day type
 */
export function getConfigForDate(date: Date = new Date()): DayTypeConfig {
  const dayType = getDayType(date);
  return DAY_TYPE_CONFIG[dayType];
}

/**
 * Get schedule entries for a full week starting from a given date
 * Returns array of 7 entries with dates and schedule info
 */
export function getWeekSchedule(startDate: Date = new Date()): Array<{
  date: Date;
  dayOfWeek: DayOfWeek;
  schedule: DayScheduleEntry;
  config: DayTypeConfig;
  isToday: boolean;
}> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Find the Monday of the week containing startDate
  const start = new Date(startDate);
  const dayIndex = getDayIndex(start);
  start.setDate(start.getDate() - dayIndex);
  start.setHours(0, 0, 0, 0);

  const week = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);

    const schedule = WEEKLY_SCHEDULE[i];
    const config = DAY_TYPE_CONFIG[schedule.dayType];

    const dateCompare = new Date(date);
    dateCompare.setHours(0, 0, 0, 0);

    week.push({
      date,
      dayOfWeek: DAYS_OF_WEEK[i],
      schedule,
      config,
      isToday: dateCompare.getTime() === today.getTime(),
    });
  }

  return week;
}

/**
 * Format a date for display (e.g., "Monday 6th January")
 */
export function formatDate(date: Date): string {
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const dayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  return `${dayNames[date.getDay()]} ${day}${suffix} ${monthNames[date.getMonth()]}`;
}

/**
 * Format a date as short form (e.g., "Mon 6")
 */
export function formatDateShort(date: Date): string {
  const day = date.getDate();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return `${dayNames[date.getDay()]} ${day}`;
}

/**
 * Get ordinal suffix for a number (1st, 2nd, 3rd, etc.)
 */
function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
