'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDayType, type DayType } from '@/lib/diet';
import { getMeals, type Meal, type MealCategory } from '@/lib/meals';
import { cn } from '@/lib/utils';

const CATEGORY_CONFIG: Record<MealCategory, { label: string; limit: number }> = {
  breakfast: { label: 'Breakfast', limit: 3 },
  lunch: { label: 'Lunch', limit: 3 },
  dinner: { label: 'Dinner', limit: 3 },
  snack: { label: 'Snacks', limit: 4 },
};

const CATEGORY_ORDER: MealCategory[] = ['breakfast', 'lunch', 'dinner', 'snack'];

function MealItem({ meal }: { meal: Meal }) {
  return (
    <li className="text-sm text-muted-foreground">
      {meal.name}
    </li>
  );
}

function CategoryCard({
  category,
  meals,
  totalCount,
}: {
  category: MealCategory;
  meals: Meal[];
  totalCount: number;
}) {
  const config = CATEGORY_CONFIG[category];
  const hasMore = totalCount > meals.length;

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{config.label}</CardTitle>
          {hasMore && (
            <Link
              href="/meals"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              +{totalCount - meals.length} more
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-1">
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function TodayMeals() {
  const [dayType, setDayType] = useState<DayType | null>(null);
  const [mealsByCategory, setMealsByCategory] = useState<
    Record<MealCategory, { meals: Meal[]; total: number }>
  >({
    breakfast: { meals: [], total: 0 },
    lunch: { meals: [], total: 0 },
    dinner: { meals: [], total: 0 },
    snack: { meals: [], total: 0 },
  });

  useEffect(() => {
    const todayType = getDayType();
    setDayType(todayType);

    const byCategory: Record<MealCategory, { meals: Meal[]; total: number }> = {
      breakfast: { meals: [], total: 0 },
      lunch: { meals: [], total: 0 },
      dinner: { meals: [], total: 0 },
      snack: { meals: [], total: 0 },
    };

    CATEGORY_ORDER.forEach((category) => {
      const allMeals = getMeals(todayType, category);
      const limit = CATEGORY_CONFIG[category].limit;
      byCategory[category] = {
        meals: allMeals.slice(0, limit),
        total: allMeals.length,
      };
    });

    setMealsByCategory(byCategory);
  }, []);

  if (!dayType) {
    return (
      <div className="space-y-3 px-4">
        <div className="h-6 w-32 animate-pulse rounded bg-muted" />
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-5 w-20 rounded bg-muted" />
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-3/4 rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Fast day shows different content
  if (dayType === 'fast') {
    return (
      <div className="space-y-3 px-4">
        <h2 className="text-lg font-semibold">Today&apos;s Options</h2>
        <Card>
          <CardContent className="py-4">
            <p className="text-sm text-muted-foreground">
              It&apos;s a fast day. If you need to eat, keep it under 500kcal with
              something simple like:
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="text-muted-foreground">• Boiled eggs</li>
              <li className="text-muted-foreground">• Small portion of protein + veg</li>
              <li className="text-muted-foreground">• Bone broth</li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Otherwise, stick to water, black coffee, and tea.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-3 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Meal Ideas</h2>
        <Link
          href="/meals"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {CATEGORY_ORDER.map((category) => {
          const { meals, total } = mealsByCategory[category];
          if (meals.length === 0) return null;
          return (
            <CategoryCard
              key={category}
              category={category}
              meals={meals}
              totalCount={total}
            />
          );
        })}
      </div>
    </div>
  );
}
