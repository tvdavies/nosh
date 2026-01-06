/**
 * Diet Plan Module
 *
 * Central location for all diet-related types, constants, and utilities.
 */

// Types
export type { DayOfWeek, DayScheduleEntry, DayType, DayTypeConfig } from './types';

// Constants
export {
  DAY_INDEX,
  DAY_TYPE_CONFIG,
  DAYS_OF_WEEK,
  WEEKLY_SCHEDULE,
} from './constants';

// Utilities
export {
  formatDate,
  formatDateShort,
  getConfigForDate,
  getDayIndex,
  getDayOfWeek,
  getDayType,
  getScheduleForDate,
  getTodayConfig,
  getWeekSchedule,
} from './utils';
