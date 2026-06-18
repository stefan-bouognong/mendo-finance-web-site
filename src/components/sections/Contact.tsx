
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, MessageSquare, Mail, Facebook, Twitter, Instagram, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message envoyé !",
        description: "Nous reviendrons vers vous dans les plus brefs délais.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Contact</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contactez-nous</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Nous sommes à votre écoute pour vous accompagner dans tous vos projets financiers.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Siège social", val: "Avenue des Microfinances, Douala, Cameroun" },
                { icon: Phone, title: "Téléphone", val: "+237 6XX XXX XXX" },
                { icon: MessageSquare, title: "WhatsApp", val: "+237 6XX XXX XXX" },
                { icon: Mail, title: "Email", val: "contact@mendo-finances.com" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-muted-foreground">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <p className="font-headline font-bold text-primary uppercase text-xs tracking-widest">Suivez-nous</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 md:p-12 rounded-[2rem] border border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" required placeholder="Jean Dupont" className="bg-white border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" required type="tel" placeholder="+237 ..." className="bg-white border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" required type="email" placeholder="jean@exemple.com" className="bg-white border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Objet</Label>
                <Input id="subject" required placeholder="Ouverture de compte" className="bg-white border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required placeholder="Comment pouvons-nous vous aider ?" className="min-h-[150px] bg-white border-border" />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-lg gap-2">
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-5 h-5" />}
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
