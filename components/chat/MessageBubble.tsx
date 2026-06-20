"use client";

import React from "react";
import Streamdown from "streamdown";
import { cn } from "@/lib/utils";

export default function MessageBubble({ role, content, createdAt, userPreferences } : {
  role: "user" | "assistant" | "system";
  content: string;
  createdAt?: string;
  userPreferences?: any;
}) {
  const isUser = role === "user";
  return (
    <div className={cn("max-w-[92%] rounded-2xl px-3 py-2.5 text-sm leading-6 sm:max-w-[88%] sm:px-4 sm:py-3", isUser ? "rounded-tr-sm bg-[#002b5b] text-white" : "rounded-tl-sm bg-white text-slate-800") }>
      <p className="mb-1 text-xs font-black" style={{ color: isUser ? "#a5f3fc" : undefined }}>
        {role === "assistant" ? "Assistant DTSC" : role === "user" ? "Vous" : "Système"}
      </p>
      {role === "assistant" ? (
        <div className="relative">
          <div className="dtsc-assistant-markdown">
            <Streamdown>{content || "..."}</Streamdown>
          </div>
        </div>
      ) : (
        <div>{content}</div>
      )}
      {createdAt && <p className={cn("mt-2 text-[0.68rem] font-semibold", isUser ? "text-white/70" : "text-slate-500")}>{new Date(createdAt).toLocaleString()}</p>}
    </div>
  );
}
