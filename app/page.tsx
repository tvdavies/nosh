import { DayHero } from '@/components/day-hero';
import { TodayMeals } from '@/components/today-meals';

export default function TodayPage() {
  return (
    <div className="space-y-6 pb-4">
      <DayHero />
      <TodayMeals />
    </div>
  );
}
