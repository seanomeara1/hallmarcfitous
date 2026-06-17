"use client";

import { useEffect, useRef, useState } from "react";

interface CounterStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function CounterStat({ value, suffix = "", prefix = "", label }: CounterStatProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-terra font-display tabular-nums">
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm text-grey mt-2 tracking-wide uppercase">{label}</p>
    </div>
  );
}
