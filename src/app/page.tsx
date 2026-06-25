
"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { MendoCoti } from "@/components/sections/MendoCoti";
import { About } from "@/components/sections/About";
import { GoalPlanner } from "@/components/sections/GoalPlanner";
import { Governance } from "@/components/sections/Governance";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";


import MomoLogo from "@/image/MomoLogo.png";
import OmLogo from "@/image/omLogo.png";
import maviance from "@/image/maviance.png";
import turbobank from "@/image/turbobank.png";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <KeyFigures />
        
        <section className="py-24 bg-accent/5 border-y border-border overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4 animate-fade-in-up">Ils nous font confiance</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-headline text-primary mb-4 animate-fade-in-up [animation-delay:200ms]">Nos Partenaires</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
                Découvrez les institutions et entreprises qui collaborent avec Mendo Finances pour bâtir l'avenir.
              </p>
            </div>
            
            <div className="relative flex overflow-hidden">
              <div className="flex space-x-12 animate-float whitespace-nowrap px-4 py-8 items-center justify-center min-w-full">
                {[
                  { name: 'Orange Money', logo: OmLogo },
                  { name: 'MTN Mobile Money', logo: MomoLogo },
                  { name: 'Maviance', logo: maviance },
                  { name: 'Turbobank', logo: turbobank }

                ].map((partner, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center px-10 py-5 bg-white rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 hover:border-secondary/30 transition-all duration-300 min-w-[220px] h-[120px]"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className="object-contain max-h-[80px] w-auto"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <About />
        
        <MendoCoti />

        <GoalPlanner />

        <Governance />

        <SocialFeed />

        <Contact />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
