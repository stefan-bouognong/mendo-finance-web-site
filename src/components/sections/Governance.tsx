
"use client";

import { Users, UserCircle, ShieldAlert, Award } from "lucide-react";

const bodies = [
  { icon: Award, title: "Conseil d’Administration", desc: "Définit les orientations stratégiques et assure la pérennité de l'institution." },
  { icon: UserCircle, title: "Direction Générale", desc: "Assure la gestion opérationnelle et le développement quotidien des services." },
  { icon: ShieldAlert, title: "Comité de Crédit", desc: "Évalue les demandes de financement pour garantir une gestion saine des risques." },
];

export function Governance() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">Gouvernance & Excellence</h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Une structure solide et transparente pour garantir la sécurité de vos investissements et la qualité de nos services.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-headline">Transparence</p>
                  <p className="text-primary-foreground/60">Gage de confiance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {bodies.map((body, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
                <body.icon className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold font-headline mb-4">{body.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{body.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
