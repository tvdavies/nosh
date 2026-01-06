'use client';

import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  formatDate,
  getTodayConfig,
  type DayTypeConfig,
} from '@/lib/diet';
import { cn } from '@/lib/utils';

export function DayHero() {
  const [config, setConfig] = useState<DayTypeConfig | null>(null);
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    // Set on client to avoid hydration mismatch
    setConfig(getTodayConfig());
    setDateStr(formatDate(new Date()));
  }, []);

  if (!config) {
    return (
      <Card className="mx-4 mt-4 animate-pulse p-6">
        <div className="h-8 w-32 rounded bg-muted" />
        <div className="mt-2 h-6 w-48 rounded bg-muted" />
        <div className="mt-4 h-4 w-full rounded bg-muted" />
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        'mx-4 mt-4 overflow-hidden border-0',
        config.bgColor
      )}
    >
      <div className="p-6">
        <p className="text-sm font-medium text-muted-foreground">
          {dateStr}
        </p>

        <h1 className={cn('mt-1 text-3xl font-bold', config.color)}>
          {config.label}
        </h1>

        <p className={cn('mt-2 text-lg', config.color)}>
          {config.description}
        </p>

        {config.carbLimit && (
          <Badge variant="secondary" className="mt-4">
            Under {config.carbLimit}g carbs
          </Badge>
        )}

        <div className="mt-6 space-y-2">
          <p className="text-sm font-medium text-foreground">Today&apos;s guidelines:</p>
          <ul className="space-y-1">
            {config.rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', config.color.replace('text-', 'bg-'))} />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
