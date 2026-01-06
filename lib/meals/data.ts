import type { Meal } from './types';

/**
 * Meal Ideas Library
 *
 * Each meal is tagged with the day types it's suitable for:
 * - 'low-carb': Under 50g carbs, high fat
 * - 'carbs': Carb day meals
 * - 'fast': Only for the optional small meal (<500kcal)
 */
export const MEALS: Meal[] = [
  // ============================================
  // BREAKFAST
  // ============================================

  // Low-carb breakfasts
  {
    id: 'eggs-bacon',
    name: 'Eggs with bacon',
    category: 'breakfast',
    dayTypes: ['low-carb'],
    description: 'Classic fry-up without the carbs',
  },
  {
    id: 'omelette-cheese-spinach',
    name: 'Omelette with cheese and spinach',
    category: 'breakfast',
    dayTypes: ['low-carb'],
    description: 'Fluffy omelette loaded with cheese and greens',
  },
  {
    id: 'smoked-salmon-scrambled',
    name: 'Smoked salmon with scrambled eggs',
    category: 'breakfast',
    dayTypes: ['low-carb'],
    description: 'Luxurious and protein-packed',
  },
  {
    id: 'avocado-eggs',
    name: 'Avocado and eggs',
    category: 'breakfast',
    dayTypes: ['low-carb'],
    description: 'Baked eggs in avocado halves or on the side',
  },
  {
    id: 'greek-yogurt-nuts',
    name: 'Greek yogurt with nuts',
    category: 'breakfast',
    dayTypes: ['low-carb'],
    description: 'Full-fat yogurt with a handful of almonds or walnuts',
  },

  // Carb day breakfasts
  {
    id: 'porridge',
    name: 'Porridge',
    category: 'breakfast',
    dayTypes: ['carbs'],
    description: 'Oats with your favourite toppings',
  },
  {
    id: 'toast-eggs',
    name: 'Toast with eggs',
    category: 'breakfast',
    dayTypes: ['carbs'],
    description: 'Eggs any style on toast',
  },
  {
    id: 'pancakes',
    name: 'Pancakes',
    category: 'breakfast',
    dayTypes: ['carbs'],
    description: 'Fluffy pancakes with fruit or maple syrup',
  },
  {
    id: 'granola-yogurt',
    name: 'Granola with yogurt',
    category: 'breakfast',
    dayTypes: ['carbs'],
    description: 'Crunchy granola with creamy yogurt',
  },
  {
    id: 'bagel-cream-cheese',
    name: 'Bagel with cream cheese',
    category: 'breakfast',
    dayTypes: ['carbs'],
    description: 'Classic bagel with cream cheese and smoked salmon',
  },

  // ============================================
  // LUNCH
  // ============================================

  // Low-carb lunches
  {
    id: 'salad-oily-fish',
    name: 'Salad with oily fish',
    category: 'lunch',
    dayTypes: ['low-carb'],
    description: 'Mixed leaves with salmon, mackerel, or sardines',
  },
  {
    id: 'broccoli-stilton-soup',
    name: 'Broccoli stilton soup',
    category: 'lunch',
    dayTypes: ['low-carb'],
    description: 'Creamy and satisfying',
  },
  {
    id: 'cauliflower-cheese-soup',
    name: 'Cauliflower cheese soup',
    category: 'lunch',
    dayTypes: ['low-carb'],
    description: 'Rich and comforting',
  },
  {
    id: 'cold-meats-cheese',
    name: 'Cold meats and cheese platter',
    category: 'lunch',
    dayTypes: ['low-carb'],
    description: 'Selection of cured meats with quality cheeses',
  },
  {
    id: 'caesar-salad-no-croutons',
    name: 'Caesar salad (no croutons)',
    category: 'lunch',
    dayTypes: ['low-carb'],
    description: 'Classic Caesar with chicken, hold the croutons',
  },
  {
    id: 'tuna-mayo-lettuce-wraps',
    name: 'Tuna mayo lettuce wraps',
    category: 'lunch',
    dayTypes: ['low-carb'],
    description: 'Tuna salad wrapped in crisp lettuce leaves',
  },

  // Carb day lunches
  {
    id: 'sandwich',
    name: 'Sandwich',
    category: 'lunch',
    dayTypes: ['carbs'],
    description: 'Your favourite filling between good bread',
  },
  {
    id: 'rice-bowl',
    name: 'Rice bowl',
    category: 'lunch',
    dayTypes: ['carbs'],
    description: 'Rice with protein and veggies',
  },
  {
    id: 'pasta-salad',
    name: 'Pasta salad',
    category: 'lunch',
    dayTypes: ['carbs'],
    description: 'Cold pasta with Mediterranean flavours',
  },
  {
    id: 'wrap',
    name: 'Wrap',
    category: 'lunch',
    dayTypes: ['carbs'],
    description: 'Filled tortilla wrap',
  },
  {
    id: 'noodle-soup',
    name: 'Noodle soup',
    category: 'lunch',
    dayTypes: ['carbs'],
    description: 'Warming bowl of noodles in broth',
  },

  // ============================================
  // DINNER
  // ============================================

  // Low-carb dinners
  {
    id: 'steak-greens',
    name: 'Steak with greens',
    category: 'dinner',
    dayTypes: ['low-carb'],
    description: 'Quality steak with a side of green vegetables',
  },
  {
    id: 'salmon-asparagus',
    name: 'Salmon with asparagus',
    category: 'dinner',
    dayTypes: ['low-carb'],
    description: 'Baked or pan-fried salmon with roasted asparagus',
  },
  {
    id: 'lamb-chops',
    name: 'Lamb chops',
    category: 'dinner',
    dayTypes: ['low-carb'],
    description: 'Grilled lamb chops with Mediterranean veg',
  },
  {
    id: 'chilli-no-rice',
    name: 'Chilli (without rice)',
    category: 'dinner',
    dayTypes: ['low-carb'],
    description: 'Hearty beef chilli, skip the rice',
  },
  {
    id: 'roast-chicken',
    name: 'Roast chicken',
    category: 'dinner',
    dayTypes: ['low-carb'],
    description: 'Roast chicken with low-carb roasted veg',
  },
  {
    id: 'prawn-stir-fry',
    name: 'Prawn stir-fry (no noodles)',
    category: 'dinner',
    dayTypes: ['low-carb'],
    description: 'Prawns with vegetables in a tasty sauce',
  },
  {
    id: 'bunless-burger',
    name: 'Bunless burger',
    category: 'dinner',
    dayTypes: ['low-carb'],
    description: 'Burger patty with salad and cheese, no bun',
  },

  // Carb day dinners
  {
    id: 'curry-rice',
    name: 'Curry with rice',
    category: 'dinner',
    dayTypes: ['carbs'],
    description: 'Your favourite curry with fluffy rice',
  },
  {
    id: 'pasta-bolognese',
    name: 'Pasta bolognese',
    category: 'dinner',
    dayTypes: ['carbs'],
    description: 'Classic spag bol',
  },
  {
    id: 'pizza',
    name: 'Pizza',
    category: 'dinner',
    dayTypes: ['carbs'],
    description: 'Homemade or takeaway pizza',
  },
  {
    id: 'fish-chips',
    name: 'Fish and chips',
    category: 'dinner',
    dayTypes: ['carbs'],
    description: 'British classic',
  },
  {
    id: 'stir-fry-noodles',
    name: 'Stir-fry with noodles',
    category: 'dinner',
    dayTypes: ['carbs'],
    description: 'Quick and tasty noodle stir-fry',
  },
  {
    id: 'burrito',
    name: 'Burrito',
    category: 'dinner',
    dayTypes: ['carbs'],
    description: 'Loaded burrito with all the toppings',
  },

  // ============================================
  // SNACKS
  // ============================================

  // Low-carb snacks
  {
    id: 'cheese',
    name: 'Cheese',
    category: 'snack',
    dayTypes: ['low-carb'],
    description: 'A few cubes of your favourite cheese',
  },
  {
    id: 'nuts',
    name: 'Nuts',
    category: 'snack',
    dayTypes: ['low-carb'],
    description: 'Almonds, walnuts, macadamias, or mixed',
  },
  {
    id: 'pork-scratchings',
    name: 'Pork scratchings',
    category: 'snack',
    dayTypes: ['low-carb'],
    description: 'Crunchy and satisfying',
  },
  {
    id: 'olives',
    name: 'Olives',
    category: 'snack',
    dayTypes: ['low-carb'],
    description: 'A handful of quality olives',
  },
  {
    id: 'boiled-eggs',
    name: 'Boiled eggs',
    category: 'snack',
    dayTypes: ['low-carb', 'fast'],
    description: 'Quick protein hit',
  },
  {
    id: 'celery-cream-cheese',
    name: 'Celery with cream cheese',
    category: 'snack',
    dayTypes: ['low-carb'],
    description: 'Crunchy celery with creamy filling',
  },
  {
    id: 'beef-jerky',
    name: 'Beef jerky',
    category: 'snack',
    dayTypes: ['low-carb'],
    description: 'Protein-rich dried meat',
  },
  {
    id: 'dark-chocolate',
    name: 'Dark chocolate (85%+)',
    category: 'snack',
    dayTypes: ['low-carb'],
    description: 'A square or two of very dark chocolate',
  },

  // Carb day snacks
  {
    id: 'fruit',
    name: 'Fresh fruit',
    category: 'snack',
    dayTypes: ['carbs'],
    description: 'Banana, apple, or berries',
  },
  {
    id: 'crackers-hummus',
    name: 'Crackers with hummus',
    category: 'snack',
    dayTypes: ['carbs'],
    description: 'Savoury crackers with creamy hummus',
  },
  {
    id: 'toast-peanut-butter',
    name: 'Toast with peanut butter',
    category: 'snack',
    dayTypes: ['carbs'],
    description: 'Quick and filling',
  },
  {
    id: 'energy-bar',
    name: 'Energy bar',
    category: 'snack',
    dayTypes: ['carbs'],
    description: 'Good before or after exercise',
  },
];

/**
 * Get meals filtered by day type
 */
export function getMealsByDayType(dayType: import('../diet').DayType): Meal[] {
  return MEALS.filter((meal) => meal.dayTypes.includes(dayType));
}

/**
 * Get meals filtered by category
 */
export function getMealsByCategory(category: import('./types').MealCategory): Meal[] {
  return MEALS.filter((meal) => meal.category === category);
}

/**
 * Get meals filtered by both day type and category
 */
export function getMeals(
  dayType?: import('../diet').DayType,
  category?: import('./types').MealCategory
): Meal[] {
  return MEALS.filter((meal) => {
    const matchesDayType = !dayType || meal.dayTypes.includes(dayType);
    const matchesCategory = !category || meal.category === category;
    return matchesDayType && matchesCategory;
  });
}
