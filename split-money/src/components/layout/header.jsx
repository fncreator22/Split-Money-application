'use client';

import { ThemeToggle } from '../theme-toggle';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 md:p-0">
      <h1 className="text-2xl md:text-4xl font-bold">Split Money</h1>
      <ThemeToggle />
    </header>
  );
}
