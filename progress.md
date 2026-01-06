# Nosh - Development Progress

## Overview
Personal diet tracking app for low-carb, high-fat diet with carb cycling and intermittent fasting.

**Repository:** https://github.com/tvdavies/nosh
**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, Bun

---

## Current Status

**In Progress:** Issue #12 - Set up AI chat infrastructure

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

### Issue #7: Create weekly calendar view ✅
**Completed:** 2026-01-06

Created WeekCalendar component (`components/week-calendar.tsx`):
- Shows all 7 days (Mon-Sun) in a vertical list
- Each day shows: day name, date, day type badge
- Colour-coded by day type (emerald/orange/gray)
- Highlights today with ring outline and "Today" badge
- Shows special notes (e.g., "Football evening" for Tuesday)
- Legend at bottom explaining colours

### Issue #9: Create meal library page ✅
**Completed:** 2026-01-06

Created MealLibrary component (`components/meal-library.tsx`):
- Lists all 45+ meals grouped by category (Breakfast, Lunch, Dinner, Snacks)
- Each meal shows name, description, and day type badges
- Compact badge notation: LC (low-carb), C (carbs), F (fast)
- Legend explaining badge meanings
- Clean, scannable card-based design

### Issue #5: Show today's meal suggestions ✅
**Completed:** 2026-01-06

Created TodayMeals component (`components/today-meals.tsx`):
- Shows meal ideas filtered to today's day type
- Groups by category: Breakfast (3), Lunch (3), Dinner (3), Snacks (4)
- Links to full meal library for "more" items
- Special handling for fast days with minimal options
- Responsive grid layout (2 columns on larger screens)

### Issue #26: Add authentication ✅
**Completed:** 2026-01-06

Implemented Google OAuth with NextAuth.js v5:
- `lib/auth.ts` - Auth configuration with email allowlist
- `app/api/auth/[...nextauth]/route.ts` - Auth API route
- `app/login/page.tsx` - Login page with Google sign-in
- `middleware.ts` - Route protection for /chat and /api/chat
- `components/header.tsx` - Header with user button
- `components/user-button.tsx` - Login/logout UI
- `.env.example` - Environment variables template

**Setup required:** User must configure Google OAuth credentials and set ALLOWED_EMAILS in .env.local

---

## Issue Log

### Issue #12: Set up AI chat infrastructure
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
7. [x] #7 - Weekly calendar view
8. [x] #9 - Meal library page
9. [x] #5 - Today's meal suggestions
10. [x] #26 - Authentication
9. [ ] #12 - AI chat infrastructure
10. [ ] #13 - Chat UI
11. [ ] #22 - PWA support

---

## Notes for Handover

- All issues are tracked on GitHub with detailed acceptance criteria
- Use `bun` as the package manager
- Tailwind v4 is in use (new syntax with `@import "tailwindcss"`)
