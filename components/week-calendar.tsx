'use client';

import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
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

export function WeekCalendar() {
  const [weekDays, setWeekDays] = useState<WeekDay[]>([]);

  useEffect(() => {
    const schedule = getWeekSchedule();
    setWeekDays(
      schedule.map((day) => ({
        date: day.date,
        dayOfWeek: day.dayOfWeek,
        config: day.config,
        isToday: day.isToday,
        notes: day.schedule.notes,
      }))
    );
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
      <h1 className="mb-4 text-2xl font-bold">This Week</h1>

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
