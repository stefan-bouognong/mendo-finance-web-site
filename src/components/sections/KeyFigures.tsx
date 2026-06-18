
"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Receipt, Landmark, Globe } from "lucide-react";

const figures = [
  { icon: Receipt, label: "Transactions enregistrées", value: 5000, suffix: "+" },
  { icon: Users, label: "Comptes ouverts (Pilote)", value: 160, suffix: "+" },
  { icon: Landmark, label: "Flux de transactions", value: 100000, suffix: "€+", isCurrency: true },
  { icon: Globe, label: "Présence hybride", value: 100, suffix: "%" },
];

export function KeyFigures() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline">Nos chiffres clés</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Une croissance solide portée par une vision d'inclusion et de modernité.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {figures.map((fig, i) => (
            <CounterCard key={i} {...fig} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ icon: Icon, label, value, suffix, isCurrency }: any) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group">
      <div className="p-4 bg-secondary/20 rounded-2xl group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-8 h-8  group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <div className="text-4xl md:text-5xl font-headline font-bold">
          {isCurrency ? count.toLocaleString() : count}
          <span>{suffix}</span>
        </div>
        <p className="text-primary-foreground/80 font-medium">{label}</p>
      </div>
    </div>
  );
}
