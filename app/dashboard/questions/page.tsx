import { AlignLeft, Pen } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { questions } from "@/lib/mockData";

export default function QuestionsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Weekly prompt"
        title="Choose one question for this week"
        copy="Slow, considerate questions. One at a time so the call stays focused."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {questions.map((question) => (
          <div key={question.id} className="rounded-2xl bg-white/95 p-5 shadow-sm ring-1 ring-sand-200">
            <div className="flex items-center justify-between">
              <p className="font-serif text-xl text-[#2a2215]">{question.text}</p>
              <span className="rounded-full bg-sand-50 px-3 py-1 text-xs text-[#71522f] ring-1 ring-sand-200">
                {question.tone ?? "gentle"}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                Select for this week (mock)
              </Button>
              <Button variant="ghost" size="sm">
                Save for later
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-sand-200">
        <div className="flex items-center gap-2 text-sm text-[#71522f]">
          <Pen className="h-4 w-4" />
          Write your own
        </div>
        <p className="mt-2 text-[#4b3821]">
          One custom prompt per week keeps the ritual simple.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <textarea
            className="min-h-[120px] rounded-xl border border-sand-200 bg-sand-50 px-3 py-2 text-sm text-[#2a2215]"
            placeholder="What do you want future generations to know about your favorite season?"
          />
          <Button type="button">Save question (mock)</Button>
          <p className="text-xs text-[#71522f]">
            TODO: Persist to questions API and attach to weekly schedule.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-sand-200">
        <div className="flex items-center gap-2 text-sm text-[#71522f]">
          <AlignLeft className="h-4 w-4" />
          Guidance
        </div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4b3821]">
          <li>One question, one story. Simplicity keeps the call comfortable.</li>
          <li>Stay open-ended and gentle. Avoid yes/no questions.</li>
          <li>Rotate between light memories and deeper reflections.</li>
        </ul>
      </div>
    </div>
  );
}

