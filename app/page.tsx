"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Phone, Sparkle, Waves } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "You choose a loved one and a time",
    copy: "Share their phone number, timezone, and the window they prefer. We keep it gentle and predictable."
  },
  {
    title: "We call them — no apps, no screens",
    copy: "A warm voice asks one thoughtful question. No logins, no phone tree, just conversation."
  },
  {
    title: "Their story becomes part of your family archive",
    copy: "We save the audio, transcribe it, and keep it private for your family to revisit."
  }
];

const why = [
  "Zero technology required for seniors",
  "Works on landlines and mobiles",
  "One question, no interruptions",
  "Inbound + outbound calling supported"
];

const pricing = [
  { plan: "Monthly", price: "$24", note: "Cancel anytime" },
  { plan: "Yearly", price: "$240", note: "2 months free" }
];

const callScript = [
  "\"Hi June, it's remembered. Ready for your weekly story call?\"",
  "\"This week's question is: What did home feel like when you were a kid?\"",
  "\"Take your time. I'm listening. You can pause or stop anytime.\"",
  "\"Thank you for sharing. We'll keep this safe for your family.\""
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-sand-50 to-sand-100">
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-sand-200 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-clay-100 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(180,138,88,0.08),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(158,125,92,0.07),transparent_32%)]" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 lg:flex-row lg:items-center lg:pt-20">
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-[#7d573d] shadow-sm ring-1 ring-sand-200">
                <Sparkle className="h-4 w-4" />
                One phone call a week. A lifetime of memories.
              </p>
              <h1 className="font-serif text-4xl leading-tight text-[#2a2215] sm:text-5xl lg:text-6xl">
                “One phone call a week. A lifetime of memories.”
              </h1>
              <p className="max-w-2xl text-lg text-[#4b3821]">
                We call your parents or grandparents, ask one meaningful question, and
                preserve their voice forever. Calm, respectful, and built for families who
                never want to say “I wish I had asked.”
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" href="/dashboard">
                  Start Preserving Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  Hear How It Works
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-sand-200">
                <div className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-3 py-1 text-xs text-[#71522f] ring-1 ring-sand-200">
                  <Phone className="h-4 w-4" />
                  Landline or mobile — no apps
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-clay-50 px-3 py-1 text-xs text-[#71522f] ring-1 ring-sand-200">
                  Weekly ritual, one question
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative rounded-3xl bg-white/85 p-6 shadow-lg ring-1 ring-sand-200">
                <div className="mb-4 flex items-center justify-between text-sm text-[#71522f]">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#b48a58]" />
                    Weekly call ritual
                  </div>
                  <span>Private archive</span>
                </div>
                <div className="space-y-3">
                  {callScript.map((line, idx) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.12, duration: 0.6, ease: "easeOut" }}
                      className="rounded-2xl bg-sand-50/90 p-4 text-[#2a2215] ring-1 ring-sand-100 shadow-sm"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-clay-50 px-4 py-3 text-sm text-[#4b3821] ring-1 ring-sand-100">
                  <span>Audio + transcript saved</span>
                  <Waves className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-6 pb-6 text-sm text-[#71522f]">
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sand-200">
              Calm, weekly cadence
            </span>
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sand-200">
              Voices stay private to your family
            </span>
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sand-200">
              Built for landlines — no apps needed
            </span>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="How it works"
              title="A gentle, weekly ritual"
              copy="Built for families who want more conversations, not more apps."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="flex flex-col gap-3 rounded-2xl bg-sand-50 p-6 ring-1 ring-sand-100 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-sm text-[#71522f]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-sand-200">
                      {idx + 1}
                    </span>
                    Weekly step
                  </div>
                  <h3 className="font-serif text-xl text-[#2a2215]">{step.title}</h3>
                  <p className="text-[#4b3821]">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-sand-50 via-white to-sand-50 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.05fr,0.95fr] md:items-center">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Why families choose us"
                title="“If only I had asked…”"
                copy="We are for the questions you wish you had asked sooner, and the voices you never want to forget."
              />
              <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-sand-200">
                <p className="font-serif text-2xl text-[#2a2215] leading-relaxed">
                  “My kids will hear my mom’s voice forever. The calls feel like a ritual,
                  not a notification.”
                </p>
                <p className="mt-3 text-sm text-[#71522f]">— Placeholder family, Portland</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {why.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white p-4 text-[#2a2215] shadow-sm ring-1 ring-sand-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-clay-50/90 p-5 text-[#2a2215] ring-1 ring-sand-200 shadow-sm">
                <p className="font-serif text-lg">Example call flow</p>
                <ul className="mt-3 space-y-2 text-[#4b3821]">
                  {callScript.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#b48a58]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, all-inclusive pricing"
              copy="Includes weekly call, audio storage, and transcript. No upsells."
              actions={<Button href="/dashboard">Start Preserving Stories</Button>}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {pricing.map((tier) => (
                <div
                  key={tier.plan}
                  className="rounded-3xl bg-sand-50/90 p-6 shadow-sm ring-1 ring-sand-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#71522f]">
                        {tier.plan}
                      </p>
                      <p className="font-serif text-3xl text-[#2a2215]">{tier.price}</p>
                    </div>
                    <Button variant="solid" size="md" href="/dashboard">
                      Choose {tier.plan}
                    </Button>
                  </div>
                  <p className="mt-3 text-[#4b3821]">{tier.note}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#2a2215]">
                    <li>• Weekly scheduled phone call</li>
                    <li>• Secure private archive (audio + transcript)</li>
                    <li>• Family access via dashboard</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-sand-100 py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
            <h3 className="font-serif text-3xl text-[#2a2215]">
              Give your family the gift of their own history
            </h3>
            <p className="text-lg text-[#4b3821]">
              The stories are already there. We just make space to hear them.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" href="/dashboard">
                Start Preserving Stories
              </Button>
              <Button variant="outline" size="lg" href="/how-it-works">
                See the weekly rhythm
              </Button>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#71522f] ring-1 ring-sand-200">
              <HeartHandshake className="h-4 w-4" />
              Built to listen — not to automate
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

