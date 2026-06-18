
"use client";

import { Facebook, Calendar, ArrowRight, MessageCircle, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPosts = [
  {
    date: "12 Oct 2023",
    content: "Lancement de notre nouvelle application Mendo COTI ! Plus qu'un outil de gestion, c'est votre partenaire d'épargne quotidien.",
    likes: 124,
    comments: 18,
  },
  {
    date: "05 Oct 2023",
    content: "Retour sur notre phase pilote : déjà plus de 160 comptes ouverts. Merci pour votre confiance envers Mendo Finances.",
    likes: 89,
    comments: 5,
  },
  {
    date: "28 Sep 2023",
    content: "Comment digitaliser votre tontine ? Nos agents de terrain vous accompagnent pour sécuriser vos cotisations communautaires.",
    likes: 215,
    comments: 42,
  }
];

export function SocialFeed() {
  return (
    <section className="py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Facebook className="w-6 h-6 fill-primary" />
              <span className="tracking-widest uppercase text-xs">Actualités</span>
            </div>
            <h2 className="text-4xl font-bold font-headline text-primary">Suivez notre impact sur Facebook</h2>
          </div>
          <Button variant="outline" className="rounded-full gap-2 group">
            Voir tout sur Facebook <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockPosts.map((post, i) => (
            <div key={i} className="flex flex-col bg-accent/5 rounded-2xl border border-border p-8 space-y-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <p className="text-primary/80 leading-relaxed italic">
                "{post.content}"
              </p>
              <div className="pt-6 border-t border-border flex items-center justify-between text-muted-foreground">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                </div>
                <Share2 className="w-4 h-4 cursor-pointer hover:text-secondary" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Rejoignez une communauté de plus de 5,000 membres actifs.
          </p>
        </div>
      </div>
    </section>
  );
}
