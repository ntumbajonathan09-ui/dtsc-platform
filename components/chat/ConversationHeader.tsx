"use client";

import React from "react";
import { Menu } from "lucide-react";

export default function ConversationHeader({ title, subtitle, onMenu } : {
  title: string;
  subtitle?: string;
  onMenu?: () => void;
}) {
  return (
    <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-3 py-2.5 sm:px-5 sm:py-4">
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-lg font-bold text-[#001736] sm:text-xl">{title}</h1>
        {subtitle && <div className="mt-1 text-xs font-medium text-slate-500">{subtitle}</div>}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button type="button" onClick={() => onMenu && onMenu()} className="rounded-xl p-2 text-dtsc-blue hover:bg-dtsc-soft" aria-label="Actions">
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
