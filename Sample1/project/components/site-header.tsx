'use client';

import { MainNav } from '@/components/main-nav';
import { AuthButton } from '@/components/auth-button';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <div className="flex items-center gap-4">
          <ModeToggle />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}