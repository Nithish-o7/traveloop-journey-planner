import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Plane, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navItems = [
  { to: "/landing", label: "Explore" },
  { to: "/trips", label: "My Trips" },
  { to: "/create-trip", label: "Plan Trip" },
  { to: "/search", label: "Search" },
  { to: "/packing", label: "Packing" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-surface/80 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/dashboard" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero shadow-elevated transition-transform group-hover:scale-105">
            <Plane className="h-5 w-5 text-primary-foreground -rotate-45" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">Traveloop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = path === item.to || path.startsWith(item.to + "/");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/profile">
            <Avatar className="h-9 w-9 ring-2 ring-border hover:ring-primary transition-all cursor-pointer">
              <AvatarFallback className="bg-gradient-hero text-primary-foreground text-sm font-semibold">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors flex items-center gap-2"
            >
              <User className="h-4 w-4" /> Profile
            </Link>
            <Link to="/admin" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Admin Panel
            </Link>
            <Link to="/invoice" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Invoice
            </Link>
            <Link to="/login" onClick={() => setOpen(false)} className="mt-2">
              <Button variant="outline" className="w-full">Sign Out</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
