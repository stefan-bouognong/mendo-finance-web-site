
"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="#" className="flex items-center gap-2 group">
              <div className="bg-white p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight">
                Mendo <span className="text-secondary">Finances</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Mendo Finances est un Établissement de Microfinance de première catégorie agréé par le Ministère des Finances. Nous œuvrons pour une inclusion financière moderne et sécurisée.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold font-headline text-lg">Liens utiles</h4>
            <ul className="space-y-4 text-primary-foreground/60">
              <li><Link href="#home" className="hover:text-secondary transition-colors">Accueil</Link></li>
              <li><Link href="#mendo-coti" className="hover:text-secondary transition-colors">Mendo COTI</Link></li>
              <li><Link href="#about" className="hover:text-secondary transition-colors">À propos</Link></li>
              <li><Link href="#contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold font-headline text-lg">Légal</h4>
            <ul className="space-y-4 text-primary-foreground/60">
              <li><Link href="#" className="hover:text-secondary transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Conditions d'utilisation</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Mendo Finances. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span>Agrément n° XXX/EMF/MINFI</span>
            <span>Design by Mendo Finances Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
