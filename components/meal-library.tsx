'use client';

import { X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DAY_TYPE_CONFIG, type DayType } from '@/lib/diet';
import { MEALS, type Meal, type MealCategory } from '@/lib/meals';
import { cn } from '@/lib/utils';

const CATEGORY_LABELS: Record<MealCategory, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snack: 'Snacks',
};

const CATEGORY_ORDER: MealCategory[] = ['breakfast', 'lunch', 'dinner', 'snack'];
const DAY_TYPE_ORDER: DayType[] = ['low-carb', 'carbs', 'fast'];

function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="flex items-start justify-between gap-3 py-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium">{meal.name}</p>
        {meal.description && (
          <p className="mt-0.5 text-sm text-muted-foreground">
            {meal.description}
          </p>
        )}
      </div>
      <div className="flex shrink-0 gap-1">
        {meal.dayTypes.map((dayType) => {
          const config = DAY_TYPE_CONFIG[dayType];
          return (
            <Badge
              key={dayType}
              variant="secondary"
              className={cn(
                'text-xs',
                config.bgColor,
                config.color
              )}
            >
              {dayType === 'low-carb' ? 'LC' : dayType === 'carbs' ? 'C' : 'F'}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}

function CategorySection({ category, meals }: { category: MealCategory; meals: Meal[] }) {
  if (meals.length === 0) return null;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          {CATEGORY_LABELS[category]}
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            ({meals.length})
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="divide-y">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function MealLibrary() {
  const [selectedDayTypes, setSelectedDayTypes] = useState<Set<DayType>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<MealCategory>>(new Set());

  const hasFilters = selectedDayTypes.size > 0 || selectedCategories.size > 0;

  // Filter meals based on selections
  const filteredMeals = useMemo(() => {
    return MEALS.filter((meal) => {
      // If no day type filter, include all; otherwise check if meal matches any selected day type
      const matchesDayType = selectedDayTypes.size === 0 ||
        meal.dayTypes.some((dt) => selectedDayTypes.has(dt));

      // If no category filter, include all; otherwise check if meal matches any selected category
      const matchesCategory = selectedCategories.size === 0 ||
        selectedCategories.has(meal.category);

      return matchesDayType && matchesCategory;
    });
  }, [selectedDayTypes, selectedCategories]);

  // Group filtered meals by category
  const mealsByCategory = useMemo(() => {
    const grouped: Record<MealCategory, Meal[]> = {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: [],
    };
    filteredMeals.forEach((meal) => {
      grouped[meal.category].push(meal);
    });
    return grouped;
  }, [filteredMeals]);

  const toggleDayType = (dayType: DayType) => {
    setSelectedDayTypes((prev) => {
      const next = new Set(prev);
      if (next.has(dayType)) {
        next.delete(dayType);
      } else {
        next.add(dayType);
      }
      return next;
    });
  };

  const toggleCategory = (category: MealCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedDayTypes(new Set());
    setSelectedCategories(new Set());
  };

  return (
    <div className="flex flex-col">
      {/* Sticky filter header */}
      <div className="sticky top-14 z-10 border-b bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Meal Ideas</h1>
          <span className="text-sm text-muted-foreground">
            {filteredMeals.length} {filteredMeals.length === 1 ? 'meal' : 'meals'}
          </span>
        </div>

        {/* Day type filters */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="mr-1 self-center text-xs text-muted-foreground">Day:</span>
          {DAY_TYPE_ORDER.map((dayType) => {
            const config = DAY_TYPE_CONFIG[dayType];
            const isSelected = selectedDayTypes.has(dayType);
            return (
              <Button
                key={dayType}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleDayType(dayType)}
                className={cn(
                  'h-7 text-xs',
                  isSelected && config.bgColor,
                  isSelected && config.color,
                  isSelected && 'border-transparent hover:opacity-80'
                )}
              >
                {config.label}
              </Button>
            );
          })}
        </div>

        {/* Category filters */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="mr-1 self-center text-xs text-muted-foreground">Meal:</span>
          {CATEGORY_ORDER.map((category) => {
            const isSelected = selectedCategories.has(category);
            return (
              <Button
                key={category}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleCategory(category)}
                className="h-7 text-xs"
              >
                {CATEGORY_LABELS[category]}
              </Button>
            );
          })}
        </div>

        {/* Clear filters */}
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="mt-2 h-7 text-xs text-muted-foreground"
          >
            <X className="mr-1 h-3 w-3" />
            Clear filters
          </Button>
        )}
      </div>

      {/* Meal categories */}
      <div className="space-y-4 p-4">
        {filteredMeals.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No meals match your filters.
              <br />
              <Button
                variant="link"
                onClick={clearFilters}
                className="mt-2 h-auto p-0 text-sm"
              >
                Clear filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          CATEGORY_ORDER.map((category) => (
            <CategorySection
              key={category}
              category={category}
              meals={mealsByCategory[category]}
            />
          ))
        )}
      </div>
    </div>
  );
}
