import { Phone, PlusCircle, Timer } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { lovedOnes } from "@/lib/mockData";

export default function LovedOnesPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Profiles"
        title="Loved ones you’re calling"
        copy="One profile, one weekly question. No apps for them to install."
        actions={
          <Button variant="solid">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add loved one
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {lovedOnes.map((person) => (
          <div key={person.id} className="rounded-2xl bg-white/95 p-5 shadow-sm ring-1 ring-sand-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-xl text-[#2a2215]">{person.name}</p>
                <p className="text-sm text-[#4b3821]">{person.phone}</p>
              </div>
              <span className="rounded-full bg-sand-50 px-3 py-1 text-xs text-[#71522f] ring-1 ring-sand-200">
                {person.timezone}
              </span>
            </div>
            <div className="mt-3 grid gap-2 text-sm text-[#2a2215]">
              <p className="flex items-center gap-2">
                <Timer className="h-4 w-4 text-[#946e3f]" />
                Next call: {person.nextCall}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#946e3f]" />
                Last story: {person.lastStoryAt}
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                Edit schedule
              </Button>
              <Button variant="ghost" size="sm">
                Change question
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sand-200">
        <h3 className="font-serif text-2xl text-[#2a2215]">Add a loved one</h3>
        <p className="mt-2 text-[#4b3821]">
          We’ll keep the setup short. One question a week, at the time they prefer.
        </p>
        <form className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#71522f]">Name</label>
            <input
              className="rounded-xl border border-sand-200 bg-sand-50 px-3 py-2 text-sm text-[#2a2215]"
              placeholder="Grandma June"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#71522f]">Phone (landline or mobile)</label>
            <input
              className="rounded-xl border border-sand-200 bg-sand-50 px-3 py-2 text-sm text-[#2a2215]"
              placeholder="(555) 123-4567"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#71522f]">Timezone</label>
            <input
              className="rounded-xl border border-sand-200 bg-sand-50 px-3 py-2 text-sm text-[#2a2215]"
              placeholder="America/Los_Angeles"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#71522f]">Weekly schedule</label>
            <input
              className="rounded-xl border border-sand-200 bg-sand-50 px-3 py-2 text-sm text-[#2a2215]"
              placeholder="Thursdays · 6:00 PM"
            />
          </div>
          <div className="md:col-span-2">
            <Button type="button" size="lg">
              Save loved one (mock)
            </Button>
            <p className="mt-2 text-xs text-[#71522f]">
              TODO: Connect to scheduling + Twilio voice call setup.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

