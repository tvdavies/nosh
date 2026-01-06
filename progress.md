# Nosh - Development Progress

## Overview
Personal diet tracking app for low-carb, high-fat diet with carb cycling and intermittent fasting.

**Repository:** https://github.com/tvdavies/nosh
**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, Bun

---

## Current Status

**Ready for next issue**

---

## Completed Issues

### Issue #15: Add contextual suggested prompts ✅
**Completed:** 2026-01-06

Made chat suggested prompts contextual to today's day type:
- Low-carb: lunch ideas, low-carb foods, snack suggestions
- Carb day: pre-football meals, pizza questions, energy foods
- Fast day: allowed drinks, hunger help, tips for fasting
- 4 prompts per day type, clickable to start conversation

### Issue #6: Add quick tips for today's day type ✅
**Completed:** 2026-01-06

Added contextual quick tips to the daily view:
- 2 random tips displayed per day (consistent throughout the day)
- Tips stored in `DayTypeConfig` with 4 tips per day type
- Highlighted "Quick tips" section with lightbulb icon
- Low-carb: fat sources, snacks, label checking
- Carb day: timing, activity, food suggestions
- Fast day: hunger management, allowed foods

### Issue #25: Add light/dark mode toggle ✅
**Completed:** 2026-01-06

Added dark mode support using next-themes:
- Theme toggle button in header (sun/moon icons)
- System preference detection as default
- Theme persists across sessions (localStorage)
- No flash of wrong theme on load
- Works with Tailwind's `dark:` variants
- All existing components use CSS variables for theming

### Issue #16: Create reference/info page ✅
**Completed:** 2026-01-06

Created comprehensive diet guide page at `/info`:
- Collapsible accordion sections for easy scanning
- How It Works: LCHF, carb cycling, and intermittent fasting explained
- Weekly Pattern: Visual schedule with colour-coded badges
- Day Type Guidelines: Detailed rules for each day type
- Tips & Tricks: Electrolytes, hydration, eating out, etc.
- Quick Reference: Always good, carb days only, avoid/limit

### Issue #10: Add filtering to meal library ✅
**Completed:** 2026-01-06

Added interactive filtering to the meal library page:
- Filter by day type (Low-carb, Carbs, Fast) using toggle buttons
- Filter by meal category (Breakfast, Lunch, Dinner, Snacks)
- Filters can be combined (e.g., low-carb + breakfast)
- Sticky filter header that stays visible on scroll
- Shows count of matching meals
- Clear all filters button when filters are active
- Empty state with clear filters link when no matches
- Category sections show individual meal counts

### Issue #22: Add PWA support ✅
**Completed:** 2026-01-06

Added Progressive Web App capabilities:
- Installed `@ducanh2912/next-pwa` for service worker generation
- Created `public/manifest.json` with app metadata
- Generated app icons (192x192, 512x512) using Lucide Utensils icon
- Created Apple touch icon (180x180)
- Updated `app/layout.tsx` with PWA metadata (manifest, icons, theme-color)
- Updated build script to use webpack (required for PWA plugin)

**Note:** Build uses `--webpack` flag as PWA plugin requires webpack (not Turbopack).

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

### Issue #12: Set up AI chat infrastructure ✅
**Completed:** 2026-01-06

Implemented AI chat with Vercel AI SDK:
- `lib/chat/system-prompt.ts` - Dynamic system prompt with diet context
- `app/api/chat/route.ts` - Streaming chat API endpoint
- Uses OpenAI gpt-4o-mini model
- System prompt includes today's day type and full diet plan context
- Protected by authentication (returns 401 if not logged in)

**Setup required:** User must set OPENAI_API_KEY in .env.local

### Issue #13: Create chat UI component ✅
**Completed:** 2026-01-06

Created ChatInterface component (`components/chat-interface.tsx`):
- Message bubbles for user and assistant
- Streaming response display
- Suggested prompts when chat is empty
- Loading indicator with animated dots
- Auto-scroll to latest message
- Mobile-friendly input handling

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
11. [x] #12 - AI chat infrastructure
12. [x] #13 - Chat UI
11. [x] #22 - PWA support

---

## Notes for Handover

- All issues are tracked on GitHub with detailed acceptance criteria
- Use `bun` as the package manager
- Tailwind v4 is in use (new syntax with `@import "tailwindcss"`)
