'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DAY_TYPE_CONFIG } from '@/lib/diet';
import { getMealsByCategory, type Meal, type MealCategory } from '@/lib/meals';
import { cn } from '@/lib/utils';

const CATEGORY_LABELS: Record<MealCategory, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snack: 'Snacks',
};

const CATEGORY_ORDER: MealCategory[] = ['breakfast', 'lunch', 'dinner', 'snack'];

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

function CategorySection({ category }: { category: MealCategory }) {
  const meals = getMealsByCategory(category);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{CATEGORY_LABELS[category]}</CardTitle>
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
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meal Ideas</h1>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="text-muted-foreground">Key:</span>
        {Object.values(DAY_TYPE_CONFIG).map((config) => (
          <div key={config.type} className="flex items-center gap-1.5">
            <Badge
              variant="secondary"
              className={cn('text-xs', config.bgColor, config.color)}
            >
              {config.type === 'low-carb' ? 'LC' : config.type === 'carbs' ? 'C' : 'F'}
            </Badge>
            <span className="text-muted-foreground">{config.label}</span>
          </div>
        ))}
      </div>

      {/* Meal categories */}
      <div className="space-y-4">
        {CATEGORY_ORDER.map((category) => (
          <CategorySection key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
