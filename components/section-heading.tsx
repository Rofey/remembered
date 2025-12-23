import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
  actions?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
  actions
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.2em] text-[#71522f]">
          {eyebrow}
        </span>
      )}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl text-[#2a2215] md:text-4xl">{title}</h2>
          {copy && <p className="mt-3 text-lg text-[#4b3821]">{copy}</p>}
        </div>
        {actions}
      </div>
    </div>
  );
}

