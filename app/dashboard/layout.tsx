import { Heart, Home, ListOrdered, PlusCircle, Waves } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/dashboard/loved-ones", label: "Loved ones", icon: Heart },
  { href: "/dashboard/questions", label: "Questions", icon: ListOrdered },
  { href: "/dashboard/stories", label: "Stories archive", icon: Waves }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sand-50 to-sand-100">
      <Navigation variant="ghost" />
      <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-12 pt-8 md:grid-cols-[260px,1fr]">
        <aside className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-sand-200">
          <div className="mb-4 flex items-center justify-between text-sm text-[#71522f]">
            <span>Family archive</span>
            <Link
              href="/dashboard/loved-ones"
              className="inline-flex items-center gap-1 rounded-full bg-sand-50 px-3 py-1 text-xs ring-1 ring-sand-200"
            >
              <PlusCircle className="h-3.5 w-3.5" />
              Add loved one
            </Link>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-[#2a2215] transition hover:bg-sand-50"
                )}
              >
                <item.icon className="h-4 w-4 text-[#946e3f]" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}

