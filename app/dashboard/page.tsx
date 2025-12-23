import { CalendarDays, MicVocal, Plus, Sparkles } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { lovedOnes, stories } from "@/lib/mockData";

export default function DashboardHome() {
  const nextCall = lovedOnes[0];
  const latestStory = stories[0];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-sand-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#71522f]">This week</p>
            <h1 className="font-serif text-3xl text-[#2a2215]">Your family archive</h1>
            <p className="mt-2 text-[#4b3821]">
              One question per week. A gentle rhythm that keeps stories alive.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/dashboard/loved-ones">
              <Plus className="mr-2 h-4 w-4" />
              Add loved one
            </Button>
            <Button variant="outline" href="/dashboard/questions">
              Choose this week&apos;s question
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-sand-50/90 p-5 ring-1 ring-sand-200 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-[#71522f]">
            <CalendarDays className="h-4 w-4" />
            Next scheduled call
          </div>
          <p className="mt-2 font-serif text-xl text-[#2a2215]">{nextCall.nextCall}</p>
          <p className="text-sm text-[#4b3821]">{nextCall.name}</p>
        </div>
        <div className="rounded-2xl bg-sand-50/90 p-5 ring-1 ring-sand-200 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-[#71522f]">
            <MicVocal className="h-4 w-4" />
            Last story captured
          </div>
          <p className="mt-2 font-serif text-xl text-[#2a2215]">{latestStory.date}</p>
          <p className="text-sm text-[#4b3821]">{latestStory.question}</p>
        </div>
        <div className="rounded-2xl bg-sand-50/90 p-5 ring-1 ring-sand-200 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-[#71522f]">
            <Sparkles className="h-4 w-4" />
            Ritual
          </div>
          <p className="mt-2 font-serif text-xl text-[#2a2215]">
            1 question · 1 voice · weekly archive
          </p>
          <p className="text-sm text-[#4b3821]">Calm cadence, no pushy reminders.</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-sand-200">
        <SectionHeading
          title="Loved ones"
          copy="Every profile has one weekly call and one question. Nothing more to manage."
          actions={<Button variant="subtle" href="/dashboard/loved-ones">Manage</Button>}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {lovedOnes.map((person) => (
            <div key={person.id} className="rounded-2xl bg-sand-50/90 p-5 ring-1 ring-sand-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-xl text-[#2a2215]">{person.name}</p>
                  <p className="text-sm text-[#4b3821]">{person.phone}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs text-[#71522f] ring-1 ring-sand-200">
                  {person.timezone}
                </span>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-[#2a2215]">
                <p>Next call: {person.nextCall}</p>
                <p>Last story: {person.lastStoryAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-sand-200">
        <SectionHeading
          title="Recent stories"
          copy="Audio + transcripts stay private to your family."
          actions={<Button variant="subtle" href="/dashboard/stories">Open archive</Button>}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {stories.map((story) => (
            <div key={story.id} className="rounded-2xl bg-sand-50/90 p-5 ring-1 ring-sand-200 shadow-sm">
              <p className="text-sm text-[#71522f]">{story.date}</p>
              <p className="mt-1 font-serif text-xl text-[#2a2215]">{story.question}</p>
              <p className="mt-2 text-[#4b3821] line-clamp-2">{story.transcript}</p>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm">
                  Play audio (mock)
                </Button>
                <Button variant="ghost" size="sm">
                  View transcript
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

