import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InfoPage() {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Diet Guide</h1>
      <p className="text-muted-foreground">
        Everything you need to know about your low-carb, carb-cycling diet plan.
      </p>

      <Accordion type="multiple" className="space-y-2">
        {/* How It Works */}
        <AccordionItem value="how-it-works" className="rounded-lg border px-4">
          <AccordionTrigger className="text-left font-semibold hover:no-underline">
            How It Works
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4 text-sm">
            <div>
              <h4 className="mb-1 font-medium">Low-Carb, High-Fat (LCHF)</h4>
              <p className="text-muted-foreground">
                The foundation of this diet is eating high-fat, moderate protein, and low carbohydrates.
                This helps your body burn fat for fuel instead of relying on carbs.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-medium">Carb Cycling</h4>
              <p className="text-muted-foreground">
                Strategic carb days (Tuesday and Saturday) help refuel glycogen stores,
                support exercise performance, and make the diet more sustainable long-term.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-medium">Intermittent Fasting</h4>
              <p className="text-muted-foreground">
                One fast day per week (Thursday) gives your digestive system a break
                and can enhance fat burning. Keep it simple - water, coffee, and tea are fine.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Weekly Pattern */}
        <AccordionItem value="weekly-pattern" className="rounded-lg border px-4">
          <AccordionTrigger className="text-left font-semibold hover:no-underline">
            Weekly Pattern
          </AccordionTrigger>
          <AccordionContent className="space-y-3 pb-4 text-sm">
            <div className="flex items-center gap-2">
              <Badge className="w-20 justify-center bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">Low-carb</Badge>
              <span>Monday, Wednesday, Friday, Sunday</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="w-20 justify-center bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">Carbs</Badge>
              <span>Tuesday, Saturday</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="w-20 justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Fast</Badge>
              <span>Thursday</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              Tuesday is great for carbs because of evening football - you&apos;ll have energy for the game!
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Day Type Guidelines */}
        <AccordionItem value="day-guidelines" className="rounded-lg border px-4">
          <AccordionTrigger className="text-left font-semibold hover:no-underline">
            Day Type Guidelines
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4 text-sm">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Low-Carb Days
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Keep carbs under 50g</li>
                  <li>Focus on high-fat foods for satiety</li>
                  <li>Good foods: eggs, bacon, cheese, meat, fish, leafy greens</li>
                  <li>Watch for hidden carbs in sauces</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-400">
                  Carb Days
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Enjoy carbs - good for refuelling</li>
                  <li>Great for high-intensity activity</li>
                  <li>Balance with protein and vegetables</li>
                  <li>Not a free-for-all - be sensible</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                  Fast Days
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Water, black coffee, and tea are fine</li>
                  <li>If you must eat, keep under 500kcal</li>
                  <li>One small protein-focused meal is okay</li>
                  <li>Stay well hydrated</li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Tips */}
        <AccordionItem value="tips" className="rounded-lg border px-4">
          <AccordionTrigger className="text-left font-semibold hover:no-underline">
            Tips &amp; Tricks
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4 text-sm">
            <div>
              <h4 className="mb-1 font-medium">Electrolytes</h4>
              <p className="text-muted-foreground">
                Low-carb diets can flush out electrolytes. Get enough sodium, potassium,
                and magnesium - especially in the first few weeks. Bone broth is great for this.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-medium">Hydration</h4>
              <p className="text-muted-foreground">
                Drink plenty of water throughout the day. On fast days, water is your
                best friend for managing hunger.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-medium">Hungry on Fast Day?</h4>
              <p className="text-muted-foreground">
                Drink water, have black coffee or tea, stay busy. If you really need to eat,
                have a small protein-focused meal (eggs, chicken) - better than breaking the fast badly.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-medium">Beans &amp; Legumes</h4>
              <p className="text-muted-foreground">
                These are allowed on low-carb days but be portion-aware. A small serving
                is fine, but they can add up quickly.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-medium">Eating Out</h4>
              <p className="text-muted-foreground">
                Choose protein with vegetables, skip the bread basket, ask for dressings on the side.
                Most restaurants can accommodate - just ask!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Quick Reference */}
        <AccordionItem value="quick-reference" className="rounded-lg border px-4">
          <AccordionTrigger className="text-left font-semibold hover:no-underline">
            Quick Reference
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4 text-sm">
            <div>
              <h4 className="mb-2 font-medium">Always Good</h4>
              <p className="text-muted-foreground">
                Eggs, meat, fish, cheese, butter, olive oil, avocado, leafy greens,
                broccoli, cauliflower, nuts, olives
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Carb Days Only</h4>
              <p className="text-muted-foreground">
                Rice, pasta, bread, potatoes, fruit, oats, pizza, most takeaways
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Avoid or Limit</h4>
              <p className="text-muted-foreground">
                Sugary drinks, sweets, cakes, most processed snacks, excessive alcohol
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Shopping List */}
        <AccordionItem value="shopping-list" className="rounded-lg border px-4">
          <AccordionTrigger className="text-left font-semibold hover:no-underline">
            Shopping List Staples
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4 text-sm">
            <div>
              <h4 className="mb-2 font-medium">Proteins</h4>
              <p className="text-muted-foreground">
                Eggs, bacon, chicken thighs/breasts, beef mince, steak, salmon, mackerel,
                sardines, prawns, pork chops
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Fats &amp; Dairy</h4>
              <p className="text-muted-foreground">
                Olive oil, butter, coconut oil, cheese (cheddar, halloumi, cream cheese),
                Greek yogurt, double cream, nuts (almonds, walnuts, macadamias)
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Low-Carb Vegetables</h4>
              <p className="text-muted-foreground">
                Broccoli, spinach, kale, cauliflower, asparagus, courgette,
                green beans, peppers, mushrooms, avocado, lettuce
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium flex items-center gap-2">
                Carb Day Staples
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  Carbs
                </Badge>
              </h4>
              <p className="text-muted-foreground">
                Oats, rice, pasta, bread, potatoes, sweet potatoes,
                bananas, apples, berries
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Pantry Essentials</h4>
              <p className="text-muted-foreground">
                Salt, pepper, herbs (rosemary, thyme, oregano), garlic, stock cubes,
                mayonnaise, mustard, soy sauce, hot sauce, olives
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Drinks</h4>
              <p className="text-muted-foreground">
                Coffee, tea, sparkling water, bone broth
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
