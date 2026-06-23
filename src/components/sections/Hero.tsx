"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Building2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Microfinance background"
          fill
          className="object-cover opacity-10"
          priority
          data-ai-hint="banking community"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm">
            <Smartphone className="w-4 h-4" />
            <span>L’EMF hybride de nouvelle génération</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1]">
            Mendo Finances
            <span className="block text-secondary mt-2 text-3xl md:text-5xl">L’EMF hybride qui rapproche les services financiers des communautés.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Mendo Finances est un Établissement de Microfinance de première catégorie qui combine proximité terrain et innovation digitale pour faciliter l’épargne, la gestion des finances communautaires et l’inclusion financière.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 rounded-full text-lg gap-2 bg-primary shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <Link href="#mendo-coti">
                Ouvrir un compte <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-full text-lg border-2 border-primary/20 hover:border-primary/40 bg-white/50 backdrop-blur-sm"
            >
              <Link href="#contact">Nous contacter</Link>
            </Button>
          </div>
        </div>

 <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      icon: Building2,
      num: "01",
      title: "Présence Physique",
      desc: "Agences de proximité et agents de terrain dédiés."
    },
    {
      icon: Smartphone,
      num: "02",
      title: "Innovation Digitale",
      desc: "Solutions modernes via l'application Mendo COTI."
    },
    {
      icon: ShieldCheckIcon,
      num: "03",
      title: "Inclusion Totale",
      desc: "Accès simplifié pour entrepreneurs et associations."
    }
  ].map((item, i) => (
    <div
      key={i}
      style={{ animationDelay: `${400 + i * 150}ms` }}
      className="opacity-0 animate-card-rise relative p-8 pt-10 rounded-3xl overflow-hidden border border-primary/10 bg-gradient-to-br from-primary/[0.07] via-white to-secondary/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)] group hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:border-secondary/30 transition-all duration-300"
    >
      <div className="absolute left-0 top-0 h-full w-1.5 bg-secondary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

      <span className="absolute top-2 right-6 text-7xl font-headline font-bold text-primary/10 group-hover:text-secondary/15 transition-colors duration-300 select-none">
        {item.num}
      </span>

      <div className="relative w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:from-secondary/25 group-hover:to-secondary/10 group-hover:scale-110 transition-all duration-300">
        <item.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" strokeWidth={1.75} />
      </div>

      <h3 className="relative text-2xl font-headline font-bold mb-3 tracking-tight">
        {item.title}
      </h3>
      <p className="relative text-muted-foreground leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

function ShieldCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}