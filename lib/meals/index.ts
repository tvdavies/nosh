/**
 * Meals Module
 *
 * Central location for meal types, data, and utilities.
 */

// Types
export type { Meal, MealCategory, MealsByCategory } from './types';

// Data and utilities
export { getMeals, getMealsByCategory, getMealsByDayType, MEALS } from './data';
