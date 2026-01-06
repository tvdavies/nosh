/**
 * Meal Types and Definitions
 */

import type { DayType } from '../diet';

export type MealCategory = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Meal {
  id: string;
  name: string;
  category: MealCategory;
  dayTypes: DayType[]; // Which day types this meal is suitable for
  description?: string;
  image?: string; // Future: AI-generated image path
}

export interface MealsByCategory {
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snack: Meal[];
}
