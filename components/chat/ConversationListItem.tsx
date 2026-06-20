"use client";

import React from "react";
import ConversationAvatar from "./ConversationAvatar";
import { cn } from "@/lib/utils";
import { formatRelativeUserDateTime } from "@/lib/user-format";

export default function ConversationListItem({
  id,
  title,
  subtitle,
  timestamp,
  unreadCount,
  avatarSrc,
  onClick,
  active = false,
  userPreferences,
}: {
  id: string;
  title: string;
  subtitle?: string | null;
  timestamp?: string | null;
  unreadCount?: number;
  avatarSrc?: string | null;
  onClick?: (id: string) => void;
  active?: boolean;
  userPreferences?: any;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick(id)}
      className={cn(
        "w-full flex items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition",
        active ? "bg-slate-100 text-[#001736]" : "text-slate-700 hover:bg-slate-50"
      )}
      aria-label={`Ouvrir la conversation ${title}`}
    >
      <ConversationAvatar name={title} src={avatarSrc} size={44} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-semibold">{title}</span>
          {timestamp && (
            <span className="ml-2 shrink-0 text-xs text-slate-400">
              {userPreferences ? formatRelativeUserDateTime(timestamp, userPreferences) : new Date(timestamp).toLocaleTimeString()}
            </span>
          )}
        </div>
        {subtitle && <div className="mt-0.5 truncate text-xs text-slate-500">{subtitle}</div>}
      </div>
      {unreadCount ? (
        <div className="ml-2 flex h-6 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-600 px-2 text-xs font-black text-white">{unreadCount}</div>
      ) : null}
    </button>
  );
}
