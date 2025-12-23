import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "#pricing", label: "Pricing" }
];

type NavigationProps = {
  variant?: "light" | "ghost";
};

export function Navigation({ variant = "light" }: NavigationProps) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#fdfaf6]/90 border-b border-clay-100/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-sand-200 border border-sand-300" />
          <div className="leading-tight">
            <p className="font-serif text-xl text-[#2a2215]">The Landline Legacy</p>
            <p className="text-sm text-[#4b3821]">Stories kept in their own voice</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#4b3821] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#24160f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant={variant === "ghost" ? "ghost" : "subtle"} href="/dashboard">
            Open dashboard
          </Button>
          <Button href="/how-it-works">Hear how it works</Button>
        </div>
      </div>
    </header>
  );
}

