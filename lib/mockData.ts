import { LovedOne, Question, Schedule, Story } from "./types";

export const lovedOnes: LovedOne[] = [
  {
    id: "1",
    name: "Grandma June",
    phone: "(503) 555-2188",
    timezone: "America/Los_Angeles",
    nextCall: "Thursday · 6:00 PM",
    lastStoryAt: "Dec 12, 2025"
  },
  {
    id: "2",
    name: "Uncle Raymond",
    phone: "(212) 555-1472",
    timezone: "America/New_York",
    nextCall: "Saturday · 10:00 AM",
    lastStoryAt: "Dec 8, 2025"
  }
];

export const stories: Story[] = [
  {
    id: "s1",
    date: "Dec 12, 2025",
    question: "Tell me about the best advice you ever received.",
    transcript:
      "Your grandfather always said: measure twice, cut once. It was never just about wood. It was about patience..."
  },
  {
    id: "s2",
    date: "Dec 5, 2025",
    question: "What do you remember about your first job?",
    transcript:
      "I was fourteen at the bakery. The smell of cinnamon rolls would wake me up before the alarm..."
  }
];

export const questions: Question[] = [
  { id: "q1", text: "What made you feel most proud last year?", tone: "light" },
  { id: "q2", text: "Tell me about a tradition you never want to lose.", tone: "deep" },
  { id: "q3", text: "Who was your closest friend growing up, and why?" },
  { id: "q4", text: "What lesson took the longest to learn?" }
];

export const schedules: Schedule[] = [
  { day: "Thursday", time: "6:00 PM", timezone: "America/Los_Angeles" },
  { day: "Saturday", time: "10:00 AM", timezone: "America/New_York" }
];

