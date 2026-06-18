
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <KeyFigures />
        
        <section className="py-24 bg-white border-y border-border overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Nos Partenaires</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
                {/* Mock partner logos */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="font-headline font-bold text-2xl text-primary/40">
                    PARTENAIRE {i}
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
