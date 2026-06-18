
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Calculator, PiggyBank, BrainCircuit, Loader2 } from "lucide-react";
import { financialGoalPlanner, type FinancialGoalPlannerOutput } from "@/ai/flows/financial-goal-planner-flow";

export function GoalPlanner() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FinancialGoalPlannerOutput | null>(null);
  const [formData, setFormData] = useState({
    savingsTarget: 1000000,
    timeframeMonths: 12,
    currentSavings: 100000,
    monthlyIncome: 300000,
    monthlyExpenses: 150000,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const output = await financialGoalPlanner(formData);
      setResult(output);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-bold">
              <BrainCircuit className="w-4 h-4" />
              <span>Propulsé par Mendo Intelligence</span>
            </div>
            <h2 className="text-4xl font-bold font-headline text-primary">Assistant d'Épargne Intelligent</h2>
            <p className="text-muted-foreground text-lg">
              Définissez vos objectifs financiers et laissez notre IA vous proposer la meilleure stratégie de tontine et d'épargne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-secondary" />
                  Vos paramètres
                </CardTitle>
                <CardDescription>Remplissez vos informations financières</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Objectif (FCFA)</Label>
                    <Input type="number" name="savingsTarget" value={formData.savingsTarget} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label>Durée (Mois)</Label>
                    <Input type="number" name="timeframeMonths" value={formData.timeframeMonths} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Épargne Actuelle (FCFA)</Label>
                  <Input type="number" name="currentSavings" value={formData.currentSavings} onChange={handleInputChange} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Revenus Mensuels</Label>
                    <Input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label>Dépenses Mensuelles</Label>
                    <Input type="number" name="monthlyExpenses" value={formData.monthlyExpenses} onChange={handleInputChange} />
                  </div>
                </div>
                <Button 
                  onClick={handleCalculate} 
                  disabled={loading}
                  className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 gap-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  Calculer ma stratégie
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {result ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                  <div className="p-8 rounded-2xl bg-primary text-white space-y-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <PiggyBank className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="text-xl font-bold font-headline">Contribution Recommandée</h4>
                    </div>
                    <div className="text-4xl font-bold font-headline">
                      {Math.round(result.monthlyContributionNeeded).toLocaleString()} <span className="text-secondary text-2xl">FCFA / mois</span>
                    </div>
                  </div>

                  <Card className="border-secondary/20 bg-secondary/5">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold font-headline flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-secondary" />
                        Conseil Tontine
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground italic">
                        "{result.tontineAdvice}"
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-bold font-headline">Ma Stratégie Personnalisée</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                        {result.savingsStrategy}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-muted rounded-2xl bg-white/50">
                  <Calculator className="w-12 h-12 text-muted mb-4 opacity-50" />
                  <h4 className="font-bold text-muted-foreground mb-2">Prêt à planifier ?</h4>
                  <p className="text-sm text-muted-foreground max-w-[200px]">
                    Saisissez vos données et découvrez votre plan d'épargne idéal.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
