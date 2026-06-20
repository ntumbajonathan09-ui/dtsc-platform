"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function FloatingActionButton({ onClick, label = "Action rapide", ariaLabel = "Action rapide" } : {
  onClick?: () => void;
  label?: string;
  ariaLabel?: string;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        aria-label={ariaLabel}
        title={label}
        onClick={() => onClick && onClick()}
        className="h-12 w-12 rounded-full bg-[#002b5b] text-white shadow-lg hover:bg-[#001736]"
        size="icon"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
}
