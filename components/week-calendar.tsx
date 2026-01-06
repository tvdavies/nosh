'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DAY_TYPE_CONFIG,
  formatDateShort,
  getWeekSchedule,
  type DayOfWeek,
  type DayTypeConfig,
} from '@/lib/diet';
import { cn } from '@/lib/utils';

interface WeekDay {
  date: Date;
  dayOfWeek: DayOfWeek;
  config: DayTypeConfig;
  isToday: boolean;
  notes?: string;
}

// Get the Monday of the week containing the given date
function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Add days to a date
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Format week range
function formatWeekRange(startDate: Date): string {
  const endDate = addDays(startDate, 6);
  const startMonth = startDate.toLocaleDateString('en-GB', { month: 'short' });
  const endMonth = endDate.toLocaleDateString('en-GB', { month: 'short' });

  if (startMonth === endMonth) {
    return `${startDate.getDate()} - ${endDate.getDate()} ${startMonth}`;
  }
  return `${startDate.getDate()} ${startMonth} - ${endDate.getDate()} ${endMonth}`;
}

export function WeekCalendar() {
  const [weekDays, setWeekDays] = useState<WeekDay[]>([]);
  const [weekStart, setWeekStart] = useState<Date | null>(null);
  const [isCurrentWeek, setIsCurrentWeek] = useState(true);

  // Initialize with current week
  useEffect(() => {
    const today = new Date();
    setWeekStart(getWeekStart(today));
  }, []);

  // Load week schedule when weekStart changes
  useEffect(() => {
    if (!weekStart) return;

    const schedule = getWeekSchedule(weekStart);
    setWeekDays(
      schedule.map((day) => ({
        date: day.date,
        dayOfWeek: day.dayOfWeek,
        config: day.config,
        isToday: day.isToday,
        notes: day.schedule.notes,
      }))
    );

    // Check if this is the current week
    const currentWeekStart = getWeekStart(new Date());
    setIsCurrentWeek(weekStart.getTime() === currentWeekStart.getTime());
  }, [weekStart]);

  const goToPreviousWeek = useCallback(() => {
    if (weekStart) {
      setWeekStart(addDays(weekStart, -7));
    }
  }, [weekStart]);

  const goToNextWeek = useCallback(() => {
    if (weekStart) {
      setWeekStart(addDays(weekStart, 7));
    }
  }, [weekStart]);

  const goToCurrentWeek = useCallback(() => {
    setWeekStart(getWeekStart(new Date()));
  }, []);

  if (weekDays.length === 0) {
    return (
      <div className="space-y-2 p-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <Card key={i} className="animate-pulse p-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-muted" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-24 rounded bg-muted" />
                <div className="h-3 w-16 rounded bg-muted" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 p-4">
      {/* Header with navigation */}
      <div className="mb-4 flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousWeek}
          className="h-9 w-9"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous week</span>
        </Button>

        <div className="text-center">
          <h1 className="text-xl font-bold">
            {isCurrentWeek ? 'This Week' : weekStart ? formatWeekRange(weekStart) : ''}
          </h1>
          {!isCurrentWeek && (
            <Button
              variant="link"
              size="sm"
              onClick={goToCurrentWeek}
              className="h-auto p-0 text-xs text-muted-foreground"
            >
              Back to today
            </Button>
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNextWeek}
          className="h-9 w-9"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next week</span>
        </Button>
      </div>

      {weekDays.map((day) => (
        <Card
          key={day.dayOfWeek}
          className={cn(
            'overflow-hidden border transition-all',
            day.isToday && 'ring-2 ring-primary ring-offset-2'
          )}
        >
          <div className="flex items-center gap-4 p-4">
            {/* Day type indicator */}
            <div
              className={cn(
                'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl font-bold',
                day.config.bgColor,
                day.config.color
              )}
            >
              {day.config.label.charAt(0)}
            </div>

            {/* Day info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold capitalize">
                  {day.dayOfWeek}
                </p>
                {day.isToday && (
                  <Badge variant="default" className="text-xs">
                    Today
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {formatDateShort(day.date)}
              </p>
            </div>

            {/* Day type badge */}
            <div className="text-right">
              <Badge
                variant="secondary"
                className={cn(day.config.bgColor, day.config.color)}
              >
                {day.config.label}
              </Badge>
              {day.notes && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {day.notes}
                </p>
              )}
            </div>
          </div>
        </Card>
      ))}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
        {Object.values(DAY_TYPE_CONFIG).map((config) => (
          <div key={config.type} className="flex items-center gap-2">
            <div
              className={cn(
                'h-3 w-3 rounded-full',
                config.bgColor,
                config.color.replace('text-', 'bg-').split(' ')[0]
              )}
            />
            <span className="text-muted-foreground">{config.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
