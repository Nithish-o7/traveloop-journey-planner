import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search, SlidersHorizontal, MapPin, Star, ArrowRight,
  Calendar, Clock, TrendingUp, Compass,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import bali from "@/assets/dest-bali.jpg";
import paris from "@/assets/dest-paris.jpg";
import tokyo from "@/assets/dest-tokyo.jpg";
import newyork from "@/assets/dest-newyork.jpg";
import santorini from "@/assets/trip-santorini.jpg";
import iceland from "@/assets/trip-iceland.jpg";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "Explore — Traveloop" },
      { name: "description", content: "Discover top destinations and plan your next unforgettable journey." },
    ],
  }),
  component: LandingPage,
});

const topRegional = [
  { name: "Bali", country: "Indonesia", img: bali, rating: 4.9, category: "Beach & Culture" },
  { name: "Paris", country: "France", img: paris, rating: 4.8, category: "City & Art" },
  { name: "Tokyo", country: "Japan", img: tokyo, rating: 4.9, category: "Urban & Food" },
  { name: "New York", country: "USA", img: newyork, rating: 4.7, category: "Iconic City" },
  { name: "Santorini", country: "Greece", img: santorini, rating: 4.9, category: "Island Escape" },
];

const previousTrips = [
  { name: "Santorini Escape", dates: "Jun 12 – Jun 19, 2026", img: santorini, status: "Upcoming" },
  { name: "Iceland Aurora Hunt", dates: "Sep 03 – Sep 11, 2026", img: iceland, status: "Planning" },
  { name: "Bali Retreat", dates: "Mar 02 – Mar 14, 2025", img: bali, status: "Completed" },
];

const categories = ["All", "Beach", "City", "Adventure", "Cultural", "Food", "Nature"];
const budgets = ["Any Budget", "Under $500", "$500–$1500", "$1500+"];

function LandingPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBudget, setActiveBudget] = useState("Any Budget");

  return (
    <AppShell>
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-hero min-h-[340px] sm:min-h-[420px] flex items-end p-6 sm:p-10 shadow-elevated mb-8">
        <div className="absolute inset-0">
          <img src={santorini} alt="Hero destination" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
        </div>
        <div className="relative z-10 text-primary-foreground w-full">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur px-3 py-1 text-xs font-medium mb-3">
            <Compass className="h-3.5 w-3.5" /> Explore the world with Traveloop
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Where do you want to go next?
          </h1>
          <p className="mt-2 text-primary-foreground/80 text-sm sm:text-base max-w-lg">
            Discover curated destinations, build detailed itineraries, and track every journey.
          </p>
          <div className="mt-6">
            <Link to="/create-trip">
              <Button className="h-12 px-6 rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground font-semibold shadow-elevated">
                <TrendingUp className="h-4 w-4 mr-2" /> Start Planning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Search & Filter Bar ── */}
      <section className="rounded-2xl bg-card border border-border/60 shadow-card p-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations, cities, activities..."
              className="w-full h-11 rounded-xl border border-input bg-surface pl-9 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </div>
          <Button variant="outline" className="h-11 px-4 rounded-xl border-border gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </Button>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === c
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="w-px h-6 bg-border self-center mx-1 shrink-0" />
          {budgets.map((b) => (
            <button
              key={b}
              onClick={() => setActiveBudget(b)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeBudget === b
                  ? "bg-accent text-accent-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </section>

      {/* ── Top Regional Selections ── */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Top Regional Selections</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Handpicked destinations trending this season</p>
          </div>
          <button className="text-sm font-medium text-primary hover:text-primary-hover inline-flex items-center gap-1 transition-colors">
            View all <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Horizontal scroll grid */}
        <div className="-mx-4 sm:mx-0">
          <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto px-4 sm:px-0 pb-2 snap-x">
            {topRegional.map((dest) => (
              <article
                key={dest.name}
                className="group min-w-[200px] sm:min-w-0 snap-start rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={dest.img} alt={dest.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-surface/90 backdrop-blur px-2 py-0.5 text-xs font-semibold">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {dest.rating}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
                    <p className="text-[10px] font-medium uppercase tracking-wider opacity-75 inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {dest.country}
                    </p>
                    <h3 className="text-lg font-bold mt-0.5">{dest.name}</h3>
                    <p className="text-xs opacity-75 mt-0.5">{dest.category}</p>
                    <button className="mt-2 inline-flex items-center gap-1 text-xs font-semibold rounded-full bg-surface/20 backdrop-blur text-primary-foreground px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors">
                      Explore <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Previous Trips ── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Your Recent Trips</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Continue where you left off</p>
          </div>
          <Link to="/my-trips" className="text-sm font-medium text-primary hover:text-primary-hover inline-flex items-center gap-1 transition-colors">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="-mx-4 sm:mx-0">
          <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto px-4 sm:px-0 pb-2 snap-x">
            {previousTrips.map((t) => {
              const statusColor: Record<string, string> = {
                Upcoming: "bg-primary/10 text-primary",
                Planning: "bg-accent/15 text-accent",
                Completed: "bg-emerald-100 text-emerald-700",
              };
              return (
                <Link
                  to="/itinerary"
                  key={t.name}
                  className="group min-w-[75%] sm:min-w-0 snap-start rounded-2xl bg-card border border-border/60 shadow-card overflow-hidden hover:shadow-elevated transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusColor[t.status] ?? "bg-muted text-foreground"} bg-surface/95`}>
                      {t.status}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{t.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {t.dates}
                    </p>
                    <button className="mt-3 w-full h-9 rounded-xl border border-primary/30 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center justify-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> Continue Planning
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
