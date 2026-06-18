'use server';
/**
 * @fileOverview An AI-powered financial goal planner that provides personalized advice on tontine contributions
 * and a tailored savings strategy based on a user's financial goals and situation.
 *
 * - financialGoalPlanner - A function that handles the financial goal planning process.
 * - FinancialGoalPlannerInput - The input type for the financialGoalPlanner function.
 * - FinancialGoalPlannerOutput - The return type for the financialGoalPlanner function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialGoalPlannerInputSchema = z.object({
  savingsTarget: z
    .number()
    .describe('The total amount of money the user aims to save.'),
  timeframeMonths: z
    .number()
    .describe('The desired timeframe to achieve the savings target, in months.'),
  currentSavings: z
    .number()
    .describe("The user's current amount of saved money."),
  monthlyIncome: z
    .number()
    .describe("The user's total monthly income."),
  monthlyExpenses: z
    .number()
    .describe("The user's total monthly expenses."),
});
export type FinancialGoalPlannerInput = z.infer<
  typeof FinancialGoalPlannerInputSchema
>;

const FinancialGoalPlannerOutputSchema = z.object({
  monthlyContributionNeeded: z
    .number()
    .describe(
      'The calculated monthly contribution needed to reach the savings target within the given timeframe.'
    ),
  tontineAdvice: z
    .string()
    .describe(
      'Personalized advice on suitable tontine contributions based on the financial goal and situation.'
    ),
  savingsStrategy: z
    .string()
    .describe(
      'A tailored savings strategy to help the user achieve their financial goal.'
    ),
});
export type FinancialGoalPlannerOutput = z.infer<
  typeof FinancialGoalPlannerOutputSchema
>;

export async function financialGoalPlanner(
  input: FinancialGoalPlannerInput
): Promise<FinancialGoalPlannerOutput> {
  return financialGoalPlannerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'financialGoalPlannerPrompt',
  input: {schema: FinancialGoalPlannerInputSchema},
  output: {schema: FinancialGoalPlannerOutputSchema},
  prompt: `You are an AI-powered financial advisor for Mendo Finances, specializing in microfinance and community savings, including tontines. Your goal is to help users achieve their financial goals by providing actionable advice.

Analyze the user's financial situation and goal and provide a clear, concise, and actionable plan.

User's financial situation and goal:
Savings Target: {{{savingsTarget}}}
Timeframe (Months): {{{timeframeMonths}}}
Current Savings: {{{currentSavings}}}
Monthly Income: {{{monthlyIncome}}}
Monthly Expenses: {{{monthlyExpenses}}}

Based on this information, calculate the monthly contribution needed and provide personalized advice on tontine contributions and a tailored savings strategy. Consider the user's disposable income when suggesting contributions. Ensure the advice is practical and encouraging.

Structure your response as a JSON object matching the FinancialGoalPlannerOutputSchema.`,
});

const financialGoalPlannerFlow = ai.defineFlow(
  {
    name: 'financialGoalPlannerFlow',
    inputSchema: FinancialGoalPlannerInputSchema,
    outputSchema: FinancialGoalPlannerOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
