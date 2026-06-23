"use client";

import Link from "next/link";
import Image from "next/image";
import mendoLogo from "@/image/mendofinance.png";
import mendoCompanyLogo from "@/image/mendocompany.png";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="#" className="flex items-center gap-2 group">
              <Image
                src={mendoLogo}
                alt="Mendo Finances"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
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
          <div className="flex items-center gap-6">
            <span>Agrément Minadère</span>
            <span className="flex items-center gap-2">
              Design by
              <Image
                src={mendoCompanyLogo}
                alt="Mendo Company"
                className="h-5 w-auto object-contain"
              />
              Mendo Company
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}