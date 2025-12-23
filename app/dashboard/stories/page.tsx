import { Play, ScrollText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { stories } from "@/lib/mockData";

export default function StoriesPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Archive"
        title="Stories captured so far"
        copy="Audio stays private to your family. Transcripts make it easy to revisit and share lines."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {stories.map((story) => (
          <div key={story.id} className="rounded-2xl bg-white/95 p-5 shadow-sm ring-1 ring-sand-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#71522f]">{story.date}</p>
              <span className="rounded-full bg-sand-50 px-3 py-1 text-xs text-[#71522f] ring-1 ring-sand-200">
                Audio + transcript
              </span>
            </div>
            <p className="mt-2 font-serif text-xl text-[#2a2215]">{story.question}</p>
            <p className="mt-2 text-[#4b3821] line-clamp-3">{story.transcript}</p>
            <div className="mt-3 flex gap-2">
              <Button variant="outline" size="sm">
                <Play className="mr-1 h-4 w-4" />
                Play (mock)
              </Button>
              <Button variant="ghost" size="sm">
                <ScrollText className="mr-1 h-4 w-4" />
                Read transcript
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-sand-50/90 p-5 ring-1 ring-sand-200 shadow-sm">
        <p className="font-serif text-lg text-[#2a2215]">Storage & privacy</p>
        <p className="mt-2 text-[#4b3821]">
          TODO: Connect secure audio storage, transcription (e.g., Whisper), and family-only access controls.
        </p>
      </div>
    </div>
  );
}

