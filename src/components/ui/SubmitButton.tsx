"use client";
import { useState } from "react";

interface SubmitButtonProps {
  label?: string;
  successLabel?: string;
  className?: string;
}

export default function SubmitButton({ label="Submit →", successLabel="✓ Submitted!", className="" }: SubmitButtonProps) {
  const [done, setDone] = useState(false);
  return (
    <button type="button" onClick={() => setDone(true)} disabled={done}
      className={`w-full font-semibold py-4 rounded-md text-base tracking-wide border-none cursor-pointer transition-colors duration-200 ${done ? "bg-green-700 text-white cursor-default" : "bg-gold text-white hover:bg-gold-light"} ${className}`}>
      {done ? successLabel : label}
    </button>
  );
}
