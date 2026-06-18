
"use client";

import { CheckCircle2, Smartphone, ShieldCheck, Zap, Globe, PieChart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  { icon: Zap, title: "Épargne digitale", desc: "Versez et retirez instantanément depuis votre smartphone." },
  { icon: Globe, title: "Gestion des tontines", desc: "Digitalisez et sécurisez vos cercles de tontine communautaire." },
  { icon: ShieldCheck, title: "Sécurité renforcée", desc: "Cryptage de bout en bout pour protéger vos données bancaires." },
  { icon: PieChart, title: "Suivi en temps réel", desc: "Notifications push et historique détaillé de vos transactions." },
];

export function MendoCoti() {
  const mockup = PlaceHolderImages.find(img => img.id === 'app-mockup-1');

  return (
    <section id="mendo-coti" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative mx-auto max-w-[320px] lg:max-w-none lg:w-[500px]">
              <div className="aspect-[9/16] relative rounded-[3rem] border-8 border-primary overflow-hidden shadow-2xl">
                <Image
                  src={mockup?.imageUrl || ""}
                  alt="Mendo COTI Smartphone Mockup"
                  fill
                  className="object-cover"
                  data-ai-hint="smartphone app"
                />
              </div>
              <div className="absolute -right-8 bottom-20 bg-white p-6 rounded-2xl shadow-xl border border-border animate-bounce hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Transaction réussie</p>
                    <p className="font-bold text-sm">+25,000 FCFA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Innovation Digitale</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-headline text-primary">Mendo COTI</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mendo COTI est la solution technologique qui accompagne les membres de Mendo Finances dans la gestion de leur épargne et de leurs finances communautaires.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-headline">{feat.title}</h4>
                  <p className="text-sm text-muted-foreground">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border space-y-6">
              <p className="font-headline font-bold text-primary">Pourquoi choisir Mendo COTI ?</p>
              <div className="grid grid-cols-2 gap-4">
                {["Accessible partout", "Transparent", "Sécurisé", "Facile à utiliser"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button className="rounded-full bg-primary gap-2">
                  <Smartphone className="w-4 h-4" /> App Store
                </Button>
                <Button variant="outline" className="rounded-full gap-2">
                   Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
