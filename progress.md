# Nosh - Development Progress

## Overview
Personal diet tracking app for low-carb, high-fat diet with carb cycling and intermittent fasting.

**Repository:** https://github.com/tvdavies/nosh
**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, Bun

---

## Current Status

**In Progress:** Issue #7 - Create weekly calendar view

---

## Completed Issues

### Issue #23: Set up shadcn/ui component library ✅
**Completed:** 2026-01-06

Installed shadcn/ui with the following components:
- Button, Card, Input, Tabs, Badge, Skeleton, Sheet, Dialog, Switch, Separator

Configuration: New York style, neutral base colour, CSS variables enabled.

### Issue #1: Set up diet plan data model ✅
**Completed:** 2026-01-06

Created diet module at `lib/diet/` with:
- TypeScript types: `DayType`, `DayOfWeek`, `DayTypeConfig`, `DayScheduleEntry`
- Constants: `DAY_TYPE_CONFIG`, `WEEKLY_SCHEDULE`, `DAY_INDEX`, `DAYS_OF_WEEK`
- Colour scheme: emerald (low-carb), orange (carbs), gray (fast)

### Issue #2: Set up meal ideas data ✅
**Completed:** 2026-01-06

Created meals module at `lib/meals/` with:
- 45+ meal ideas across all categories
- Types: `Meal`, `MealCategory`, `MealsByCategory`
- Utility functions: `getMeals()`, `getMealsByDayType()`, `getMealsByCategory()`
- Categories: breakfast, lunch, dinner, snack
- Each meal tagged with compatible day types

### Issue #3: Create utility to determine today's day type ✅
**Completed:** 2026-01-06

Added utilities to `lib/diet/utils.ts`:
- `getDayType()` - Get day type for any date
- `getTodayConfig()` - Get full config for today
- `getWeekSchedule()` - Get full week's schedule with dates
- `formatDate()` / `formatDateShort()` - Date formatting helpers

### Issue #18: Create app shell and navigation ✅
**Completed:** 2026-01-06

Created mobile-first navigation:
- Bottom navigation bar with 5 tabs: Today, Week, Meals, Chat, Info
- Active state highlighting with Lucide icons
- Safe area support for notched phones
- All route pages created: `/`, `/week`, `/meals`, `/chat`, `/info`
- Responsive max-width container (max-w-lg)

### Issue #4: Create daily view hero component ✅
**Completed:** 2026-01-06

Created DayHero component (`components/day-hero.tsx`):
- Large, colour-coded card showing today's day type
- Displays current date, day type label, and description
- Shows carb limit badge for low-carb days
- Lists day-specific guidelines/rules
- Handles client-side hydration to avoid date mismatches

---

## Issue Log

### Issue #7: Create weekly calendar view
**Status:** In Progress
**Started:** 2026-01-06

---

## Build Order (High Priority First)

1. [x] #23 - shadcn/ui setup (foundation for UI)
2. [x] #1 - Diet plan data model
3. [x] #2 - Meal ideas data
4. [x] #3 - Day type utility
5. [x] #18 - App shell and navigation
6. [x] #4 - Daily view hero
7. [ ] #7 - Weekly calendar view
8. [ ] #26 - Authentication
9. [ ] #12 - AI chat infrastructure
10. [ ] #13 - Chat UI
11. [ ] #22 - PWA support

---

## Notes for Handover

- All issues are tracked on GitHub with detailed acceptance criteria
- Use `bun` as the package manager
- Tailwind v4 is in use (new syntax with `@import "tailwindcss"`)
