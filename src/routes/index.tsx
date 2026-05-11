import { createFileRoute } from "@tanstack/react-router";
import { Layers, Rocket, ShieldCheck, TrendingUp, Clock, Shield, Gauge, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "StackEngine — Build Your Perfect Growth System" },
      { name: "description", content: "Answer a few smart questions and let our AI build a customized growth system for your business in under 2 minutes." },
    ],
  }),
});

const steps = [
  { n: 1, label: "Intro", active: true },
  { n: 2, label: "Questions" },
  { n: 3, label: "AI Analysis" },
  { n: 4, label: "Results" },
  { n: 5, label: "Recommendations" },
];

const benefits = [
  { icon: Layers, title: "Personalized Stack", desc: "Get the best tools customized for your business goals." },
  { icon: Rocket, title: "Step-by-Step Plan", desc: "A clear roadmap to set up and launch your system." },
  { icon: ShieldCheck, title: "Deliverability Strategy", desc: "Avoid spam and land in inbox with proven techniques." },
  { icon: TrendingUp, title: "Growth Roadmap", desc: "Actionable plan to get more replies, meetings and revenue." },
];

const trust = [
  { icon: Shield, title: "100% Secure", desc: "Your data is private and protected.", tone: "success" as const },
  { icon: Gauge, title: "2 Minutes", desc: "Quick assessment, instant results.", tone: "info" as const },
  { icon: CheckCircle2, title: "Save & Continue", desc: "Save your progress and finish anytime.", tone: "warning" as const },
];

const logos = ["stripe", "ClickUp", "aircall", "SAMSUNG", "HubSpot"];

function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-soft/40 via-background to-background">
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-8 sm:py-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Layers className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">StackEngine</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm text-muted-foreground shadow-sm">
            <Clock className="h-4 w-4 text-primary" />
            Takes less than 2 minutes
          </div>
        </header>

        {/* Stepper */}
        <nav aria-label="Progress" className="mt-10">
          <ol className="flex items-start justify-between gap-2">
            {steps.map((s, i) => (
              <li key={s.n} className="flex flex-1 flex-col items-center">
                <div className="flex w-full items-center">
                  <div className={`hidden h-px flex-1 ${i === 0 ? "opacity-0" : "bg-border"} sm:block`} />
                  <div
                    className={`grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition ${
                      s.active
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s.n}
                  </div>
                  <div className={`hidden h-px flex-1 ${i === steps.length - 1 ? "opacity-0" : "bg-border"} sm:block`} />
                </div>
                <span className={`mt-2 text-xs sm:text-sm ${s.active ? "font-semibold text-primary" : "text-muted-foreground"}`}>
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero */}
        <section className="mt-16 text-center">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Let's Build Your
            <br />
            <span className="bg-gradient-to-r from-primary to-[oklch(0.6_0.22_295)] bg-clip-text text-transparent">
              Perfect Growth System
            </span>
            <Sparkles className="ml-2 inline-block h-7 w-7 text-primary" />
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Answer a few smart questions and our AI will create a customized growth system for your business.
          </p>
          <svg className="mx-auto mt-4" width="120" height="20" viewBox="0 0 120 20" fill="none">
            <path d="M2 12 C 25 2, 50 18, 75 8 S 110 14, 118 6" stroke="oklch(0.52 0.24 280)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </section>

        {/* Benefits card */}
        <section className="mt-12 rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur sm:p-8">
          <h2 className="text-center text-lg font-semibold">Here's what you'll get:</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary shadow-sm">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-primary">{b.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
          <div className="flex -space-x-2">
            {[
              "https://i.pravatar.cc/64?img=12",
              "https://i.pravatar.cc/64?img=32",
              "https://i.pravatar.cc/64?img=47",
              "https://i.pravatar.cc/64?img=68",
            ].map((src) => (
              <img key={src} src={src} alt="" className="h-10 w-10 rounded-full border-2 border-background object-cover" />
            ))}
          </div>
          <p className="text-center text-sm text-foreground sm:text-left">
            <span className="font-semibold">Join 10,000+ founders, marketers & agencies</span>
            <br className="hidden sm:block" />
            <span className="text-muted-foreground"> who've already built their system.</span>
          </p>
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 grayscale">
          {logos.map((l) => (
            <span key={l} className="font-display text-lg font-bold tracking-tight text-muted-foreground">
              {l}
            </span>
          ))}
        </div>

        {/* Trust strip */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {trust.map((t) => {
            const tones = {
              success: "bg-success-soft text-success",
              info: "bg-info-soft text-info",
              warning: "bg-warning-soft text-warning",
            };
            return (
              <div key={t.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${tones[t.tone]}`}>
                  <t.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="mt-10">
          <button
            type="button"
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-[oklch(0.55_0.24_290)] px-8 py-5 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:shadow-xl hover:shadow-primary/40 active:scale-[0.99]"
          >
            Start Assessment
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-center text-sm text-muted-foreground">You can save and continue anytime</p>
        </section>

        <footer className="mt-10 border-t border-border pt-5 text-center text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" /> No credit card required
          </span>
        </footer>
      </div>
    </main>
  );
}
