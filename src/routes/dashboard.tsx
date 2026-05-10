import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Wallet, TrendingUp, Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import santorini from "@/assets/trip-santorini.jpg";
import iceland from "@/assets/trip-iceland.jpg";
import bali from "@/assets/dest-bali.jpg";
import paris from "@/assets/dest-paris.jpg";
import tokyo from "@/assets/dest-tokyo.jpg";
import newyork from "@/assets/dest-newyork.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Traveloop" },
      { name: "description", content: "Your trips, budgets, and recommended destinations." },
    ],
  }),
  component: Dashboard,
});

const recentTrips = [
  { name: "Santorini Escape", dates: "Jun 12 – Jun 19", img: santorini, status: "Upcoming" },
  { name: "Iceland Aurora Hunt", dates: "Sep 03 – Sep 11", img: iceland, status: "Planning" },
  { name: "Bali Retreat", dates: "Mar 02 – Mar 14", img: bali, status: "Completed" },
];

const destinations = [
  { name: "Paris", country: "France", img: paris },
  { name: "Tokyo", country: "Japan", img: tokyo },
  { name: "New York", country: "USA", img: newyork },
  { name: "Bali", country: "Indonesia", img: bali },
];

function Dashboard() {
  return (
    <AppShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-hero p-6 sm:p-10 shadow-elevated">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" /> Ready for your next adventure
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">Welcome back, Alex 👋</h1>
            <p className="mt-2 text-primary-foreground/85 max-w-lg text-sm sm:text-base">
              You have 1 upcoming trip in 23 days. Let's make it unforgettable.
            </p>
          </div>
          <Link to="/create-trip" className="shrink-0">
            <Button className="h-12 px-6 rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground font-semibold shadow-elevated transition-all hover:scale-[1.02]">
              <Plus className="h-5 w-5 mr-1.5" /> Plan New Trip
            </Button>
          </Link>
        </div>
      </section>

      {/* Budget widgets */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BudgetCard icon={Wallet} label="Total Spent This Year" value="$4,820" sub="across 3 trips" tone="primary" />
        <BudgetCard icon={TrendingUp} label="Upcoming Trip Budget" value="$2,400" sub="Santorini Escape" tone="accent" />
        <BudgetCard icon={Calendar} label="Days Until Next Trip" value="23" sub="Jun 12, 2026" tone="muted" />
      </section>

      {/* Recent trips */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Recent Trips</h2>
          <Link to="/my-trips" className="text-sm font-medium text-primary hover:text-primary-hover inline-flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="-mx-4 sm:mx-0">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto px-4 sm:px-0 pb-2 snap-x">
            {recentTrips.map((t) => (
              <article key={t.name} className="group min-w-[78%] sm:min-w-0 snap-start rounded-2xl bg-card border border-border/60 shadow-card overflow-hidden hover:shadow-elevated transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 rounded-full bg-surface/95 px-2.5 py-1 text-[11px] font-semibold text-foreground">{t.status}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {t.dates}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Recommended for you</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Inspiring destinations to spark your next plan</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((d) => (
            <article key={d.name} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all">
              <img src={d.img} alt={d.name} loading="lazy" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
                <p className="text-[11px] font-medium uppercase tracking-wider opacity-80 inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {d.country}
                </p>
                <h3 className="text-lg font-bold mt-0.5">{d.name}</h3>
                <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold rounded-full bg-surface text-foreground px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors">
                  Explore <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function BudgetCard({
  icon: Icon, label, value, sub, tone,
}: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub: string;
  tone: "primary" | "accent" | "muted";
}) {
  const toneMap = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/15 text-accent",
    muted: "bg-muted text-muted-foreground",
  } as const;
  return (
    <div className="rounded-2xl bg-card border border-border/60 p-5 shadow-card hover:shadow-elevated transition-shadow">
      <div className="flex items-center justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${toneMap[tone]}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
    </div>
  );
}
