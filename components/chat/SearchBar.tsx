"use client";

import React from "react";
import { Input } from "@/components/ui/input";

export default function SearchBar({ value, onChange, placeholder = "Rechercher...", ariaLabel = "Recherche" } : {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}) {
  return (
    <div className="w-full">
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="h-12 rounded-full px-4 text-sm"
      />
    </div>
  );
}
