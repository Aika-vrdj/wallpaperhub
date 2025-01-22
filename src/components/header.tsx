"use client";

import Link from "next/link";
import { User, Moon, Sun, Heart, LogOut } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex flex-col">
          <Link href="/" className="text-2xl font-bold">
            RebelThemes
          </Link>
          <span className="text-sm text-gray-500">dystopian wallpapers</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-secondary p-2 text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <div className="relative group">
            <button className="rounded-full bg-primary p-2 text-primary-foreground">
              <User className="h-5 w-5" />
            </button>
            <div className="absolute right-0 top-full z-50 mt-2 w-48 origin-top-right scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              <div className="rounded-lg border bg-card p-2 shadow-lg">
                <Link
                  href="/favorites"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
                >
                  <Heart className="h-4 w-4" />
                  Favorites
                </Link>
                <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 transition-colors hover:bg-accent">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
