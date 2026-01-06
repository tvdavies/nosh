import { UserButton } from '@/components/user-button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        <h1 className="text-lg font-semibold">Nosh</h1>
        <UserButton />
      </div>
    </header>
  );
}
