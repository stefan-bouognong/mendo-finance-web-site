
"use client";

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
            <span className="block text-secondary mt-2">Services financiers de proximité</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Mendo Finances est un Établissement de Microfinance de première catégorie qui combine proximité terrain et innovation digitale pour faciliter l’épargne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 rounded-full text-lg gap-2 bg-primary shadow-xl hover:shadow-primary/20 transition-all">
              Ouvrir un compte <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-2 border-primary/20 hover:border-primary/40 bg-white/50 backdrop-blur-sm">
              Nous contacter
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up [animation-delay:400ms]">
          {[
            {
              icon: Building2,
              title: "Présence Physique",
              desc: "Agences de proximité et agents de terrain dédiés."
            },
            {
              icon: Smartphone,
              title: "Innovation Digitale",
              desc: "Solutions modernes via l'application Mendo COTI."
            },
            {
              icon: ShieldCheckIcon,
              title: "Inclusion Totale",
              desc: "Accès simplifié pour entrepreneurs et associations."
            }
          ].map((item, i) => (
            <div key={i} className="glass-morphism p-8 rounded-2xl group hover:border-secondary transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
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
