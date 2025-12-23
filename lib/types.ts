export type LovedOne = {
  id: string;
  name: string;
  phone: string;
  timezone: string;
  nextCall: string;
  lastStoryAt: string;
};

export type Story = {
  id: string;
  date: string;
  question: string;
  transcript: string;
};

export type Question = {
  id: string;
  text: string;
  tone?: "light" | "deep";
};

export type Schedule = {
  day: string;
  time: string;
  timezone: string;
};

