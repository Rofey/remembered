import { CalendarClock, HeartHandshake, Sparkles, TimerReset } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const weeklyTimeline = [
  {
    day: "Sunday",
    title: "You set the prompt",
    detail: "Pick one question or write your own. One prompt per week keeps it focused.",
    icon: Sparkles
  },
  {
    day: "Thursday",
    title: "We call right on time",
    detail: "A calm voice asks the question. No app, no code. Just the phone they already use.",
    icon: CalendarClock
  },
  {
    day: "Friday",
    title: "Archive updates",
    detail: "Audio is stored, transcripts generated, and the family archive refreshes.",
    icon: TimerReset
  },
  {
    day: "Anytime",
    title: "You listen back together",
    detail: "Sit with the stories. Share clips with the family. Make it a ritual.",
    icon: HeartHandshake
  }
];

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-sand-50 to-sand-100">
      <Navigation />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Weekly rhythm"
            title="A ritual that gathers stories over time"
            copy="Built for slow conversations, not automation. We keep the cadence predictable so your loved ones feel ready."
            actions={<Button href="/dashboard">Start your first call</Button>}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {weeklyTimeline.map((step) => (
              <div
                key={step.day}
                className="relative rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-sand-200"
              >
                <div className="absolute left-5 top-6 h-10 w-[1px] bg-sand-200/80" />
                <div className="flex items-center gap-3 text-sm text-[#71522f]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-50 ring-1 ring-sand-200">
                    <step.icon className="h-5 w-5" />
                  </div>
                  {step.day}
                </div>
                <h3 className="mt-2 font-serif text-2xl text-[#2a2215]">{step.title}</h3>
                <p className="mt-3 text-[#4b3821]">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="The archive"
              title="Stories that accumulate, quietly"
              copy="Each call adds to a private, living archive — audio for the warmth of their voice, transcripts for easy search later."
              align="center"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="card-soft rounded-2xl p-5">
                <p className="font-serif text-xl text-[#2a2215]">Audio first</p>
                <p className="mt-2 text-[#4b3821]">
                  The voice matters. We store it safely and make sharing optional.
                </p>
              </div>
              <div className="card-soft rounded-2xl p-5">
                <p className="font-serif text-xl text-[#2a2215]">Transcript for clarity</p>
                <p className="mt-2 text-[#4b3821]">
                  Lightly edited transcripts for quick skimming and saving quotes.
                </p>
              </div>
              <div className="card-soft rounded-2xl p-5">
                <p className="font-serif text-xl text-[#2a2215]">Ritual over reminders</p>
                <p className="mt-2 text-[#4b3821]">
                  Scheduled like a favorite radio program. No pushy notifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-sand-50 via-white to-sand-50 py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
            <h3 className="font-serif text-3xl text-[#2a2215]">
              The sooner we ask, the richer the archive becomes.
            </h3>
            <p className="text-lg text-[#4b3821]">
              Choose one loved one to start. We’ll help the habit stick.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" href="/dashboard">
                Start your first call
              </Button>
              <Button variant="outline" size="lg" href="/">
                Back to home
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

