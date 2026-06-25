
"use client";

import { Compass, Target, Heart, Handshake, Lightbulb, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import imagemf from "@/image/imagemf.png";
import imagemf1 from "@/image/imagemf1.png";


const values = [
  { icon: Heart, title: "Proximité", desc: "Nous restons proches des communautés avec des agents de terrain dédiés." },
  { icon: Handshake, title: "Confiance", desc: "La transparence totale est au cœur de toutes nos opérations financières." },
  { icon: Lightbulb, title: "Innovation", desc: "Nous utilisons la technologie pour simplifier et sécuriser vos services." },
  { icon: TrendingUp, title: "Impact", desc: "Nous contribuons activement au développement économique local." },
];

export function About() {
  const visionImg = PlaceHolderImages.find(img => img.id === 'about-vision');

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Notre Identité</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-headline text-primary">Mendo Finances</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mendo Finances est un EMF de première catégorie engagé dans la promotion de l’inclusion financière à travers des solutions modernes adaptées aux particuliers, commerçants, associations et entrepreneurs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10 hover:border-accent/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
                <Compass className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold font-headline mb-2 text-primary">Notre Mission</h4>
                <p className="text-sm text-muted-foreground">
                  Faciliter l’accès aux services financiers de proximité et promouvoir l’autonomie économique.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
                <Target className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold font-headline mb-2 text-primary">Notre Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Construire une microfinance moderne, inclusive et durable au service du développement local.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-2xl">
            <Image
              src={imagemf}
              alt="Mendo Vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
            {/* <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary rounded-full">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-primary/60 font-bold uppercase tracking-widest">Partenariat durable</p>
                  <p className="font-bold text-primary">Accompagner chaque entrepreneur</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="pt-24 border-t border-border">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Nos Valeurs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              L'ADN de Mendo Finances repose sur quatre piliers fondamentaux.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="text-center space-y-4 p-8 rounded-3xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-border/50">
                <div className="mx-auto w-16 h-16 bg-white border border-border rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:scale-110 transition-all duration-300">
                  <val.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold font-headline text-primary">{val.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
