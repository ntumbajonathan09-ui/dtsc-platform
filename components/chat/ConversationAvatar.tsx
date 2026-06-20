"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function ConversationAvatar({
  name,
  src,
  size = 56,
  className,
}: {
  name?: string | null;
  src?: string | null;
  size?: number;
  className?: string;
}) {
  const initials = (name || "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const style: React.CSSProperties = { width: size, height: size };

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-dtsc-soft text-dtsc-ink",
        className
      )}
      style={style}
      aria-hidden={!name}
      title={name || undefined}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name || "avatar"} className="h-full w-full object-cover" />
      ) : (
        <span className="text-sm font-black">{initials || "?"}</span>
      )}
    </div>
  );
}
